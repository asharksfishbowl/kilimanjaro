import { lazy, Suspense, useEffect, useRef, useState } from "react";
import type { MapArc, MapNode } from "../data/sample";

type Props = {
  nodes: MapNode[];
  arcs: MapArc[];
};

/** deck.gl is heavy WebGL — only mount when the section is near the viewport. */
const NeonMapCanvas = lazy(() => import("./NeonMapCanvas"));

export function NeonMap({ nodes, arcs }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(true);
      },
      { rootMargin: "200px 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="map" ref={sectionRef}>
      <div className="section-head">
        <h2>Neon Map</h2>
        <p>
          deck.gl hexbins, great-circle arcs, and pulsing nodes — from Colorado Springs
          to Kilimanjaro and the synthwave circuit.
        </p>
      </div>
      <div className="map-wrap">
        {active ? (
          <Suspense
            fallback={
              <div className="map-placeholder">Spinning up neon layers…</div>
            }
          >
            <NeonMapCanvas nodes={nodes} arcs={arcs} />
          </Suspense>
        ) : (
          <div className="map-placeholder">Scroll to ignite the neon map</div>
        )}
      </div>
    </section>
  );
}
