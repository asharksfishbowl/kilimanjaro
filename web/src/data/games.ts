export type GameStatus = "playable" | "coming-soon" | "prototype";

export type GameItem = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: GameStatus;
  stack: string[];
  accent: string;
  /** Live play URL when hosted beside this site. */
  playUrl: string | null;
  /** Public repo or docs link. */
  href: string | null;
  year: number;
};

/** Curated Fishbowl games shelf — playable builds + titles in the lab. */
export const GAMES: GameItem[] = [
  {
    id: "fighter-rpg",
    title: "Fighter RPG Showdown 3D",
    tagline: "2.5D arcade brawler · empire map",
    description:
      "Street-fighter energy with RPG leveling. Claim territories, spend STR / DEX / CON / SPI, and knock rivals off the board.",
    status: "playable",
    stack: ["Three.js", "TypeScript", "Vite"],
    accent: "#ffd400",
    playUrl: "/fighter/",
    href: "https://github.com/asharksfishbowl/fighter-rpg-showdown-3d",
    year: 2026,
  },
  {
    id: "arena-rpg",
    title: "Arena RPG",
    tagline: "Arena combat · progression lab",
    description:
      "Deep arena fighter RPG experiments from the Fishbowl C++ lab — still climbing toward a public build.",
    status: "coming-soon",
    stack: ["C++", "RPG"],
    accent: "#ff2bd6",
    playUrl: null,
    href: null,
    year: 2025,
  },
  {
    id: "namec",
    title: "N.A.M.E.C",
    tagline: "Co-op fantasy survival · UE5",
    description:
      "Up to four players explore, dig, craft through Jobs, trade with kingdoms, and take on Souls-like bosses in one hand-authored world.",
    status: "prototype",
    stack: ["Unreal Engine 5", "C++", "Co-op"],
    accent: "#2de2e6",
    playUrl: null,
    href: null,
    year: 2026,
  },
];
