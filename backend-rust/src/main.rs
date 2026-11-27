mod db;
mod models;

use axum::{
    extract::State,
    http::StatusCode,
    routing::{get, post},
    Json, Router,
};
use models::{ContactMessage, ContactResponse, SitePayload};
use std::{net::SocketAddr, path::PathBuf, sync::Mutex};
use tower_http::cors::{Any, CorsLayer};
use tower_http::trace::TraceLayer;
use tracing_subscriber::EnvFilter;
use ts_rs::TS;

fn export_ts_bindings() {
    let _ = models::Business::export_all();
    let _ = models::PortfolioItem::export_all();
    let _ = models::Track::export_all();
    let _ = models::MapNode::export_all();
    let _ = models::MapArc::export_all();
    let _ = models::SitePayload::export_all();
    let _ = models::ContactMessage::export_all();
    let _ = models::ContactResponse::export_all();
}

struct AppState {
    db_path: PathBuf,
    lock: Mutex<()>,
}

fn with_db<T, F>(state: &AppState, f: F) -> Result<T, (StatusCode, String)>
where
    F: FnOnce(&rusqlite::Connection) -> Result<T, db::DbError>,
{
    let _guard = state
        .lock
        .lock()
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "lock poisoned".into()))?;
    let conn = db::open(&state.db_path).map_err(map_err)?;
    f(&conn).map_err(map_err)
}

fn map_err(err: db::DbError) -> (StatusCode, String) {
    tracing::error!(error = %err, "db error");
    (StatusCode::INTERNAL_SERVER_ERROR, err.to_string())
}

async fn health() -> Json<serde_json::Value> {
    Json(serde_json::json!({ "ok": true, "service": "kilimanjaro-rust" }))
}

async fn site(State(state): State<std::sync::Arc<AppState>>) -> Result<Json<SitePayload>, (StatusCode, String)> {
    let payload = with_db(&state, db::load_site)?;
    Ok(Json(payload))
}

async fn contact(
    State(state): State<std::sync::Arc<AppState>>,
    Json(body): Json<ContactMessage>,
) -> Result<Json<ContactResponse>, (StatusCode, String)> {
    if body.name.trim().is_empty() || body.email.trim().is_empty() || body.message.trim().is_empty()
    {
        return Err((StatusCode::BAD_REQUEST, "name, email, and message are required".into()));
    }
    if !body.email.contains('@') {
        return Err((StatusCode::BAD_REQUEST, "invalid email".into()));
    }
    let id = with_db(&state, |conn| {
        db::save_contact(conn, body.name.trim(), body.email.trim(), body.message.trim())
    })?;
    Ok(Json(ContactResponse { ok: true, id }))
}

async fn export_types() -> Json<serde_json::Value> {
    export_ts_bindings();
    Json(serde_json::json!({ "exported": true, "dir": "shared/types" }))
}

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt()
        .with_env_filter(EnvFilter::from_default_env().add_directive("info".parse().unwrap()))
        .init();

    let db_path = std::env::var("KILI_DB")
        .map(PathBuf::from)
        .unwrap_or_else(|_| PathBuf::from("../data/kilimanjaro.db"));

    {
        let conn = db::open(&db_path).expect("open sqlite");
        db::seed_if_empty(&conn).expect("seed sqlite");
    }

    export_ts_bindings();

    let state = std::sync::Arc::new(AppState {
        db_path,
        lock: Mutex::new(()),
    });

    let app = Router::new()
        .route("/health", get(health))
        .route("/api/site", get(site))
        .route("/api/contact", post(contact))
        .route("/api/export-types", get(export_types))
        .layer(
            CorsLayer::new()
                .allow_origin(Any)
                .allow_methods(Any)
                .allow_headers(Any),
        )
        .layer(TraceLayer::new_for_http())
        .with_state(state);

    let port: u16 = std::env::var("KILI_RUST_PORT")
        .ok()
        .and_then(|v| v.parse().ok())
        .unwrap_or(3848);
    let addr = SocketAddr::from(([0, 0, 0, 0], port));
    tracing::info!("Rust API listening on http://{addr}");
    let listener = tokio::net::TcpListener::bind(addr).await.expect("bind");
    axum::serve(listener, app).await.expect("serve");
}
