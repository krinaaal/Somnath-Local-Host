import React from 'react';

export default function TouristBus({ className = 'w-28 h-20', moving = true, flip = false }) {
  return (
    <div
      className={`inline-block select-none relative ${moving ? 'animate-bus-bounce' : ''} ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <svg
        viewBox="0 0 200 120"
        className="w-full h-full drop-shadow-md overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow */}
        <ellipse cx="100" cy="112" rx="75" ry="6" fill="#0f172a" opacity="0.12" />

        {/* Roof Luggage Carrier */}
        <path d="M40 32 H160" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
        <line x1="60" y1="32" x2="60" y2="26" stroke="#64748b" strokeWidth="2.5" />
        <line x1="140" y1="32" x2="140" y2="26" stroke="#64748b" strokeWidth="2.5" />
        {/* Stacked Luggage */}
        <rect x="65" y="18" width="30" height="14" rx="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
        <rect x="100" y="20" width="35" height="12" rx="2" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5" />

        {/* Bus Upper Body (White & Sky Blue) */}
        <path
          d="M20 90 
             V44 
             C20 36, 28 32, 40 32 
             H170 
             C182 32, 188 38, 190 48 
             L194 75 
             C196 82, 194 90, 186 92 
             H20 Z"
          fill="#ffffff"
          stroke="#0284c7"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Lower Blue Body Accent Band */}
        <path
          d="M20 70 H192 L188 92 H20 V70 Z"
          fill="#38bdf8"
          stroke="#0284c7"
          strokeWidth="2"
        />
        {/* Warm Golden Decorative Stripe */}
        <line x1="20" y1="70" x2="192" y2="70" stroke="#f59e0b" strokeWidth="3" />

        {/* Passenger Windows (Big & Friendly) */}
        <rect x="30" y="40" width="22" height="20" rx="3" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
        <rect x="58" y="40" width="22" height="20" rx="3" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
        <rect x="86" y="40" width="22" height="20" rx="3" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
        <rect x="114" y="40" width="22" height="20" rx="3" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
        <rect x="142" y="40" width="22" height="20" rx="3" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />

        {/* Front Large Driver Windshield */}
        <path
          d="M170 40 H184 C187 40, 188 43, 189 48 L191 62 H170 V40 Z"
          fill="#bae6fd"
          stroke="#0284c7"
          strokeWidth="1.5"
        />

        {/* Smiling Passengers Inside Windows */}
        <circle cx="41" cy="48" r="4" fill="#64748b" />
        <circle cx="69" cy="48" r="4" fill="#f43f5e" />
        <circle cx="97" cy="48" r="4" fill="#059669" />
        <circle cx="125" cy="48" r="4" fill="#d97706" />
        <circle cx="178" cy="50" r="4.5" fill="#334155" /> {/* Driver */}

        {/* Bus Door */}
        <rect x="150" y="62" width="16" height="30" rx="1.5" fill="#e2e8f0" stroke="#0284c7" strokeWidth="1.5" />
        <line x1="158" y1="62" x2="158" y2="92" stroke="#94a3b8" strokeWidth="1" />

        {/* Destination Board Sign on Front: "SOMNATH" */}
        <rect x="150" y="34" width="34" height="6" rx="1.5" fill="#0f172a" />
        <text x="167" y="38.5" fontSize="4" fill="#facc15" textAnchor="middle" fontWeight="bold" fontFamily="monospace">
          SOMNATH
        </text>

        {/* Headlight */}
        <rect x="190" y="74" width="4" height="7" rx="2" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
        <polygon points="194,76 215,68 215,86" fill="#fef9c3" opacity="0.3" />

        {/* Wheel wells */}
        <path d="M42 92 A 16 16 0 0 1 74 92 Z" fill="#0f172a" />
        <path d="M140 92 A 16 16 0 0 1 172 92 Z" fill="#0f172a" />

        {/* REAR WHEEL */}
        <g className={moving ? 'animate-wheel-spin origin-[58px_94px]' : ''}>
          <circle cx="58" cy="94" r="14" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <circle cx="58" cy="94" r="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="58" y1="87" x2="58" y2="101" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="51" y1="94" x2="65" y2="94" stroke="#cbd5e1" strokeWidth="1.5" />
        </g>

        {/* FRONT WHEEL */}
        <g className={moving ? 'animate-wheel-spin origin-[156px_94px]' : ''}>
          <circle cx="156" cy="94" r="14" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <circle cx="156" cy="94" r="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="156" y1="87" x2="156" y2="101" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="149" y1="94" x2="163" y2="94" stroke="#cbd5e1" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}
