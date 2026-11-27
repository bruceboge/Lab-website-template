export function HeroCircuitBackground() {
  return (
    <div className="hero-ic-backdrop" aria-hidden="true">
      <svg
        className="hero-ic-svg"
        viewBox="0 0 1440 720"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="ic-stdcell-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M48 0H0V48"
              stroke="currentColor"
              strokeOpacity="0.06"
              strokeWidth="1"
            />
            <circle cx="0" cy="0" r="1.2" fill="currentColor" fillOpacity="0.1" />
          </pattern>

          <radialGradient id="ic-copy-scrim" cx="26%" cy="48%" r="58%">
            <stop offset="0%" stopColor="var(--bg)" stopOpacity="0.96" />
            <stop offset="55%" stopColor="var(--bg)" stopOpacity="0.72" />
            <stop offset="100%" stopColor="var(--bg)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Standard-cell silicon grid */}
        <rect width="1440" height="720" fill="url(#ic-stdcell-grid)" />

        {/* Orthogonal Manhattan routing buses & 45-degree chamfers */}
        <g stroke="currentColor" strokeOpacity="0.13" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-40 120H210L258 168H540L588 120H880L928 168H1480" />
          <path d="M-40 144H196L244 192H556L604 144H864L912 192H1480" />
          <path d="M-40 540H260L308 492H630L678 540H1020L1068 492H1480" />
          <path d="M-40 564H244L292 516H646L694 564H1004L1052 516H1480" />

          {/* Vertical interconnect trunks */}
          <path d="M740 0V180L788 228V492L740 540V720" />
          <path d="M764 0V170L812 218V502L764 550V720" />
          <path d="M1120 0V140L1168 188V532L1120 580V720" />
          <path d="M1320 0V260L1272 308V460L1320 508V720" />
        </g>

        {/* Subtle die perimeter & macro block outlines on the right side */}
        <g stroke="var(--ic-gold-stroke)" strokeOpacity="0.22" strokeWidth="1.2">
          <rect x="780" y="96" width="528" height="528" rx="4" strokeDasharray="6 6" />
          <rect x="816" y="132" width="456" height="456" rx="2" strokeOpacity="0.14" />
        </g>

        {/* Bond pads & via nodes */}
        <g fill="var(--ic-accent-stroke)" fillOpacity="0.22">
          <rect x="774" y="160" width="12" height="12" rx="1.5" />
          <rect x="774" y="256" width="12" height="12" rx="1.5" />
          <rect x="774" y="352" width="12" height="12" rx="1.5" />
          <rect x="774" y="448" width="12" height="12" rx="1.5" />
          <rect x="1302" y="160" width="12" height="12" rx="1.5" />
          <rect x="1302" y="256" width="12" height="12" rx="1.5" />
          <rect x="1302" y="352" width="12" height="12" rx="1.5" />
          <rect x="1302" y="448" width="12" height="12" rx="1.5" />
        </g>

        {/* Via connection dots */}
        <g fill="currentColor" fillOpacity="0.2">
          <circle cx="258" cy="168" r="3" />
          <circle cx="540" cy="168" r="3" />
          <circle cx="678" cy="540" r="3" />
          <circle cx="928" cy="168" r="3" />
          <circle cx="1068" cy="492" r="3" />
          <circle cx="1168" cy="188" r="3" />
          <circle cx="1168" cy="532" r="3" />
        </g>

        {/* Soft radial scrim ensuring left typography remains crisp on white space */}
        <rect width="1440" height="720" fill="url(#ic-copy-scrim)" />
      </svg>
    </div>
  );
}
