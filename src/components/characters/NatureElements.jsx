import React from 'react';

// Cheerful Smiling Sun
export function CheerfulSun({ className = 'w-16 h-16' }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        {/* Rotating Sun Rays */}
        <g className="animate-sun-spin origin-[50px_50px]">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1="50"
              y1="12"
              x2="50"
              y2="4"
              stroke="#fbbf24"
              strokeWidth="4"
              strokeLinecap="round"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </g>
        {/* Sun Body */}
        <circle cx="50" cy="50" r="28" fill="#facc15" stroke="#f59e0b" strokeWidth="3" />
        {/* Happy Face */}
        <circle cx="42" cy="46" r="3" fill="#78350f" />
        <circle cx="58" cy="46" r="3" fill="#78350f" />
        {/* Cheerful Smile */}
        <path d="M42 56 Q50 64 58 56" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Rosy Cheeks */}
        <circle cx="36" cy="54" r="3.5" fill="#f87171" opacity="0.45" />
        <circle cx="64" cy="54" r="3.5" fill="#f87171" opacity="0.45" />
      </svg>
    </div>
  );
}

// Floating Cartoon Cloud
export function CartoonCloud({ className = 'w-24 h-12', opacity = '0.9' }) {
  return (
    <svg viewBox="0 0 120 60" className={`inline-block ${className}`} fill="none" style={{ opacity }}>
      <path
        d="M25 45 
           H95 
           C105 45, 112 38, 112 28 
           C112 18, 102 12, 92 14 
           C88 6, 76 2, 62 4 
           C50 6, 42 14, 40 22 
           C32 20, 18 24, 18 34 
           C18 40, 22 45, 25 45 Z"
        fill="#ffffff"
        stroke="#e2e8f0"
        strokeWidth="2"
      />
    </svg>
  );
}

// Swaying Cartoon Palm Tree
export function SwayingPalmTree({ className = 'w-20 h-28', delay = '0s' }) {
  return (
    <div className={`inline-block origin-bottom ${className}`} style={{ animation: `treeSway 4s ease-in-out infinite ${delay}` }}>
      <svg viewBox="0 0 100 140" className="w-full h-full overflow-visible" fill="none">
        {/* Trunk (Segmented curve) */}
        <path
          d="M48 135 C52 95, 45 55, 52 35"
          stroke="#92400e"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Trunk Rings */}
        <line x1="44" y1="120" x2="54" y2="120" stroke="#78350f" strokeWidth="2" />
        <line x1="46" y1="95" x2="56" y2="95" stroke="#78350f" strokeWidth="2" />
        <line x1="44" y1="70" x2="54" y2="70" stroke="#78350f" strokeWidth="2" />
        <line x1="46" y1="45" x2="54" y2="45" stroke="#78350f" strokeWidth="2" />

        {/* Coconuts */}
        <circle cx="47" cy="38" r="4" fill="#78350f" />
        <circle cx="55" cy="38" r="4" fill="#78350f" />

        {/* Big Green Fronds / Leaves */}
        {/* Left Fronds */}
        <path d="M52 35 C35 30, 15 40, 8 58" stroke="#10b981" strokeWidth="7" strokeLinecap="round" />
        <path d="M52 35 C30 20, 12 15, 2 30" stroke="#059669" strokeWidth="7" strokeLinecap="round" />
        {/* Top Frond */}
        <path d="M52 35 C50 15, 52 5, 54 2" stroke="#34d399" strokeWidth="7" strokeLinecap="round" />
        {/* Right Fronds */}
        <path d="M52 35 C70 20, 88 15, 98 30" stroke="#059669" strokeWidth="7" strokeLinecap="round" />
        <path d="M52 35 C75 30, 88 42, 95 60" stroke="#10b981" strokeWidth="7" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Playful Ocean Waves (Layered SVG waves with gentle motion)
export function OceanWaves({ className = 'w-full h-12' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Wave layer 1 */}
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-[200%] h-full absolute bottom-0 left-0 animate-wave-slow opacity-60"
        fill="#38bdf8"
      >
        <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z" />
      </svg>
      {/* Wave layer 2 */}
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-[200%] h-full absolute bottom-0 left-0 animate-wave-fast opacity-90"
        fill="#0284c7"
      >
        <path d="M0,40 C200,10 400,90 600,30 C800,-30 1000,70 1200,20 L1200,120 L0,120 Z" />
      </svg>
      {/* Foam crests */}
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-[200%] h-full absolute bottom-0 left-0 animate-wave-fast"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="25 15"
      >
        <path d="M0,40 C200,10 400,90 600,30 C800,-30 1000,70 1200,20" />
      </svg>
    </div>
  );
}

