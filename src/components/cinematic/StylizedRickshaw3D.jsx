import React from 'react';

export default function StylizedRickshaw3D({ className = 'w-32 h-24', moving = true, flip = false }) {
  return (
    <div
      className={`inline-block select-none relative ${moving ? 'animate-road-ride' : ''} ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <svg
        viewBox="0 0 200 140"
        className="w-full h-full overflow-visible drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Yellow Canopy 3D Gradient */}
          <linearGradient id="rickshawRoofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="25%" stopColor="#facc15" />
            <stop offset="70%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>

          {/* Green Lower Body 3D Gradient (Gujarat CNG Green) */}
          <linearGradient id="rickshawGreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>

          {/* Tinted Windshield Glass */}
          <linearGradient id="rickshawGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.9" />
          </linearGradient>

          {/* Chrome Metal Gradient */}
          <linearGradient id="rickshawChrome" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="35%" stopColor="#f8fafc" />
            <stop offset="70%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>

          {/* Wheel Rim Radial */}
          <radialGradient id="rickshawRim" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f1f5f9" />
            <stop offset="65%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </radialGradient>

          {/* Ambient Ground Shadow */}
          <radialGradient id="rickshawGroundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.6" />
            <stop offset="65%" stopColor="#0f172a" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. REALISTIC GROUND SHADOW */}
        <ellipse cx="102" cy="128" rx="76" ry="8" fill="url(#rickshawGroundShadow)" />
        {/* Tire contact spots */}
        <ellipse cx="46" cy="126" rx="14" ry="3.5" fill="#0f172a" opacity="0.85" />
        <ellipse cx="152" cy="126" rx="14" ry="3.5" fill="#0f172a" opacity="0.85" />

        {/* 2. CHASSIS & INTERIOR CABIN DEPTH */}
        <path
          d="M48 108 L152 108 L148 116 L52 116 Z"
          fill="#1e293b"
        />
        {/* Interior passenger seating area (shaded dark for depth) */}
        <path
          d="M62 48 L114 48 L110 98 L56 98 Z"
          fill="#0f172a"
          opacity="0.85"
        />
        {/* Passenger seat back cushion (brown faux-leather) */}
        <rect x="62" y="62" width="12" height="34" rx="4" fill="#78350f" stroke="#451a03" strokeWidth="1" />
        <rect x="76" y="78" width="30" height="18" rx="3" fill="#92400e" stroke="#451a03" strokeWidth="1" />

        {/* 3. REAR WHEEL (3D Hub & Tire) */}
        <g>
          {/* Rubber Tire */}
          <circle cx="50" cy="112" r="16" fill="#1e293b" stroke="#0f172a" strokeWidth="2.5" />
          {/* Wheel Rim */}
          <circle cx="50" cy="112" r="9.5" fill="url(#rickshawRim)" stroke="#475569" strokeWidth="1" />
          <circle cx="50" cy="112" r="3.5" fill="#0f172a" />
          {/* Rim spokes */}
          <line x1="50" y1="103" x2="50" y2="121" stroke="#475569" strokeWidth="1.5" />
          <line x1="41" y1="112" x2="59" y2="112" stroke="#475569" strokeWidth="1.5" />
          {/* Rear Mudguard */}
          <path
            d="M32 112 A 20 20 0 0 1 68 112"
            fill="none"
            stroke="#15803d"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>

        {/* 4. LOWER GREEN BODYWORK (Gujarat CNG Auto) */}
        <path
          d="M36 94 
             L54 94 
             C62 94, 66 98, 70 104 
             L116 104 
             C126 104, 134 98, 140 88 
             L164 88 
             C168 88, 172 82, 170 74 
             L162 60 
             L130 60 
             L122 84 
             L108 84 
             L112 50 
             L42 50 
             C36 50, 32 56, 32 64 
             L32 86 
             C32 92, 34 94, 36 94 Z"
          fill="url(#rickshawGreenGrad)"
          stroke="#0f5132"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Chrome Horizontal Beading / Trim */}
        <path
          d="M32 78 H166"
          stroke="url(#rickshawChrome)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Gujarat Green/Yellow Decal Stripe */}
        <path
          d="M34 83 H162"
          stroke="#facc15"
          strokeWidth="1.5"
          opacity="0.9"
        />

        {/* 5. PASSENGER PILLARS & DOOR APERTURE */}
        {/* Black steel safety pillar */}
        <line x1="114" y1="36" x2="110" y2="84" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
        <line x1="116" y1="38" x2="116" y2="70" stroke="url(#rickshawChrome)" strokeWidth="1.5" />

        {/* 6. ICONIC YELLOW CANOPY (Curved 3D Roof) */}
        <path
          d="M30 46 
             C30 30, 48 22, 90 20 
             C132 18, 148 24, 156 34 
             L158 48 
             C158 50, 152 52, 142 52 
             L36 52 
             C32 52, 30 50, 30 46 Z"
          fill="url(#rickshawRoofGrad)"
          stroke="#ca8a04"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Roof Highlight & Seam lines for 3D realism */}
        <path
          d="M38 32 C65 24, 110 22, 148 30"
          stroke="#fef08a"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M48 26 C75 22, 105 22, 134 26"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* 7. FRONT CABIN & WINDSHIELD */}
        {/* Windshield Glass */}
        <path
          d="M128 34 L154 36 L164 62 L132 62 Z"
          fill="url(#rickshawGlass)"
          stroke="#0284c7"
          strokeWidth="1.5"
        />
        {/* Windshield Reflection Streak */}
        <path
          d="M136 38 L152 58"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.75"
        />
        {/* Wiper */}
        <line x1="144" y1="60" x2="152" y2="44" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />

        {/* Front Nose Bonnet / Mudguard */}
        <path
          d="M164 62 L172 74 C174 78, 172 82, 168 84 L152 84 Z"
          fill="url(#rickshawGreenGrad)"
          stroke="#0f5132"
          strokeWidth="1"
        />

        {/* Front Chrome Headlight with High-Beam Glow */}
        <circle cx="171" cy="74" r="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
        <circle cx="171" cy="74" r="2.5" fill="#ffffff" />
        {/* Headlight beam highlight */}
        <polygon points="174,72 195,66 195,82 174,76" fill="#fef08a" opacity="0.25" />

        {/* Side Mirror */}
        <line x1="134" y1="46" x2="128" y2="44" stroke="#334155" strokeWidth="2" />
        <circle cx="126" cy="43" r="3" fill="url(#rickshawChrome)" stroke="#1e293b" strokeWidth="0.8" />

        {/* 8. FRONT STEERING FORK & WHEEL */}
        <g>
          {/* Chrome Front Fork */}
          <line x1="154" y1="84" x2="152" y2="108" stroke="url(#rickshawChrome)" strokeWidth="3.5" strokeLinecap="round" />
          {/* Front Wheel */}
          <circle cx="152" cy="114" r="14" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
          <circle cx="152" cy="114" r="8" fill="url(#rickshawRim)" stroke="#475569" strokeWidth="1" />
          <circle cx="152" cy="114" r="3" fill="#0f172a" />
          {/* Front Mudguard */}
          <path
            d="M140 106 A 16 16 0 0 1 166 106"
            fill="none"
            stroke="#15803d"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
