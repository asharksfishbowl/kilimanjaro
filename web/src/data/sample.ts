export type Business = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  url: string | null;
  accent: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  year: number;
  kind: string;
  href: string | null;
};

export type Track = {
  id: string;
  title: string;
  artist: string;
  mood: string;
  duration_sec: number;
  bpm: number;
};

export type MapNode = {
  id: string;
  name: string;
  kind: string;
  longitude: number;
  latitude: number;
  intensity: number;
};

export type MapArc = {
  id: string;
  source: [number, number];
  target: [number, number];
  label: string;
};

export type SitePayload = {
  brand: string;
  tagline: string;
  about: string;
  businesses: Business[];
  portfolio: PortfolioItem[];
  tracks: Track[];
  map_nodes: MapNode[];
  map_arcs: MapArc[];
};

export type YoutubeVideo = {
  id: string;
  title: string;
  channel: string;
  url: string;
  category: string;
  views_label: string;
  neon: string;
};

export type MusicClip = {
  id: string;
  title: string;
  artist: string;
  platform: string;
  url: string;
  waveform: number[];
};

export type MediaBundle = {
  channel_name: string;
  channel_url: string;
  tagline: string;
  videos: YoutubeVideo[];
  clips: MusicClip[];
  source: string;
};

export const SAMPLE_SITE: SitePayload = {
  brand: "A Shark's Fishbowl",
  tagline: "Gotta climb to get to the top",
  about:
    "ASF Studios builds entertaining content you can learn from — music, video, software, and maker projects — climbing Kilimanjaro one neon step at a time.",
  businesses: [
    {
      id: "biz-asf",
      name: "A Shark's Fishbowl",
      tagline: "Creative studio & media lab",
      description:
        "Flagship brand for courses, music videos, cooking drops, DIY builds, and experimental software.",
      category: "Studio",
      url: "https://github.com/asharksfishbowl/asf-studio",
      accent: "#ff2bd6",
    },
    {
      id: "biz-pp",
      name: "Precious Plastic Lab",
      tagline: "Recycle. Remake. Remix.",
      description:
        "Maker-focused sustainability experiments and workshop content around circular materials.",
      category: "Impact",
      url: "https://github.com/asharksfishbowl/precious-plastic-lab",
      accent: "#2de2e6",
    },
    {
      id: "biz-courses",
      name: "ASF Courses",
      tagline: "Ship skills, not slides",
      description:
        "Hands-on software and creative courses that turn viewers into builders.",
      category: "Education",
      url: "https://github.com/asharksfishbowl/asf-courses",
      accent: "#f7b32b",
    },
    {
      id: "biz-music",
      name: "Neon Signal Records",
      tagline: "Synthwave & soundtrack drops",
      description:
        "Original music and video collaborations from the Fishbowl night drive.",
      category: "Music",
      url: "https://github.com/asharksfishbowl/neon-signal-records",
      accent: "#b967ff",
    },
  ],
  portfolio: [
    {
      id: "p-kilimanjaro",
      title: "Kilimanjaro",
      summary:
        "Synthwave portfolio for A Shark's Fishbowl — TypeScript, Rust, Python, SQLite, and neon deck.gl.",
      stack: ["TypeScript", "Rust", "Python", "SQLite", "deck.gl"],
      year: 2026,
      kind: "Platform",
      href: "https://github.com/asharksfishbowl/kilimanjaro",
    },
    {
      id: "p-swarm-hunter",
      title: "Swarm Hunter",
      summary:
        "Hunt and analyze swarms for signal, intelligence, and donation opportunities.",
      stack: ["TypeScript"],
      year: 2026,
      kind: "Agent",
      href: "https://github.com/asharksfishbowl/swarm-hunter",
    },
    {
      id: "p-armada",
      title: "Armada",
      summary:
        "Small-language-model trainer and agent creator with its own harness wrapping the whole stack.",
      stack: ["TypeScript", "ML", "Agents"],
      year: 2026,
      kind: "AI",
      href: "https://github.com/asharksfishbowl/Armada",
    },
    {
      id: "p-707468747768",
      title: "707468747768",
      summary: "A special project for the world — experimental Python build from the Fishbowl lab.",
      stack: ["Python"],
      year: 2026,
      kind: "Experiment",
      href: "https://github.com/asharksfishbowl/707468747768",
    },
    {
      id: "p-dealsniper",
      title: "DealSniper",
      summary:
        "Scans retail markets and surfaces the best deals based on user preferences.",
      stack: ["TypeScript"],
      year: 2026,
      kind: "Tool",
      href: "https://github.com/asharksfishbowl/DealSniper",
    },
    {
      id: "p-lmc-theater",
      title: "LMC Theater",
      summary: "Theater experience build — showtimes, stages, and neon house lights.",
      stack: ["TypeScript"],
      year: 2026,
      kind: "Experience",
      href: "https://github.com/asharksfishbowl/LMC-Theater",
    },
    {
      id: "p-fighter-rpg",
      title: "Fighter RPG Showdown 3D",
      summary: "3D fighter RPG showdown — arena combat with a Fishbowl arcade pulse.",
      stack: ["HTML", "3D", "Game"],
      year: 2026,
      kind: "Game",
      href: "https://github.com/asharksfishbowl/fighter-rpg-showdown-3d",
    },
  ],
  tracks: [
    {
      id: "t-spotify-album",
      title: "Living from a place of love :)",
      artist: "Nick Shark Marino",
      mood: "album",
      duration_sec: 0,
      bpm: 0,
    },
    {
      id: "t1",
      title: "Night Climb",
      artist: "Nick Shark Marino",
      mood: "outrun",
      duration_sec: 214,
      bpm: 118,
    },
    {
      id: "t2",
      title: "Fishbowl Neon",
      artist: "ASF",
      mood: "arcade",
      duration_sec: 198,
      bpm: 128,
    },
    {
      id: "t3",
      title: "Grid Horizon",
      artist: "Neon Signal",
      mood: "dreamwave",
      duration_sec: 246,
      bpm: 104,
    },
    {
      id: "t4",
      title: "Kilimanjaro Pulse",
      artist: "ASF Studios",
      mood: "cinematic",
      duration_sec: 262,
      bpm: 96,
    },
    {
      id: "t5",
      title: "Chrome Tide",
      artist: "Nick Shark Marino",
      mood: "retro-futurism",
      duration_sec: 187,
      bpm: 122,
    },
  ],
  map_nodes: [
    {
      id: "n-cos",
      name: "Colorado Springs",
      kind: "home",
      longitude: -104.8214,
      latitude: 38.8339,
      intensity: 1,
    },
    {
      id: "n-la",
      name: "Los Angeles",
      kind: "music",
      longitude: -118.2437,
      latitude: 34.0522,
      intensity: 0.85,
    },
    {
      id: "n-nyc",
      name: "New York",
      kind: "collab",
      longitude: -74.006,
      latitude: 40.7128,
      intensity: 0.7,
    },
    {
      id: "n-tokyo",
      name: "Tokyo",
      kind: "inspiration",
      longitude: 139.6917,
      latitude: 35.6895,
      intensity: 0.9,
    },
    {
      id: "n-kili",
      name: "Kilimanjaro",
      kind: "summit",
      longitude: 37.3556,
      latitude: -3.0674,
      intensity: 1,
    },
    {
      id: "n-berlin",
      name: "Berlin",
      kind: "synth",
      longitude: 13.405,
      latitude: 52.52,
      intensity: 0.75,
    },
    {
      id: "n-miami",
      name: "Miami",
      kind: "neon",
      longitude: -80.1918,
      latitude: 25.7617,
      intensity: 0.8,
    },
  ],
  map_arcs: [
    {
      id: "a1",
      source: [-104.8214, 38.8339],
      target: [37.3556, -3.0674],
      label: "Climb to the summit",
    },
    {
      id: "a2",
      source: [-104.8214, 38.8339],
      target: [-118.2437, 34.0522],
      label: "Music drops",
    },
    {
      id: "a3",
      source: [-118.2437, 34.0522],
      target: [139.6917, 35.6895],
      label: "Night signals",
    },
    {
      id: "a4",
      source: [13.405, 52.52],
      target: [-80.1918, 25.7617],
      label: "Synthwave circuit",
    },
    {
      id: "a5",
      source: [-74.006, 40.7128],
      target: [-104.8214, 38.8339],
      label: "Studio collabs",
    },
  ],
};

