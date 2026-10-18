import React from 'react';

export default function StylizedLion3D({ className = 'w-48 h-40', animated = true }) {
  return (
    <div className={`inline-block select-none relative ${className}`}>
      <svg
        viewBox="0 0 240 200"
        className="w-full h-full overflow-visible drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Fur Tawny/Amber Golden 3D Body Gradient */}
          <linearGradient id="lionFurBody" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="25%" stopColor="#eab308" />
            <stop offset="60%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          {/* Majestic Asiatic Lion Dark/Golden Mane */}
          <radialGradient id="lionMane" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#b45309" />
            <stop offset="40%" stopColor="#78350f" />
            <stop offset="80%" stopColor="#451a03" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </radialGradient>

          {/* Muzzle & Chest Cream Tone */}
          <linearGradient id="lionCream" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="60%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          {/* Amber Feline Eyes */}
          <radialGradient id="lionEye" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="45%" stopColor="#f59e0b" />
            <stop offset="85%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#78350f" />
          </radialGradient>

          {/* Ambient Ground Contact Shadow */}
          <radialGradient id="lionGroundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1c1917" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#292524" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#292524" stopOpacity="0" />
          </radialGradient>

          {/* Rock Outcrop Gradient */}
          <linearGradient id="rockGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#78716c" />
            <stop offset="50%" stopColor="#57534e" />
            <stop offset="100%" stopColor="#292524" />
          </linearGradient>
        </defs>

        {/* 1. NATURAL ROCK OUTCROP & GROUND CONTACT SHADOW */}
        <ellipse cx="120" cy="182" rx="100" ry="14" fill="url(#lionGroundShadow)" />
        {/* Natural Forest Rocky Ledge */}
        <path
          d="M20 186 Q70 174, 120 176 T220 184 L228 196 Q120 198, 12 196 Z"
          fill="url(#rockGrad)"
          stroke="#44403c"
          strokeWidth="1.5"
        />
        {/* Paw Contact Occlusion */}
        <ellipse cx="76" cy="176" rx="16" ry="4" fill="#1c1917" opacity="0.8" />
        <ellipse cx="112" cy="176" rx="16" ry="4" fill="#1c1917" opacity="0.8" />
        <ellipse cx="180" cy="174" rx="22" ry="5" fill="#1c1917" opacity="0.8" />

        {/* 2. TAIL WITH GENTLE SWAY */}
        <g className={animated ? 'origin-[200px_150px] animate-tail-wag' : ''}>
          <path
            d="M190 146 C216 142, 230 120, 222 96 C218 84, 206 82, 212 76"
            stroke="url(#lionFurBody)"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          {/* Asiatic Lion Dark Black/Brown Tail Tuft */}
          <path
            d="M212 76 C210 68, 220 62, 226 66 C232 70, 228 80, 218 84 Z"
            fill="#3b1d11"
          />
        </g>

        {/* 3. STRONG HINDQUARTERS & TORSO */}
        {/* Haunches */}
        <path
          d="M142 120 C170 110, 204 126, 198 162 C194 174, 180 176, 168 174 C152 172, 144 158, 140 146 Z"
          fill="url(#lionFurBody)"
          stroke="#78350f"
          strokeWidth="1"
        />

        {/* Muscular Body / Flank with Gentle Breathing Animation */}
        <g className={animated ? 'animate-lion-breath origin-[120px_140px]' : ''}>
          <path
            d="M92 110 C120 102, 164 108, 172 134 C176 150, 160 166, 136 166 C108 166, 88 152, 86 136 Z"
            fill="url(#lionFurBody)"
          />
          {/* Subtle rib / muscular tone shadow */}
          <path
            d="M112 120 C128 126, 146 128, 154 144"
            stroke="#a16207"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>

        {/* 4. MIGHTY FRONT FORELEGS & PAWS */}
        {/* Left Foreleg */}
        <path
          d="M74 130 L70 168 C68 174, 62 176, 74 177 C86 177, 88 172, 84 166 L86 130 Z"
          fill="url(#lionFurBody)"
          stroke="#78350f"
          strokeWidth="1"
        />
        {/* Left Paw Digits */}
        <line x1="72" y1="172" x2="72" y2="177" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="77" y1="172" x2="77" y2="177" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="82" y1="172" x2="82" y2="177" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round" />

        {/* Right Foreleg (Resting proudly in front) */}
        <path
          d="M104 128 L106 168 C106 174, 102 176, 114 177 C124 177, 126 172, 122 166 L120 130 Z"
          fill="url(#lionFurBody)"
          stroke="#78350f"
          strokeWidth="1"
        />
        {/* Right Paw Digits */}
        <line x1="108" y1="172" x2="108" y2="177" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="113" y1="172" x2="113" y2="177" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="118" y1="172" x2="118" y2="177" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round" />

        {/* 5. DENSE ASIATIC MANE (Deep 3D Volume) */}
        {/* Back layer mane */}
        <path
          d="M52 86 
             C40 70, 48 46, 72 38 
             C94 30, 124 32, 134 46 
             C148 60, 146 84, 138 104 
             C132 122, 126 142, 104 148 
             C78 152, 60 136, 52 116 Z"
          fill="url(#lionMane)"
          stroke="#261005"
          strokeWidth="1.5"
        />

        {/* Textured mane hair locks for tactile realism */}
        <path d="M54 58 C62 66, 68 76, 62 88" stroke="#d97706" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
        <path d="M68 46 C80 56, 82 72, 78 86" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
        <path d="M116 44 C124 54, 130 68, 128 84" stroke="#d97706" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
        <path d="M66 122 C78 132, 94 138, 110 138" stroke="#92400e" strokeWidth="3" strokeLinecap="round" />

        {/* 6. DIGNIFIED ASIATIC LION HEAD & FACE */}
        {/* Lion Ears with Fur Tuft */}
        <path d="M62 44 C56 36, 62 26, 72 30 C76 36, 70 44, 62 44 Z" fill="#b45309" stroke="#451a03" strokeWidth="1.2" />
        <path d="M64 40 C62 36, 66 32, 70 34" fill="#fef08a" opacity="0.7" />

        <path d="M118 42 C126 34, 134 40, 130 48 C124 52, 118 48, 118 42 Z" fill="#b45309" stroke="#451a03" strokeWidth="1.2" />

        {/* Main Head Mass */}
        <path
          d="M66 68 
             C64 56, 76 46, 92 46 
             C108 46, 120 54, 120 68 
             C120 84, 112 102, 94 104 
             C76 102, 66 84, 66 68 Z"
          fill="url(#lionFurBody)"
        />

        {/* Brow Ridge & Forehead Depth */}
        <path d="M78 58 Q92 54, 106 58" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />

        {/* Amber Intelligent Eyes */}
        {/* Left Eye */}
        <g>
          <path d="M76 66 Q83 62, 88 66 Q83 70, 76 66 Z" fill="#ffffff" />
          <circle cx="82" cy="66" r="3" fill="url(#lionEye)" />
          <circle cx="82" cy="66" r="1.5" fill="#0f172a" />
          {/* Specular Catchlight */}
          <circle cx="81.2" cy="65.2" r="0.7" fill="#ffffff" />
          <path d="M75 64 Q83 61, 89 64" stroke="#451a03" strokeWidth="1.5" fill="none" />
        </g>

        {/* Right Eye */}
        <g>
          <path d="M96 66 Q101 62, 108 66 Q101 70, 96 66 Z" fill="#ffffff" />
          <circle cx="102" cy="66" r="3" fill="url(#lionEye)" />
          <circle cx="102" cy="66" r="1.5" fill="#0f172a" />
          {/* Specular Catchlight */}
          <circle cx="101.2" cy="65.2" r="0.7" fill="#ffffff" />
          <path d="M95 64 Q101 61, 109 64" stroke="#451a03" strokeWidth="1.5" fill="none" />
        </g>

        {/* Muzzle (Cream & Golden Contour) */}
        <path
          d="M80 74 
             C80 70, 104 70, 104 74 
             C108 82, 108 94, 92 95 
             C76 94, 76 82, 80 74 Z"
          fill="url(#lionCream)"
          stroke="#a16207"
          strokeWidth="1"
        />

        {/* Nose Pad (Leather Texture) */}
        <path
          d="M86 78 C86 76, 98 76, 98 78 C96 83, 94 85, 92 86 C90 85, 88 83, 86 78 Z"
          fill="#3b1d11"
        />
        <circle cx="89" cy="80" r="1" fill="#1c1917" />
        <circle cx="95" cy="80" r="1" fill="#1c1917" />
        <line x1="92" y1="85" x2="92" y2="89" stroke="#3b1d11" strokeWidth="1.5" />

        {/* Chin & Mouth */}
        <path d="M86 89 Q92 92, 98 89" stroke="#3b1d11" strokeWidth="1.5" fill="none" />
        <path d="M88 93 Q92 96, 96 93" stroke="#b45309" strokeWidth="1.5" fill="none" />

        {/* Whiskers */}
        <line x1="78" y1="83" x2="62" y2="81" stroke="#fde68a" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <line x1="78" y1="86" x2="60" y2="88" stroke="#fde68a" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <line x1="78" y1="89" x2="64" y2="95" stroke="#fde68a" strokeWidth="1" strokeLinecap="round" opacity="0.8" />

        <line x1="106" y1="83" x2="122" y2="81" stroke="#fde68a" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <line x1="106" y1="86" x2="124" y2="88" stroke="#fde68a" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <line x1="106" y1="89" x2="120" y2="95" stroke="#fde68a" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      </svg>
    </div>
  );
}
