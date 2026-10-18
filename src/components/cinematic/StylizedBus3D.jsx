import React from 'react';

export default function StylizedBus3D({ className = 'w-44 h-24', moving = true, flip = false }) {
  return (
    <div
      className={`inline-block select-none relative ${moving ? 'animate-road-ride' : ''} ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <svg
        viewBox="0 0 280 130"
        className="w-full h-full overflow-visible drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Pearl White Body Gradient */}
          <linearGradient id="busBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#f8fafc" />
            <stop offset="75%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          {/* Saffron / Coral Accent Wave */}
          <linearGradient id="busAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>

          {/* Panoramic Tinted Glass */}
          <linearGradient id="busGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#0284c7" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
          </linearGradient>

          {/* Ground Contact Shadow */}
          <radialGradient id="busGroundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#0f172a" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>

          {/* Wheel Rim Radial */}
          <radialGradient id="busRimGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="65%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </radialGradient>
        </defs>

        {/* 1. REALISTIC GROUND SHADOW */}
        <ellipse cx="140" cy="116" rx="115" ry="10" fill="url(#busGroundShadow)" />
        {/* Crisp wheel contact shadows */}
        <ellipse cx="68" cy="114" rx="20" ry="4" fill="#0f172a" opacity="0.85" />
        <ellipse cx="214" cy="114" rx="20" ry="4" fill="#0f172a" opacity="0.85" />

        {/* 2. ROOF AC UNIT & LUGGAGE RACK */}
        {/* Roof Mounted AC Unit */}
        <rect x="110" y="24" width="70" height="9" rx="3.5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="120" y1="28" x2="170" y2="28" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
        {/* Roof Rail */}
        <path d="M50 33 H232" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />

        {/* 3. MAIN COACH BODY (High-Roof Modern Tourer) */}
        <path
          d="M26 96 
             L26 44 
             C26 36, 32 32, 44 32 
             L228 32 
             C246 32, 258 42, 264 56 
             L270 78 
             C272 84, 270 96, 260 98 
             L238 98 
             C236 98, 234 94, 234 88 
             C234 76, 204 76, 204 88 
             C204 94, 200 98, 194 98 
             L86 98 
             C86 94, 84 88, 84 88 
             C84 76, 54 76, 54 88 
             C54 94, 52 98, 48 98 
             L28 98 
             C26 98, 26 97, 26 96 Z"
          fill="url(#busBodyGrad)"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Dynamic Saffron Coastal Stripe */}
        <path
          d="M26 78 Q110 74, 180 82 T268 76 L268 84 Q180 90, 110 82 T26 86 Z"
          fill="url(#busAccentGrad)"
        />
        {/* Turquoise Thin Accent Stripe */}
        <path
          d="M26 87 Q110 83, 180 91 T266 85"
          stroke="#06b6d4"
          strokeWidth="2"
        />

        {/* Lower Body Rugged Skirt (Grey) */}
        <path
          d="M26 93 H262 L260 98 H26 Z"
          fill="#334155"
        />

        {/* 4. PANORAMIC TINTED TOURIST WINDOWS */}
        {/* Driver & Passenger Unified Window Strip */}
        <path
          d="M34 42 H224 L244 64 H34 Z"
          fill="url(#busGlassGrad)"
          stroke="#334155"
          strokeWidth="1.5"
        />

        {/* Front Slanted Windshield */}
        <path
          d="M228 42 L254 62 H228 Z"
          fill="url(#busGlassGrad)"
          stroke="#334155"
          strokeWidth="1"
        />

        {/* Window Pillar Dividers (5 touring bays) */}
        <line x1="72" y1="42" x2="72" y2="64" stroke="#0f172a" strokeWidth="2.5" />
        <line x1="112" y1="42" x2="112" y2="64" stroke="#0f172a" strokeWidth="2.5" />
        <line x1="152" y1="42" x2="152" y2="64" stroke="#0f172a" strokeWidth="2.5" />
        <line x1="192" y1="42" x2="192" y2="64" stroke="#0f172a" strokeWidth="2.5" />

        {/* Continuous Panoramic Sky Reflection Highlight */}
        <path
          d="M40 46 L218 46 L238 60 L60 60 Z"
          fill="#ffffff"
          opacity="0.22"
        />
        <line x1="48" y1="48" x2="210" y2="48" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />

        {/* Passenger Curtains / Headrests (Subtle Interior Depth) */}
        <circle cx="56" cy="54" r="4" fill="#cbd5e1" opacity="0.8" />
        <circle cx="94" cy="54" r="4" fill="#cbd5e1" opacity="0.8" />
        <circle cx="134" cy="54" r="4" fill="#cbd5e1" opacity="0.8" />
        <circle cx="174" cy="54" r="4" fill="#cbd5e1" opacity="0.8" />

        {/* 5. FRONT FACE, HEADLIGHTS & GRILLE */}
        {/* Projector Headlight Assembly */}
        <path
          d="M260 70 L269 74 L265 82 L258 78 Z"
          fill="#fef08a"
          stroke="#f59e0b"
          strokeWidth="1"
        />
        <circle cx="264" cy="76" r="3" fill="#ffffff" />
        {/* Daytime Running LED Strip */}
        <line x1="258" y1="72" x2="268" y2="76" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />

        {/* Front Chrome Grille */}
        <rect x="264" y="80" width="5" height="12" rx="2" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
        <line x1="265" y1="83" x2="268" y2="83" stroke="#f8fafc" strokeWidth="1" />
        <line x1="265" y1="86" x2="268" y2="86" stroke="#f8fafc" strokeWidth="1" />
        <line x1="265" y1="89" x2="268" y2="89" stroke="#f8fafc" strokeWidth="1" />

        {/* Chrome Front Tourer Bumper */}
        <rect x="266" y="92" width="6" height="5" rx="2" fill="#64748b" />

        {/* Side Mirror */}
        <path d="M236 50 L242 46 L242 56 Z" fill="#1e293b" />
        <ellipse cx="243" cy="51" rx="2" ry="4.5" fill="#38bdf8" />

        {/* 6. WHEELS & ALLOY RIMS */}
        {/* Rear Wheel (Dual Axle Appearance) */}
        <g>
          <circle cx="68" cy="98" r="17" fill="#1e293b" stroke="#0f172a" strokeWidth="2.5" />
          <circle cx="68" cy="98" r="10.5" fill="url(#busRimGrad)" stroke="#475569" strokeWidth="1" />
          <circle cx="68" cy="98" r="4" fill="#0f172a" />
          {/* Wheel Studs */}
          <circle cx="68" cy="92" r="1" fill="#f8fafc" />
          <circle cx="74" cy="98" r="1" fill="#f8fafc" />
          <circle cx="68" cy="104" r="1" fill="#f8fafc" />
          <circle cx="62" cy="98" r="1" fill="#f8fafc" />
        </g>

        {/* Front Wheel */}
        <g>
          <circle cx="218" cy="98" r="17" fill="#1e293b" stroke="#0f172a" strokeWidth="2.5" />
          <circle cx="218" cy="98" r="10.5" fill="url(#busRimGrad)" stroke="#475569" strokeWidth="1" />
          <circle cx="218" cy="98" r="4" fill="#0f172a" />
          {/* Wheel Studs */}
          <circle cx="218" cy="92" r="1" fill="#f8fafc" />
          <circle cx="224" cy="98" r="1" fill="#f8fafc" />
          <circle cx="218" cy="104" r="1" fill="#f8fafc" />
          <circle cx="212" cy="98" r="1" fill="#f8fafc" />
        </g>

        {/* Door Lines & Handle for Entrance */}
        <line x1="202" y1="42" x2="202" y2="94" stroke="#64748b" strokeWidth="1.5" />
        <rect x="204" y="68" width="6" height="2" rx="1" fill="#475569" />
      </svg>
    </div>
  );
}
