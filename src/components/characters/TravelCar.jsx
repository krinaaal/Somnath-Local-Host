import React from 'react';

export default function TravelCar({ className = 'w-24 h-16', moving = true, flip = false }) {
  return (
    <div
      className={`inline-block select-none relative ${moving ? 'animate-car-bounce' : ''} ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <svg
        viewBox="0 0 160 100"
        className="w-full h-full drop-shadow-md overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow */}
        <ellipse cx="80" cy="94" rx="55" ry="6" fill="#0f172a" opacity="0.12" />

        {/* Roof Luggage Rack */}
        <path d="M45 35 H115" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
        <path d="M55 35 V30 M105 35 V30" stroke="#475569" strokeWidth="2.5" />
        
        {/* Suitcase on Roof 1 (Yellow) */}
        <rect x="52" y="20" width="32" height="14" rx="3" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
        <rect x="64" y="17" width="8" height="3" rx="1.5" fill="#ca8a04" />
        <line x1="68" y1="20" x2="68" y2="34" stroke="#eab308" strokeWidth="2" />

        {/* Bag on Roof 2 (Teal) */}
        <rect x="86" y="22" width="26" height="12" rx="3" fill="#2dd4bf" stroke="#0f766e" strokeWidth="1.5" />
        <path d="M92 22 C92 18, 106 18, 106 22" stroke="#0f766e" strokeWidth="1.5" fill="none" />

        {/* Rope tied around luggage */}
        <path d="M48 35 Q80 26 112 35" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />

        {/* Car Main Body (Bright Coral / Friendly Orange) */}
        <path
          d="M20 72 
             C20 62, 28 58, 42 58 
             L56 40 
             C60 35, 68 34, 76 34 
             L106 34 
             C116 34, 126 42, 134 52 
             L144 58 
             C152 62, 155 67, 155 74 
             C155 80, 150 82, 142 82 
             L25 82 
             C21 82, 20 78, 20 72 Z"
          fill="#ff5757"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Windows */}
        {/* Front Windshield */}
        <path
          d="M106 38 L128 54 H98 V38 H106 Z"
          fill="#e0f2fe"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Rear Windshield */}
        <path
          d="M62 40 L74 38 V54 H50 L62 40 Z"
          fill="#e0f2fe"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Middle Passenger Window */}
        <rect x="76" y="38" width="20" height="16" rx="1.5" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" />

        {/* Happy Traveler Driver Silhouette */}
        <circle cx="86" cy="46" r="4" fill="#334155" />
        <path d="M80 54 C80 50, 92 50, 92 54 Z" fill="#38bdf8" />

        {/* Car Door Seam & Handle */}
        <line x1="74" y1="56" x2="74" y2="78" stroke="#dc2626" strokeWidth="2" />
        <rect x="78" y="60" width="7" height="2.5" rx="1" fill="#fee2e2" />

        {/* Headlight (Yellow Glow) */}
        <path d="M148 64 C154 64, 154 72, 148 72 Z" fill="#fef08a" stroke="#eab308" strokeWidth="1.5" />
        {/* Headlight beam */}
        <path d="M154 64 L175 58 L175 78 L154 72 Z" fill="#fef9c3" opacity="0.35" />

        {/* Tail light (Ruby) */}
        <rect x="18" y="64" width="4" height="8" rx="1.5" fill="#f43f5e" />

        {/* Front & Rear Bumpers */}
        <rect x="15" y="76" width="10" height="5" rx="2" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="140" y="76" width="10" height="5" rx="2" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />

        {/* Wheel Well Cutouts */}
        <path d="M38 82 A 16 16 0 0 1 70 82 Z" fill="#070d1a" />
        <path d="M110 82 A 16 16 0 0 1 142 82 Z" fill="#070d1a" />

        {/* WHEEL 1 (Rear) */}
        <g className={moving ? 'animate-wheel-spin origin-[54px_82px]' : ''}>
          <circle cx="54" cy="82" r="14" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <circle cx="54" cy="82" r="7" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="54" cy="82" r="2.5" fill="#ff5757" />
          {/* Wheel Spokes */}
          <line x1="54" y1="75" x2="54" y2="89" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="47" y1="82" x2="61" y2="82" stroke="#94a3b8" strokeWidth="1.5" />
        </g>

        {/* WHEEL 2 (Front) */}
        <g className={moving ? 'animate-wheel-spin origin-[126px_82px]' : ''}>
          <circle cx="126" cy="82" r="14" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <circle cx="126" cy="82" r="7" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="126" cy="82" r="2.5" fill="#ff5757" />
          {/* Wheel Spokes */}
          <line x1="126" y1="75" x2="126" y2="89" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="119" y1="82" x2="133" y2="82" stroke="#94a3b8" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}
