use crate::models::{Business, MapArc, MapNode, PortfolioItem, SitePayload, Track};
use rusqlite::{params, Connection};
use std::path::Path;
use thiserror::Error;

#[derive(Error, Debug)]
pub enum DbError {
    #[error(transparent)]
    Sqlite(#[from] rusqlite::Error),
    #[error("io: {0}")]
    Io(#[from] std::io::Error),
}

pub fn open(path: &Path) -> Result<Connection, DbError> {
    if let Some(parent) = path.parent() {
        std::fs::create_dir_all(parent)?;
    }
    let conn = Connection::open(path)?;
    conn.execute_batch(
        "
        PRAGMA foreign_keys = ON;
        CREATE TABLE IF NOT EXISTS businesses (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            tagline TEXT NOT NULL,
            description TEXT NOT NULL,
            category TEXT NOT NULL,
            url TEXT,
            accent TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS portfolio (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            summary TEXT NOT NULL,
            stack TEXT NOT NULL,
            year INTEGER NOT NULL,
            kind TEXT NOT NULL,
            href TEXT
        );
        CREATE TABLE IF NOT EXISTS tracks (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            artist TEXT NOT NULL,
            mood TEXT NOT NULL,
            duration_sec INTEGER NOT NULL,
            bpm INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS map_nodes (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            kind TEXT NOT NULL,
            longitude REAL NOT NULL,
            latitude REAL NOT NULL,
            intensity REAL NOT NULL
        );
        CREATE TABLE IF NOT EXISTS map_arcs (
            id TEXT PRIMARY KEY,
            source_lng REAL NOT NULL,
            source_lat REAL NOT NULL,
            target_lng REAL NOT NULL,
            target_lat REAL NOT NULL,
            label TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS contacts (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS meta (
            key TEXT PRIMARY KEY,
            value TEXT NOT NULL
        );
        ",
    )?;
    Ok(conn)
}

pub fn seed_if_empty(conn: &Connection) -> Result<(), DbError> {
    let count: i64 = conn.query_row("SELECT COUNT(*) FROM businesses", [], |r| r.get(0))?;
    if count > 0 {
        return Ok(());
    }

    conn.execute(
        "INSERT INTO meta(key, value) VALUES (?1, ?2), (?3, ?4), (?5, ?6)",
        params![
            "brand",
            "A Shark's Fishbowl",
            "tagline",
            "Gotta climb to get to the top",
            "about",
            "ASF Studios builds entertaining content you can learn from — music, video, software, and maker projects — climbing Kilimanjaro one neon step at a time."
        ],
    )?;

    let businesses = [
        (
            "biz-asf",
            "A Shark's Fishbowl",
            "Creative studio & media lab",
            "Flagship brand for courses, music videos, cooking drops, DIY builds, and experimental software.",
            "Studio",
            Some("https://github.com/asharksfishbowl/asf-studio"),
            "#ff2bd6",
        ),
        (
            "biz-pp",
            "Precious Plastic Lab",
            "Recycle. Remake. Remix.",
            "Maker-focused sustainability experiments and workshop content around circular materials.",
            "Impact",
            Some("https://github.com/asharksfishbowl/precious-plastic-lab"),
            "#2de2e6",
        ),
        (
            "biz-courses",
            "ASF Courses",
            "Ship skills, not slides",
            "Hands-on software and creative courses that turn viewers into builders.",
            "Education",
            Some("https://github.com/asharksfishbowl/asf-courses"),
            "#f7b32b",
        ),
        (
            "biz-music",
            "Neon Signal Records",
            "Synthwave & soundtrack drops",
            "Original music and video collaborations from the Fishbowl night drive.",
            "Music",
            Some("https://github.com/asharksfishbowl/neon-signal-records"),
            "#b967ff",
        ),
    ];

    for b in businesses {
        conn.execute(
            "INSERT INTO businesses(id, name, tagline, description, category, url, accent)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)",
            params![b.0, b.1, b.2, b.3, b.4, b.5, b.6],
        )?;
    }

    let portfolio = [
        (
            "p-kilimanjaro",
            "Kilimanjaro",
            "Synthwave portfolio for A Shark's Fishbowl — TypeScript, Rust, Python, SQLite, and neon deck.gl.",
            r#"["TypeScript","Rust","Python","SQLite","deck.gl"]"#,
            2026,
            "Platform",
            Some("https://github.com/asharksfishbowl/kilimanjaro"),
        ),
        (
            "p-swarm-hunter",
            "Swarm Hunter",
            "Hunt and analyze swarms for signal, intelligence, and donation opportunities.",
            r#"["TypeScript"]"#,
            2026,
            "Agent",
            Some("https://github.com/asharksfishbowl/swarm-hunter"),
        ),
        (
            "p-armada",
            "Armada",
            "Small-language-model trainer and agent creator with its own harness wrapping the whole stack.",
            r#"["TypeScript","ML","Agents"]"#,
            2026,
            "AI",
            Some("https://github.com/asharksfishbowl/Armada"),
        ),
        (
            "p-707468747768",
            "707468747768",
            "A special project for the world — experimental Python build from the Fishbowl lab.",
            r#"["Python"]"#,
            2026,
            "Experiment",
            Some("https://github.com/asharksfishbowl/707468747768"),
        ),
        (
            "p-dealsniper",
            "DealSniper",
            "Scans retail markets and surfaces the best deals based on user preferences.",
            r#"["TypeScript"]"#,
            2026,
            "Tool",
            Some("https://github.com/asharksfishbowl/DealSniper"),
        ),
        (
            "p-lmc-theater",
            "LMC Theater",
            "Theater experience build — showtimes, stages, and neon house lights.",
            r#"["TypeScript"]"#,
            2026,
            "Experience",
            Some("https://github.com/asharksfishbowl/LMC-Theater"),
        ),
        (
            "p-fighter-rpg",
            "Fighter RPG Showdown 3D",
            "Playable Three.js 2.5D fighter with XP, stats, and an empire map — hosted at /fighter.",
            r#"["TypeScript","Three.js","Vite"]"#,
            2026,
            "Game",
            Some("/fighter/"),
        ),
    ];

    for p in portfolio {
        conn.execute(
            "INSERT INTO portfolio(id, title, summary, stack, year, kind, href)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)",
            params![p.0, p.1, p.2, p.3, p.4, p.5, p.6],
        )?;
    }

    let tracks = [
        ("t1", "Night Climb", "Nick Shark Marino", "outrun", 214, 118),
        ("t2", "Fishbowl Neon", "ASF", "arcade", 198, 128),
        ("t3", "Grid Horizon", "Neon Signal", "dreamwave", 246, 104),
        ("t4", "Kilimanjaro Pulse", "ASF Studios", "cinematic", 262, 96),
        ("t5", "Chrome Tide", "Nick Shark Marino", "retro-futurism", 187, 122),
    ];
    for t in tracks {
        conn.execute(
            "INSERT INTO tracks(id, title, artist, mood, duration_sec, bpm)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6)",
            params![t.0, t.1, t.2, t.3, t.4, t.5],
        )?;
    }

    let nodes = [
        ("n-cos", "Colorado Springs", "home", -104.8214, 38.8339, 1.0),
        ("n-la", "Los Angeles", "music", -118.2437, 34.0522, 0.85),
        ("n-nyc", "New York", "collab", -74.006, 40.7128, 0.7),
        ("n-tokyo", "Tokyo", "inspiration", 139.6917, 35.6895, 0.9),
        ("n-kili", "Kilimanjaro", "summit", 37.3556, -3.0674, 1.0),
        ("n-berlin", "Berlin", "synth", 13.405, 52.52, 0.75),
        ("n-miami", "Miami", "neon", -80.1918, 25.7617, 0.8),
    ];
    for n in nodes {
        conn.execute(
            "INSERT INTO map_nodes(id, name, kind, longitude, latitude, intensity)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6)",
            params![n.0, n.1, n.2, n.3, n.4, n.5],
        )?;
    }

    let arcs = [
        ("a1", -104.8214, 38.8339, 37.3556, -3.0674, "Climb to the summit"),
        ("a2", -104.8214, 38.8339, -118.2437, 34.0522, "Music drops"),
        ("a3", -118.2437, 34.0522, 139.6917, 35.6895, "Night signals"),
        ("a4", 13.405, 52.52, -80.1918, 25.7617, "Synthwave circuit"),
        ("a5", -74.006, 40.7128, -104.8214, 38.8339, "Studio collabs"),
    ];
    for a in arcs {
        conn.execute(
            "INSERT INTO map_arcs(id, source_lng, source_lat, target_lng, target_lat, label)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6)",
            params![a.0, a.1, a.2, a.3, a.4, a.5],
        )?;
    }

    Ok(())
}

fn meta(conn: &Connection, key: &str) -> Result<String, DbError> {
    Ok(conn.query_row(
        "SELECT value FROM meta WHERE key = ?1",
        params![key],
        |r| r.get(0),
    )?)
}

pub fn load_site(conn: &Connection) -> Result<SitePayload, DbError> {
    let businesses = {
        let mut stmt = conn.prepare(
            "SELECT id, name, tagline, description, category, url, accent FROM businesses ORDER BY name",
        )?;
        let rows = stmt.query_map([], |r| {
            Ok(Business {
                id: r.get(0)?,
                name: r.get(1)?,
                tagline: r.get(2)?,
                description: r.get(3)?,
                category: r.get(4)?,
                url: r.get(5)?,
                accent: r.get(6)?,
            })
        })?;
        rows.collect::<Result<Vec<_>, _>>()?
    };

    let portfolio = {
        let mut stmt = conn.prepare(
            "SELECT id, title, summary, stack, year, kind, href FROM portfolio ORDER BY year DESC",
        )?;
        let rows = stmt.query_map([], |r| {
            let stack_json: String = r.get(3)?;
            let stack: Vec<String> = serde_json::from_str(&stack_json).unwrap_or_default();
            Ok(PortfolioItem {
                id: r.get(0)?,
                title: r.get(1)?,
                summary: r.get(2)?,
                stack,
                year: r.get(4)?,
                kind: r.get(5)?,
                href: r.get(6)?,
            })
        })?;
        rows.collect::<Result<Vec<_>, _>>()?
    };

    let tracks = {
        let mut stmt = conn.prepare(
            "SELECT id, title, artist, mood, duration_sec, bpm FROM tracks ORDER BY bpm DESC",
        )?;
        let rows = stmt.query_map([], |r| {
            Ok(Track {
                id: r.get(0)?,
                title: r.get(1)?,
                artist: r.get(2)?,
                mood: r.get(3)?,
                duration_sec: r.get(4)?,
                bpm: r.get(5)?,
            })
        })?;
        rows.collect::<Result<Vec<_>, _>>()?
    };

    let map_nodes = {
        let mut stmt = conn.prepare(
            "SELECT id, name, kind, longitude, latitude, intensity FROM map_nodes",
        )?;
        let rows = stmt.query_map([], |r| {
            Ok(MapNode {
                id: r.get(0)?,
                name: r.get(1)?,
                kind: r.get(2)?,
                longitude: r.get(3)?,
                latitude: r.get(4)?,
                intensity: r.get(5)?,
            })
        })?;
        rows.collect::<Result<Vec<_>, _>>()?
    };

    let map_arcs = {
        let mut stmt = conn.prepare(
            "SELECT id, source_lng, source_lat, target_lng, target_lat, label FROM map_arcs",
        )?;
        let rows = stmt.query_map([], |r| {
            Ok(MapArc {
                id: r.get(0)?,
                source: [r.get(1)?, r.get(2)?],
                target: [r.get(3)?, r.get(4)?],
                label: r.get(5)?,
            })
        })?;
        rows.collect::<Result<Vec<_>, _>>()?
    };

    Ok(SitePayload {
        brand: meta(conn, "brand")?,
        tagline: meta(conn, "tagline")?,
        about: meta(conn, "about")?,
        businesses,
        portfolio,
        tracks,
        map_nodes,
        map_arcs,
    })
}

pub fn save_contact(
    conn: &Connection,
    name: &str,
    email: &str,
    message: &str,
) -> Result<String, DbError> {
    let id = uuid::Uuid::new_v4().to_string();
    let created = chrono::Utc::now().to_rfc3339();
    conn.execute(
        "INSERT INTO contacts(id, name, email, message, created_at) VALUES (?1, ?2, ?3, ?4, ?5)",
        params![id, name, email, message, created],
    )?;
    Ok(id)
}
