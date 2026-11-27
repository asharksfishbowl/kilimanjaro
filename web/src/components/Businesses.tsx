import type { Business } from "../data/sample";

type Props = {
  items: Business[];
  source: string;
};

export function Businesses({ items, source }: Props) {
  return (
    <section className="section" id="businesses">
      <div className="section-head">
        <h2>Businesses</h2>
        <p>
          Studio brands from the Fishbowl — media, maker impact, courses, and neon
          sound.
        </p>
        <div className="status-chip">Data · {source}</div>
      </div>
      <div className="grid-biz">
        {items.map((b) => (
          <article key={b.id} className="biz" style={{ ["--accent" as string]: b.accent }}>
            <div className="meta">{b.category}</div>
            <h3>{b.name}</h3>
            <p className="tagline">{b.tagline}</p>
            <p>{b.description}</p>
            {b.url ? (
              <p className="meta" style={{ marginTop: "1rem" }}>
                <a href={b.url} target="_blank" rel="noreferrer">
                  Visit →
                </a>
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
