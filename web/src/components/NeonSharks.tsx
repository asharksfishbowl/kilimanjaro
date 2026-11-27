import { memo, useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Side-view great white cruise + underwater bubble field.
 * Compositor transforms only (no CSS filters on moving sharks).
 */

type SharkLane = {
  id: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  direction: 1 | -1;
  opacity: number;
};

type BubbleSpec = {
  id: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

const LANES: SharkLane[] = [
  {
    id: "lead",
    top: "22%",
    size: 210,
    duration: 28,
    delay: 0,
    direction: 1,
    opacity: 0.72,
  },
  {
    id: "mid",
    top: "40%",
    size: 120,
    duration: 40,
    delay: -8,
    direction: -1,
    opacity: 0.4,
  },
  {
    id: "trail",
    top: "58%",
    size: 150,
    duration: 36,
    delay: -12,
    direction: -1,
    opacity: 0.55,
  },
];

function makeBubbles(count: number): BubbleSpec[] {
  return Array.from({ length: count }, (_, i) => {
    const seed = (i * 47 + 13) % 100;
    return {
      id: `b${i}`,
      left: `${(seed * 9.7) % 100}%`,
      size: 4 + (seed % 14),
      duration: 10 + (seed % 18),
      delay: -((seed * 0.37) % 16),
      drift: ((seed % 2 === 0 ? 1 : -1) * (8 + (seed % 20))) / 1,
      opacity: 0.25 + (seed % 40) / 100,
    };
  });
}

function Shark({ lane, reduced }: { lane: SharkLane; reduced: boolean }) {
  const swimRight = lane.direction === 1;
  const flip = swimRight ? -1 : 1;
  const fromX = swimRight ? "-28vw" : "100vw";
  const toX = swimRight ? "100vw" : "-28vw";

  if (reduced) {
    return (
      <img
        className="neon-shark"
        src="./neon-shark.png"
        alt=""
        draggable={false}
        style={{
          top: lane.top,
          left: swimRight ? "12%" : "55%",
          width: lane.size,
          opacity: lane.opacity,
          transform: `scaleX(${flip})`,
        }}
      />
    );
  }

  return (
    <motion.div
      className="neon-shark"
      style={{
        top: lane.top,
        left: 0,
        width: lane.size,
        opacity: lane.opacity,
        willChange: "transform",
      }}
      initial={{ x: fromX, y: 0 }}
      animate={{
        x: [fromX, toX],
        y: [0, -6, 0, 4, 0],
      }}
      transition={{
        x: {
          duration: lane.duration,
          ease: "linear",
          repeat: Infinity,
          delay: lane.delay,
        },
        y: {
          duration: 5.5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: lane.delay * 0.15,
        },
      }}
    >
      <img
        src="./neon-shark.png"
        alt=""
        draggable={false}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          transform: `scaleX(${flip})`,
        }}
      />
    </motion.div>
  );
}

function BubbleField({ reduced }: { reduced: boolean }) {
  const bubbles = useMemo(() => makeBubbles(reduced ? 8 : 36), [reduced]);

  return (
    <div className="bubble-field" aria-hidden>
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="neon-bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            ["--bubble-duration" as string]: `${b.duration}s`,
            ["--bubble-delay" as string]: `${b.delay}s`,
            ["--bubble-drift" as string]: `${b.drift}px`,
            animationPlayState: reduced ? "paused" : "running",
          }}
        />
      ))}
    </div>
  );
}

function NeonSharksInner() {
  const reduced = !!useReducedMotion();

  return (
    <div className="neon-sharks" aria-hidden>
      <div className="underwater-haze" />
      <div className="caustic-light" />
      <BubbleField reduced={reduced} />
      {LANES.map((lane) => (
        <Shark key={lane.id} lane={lane} reduced={reduced} />
      ))}
    </div>
  );
}

export const NeonSharks = memo(NeonSharksInner);
