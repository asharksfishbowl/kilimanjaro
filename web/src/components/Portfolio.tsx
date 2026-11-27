import type { PortfolioItem } from "../data/sample";

type Props = {
  items: PortfolioItem[];
};

export function Portfolio({ items }: Props) {
  return (
    <section className="section" id="portfolio">
      <div className="section-head">
        <h2>Portfolio</h2>
        <p>
          Selected climbs from the Fishbowl lab — agents, games, tools, and the Kilimanjaro
          rebuild.
        </p>
      </div>
      <div className="portfolio-list">
        {items.map((item) => (
          <article key={item.id} className="port-item">
            <div className="port-year">{item.year}</div>
            <div>
              <h3>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}{" "}
                <span style={{ color: "var(--muted)", fontSize: "0.75rem" }}>
                  / {item.kind}
                </span>
              </h3>
              <p>{item.summary}</p>
              <div className="stack">
                {item.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
