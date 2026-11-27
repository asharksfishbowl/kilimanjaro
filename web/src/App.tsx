import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Businesses } from "./components/Businesses";
import { Portfolio } from "./components/Portfolio";
import { NeonMap } from "./components/NeonMap";
import { YouTubeSection } from "./components/YouTubeSection";
import { Music } from "./components/Music";
import { Contact } from "./components/Contact";
import { loadMedia, loadSite } from "./lib/api";
import {
  SAMPLE_MEDIA,
  SAMPLE_SITE,
  type MediaBundle,
  type SitePayload,
} from "./data/sample";
import "./styles/synthwave.css";

export default function App() {
  const [site, setSite] = useState<SitePayload>(SAMPLE_SITE);
  const [media, setMedia] = useState<MediaBundle>(SAMPLE_MEDIA);
  const [siteSource, setSiteSource] = useState("sample");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [siteRes, mediaRes] = await Promise.all([loadSite(), loadMedia()]);
        if (cancelled) return;
        setSite(siteRes.data);
        setSiteSource(siteRes.source);
        setMedia(mediaRes.data);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="site-shell">
      <div className="scanlines" aria-hidden />
      <Nav />
      {loading ? <div className="loading">Booting neon stack…</div> : null}
      {error ? <div className="error-banner">{error}</div> : null}
      <Hero brand={site.brand} tagline={site.tagline} about={site.about} />
      <Businesses items={site.businesses} source={siteSource} />
      <Portfolio items={site.portfolio} />
      <NeonMap nodes={site.map_nodes} arcs={site.map_arcs} />
      <YouTubeSection media={media} />
      <Music tracks={site.tracks} clips={media.clips} />
      <Contact />
      <footer className="footer">
        <strong>KILIMANJARO</strong> · Gotta climb to get to the top · Built with
        TypeScript, Rust (ts-rs), Python &amp; SQLite · Three.js hero · deck.gl
        neon layers
      </footer>
    </div>
  );
}
