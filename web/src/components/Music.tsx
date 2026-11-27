import type { MusicClip, Track } from "../data/sample";

type Props = {
  tracks: Track[];
  clips: MusicClip[];
};

function formatDuration(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function Music({ tracks, clips }: Props) {
  return (
    <section className="section" id="music">
      <div className="section-head">
        <h2>Music</h2>
        <p>Synthwave night drives, cinematic pulses, and Fishbowl neon drops.</p>
      </div>
      <div className="music-board">
        {tracks.map((t, idx) => {
          const clip = clips[idx % clips.length];
          return (
            <article key={t.id} className="track">
              <div>
                <h3>{t.title}</h3>
                <div className="meta">
                  {t.artist} · {t.mood} · {t.bpm} BPM · {formatDuration(t.duration_sec)}
                </div>
              </div>
              <div className="wave" aria-hidden>
                {(clip?.waveform ?? [0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.5, 0.7]).map((h, i) => (
                  <i
                    key={`${t.id}-${i}`}
                    style={{
                      height: `${Math.max(8, h * 36)}px`,
                      ["--i" as string]: i,
                    }}
                  />
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
