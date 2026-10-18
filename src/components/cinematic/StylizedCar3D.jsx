import React from 'react';

export default function StylizedCar3D({ className = 'w-36 h-20', moving = true, flip = false }) {
  return (
    <div
      className={`inline-block select-none relative ${moving ? 'animate-road-ride' : ''} ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <svg
        viewBox="0 0 240 120"
        className="w-full h-full overflow-visible drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Body Gradient */}
          <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#f8fafc" />
            <stop offset="70%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          {/* Roof Rack Luggage Gradient */}
          <linearGradient id="luggageGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          {/* Tinted Glass Gradient */}
          <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#0284c7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
          </linearGradient>

          {/* Ambient Occlusion Ground Shadow */}
          <radialGradient id="carGroundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#0f172a" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>

          {/* Wheel Rim Radial */}
          <radialGradient id="rimGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="70%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </radialGradient>
        </defs>

        {/* 1. REALISTIC GROUND SHADOWS */}
        {/* Soft diffuse ambient shadow */}
        <ellipse cx="120" cy="108" rx="90" ry="9" fill="url(#carGroundShadow)" />
        {/* Crisp tire contact patches */}
        <ellipse cx="64" cy="106" rx="18" ry="4" fill="#0f172a" opacity="0.8" />
        <ellipse cx="176" cy="106" rx="18" ry="4" fill="#0f172a" opacity="0.8" />

        {/* 2. ROOF TRAVEL RACK & LUGGAGE */}
        <path d="M72 38 H168" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
        <line x1="84" y1="38" x2="84" y2="32" stroke="#475569" strokeWidth="2.5" />
        <line x1="156" y1="38" x2="156" y2="32" stroke="#475569" strokeWidth="2.5" />
        {/* Roof Cargo Box (Aerodynamic Tourer Pack) */}
        <path
          d="M80 32 C82 22, 100 20, 130 20 C160 20, 168 25, 172 32 Z"
          fill="url(#luggageGrad)"
          stroke="#b45309"
          strokeWidth="1.5"
        />
        {/* Specular glint on cargo */}
        <path d="M90 24 C110 22, 140 22, 158 25" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

        {/* 3. CAR CHASSIS & MAIN BODY (Modern Pearl White Crossover) */}
        <path
          d="M26 84 
             C24 74, 32 68, 50 68 
             L74 44 
             C82 38, 96 38, 114 38 
             L156 38 
             C172 38, 186 48, 196 60 
             L216 68 
             C226 72, 230 78, 228 86 
             C226 94, 218 96, 206 96 
             L34 96 
             C28 96, 26 92, 26 84 Z"
          fill="url(#carBodyGrad)"
          stroke="#64748b"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Dynamic Character Shoulder Line Highlight */}
        <path
          d="M32 76 Q120 74, 222 74"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Lower Body Cladding (Rugged Tourer Grey) */}
        <path
          d="M30 88 H224 L220 96 H34 Z"
          fill="#334155"
        />

        {/* 4. TINTED GLASS WITH SKY REFLECTIONS */}
        {/* Front Windshield */}
        <path
          d="M158 43 L190 64 H146 V43 H158 Z"
          fill="url(#glassGrad)"
          stroke="#475569"
          strokeWidth="1.5"
        />
        {/* Glass reflection beam */}
        <path d="M166 45 L182 62" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

        {/* Middle Passenger Window */}
        <path
          d="M110 43 H142 V64 H110 V43 Z"
          fill="url(#glassGrad)"
          stroke="#475569"
          strokeWidth="1.5"
        />

        {/* Rear Quarter Window */}
        <path
          d="M78 45 L106 43 V64 H64 L78 45 Z"
          fill="url(#glassGrad)"
          stroke="#475569"
          strokeWidth="1.5"
        />

        {/* B-Pillar & C-Pillar */}
        <line x1="144" y1="42" x2="144" y2="66" stroke="#0f172a" strokeWidth="3" />
        <line x1="108" y1="42" x2="108" y2="66" stroke="#0f172a" strokeWidth="3" />

        {/* Driver Silhouette Inside */}
        <circle cx="128" cy="52" r="5" fill="#1e293b" opacity="0.75" />

        {/* Door Seam Lines & Chrome Handle */}
        <line x1="144" y1="66" x2="144" y2="92" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="108" y1="66" x2="108" y2="92" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="148" y="70" width="10" height="2.5" rx="1" fill="#cbd5e1" stroke="#475569" strokeWidth="0.8" />
        <rect x="112" y="70" width="10" height="2.5" rx="1" fill="#cbd5e1" stroke="#475569" strokeWidth="0.8" />

        {/* 5. LIGHTING: Modern LED Headlamp */}
        <path
          d="M216 72 C225 72, 226 80, 218 82 H212 L216 72 Z"
          fill="#fef08a"
          stroke="#eab308"
          strokeWidth="1"
        />
        {/* Subtle forward beam */}
        <polygon points="225,74 255,68 255,88 225,80" fill="#fef9c3" opacity="0.25" />

        {/* LED Tail Lamp Bar */}
        <path d="M25 74 H30 V82 H25 Z" fill="#ef4444" />

        {/* 6. WHEEL HOUSINGS */}
        <path d="M46 96 A 20 20 0 0 1 82 96 Z" fill="#0f172a" />
        <path d="M158 96 A 20 20 0 0 1 194 96 Z" fill="#0f172a" />

        {/* 7. ALLOY WHEEL 1 (Rear) */}
        <g className={moving ? 'animate-wheel-spin origin-[64px_96px]' : ''}>
          {/* Heavy Rubber Tire */}
          <circle cx="64" cy="96" r="17" fill="#1e293b" stroke="#0f172a" strokeWidth="2.5" />
          <circle cx="64" cy="96" r="11" fill="url(#rimGrad)" />
          {/* 5-Spoke Alloy Design */}
          {[0, 72, 144, 216, 288].map((deg) => (
            <line
              key={deg}
              x1="64"
              y1="96"
              x2="64"
              y2="86"
              stroke="#e2e8f0"
              strokeWidth="2.5"
              strokeLinecap="round"
              transform={`rotate(${deg} 64 96)`}
            />
          ))}
          <circle cx="64" cy="96" r="3" fill="#0f172a" />
        </g>

        {/* 8. ALLOY WHEEL 2 (Front) */}
        <g className={moving ? 'animate-wheel-spin origin-[176px_96px]' : ''}>
          {/* Heavy Rubber Tire */}
          <circle cx="176" cy="96" r="17" fill="#1e293b" stroke="#0f172a" strokeWidth="2.5" />
          <circle cx="176" cy="96" r="11" fill="url(#rimGrad)" />
          {/* 5-Spoke Alloy Design */}
          {[0, 72, 144, 216, 288].map((deg) => (
            <line
              key={deg}
              x1="176"
              y1="96"
              x2="176"
              y2="86"
              stroke="#e2e8f0"
              strokeWidth="2.5"
              strokeLinecap="round"
              transform={`rotate(${deg} 176 96)`}
            />
          ))}
          <circle cx="176" cy="96" r="3" fill="#0f172a" />
        </g>
      </svg>
    </div>
  );
}
