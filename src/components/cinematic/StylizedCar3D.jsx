import React from 'react';

/**
 * Professional Executive Tourer Vehicle (Innova Crysta / Luxury Tourist MPV)
 * Features:
 * - Pearl metallic automotive body gradient with specular shoulder highlight
 * - LED projector headlamps with forward luminous road beam
 * - Aerodynamic roof carrier box with gold touring accents
 * - Floating roof design with gloss-black pillars & tinted acoustic glass
 * - Diamond-cut precision alloy wheels with brake calipers and continuous spin
 * - Layered ambient occlusion road shadows for realistic grounding
 */
export default function StylizedCar3D({ className = 'w-36 h-20', moving = true, flip = false }) {
  return (
    <div
      className={`inline-block select-none relative ${moving ? 'animate-road-ride' : ''} ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <svg
        viewBox="0 0 280 130"
        className="w-full h-full overflow-visible drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Pearl White Luxury Body Gradient */}
          <linearGradient id="execCarBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#f8fafc" />
            <stop offset="55%" stopColor="#f1f5f9" />
            <stop offset="85%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          {/* Roof Luggage Carrier Box (Aerodynamic Carbon / Graphite) */}
          <linearGradient id="aeroRoofBox" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="35%" stopColor="#334155" />
            <stop offset="70%" stopColor="#475569" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Gold Accent Stripe on Roof Box */}
          <linearGradient id="goldAeroStripe" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          {/* Premium Acoustic Privacy Glass with Sky Glint */}
          <linearGradient id="privacyGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#0f172a" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0.98" />
          </linearGradient>

          {/* Forward Headlight Beam Cone */}
          <linearGradient id="headlightBeamGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.6" />
            <stop offset="30%" stopColor="#fef9c3" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Ground Ambient Occlusion Shadow */}
          <radialGradient id="execCarGroundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#090d16" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#090d16" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#090d16" stopOpacity="0" />
          </radialGradient>

          {/* Diamond-cut Alloy Rim Gradient */}
          <radialGradient id="alloyRimGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#475569" />
          </radialGradient>

          {/* Chrome Front Grille Gradient */}
          <linearGradient id="chromeGrille" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>

        {/* 1. REALISTIC GROUND SHADOWS */}
        {/* Soft diffuse ambient road shadow */}
        <ellipse cx="130" cy="115" rx="115" ry="9" fill="url(#execCarGroundShadow)" />
        {/* Dark tire contact patches firmly on the tarmac */}
        <ellipse cx="64" cy="113" rx="20" ry="3.5" fill="#020617" opacity="0.9" />
        <ellipse cx="188" cy="113" rx="20" ry="3.5" fill="#020617" opacity="0.9" />

        {/* 2. FORWARD HEADLIGHT BEAM ON ROAD */}
        {moving && (
          <polygon
            points="234,80 310,65 310,105 234,92"
            fill="url(#headlightBeamGrad)"
            className="animate-headlight-beam pointer-events-none"
          />
        )}

        {/* 3. ROOF RAILS & AERODYNAMIC CARRIER BOX */}
        {/* Low-profile silver roof rails */}
        <path d="M72 40 H180" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="84" y1="40" x2="84" y2="35" stroke="#64748b" strokeWidth="2" />
        <line x1="168" y1="40" x2="168" y2="35" stroke="#64748b" strokeWidth="2" />

        {/* Modern Aerodynamic Roof Cargo Pod (Thule style) */}
        <path
          d="M80 35 
             C82 25, 96 22, 126 22 
             L164 22 
             C178 22, 186 28, 188 35 
             Z"
          fill="url(#aeroRoofBox)"
          stroke="#0f172a"
          strokeWidth="1.5"
        />
        {/* Dynamic Gold Touring Decal on Roof Box */}
        <path
          d="M92 28 Q135 25, 178 30"
          stroke="url(#goldAeroStripe)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Gloss Specular Highlight on Cargo Pod */}
        <path
          d="M98 24 Q132 23, 162 25"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* 4. MAIN MPV CHASSIS BODY (Sleek Innova Crysta Profile) */}
        <path
          d="M24 90
             C22 78, 28 72, 48 71
             L72 44
             C80 39, 95 39, 116 39
             L170 39
             C188 39, 202 50, 214 62
             L230 71
             C242 75, 246 80, 244 89
             C242 98, 234 101, 218 101
             L36 101
             C28 101, 25 96, 24 90 Z"
          fill="url(#execCarBody)"
          stroke="#64748b"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Crisp Dynamic Shoulder Line with Pearlescent Specular Highlight */}
        <path
          d="M32 80 Q130 77, 238 77"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.95"
        />

        {/* Lower Body Rugged Matte Charcoal Skirt & Rocker Panels */}
        <path
          d="M30 93 H238 L234 101 H36 Z"
          fill="#1e293b"
          stroke="#0f172a"
          strokeWidth="0.8"
        />

        {/* 5. TINTED ACOUSTIC PANORAMIC GLASS */}
        {/* Front Raked Windshield */}
        <path
          d="M172 44 L208 66 H156 V44 H172 Z"
          fill="url(#privacyGlass)"
          stroke="#334155"
          strokeWidth="1.2"
        />
        {/* Modern Sky Glass Glint */}
        <path d="M180 46 L200 64" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" opacity="0.6" />

        {/* Center Passenger Windows */}
        <path
          d="M116 44 H152 V66 H116 V44 Z"
          fill="url(#privacyGlass)"
          stroke="#334155"
          strokeWidth="1.2"
        />

        {/* Rear Quarter Window */}
        <path
          d="M78 46 L112 44 V66 H66 L78 46 Z"
          fill="url(#privacyGlass)"
          stroke="#334155"
          strokeWidth="1.2"
        />

        {/* Gloss Black B-Pillar & C-Pillar (Floating Roof Effect) */}
        <rect x="152" y="43" width="4" height="23" fill="#090d16" />
        <rect x="112" y="43" width="4" height="23" fill="#090d16" />

        {/* Driver Silhouette Inside Cabin */}
        <circle cx="138" cy="53" r="5" fill="#0f172a" opacity="0.8" />
        {/* Steering Wheel Rim Hint */}
        <path d="M148 57 Q150 54, 150 51" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />

        {/* Chrome Door Handles */}
        <rect x="160" y="72" width="11" height="2.5" rx="1.2" fill="#e2e8f0" stroke="#475569" strokeWidth="0.8" />
        <rect x="122" y="72" width="11" height="2.5" rx="1.2" fill="#e2e8f0" stroke="#475569" strokeWidth="0.8" />

        {/* Aerodynamic Side ORVM Mirror with Amber Turn Signal */}
        <path
          d="M204 64 C208 63, 212 65, 211 68 C210 70, 206 70, 204 69 Z"
          fill="#f8fafc"
          stroke="#475569"
          strokeWidth="0.8"
        />
        <line x1="205" y1="67" x2="209" y2="67" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" />

        {/* 6. FRONT FACIA & LIGHTING */}
        {/* Chrome Front Grille Ribs */}
        <path
          d="M233 76 L238 78 L236 86 L230 85 Z"
          fill="url(#chromeGrille)"
          stroke="#64748b"
          strokeWidth="0.8"
        />

        {/* Dual-Projector LED Headlamps */}
        <path
          d="M228 73 C238 73, 240 81, 233 84 H224 L228 73 Z"
          fill="#fef08a"
          stroke="#eab308"
          strokeWidth="1.2"
        />
        {/* Ice-Blue LED DRL Accent Line */}
        <path d="M226 74 H236" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />

        {/* LED Tail Lamp Strip */}
        <path
          d="M23 75 H28 V86 H23 C22 83, 22 78, 23 75 Z"
          fill="#ef4444"
          stroke="#b91c1c"
          strokeWidth="0.8"
        />

        {/* 7. WHEEL HOUSINGS & ARCHES */}
        <path d="M46 101 A 20 20 0 0 1 82 101 Z" fill="#090d16" />
        <path d="M170 101 A 20 20 0 0 1 206 101 Z" fill="#090d16" />

        {/* 8. REAR ALLOY WHEEL (Diamond-Cut 10-Spoke) */}
        <g className={moving ? 'animate-wheel-spin origin-[64px_101px]' : ''}>
          {/* Heavy Tread Tire Rubber */}
          <circle cx="64" cy="101" r="18" fill="#1e293b" stroke="#090d16" strokeWidth="2.5" />
          {/* Brake Rotor Disc (Steel) */}
          <circle cx="64" cy="101" r="12" fill="#64748b" />
          {/* Red Brake Caliper */}
          <path d="M68 93 A 9 9 0 0 1 73 103" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
          {/* Diamond-cut machined face */}
          <circle cx="64" cy="101" r="10" fill="url(#alloyRimGrad)" stroke="#334155" strokeWidth="1" />
          {/* 10 Precision Alloy Spokes */}
          {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg) => (
            <line
              key={deg}
              x1="64"
              y1="101"
              x2="64"
              y2="92"
              stroke="#f8fafc"
              strokeWidth="2"
              strokeLinecap="round"
              transform={`rotate(${deg} 64 101)`}
            />
          ))}
          {/* Center Wheel Hub Cap */}
          <circle cx="64" cy="101" r="3.5" fill="#090d16" stroke="#94a3b8" strokeWidth="1" />
        </g>

        {/* 9. FRONT ALLOY WHEEL (Diamond-Cut 10-Spoke) */}
        <g className={moving ? 'animate-wheel-spin origin-[188px_101px]' : ''}>
          {/* Heavy Tread Tire Rubber */}
          <circle cx="188" cy="101" r="18" fill="#1e293b" stroke="#090d16" strokeWidth="2.5" />
          {/* Brake Rotor Disc (Steel) */}
          <circle cx="188" cy="101" r="12" fill="#64748b" />
          {/* Red Brake Caliper */}
          <path d="M192 93 A 9 9 0 0 1 197 103" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
          {/* Diamond-cut machined face */}
          <circle cx="188" cy="101" r="10" fill="url(#alloyRimGrad)" stroke="#334155" strokeWidth="1" />
          {/* 10 Precision Alloy Spokes */}
          {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg) => (
            <line
              key={deg}
              x1="188"
              y1="101"
              x2="188"
              y2="92"
              stroke="#f8fafc"
              strokeWidth="2"
              strokeLinecap="round"
              transform={`rotate(${deg} 188 101)`}
            />
          ))}
          {/* Center Wheel Hub Cap */}
          <circle cx="188" cy="101" r="3.5" fill="#090d16" stroke="#94a3b8" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
