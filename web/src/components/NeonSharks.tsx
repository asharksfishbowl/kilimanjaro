import { memo } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Side-view great white cruise (thunniform) via compositor transforms.
 * Not WebGL — continuous Three.js redraw + deck.gl on the same page was
 * the choppiness; JS heap was fine (~25MB). Motion translateX runs on the
 * GPU compositor and stays smooth.
 *
 * neon-shark.png faces left. Mirror with scaleX(-1) when cruising right
 * so the nose always leads.
 */

type SharkLane = {
  id: string;
  top: string;
  size: number;
  /** Seconds for one full crossing */
  duration: number;
  delay: number;
  direction: 1 | -1;
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
    id: "trail",
    top: "58%",
    size: 150,
    duration: 36,
    delay: -12,
    direction: -1,
    opacity: 0.55,
  },
];

function Shark({ lane, reduced }: { lane: SharkLane; reduced: boolean }) {
  const swimRight = lane.direction === 1;
  const flip = swimRight ? -1 : 1;
  const fromX = swimRight ? "-28vw" : "100vw";
  const toX = swimRight ? "100vw" : "-28vw";

  if (reduced) {
    return (
      <img
        className="neon-shark"
        src="/neon-shark.png"
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
        src="/neon-shark.png"
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

function NeonSharksInner() {
  const reduced = !!useReducedMotion();

  return (
    <div className="neon-sharks" aria-hidden>
      {LANES.map((lane) => (
        <Shark key={lane.id} lane={lane} reduced={reduced} />
      ))}
    </div>
  );
}

export const NeonSharks = memo(NeonSharksInner);
