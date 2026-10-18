import React from 'react';

export default function AutoRickshaw({ className = 'w-24 h-20', moving = true, flip = false }) {
  return (
    <div
      className={`inline-block select-none relative ${moving ? 'animate-rickshaw-bounce' : ''} ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <svg
        viewBox="0 0 160 120"
        className="w-full h-full drop-shadow-md overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ground Shadow */}
        <ellipse cx="80" cy="112" rx="55" ry="6" fill="#0f172a" opacity="0.12" />

        {/* Rickshaw Yellow Canopy / Roof */}
        <path
          d="M20 50 
             C20 32, 38 24, 70 24 
             L115 24 
             C128 24, 138 30, 142 45 
             L146 62 
             H20 Z"
          fill="#facc15"
          stroke="#ca8a04"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Windshield */}
        <path
          d="M116 30 L136 54 H110 V30 H116 Z"
          fill="#e0f2fe"
          stroke="#38bdf8"
          strokeWidth="2"
        />

        {/* Driver Handlebars & Front Canopy Rods */}
        <line x1="26" y1="50" x2="26" y2="80" stroke="#334155" strokeWidth="2.5" />
        <line x1="72" y1="50" x2="72" y2="80" stroke="#334155" strokeWidth="2.5" />
        <line x1="140" y1="58" x2="148" y2="92" stroke="#334155" strokeWidth="3" />

        {/* Driver Silhouette */}
        <circle cx="118" cy="48" r="4.5" fill="#334155" />
        <path d="M110 58 C110 52, 126 52, 126 58 Z" fill="#0284c7" />

        {/* Lower Body - Classic Gujarat Green */}
        <path
          d="M22 75 
             H120 
             C128 75, 134 82, 134 90 
             L134 98 
             C134 102, 130 104, 124 104 
             H26 
             C22 104, 20 100, 20 95 
             L20 80 
             C20 77, 21 75, 22 75 Z"
          fill="#10b981"
          stroke="#059669"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Passenger Seat Cushion */}
        <rect x="32" y="72" width="34" height="8" rx="2" fill="#78350f" />

        {/* Meter & Front Cowling (Black & Yellow) */}
        <path
          d="M130 78 
             L150 82 
             C154 85, 154 90, 150 94 
             L136 96 Z"
          fill="#facc15"
          stroke="#ca8a04"
          strokeWidth="2"
        />
        {/* Headlight */}
        <circle cx="152" cy="88" r="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
        {/* Headlight beam */}
        <polygon points="156,88 180,78 180,98" fill="#fef9c3" opacity="0.35" />

        {/* Front Wheel Fork */}
        <line x1="148" y1="92" x2="144" y2="104" stroke="#475569" strokeWidth="3" />

        {/* WHEEL 1 (Front Wheel) */}
        <g className={moving ? 'animate-wheel-spin origin-[144px_104px]' : ''}>
          <circle cx="144" cy="104" r="11" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <circle cx="144" cy="104" r="5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <line x1="144" y1="98" x2="144" y2="110" stroke="#94a3b8" strokeWidth="1" />
          <line x1="138" y1="104" x2="150" y2="104" stroke="#94a3b8" strokeWidth="1" />
        </g>

        {/* WHEEL 2 (Rear Wheel) */}
        <g className={moving ? 'animate-wheel-spin origin-[50px_104px]' : ''}>
          <circle cx="50" cy="104" r="13" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <circle cx="50" cy="104" r="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="50" cy="104" r="2" fill="#10b981" />
          <line x1="50" y1="97" x2="50" y2="111" stroke="#94a3b8" strokeWidth="1" />
          <line x1="43" y1="104" x2="57" y2="104" stroke="#94a3b8" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
