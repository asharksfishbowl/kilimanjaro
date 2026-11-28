import { GAMES, type GameItem, type GameStatus } from "../data/games";

const STATUS_LABEL: Record<GameStatus, string> = {
  playable: "Play now",
  "coming-soon": "Coming soon",
  prototype: "Prototype",
};

function statusClass(status: GameStatus): string {
  if (status === "playable") return "game-status is-live";
  if (status === "prototype") return "game-status is-proto";
  return "game-status";
}

function GameCard({ game }: { game: GameItem }) {
  return (
    <article className="game-card" style={{ ["--accent" as string]: game.accent }}>
      <div className="game-card-top">
        <span className={statusClass(game.status)}>{STATUS_LABEL[game.status]}</span>
        <span className="game-year">{game.year}</span>
      </div>
      <h3>{game.title}</h3>
      <p className="game-tagline">{game.tagline}</p>
      <p>{game.description}</p>
      <div className="stack">
        {game.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <div className="game-actions">
        {game.playUrl ? (
          <a className="btn btn-primary" href={game.playUrl}>
            Play
          </a>
        ) : (
          <span className="btn btn-ghost" aria-disabled="true">
            Not live yet
          </span>
        )}
        {game.href ? (
          <a className="btn btn-ghost" href={game.href} target="_blank" rel="noreferrer">
            {game.hrefLabel ?? "Repo"}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function Games() {
  return (
    <section className="section" id="games">
      <div className="section-head">
        <h2>Games</h2>
        <p>
          Arcade shelves from the Fishbowl — fight, climb, and survive. Playable builds ship
          here first.
        </p>
      </div>
      <div className="grid-games">
        {GAMES.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
