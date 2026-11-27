/** Kilimanjaro silhouette — broad flat Kibo crater + Mawenzi spur. */
export function KilimanjaroBackdrop() {
  return (
    <div className="hero-kili" aria-hidden>
      <svg
        className="hero-kili-svg"
        viewBox="0 0 1200 720"
        preserveAspectRatio="none"
        role="img"
      >
        <defs>
          <linearGradient id="kili-body" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4a226e" />
            <stop offset="22%" stopColor="#2a1248" />
            <stop offset="55%" stopColor="#14082a" />
            <stop offset="100%" stopColor="#07010f" />
          </linearGradient>
          <linearGradient id="kili-snow" x1="0%" y1="0%" x2="20%" y2="100%">
            <stop offset="0%" stopColor="#eef6ff" />
            <stop offset="55%" stopColor="#b8cfe8" />
            <stop offset="100%" stopColor="#5c3d88" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="kili-ridge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2de2e6" stopOpacity="0.15" />
            <stop offset="30%" stopColor="#2de2e6" />
            <stop offset="52%" stopColor="#ff2bd6" />
            <stop offset="78%" stopColor="#f7b32b" />
            <stop offset="100%" stopColor="#f7b32b" stopOpacity="0.15" />
          </linearGradient>
          <filter id="kili-neon" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M0 720 L0 545 L160 500 L310 535 L470 485 L640 525 L820 470 L980 510 L1200 480 L1200 720 Z"
          fill="#10061f"
          opacity="0.95"
        />

        {/* Flat-topped Kibo + Mawenzi — Kilimanjaro’s signature profile */}
        <path
          d="M20 720
             L120 610 L220 540 L320 470 L400 400 L470 340 L520 300
             L560 278 L600 268 L640 262 L700 260 L760 262 L810 268 L850 278
             L880 300 L910 335 L940 310 L970 295 L995 300 L1020 325
             L1060 380 L1110 460 L1160 540 L1200 600 L1200 720 Z"
          fill="url(#kili-body)"
        />

        <path
          d="M220 540 L320 470 L400 400 L470 340 L520 300
             L560 278 L600 268 L640 262 L700 260 L760 262 L810 268 L850 278
             L880 300 L910 335 L940 310 L970 295 L995 300 L1020 325
             L1060 380 L1110 460"
          fill="none"
          stroke="url(#kili-ridge)"
          strokeWidth="3"
          strokeLinejoin="round"
          filter="url(#kili-neon)"
        />

        {/* Glacier draped on the flat crater rim — not a light orb */}
        <path
          className="kili-snow"
          d="M575 276
             L610 268 L650 263 L700 261 L750 263 L800 268 L835 275
             L810 288 L760 298 L710 302 L660 300 L615 294 L585 286 Z"
          fill="url(#kili-snow)"
          opacity="0.92"
        />

        <path
          d="M945 308 L970 295 L990 300 L975 314 L955 320 Z"
          fill="url(#kili-snow)"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}
