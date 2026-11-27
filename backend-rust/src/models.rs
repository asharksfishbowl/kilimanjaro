use serde::{Deserialize, Serialize};
use ts_rs::TS;

#[derive(Debug, Clone, Serialize, Deserialize, TS)]
#[ts(export, export_to = "../../shared/types/")]
pub struct Business {
    pub id: String,
    pub name: String,
    pub tagline: String,
    pub description: String,
    pub category: String,
    pub url: Option<String>,
    pub accent: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, TS)]
#[ts(export, export_to = "../../shared/types/")]
pub struct PortfolioItem {
    pub id: String,
    pub title: String,
    pub summary: String,
    pub stack: Vec<String>,
    pub year: i32,
    pub kind: String,
    pub href: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize, TS)]
#[ts(export, export_to = "../../shared/types/")]
pub struct Track {
    pub id: String,
    pub title: String,
    pub artist: String,
    pub mood: String,
    pub duration_sec: i32,
    pub bpm: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize, TS)]
#[ts(export, export_to = "../../shared/types/")]
pub struct MapNode {
    pub id: String,
    pub name: String,
    pub kind: String,
    pub longitude: f64,
    pub latitude: f64,
    pub intensity: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize, TS)]
#[ts(export, export_to = "../../shared/types/")]
pub struct MapArc {
    pub id: String,
    pub source: [f64; 2],
    pub target: [f64; 2],
    pub label: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, TS)]
#[ts(export, export_to = "../../shared/types/")]
pub struct SitePayload {
    pub brand: String,
    pub tagline: String,
    pub about: String,
    pub businesses: Vec<Business>,
    pub portfolio: Vec<PortfolioItem>,
    pub tracks: Vec<Track>,
    pub map_nodes: Vec<MapNode>,
    pub map_arcs: Vec<MapArc>,
}

#[derive(Debug, Clone, Serialize, Deserialize, TS)]
#[ts(export, export_to = "../../shared/types/")]
pub struct ContactMessage {
    pub name: String,
    pub email: String,
    pub message: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, TS)]
#[ts(export, export_to = "../../shared/types/")]
pub struct ContactResponse {
    pub ok: bool,
    pub id: String,
}