// Flying Seagull Birds
export function CartoonBird({ className = 'w-8 h-4', delay = '0s' }) {
  return (
    <div className={`inline-block ${className}`} style={{ animation: `birdFlight 6s ease-in-out infinite ${delay}` }}>
      <svg viewBox="0 0 40 20" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round">
        <path d="M2 14 Q10 2 20 10 Q30 2 38 14" />
      </svg>
    </div>
  );
}

// Playful Illustrated Landmark: Somnath Temple
export function SomnathIllustration({ className = 'w-48 h-48' }) {
  return (
    <div className={`inline-block relative select-none ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg" fill="none">
        {/* Stone Podium / Beach Foundation */}
        <rect x="25" y="165" width="150" height="20" rx="4" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2.5" />
        <line x1="25" y1="174" x2="175" y2="174" stroke="#94a3b8" strokeWidth="1.5" />

        {/* Temple Mandap (Main Hall) */}
        <rect x="40" y="125" width="120" height="40" rx="3" fill="#fde68a" stroke="#d97706" strokeWidth="2.5" />
        {/* Mandap Carvings / Pillars */}
        <line x1="55" y1="125" x2="55" y2="165" stroke="#d97706" strokeWidth="3" />
        <line x1="75" y1="125" x2="75" y2="165" stroke="#d97706" strokeWidth="3" />
        <line x1="125" y1="125" x2="125" y2="165" stroke="#d97706" strokeWidth="3" />
        <line x1="145" y1="125" x2="145" y2="165" stroke="#d97706" strokeWidth="3" />

        {/* Mandap Doorway */}
        <path d="M90 165 V138 C90 133, 110 133, 110 138 V165 Z" fill="#92400e" stroke="#78350f" strokeWidth="2" />

        {/* Stepped Mandap Roof (Dome) */}
        <path d="M35 125 L50 105 H150 L165 125 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
        <path d="M50 105 L65 92 H135 L150 105 Z" fill="#fde68a" stroke="#d97706" strokeWidth="2" />

        {/* Main High Spire (Shikhara) */}
        <path
          d="M80 125 
             L86 65 
             Q92 35 100 24 
             Q108 35 114 65 
             L120 125 Z"
          fill="#f59e0b"
          stroke="#b45309"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Spire Layer Bands */}
        <line x1="84" y1="95" x2="116" y2="95" stroke="#b45309" strokeWidth="2" />
        <line x1="88" y1="70" x2="112" y2="70" stroke="#b45309" strokeWidth="2" />
        <line x1="93" y1="46" x2="107" y2="46" stroke="#b45309" strokeWidth="2" />

        {/* Golden Kalash on Peak */}
        <circle cx="100" cy="20" r="5" fill="#facc15" stroke="#b45309" strokeWidth="1.5" />
        <circle cx="100" cy="14" r="3" fill="#facc15" stroke="#b45309" strokeWidth="1" />

        {/* Saffron Temple Flag (Dhwaja) Fluttering */}
        <path
          d="M100 14 V2 M100 3 L124 9 L100 16 Z"
          fill="#f97316"
          stroke="#c2410c"
          strokeWidth="1.5"
          className="animate-flag-wave origin-[100px_8px]"
        />
      </svg>
    </div>
  );
}

// Playful Illustrated Landmark: Dwarkadhish Temple
export function DwarkaIllustration({ className = 'w-48 h-48' }) {
  return (
    <div className={`inline-block relative select-none ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg" fill="none">
        {/* Steps / Foundation */}
        <rect x="20" y="168" width="160" height="18" rx="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />

        {/* Temple Multi-tier Pillars */}
        <rect x="35" y="130" width="130" height="38" rx="2" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
        <line x1="50" y1="130" x2="50" y2="168" stroke="#ea580c" strokeWidth="2.5" />
        <line x1="75" y1="130" x2="75" y2="168" stroke="#ea580c" strokeWidth="2.5" />
        <line x1="125" y1="130" x2="125" y2="168" stroke="#ea580c" strokeWidth="2.5" />
        <line x1="150" y1="130" x2="150" y2="168" stroke="#ea580c" strokeWidth="2.5" />
        <path d="M90 168 V140 H110 V168 Z" fill="#7c2d12" />

        {/* Tall 7-tier Tower of Dwarkadhish */}
        <path
          d="M72 130 
             L80 75 
             L86 45 
             L100 18 
             L114 45 
             L120 75 
             L128 130 Z"
          fill="#fb923c"
          stroke="#c2410c"
          strokeWidth="2.5"
        />

        {/* The Famous 52-Yard Grand Dhwaja (Flag) of Dwarka */}
        <line x1="100" y1="18" x2="100" y2="2" stroke="#475569" strokeWidth="2" />
        <path
          d="M100 3 C115 1, 130 14, 148 5 L138 20 C125 14, 115 22, 100 15 Z"
          fill="#e11d48"
          stroke="#be123c"
          strokeWidth="1.5"
          className="animate-flag-wave origin-[100px_10px]"
        />

        {/* Sea Boat on Gomti river / Arabian sea */}
        <g transform="translate(14, 150)">
          <path d="M0 12 L8 24 H30 L36 12 Z" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
          <path d="M18 12 V0 L28 6 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

// Playful Illustrated Landmark: Diu Island Fort & Lighthouse
export function DiuIllustration({ className = 'w-48 h-48' }) {
  return (
    <div className={`inline-block relative select-none ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg" fill="none">
        {/* Sand Mound */}
        <path d="M10 175 Q100 155 190 175 L190 195 L10 195 Z" fill="#fde68a" stroke="#f59e0b" strokeWidth="2" />

        {/* Diu Stone Ramparts & Fort Battlements */}
        <rect x="20" y="130" width="110" height="45" fill="#e2e8f0" stroke="#64748b" strokeWidth="2.5" />
        {/* Crenellations (Castle Teeth) */}
        {[20, 42, 64, 86, 108].map((x, i) => (
          <rect key={i} x={x} y="118" width="14" height="12" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
        ))}
        {/* Cannon Hole */}
        <circle cx="50" cy="150" r="6" fill="#1e293b" />
        <rect x="40" y="148" width="22" height="4" rx="2" fill="#334155" />

        {/* Diu Lighthouse (Iconic White & Red Bands) */}
        <polygon points="140,175 145,70 165,70 170,175" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
        {/* Red Stripes on Lighthouse */}
        <polygon points="142,145 143,120 167,120 168,145" fill="#ef4444" />
        <polygon points="144,95 145,75 165,75 166,95" fill="#ef4444" />
        {/* Lighthouse Lantern Top */}
        <rect x="142" y="58" width="26" height="12" rx="2" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
        <path d="M140 58 L155 45 L170 58 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5" />
        {/* Light beam */}
        <polygon points="142,64 10,20 10,80" fill="#fef08a" opacity="0.35" />

        {/* Beach Umbrella */}
        <g transform="translate(90, 142)">
          <line x1="20" y1="32" x2="20" y2="10" stroke="#78350f" strokeWidth="2" />
          <path d="M5 10 C5 0, 35 0, 35 10 Z" fill="#f43f5e" stroke="#e11d48" strokeWidth="1.5" />
          <path d="M15 10 C15 2, 25 2, 25 10 Z" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}
