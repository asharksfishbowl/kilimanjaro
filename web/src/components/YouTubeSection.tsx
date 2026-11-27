import type { MediaBundle } from "../data/sample";

type Props = {
  media: MediaBundle;
};

export function YouTubeSection({ media }: Props) {
  return (
    <section className="section" id="youtube">
      <div className="section-head">
        <h2>YouTube</h2>
        <p>{media.tagline}</p>
        <div className="status-chip">
          Channel ·{" "}
          <a href={media.channel_url} target="_blank" rel="noreferrer">
            {media.channel_name}
          </a>{" "}
          · {media.source}
        </div>
      </div>
      <div className="media-grid">
        {media.videos.map((v) => (
          <a
            key={v.id}
            className="video-tile"
            href={v.url}
            target="_blank"
            rel="noreferrer"
            style={{ ["--neon" as string]: v.neon }}
          >
            <div className="cat">
              {v.category} · {v.views_label}
            </div>
            <h3>{v.title}</h3>
            <p>{v.channel}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
