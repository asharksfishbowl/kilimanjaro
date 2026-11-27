import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { createSynthScene, type SynthSceneHandle } from "../lib/synthScene";
import { KilimanjaroBackdrop } from "./KilimanjaroBackdrop";

/**
 * WebGL synthwave hero stage. Falls back to the SVG ridge + CSS grid
 * when the user prefers reduced motion or WebGL fails to init.
 */
export function HeroThreeScene() {
  const hostRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<SynthSceneHandle | null>(null);
  const reduced = useReducedMotion();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (reduced || failed) return;
    const host = hostRef.current;
    if (!host) return;

    let handle: SynthSceneHandle | null = null;
    try {
      handle = createSynthScene(host);
      handleRef.current = handle;
    } catch (err) {
      console.warn("Three.js hero failed; using SVG fallback", err);
      setFailed(true);
      return;
    }

    return () => {
      handle?.dispose();
      handleRef.current = null;
    };
  }, [reduced, failed]);

  if (reduced || failed) {
    return (
      <>
        <KilimanjaroBackdrop />
        <div className="hero-grid" aria-hidden />
      </>
    );
  }

  return <div className="hero-three" ref={hostRef} aria-hidden />;
}
