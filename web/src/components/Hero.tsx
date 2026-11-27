import { HeroThreeScene } from "./HeroThreeScene";
import { NeonSharks } from "./NeonSharks";

type Props = {
  brand: string;
  tagline: string;
  about: string;
};

export function Hero({ brand, tagline, about }: Props) {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero-sky" aria-hidden />
      <HeroThreeScene />
      <NeonSharks />
      <div className="hero-copy">
        <p className="hero-kicker">Kilimanjaro · ASF Studios</p>
        <h1 className="hero-title">{brand}</h1>
        <p className="hero-tag">
          <strong style={{ color: "var(--neon-amber)" }}>{tagline}.</strong> {about}
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#games">
            Play the games
          </a>
          <a className="btn btn-ghost" href="#map">
            Explore the neon map
          </a>
        </div>
      </div>
    </section>
  );
}
