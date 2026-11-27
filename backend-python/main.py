"""Media / YouTube enrichment API for Kilimanjaro.

Serves curated YouTube + music metadata. Uses sample data locally;
optional YOUTUBE_API_KEY can enrich live channel stats later.
"""

from __future__ import annotations

import os
import sqlite3
from pathlib import Path
from typing import Any

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

ROOT = Path(__file__).resolve().parents[1]
DB_PATH = Path(os.environ.get("KILI_DB", ROOT / "data" / "kilimanjaro.db"))

app = FastAPI(title="Kilimanjaro Media API", version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class YoutubeVideo(BaseModel):
    id: str
    title: str
    channel: str
    url: str
    category: str
    views_label: str
    neon: str


class MusicClip(BaseModel):
    id: str
    title: str
    artist: str
    platform: str
    url: str
    waveform: list[float] = Field(default_factory=list)


class MediaBundle(BaseModel):
    channel_name: str
    channel_url: str
    tagline: str
    videos: list[YoutubeVideo]
    clips: list[MusicClip]
    source: str


SAMPLE_VIDEOS = [
    YoutubeVideo(
        id="yt-climb",
        title="Night Climb — Behind the Neon",
        channel="A Shark's Fishbowl",
        url="https://www.youtube.com/@asharksfishbowl",
        category="Music Video",
        views_label="Studio cut",
        neon="#ff2bd6",
    ),
    YoutubeVideo(
        id="yt-cook",
        title="Fishbowl Kitchen: Synthwave Supper",
        channel="A Shark's Fishbowl",
        url="https://www.youtube.com/@asharksfishbowl",
        category="Cooking",
        views_label="Series",
        neon="#f7b32b",
    ),
    YoutubeVideo(
        id="yt-diy",
        title="Maker Bench: Precious Plastic Remix",
        channel="A Shark's Fishbowl",
        url="https://www.youtube.com/@asharksfishbowl",
        category="DIY",
        views_label="Workshop",
        neon="#2de2e6",
    ),
    YoutubeVideo(
        id="yt-code",
        title="Climb the Stack: TypeScript + Rust",
        channel="A Shark's Fishbowl",
        url="https://www.youtube.com/@asharksfishbowl",
        category="Tutorial",
        views_label="Course preview",
        neon="#b967ff",
    ),
    YoutubeVideo(
        id="yt-live",
        title="Live from the Fishbowl — Grid Horizon Set",
        channel="Neon Signal Records",
        url="https://www.youtube.com/@asharksfishbowl",
        category="Live",
        views_label="Session",
        neon="#05ffa1",
    ),
]

SAMPLE_CLIPS = [
    MusicClip(
        id="c1",
        title="Night Climb",
        artist="Nick Shark Marino",
        platform="YouTube",
        url="https://www.youtube.com/@asharksfishbowl",
        waveform=[0.2, 0.5, 0.8, 0.4, 0.9, 0.6, 0.3, 0.7, 1.0, 0.5, 0.4, 0.8],
    ),
    MusicClip(
        id="c2",
        title="Fishbowl Neon",
        artist="ASF",
        platform="YouTube",
        url="https://www.youtube.com/@asharksfishbowl",
        waveform=[0.3, 0.6, 0.4, 0.9, 0.5, 0.7, 0.8, 0.3, 0.6, 0.9, 0.4, 0.7],
    ),
    MusicClip(
        id="c3",
        title="Chrome Tide",
        artist="Nick Shark Marino",
        platform="YouTube",
        url="https://www.youtube.com/@asharksfishbowl",
        waveform=[0.4, 0.3, 0.7, 0.5, 0.8, 0.9, 0.6, 0.4, 0.7, 0.5, 0.8, 0.6],
    ),
]


def ensure_media_tables() -> None:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    try:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS youtube_videos (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                channel TEXT NOT NULL,
                url TEXT NOT NULL,
                category TEXT NOT NULL,
                views_label TEXT NOT NULL,
                neon TEXT NOT NULL
            )
            """
        )
        count = conn.execute("SELECT COUNT(*) FROM youtube_videos").fetchone()[0]
        if count == 0:
            conn.executemany(
                "INSERT INTO youtube_videos VALUES (?, ?, ?, ?, ?, ?, ?)",
                [
                    (v.id, v.title, v.channel, v.url, v.category, v.views_label, v.neon)
                    for v in SAMPLE_VIDEOS
                ],
            )
        conn.commit()
    finally:
        conn.close()


def load_videos() -> list[YoutubeVideo]:
    ensure_media_tables()
    conn = sqlite3.connect(DB_PATH)
    try:
        rows = conn.execute(
            "SELECT id, title, channel, url, category, views_label, neon FROM youtube_videos"
        ).fetchall()
        if not rows:
            return SAMPLE_VIDEOS
        return [
            YoutubeVideo(
                id=r[0],
                title=r[1],
                channel=r[2],
                url=r[3],
                category=r[4],
                views_label=r[5],
                neon=r[6],
            )
            for r in rows
        ]
    finally:
        conn.close()


@app.get("/health")
def health() -> dict[str, Any]:
    return {"ok": True, "service": "kilimanjaro-python"}


@app.get("/api/media", response_model=MediaBundle)
def media() -> MediaBundle:
    videos = load_videos()
    source = "sqlite" if DB_PATH.exists() else "sample"
    return MediaBundle(
        channel_name="A Shark's Fishbowl",
        channel_url="https://www.youtube.com/@asharksfishbowl",
        tagline="Entertaining content you can learn from — music, maker, and code.",
        videos=videos,
        clips=SAMPLE_CLIPS,
        source=source,
    )


@app.get("/api/media/videos/{video_id}", response_model=YoutubeVideo)
def video(video_id: str) -> YoutubeVideo:
    for v in load_videos():
        if v.id == video_id:
            return v
    raise HTTPException(status_code=404, detail="video not found")


if __name__ == "__main__":
    import uvicorn

    port = int(os.environ.get("KILI_PY_PORT", "3849"))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=False)