export const SAMPLE_MEDIA: MediaBundle = {
  channel_name: "A Shark's Fishbowl",
  channel_url: "https://www.youtube.com/@asharksfishbowl",
  tagline: "Entertaining content you can learn from — music, maker, and code.",
  videos: [
    {
      id: "yt-climb",
      title: "Night Climb — Behind the Neon",
      channel: "A Shark's Fishbowl",
      url: "https://www.youtube.com/@asharksfishbowl",
      category: "Music Video",
      views_label: "Studio cut",
      neon: "#ff2bd6",
    },
    {
      id: "yt-cook",
      title: "Fishbowl Kitchen: Synthwave Supper",
      channel: "A Shark's Fishbowl",
      url: "https://www.youtube.com/@asharksfishbowl",
      category: "Cooking",
      views_label: "Series",
      neon: "#f7b32b",
    },
    {
      id: "yt-diy",
      title: "Maker Bench: Precious Plastic Remix",
      channel: "A Shark's Fishbowl",
      url: "https://www.youtube.com/@asharksfishbowl",
      category: "DIY",
      views_label: "Workshop",
      neon: "#2de2e6",
    },
    {
      id: "yt-code",
      title: "Climb the Stack: TypeScript + Rust",
      channel: "A Shark's Fishbowl",
      url: "https://www.youtube.com/@asharksfishbowl",
      category: "Tutorial",
      views_label: "Course preview",
      neon: "#b967ff",
    },
    {
      id: "yt-live",
      title: "Live from the Fishbowl — Grid Horizon Set",
      channel: "Neon Signal Records",
      url: "https://www.youtube.com/@asharksfishbowl",
      category: "Live",
      views_label: "Session",
      neon: "#05ffa1",
    },
  ],
  clips: [
    {
      id: "c1",
      title: "Night Climb",
      artist: "Nick Shark Marino",
      platform: "YouTube",
      url: "https://www.youtube.com/@asharksfishbowl",
      waveform: [0.2, 0.5, 0.8, 0.4, 0.9, 0.6, 0.3, 0.7, 1.0, 0.5, 0.4, 0.8],
    },
    {
      id: "c2",
      title: "Fishbowl Neon",
      artist: "ASF",
      platform: "YouTube",
      url: "https://www.youtube.com/@asharksfishbowl",
      waveform: [0.3, 0.6, 0.4, 0.9, 0.5, 0.7, 0.8, 0.3, 0.6, 0.9, 0.4, 0.7],
    },
    {
      id: "c3",
      title: "Chrome Tide",
      artist: "Nick Shark Marino",
      platform: "YouTube",
      url: "https://www.youtube.com/@asharksfishbowl",
      waveform: [0.4, 0.3, 0.7, 0.5, 0.8, 0.9, 0.6, 0.4, 0.7, 0.5, 0.8, 0.6],
    },
  ],
  source: "sample",
};
