import type { MusicClip, Track } from "../data/sample";

type Props = {
  tracks: Track[];
  clips: MusicClip[];
};

const SPOTIFY_ALBUM = {
  title: "Living from a place of love :)",
  url: "https://open.spotify.com/album/4HVfHr9Ah4ckA9ZWEq1uoK",
  embed:
    "https://open.spotify.com/embed/album/4HVfHr9Ah4ckA9ZWEq1uoK?utm_source=generator&theme=0",
};

function formatDuration(sec: number) {
  if (!sec) return "Album";
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function Music({ tracks, clips }: Props) {
  const listTracks = tracks.filter((t) => t.id !== "t-spotify-album");

  return (
    <section className="section" id="music">
      <div className="section-head">
        <h2>Music</h2>
        <p>
          Featured album on Spotify, plus synthwave night drives and Fishbowl neon drops.
        </p>
      </div>

      <div className="spotify-feature">
        <div className="spotify-copy">
          <p className="spotify-kicker">Now playing · Spotify</p>
          <h3>{SPOTIFY_ALBUM.title}</h3>
          <p>
            Full album listen — stream on Spotify or keep scrolling the Fishbowl night drive
            cuts below.
          </p>
          <a
            className="btn btn-primary"
            href={SPOTIFY_ALBUM.url}
            target="_blank"
            rel="noreferrer"
          >
            Open on Spotify
          </a>
        </div>
        <div className="spotify-embed">
          <iframe
            title={`Spotify album: ${SPOTIFY_ALBUM.title}`}
            src={SPOTIFY_ALBUM.embed}
            width="100%"
            height={480}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; web-share"
            allowFullScreen
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>

      <div className="music-board">
        {listTracks.map((t, idx) => {
          const clip = clips[idx % clips.length];
          return (
            <article key={t.id} className="track">
              <div>
                <h3>{t.title}</h3>
                <div className="meta">
                  {t.artist} · {t.mood}
                  {t.bpm ? ` · ${t.bpm} BPM` : ""} · {formatDuration(t.duration_sec)}
                </div>
              </div>
              <div className="wave" aria-hidden>
                {(clip?.waveform ?? [0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.5, 0.7]).map(
                  (h, i) => (
                    <i
                      key={`${t.id}-${i}`}
                      style={{
                        height: `${Math.max(8, h * 36)}px`,
                        ["--i" as string]: i,
                      }}
                    />
                  ),
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
