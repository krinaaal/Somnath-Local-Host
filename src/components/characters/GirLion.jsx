import React from 'react';

export default function GirLion({ className = 'w-32 h-32' }) {
  return (
    <div className={`inline-block select-none relative ${className}`}>
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full drop-shadow-md overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft shadow */}
        <ellipse cx="80" cy="148" rx="42" ry="6" fill="#0f172a" opacity="0.1" />

        {/* WAG TAIL (Animated) */}
        <g className="animate-tail-wag origin-[40px_120px]">
          <path
            d="M48 118 C30 115, 20 90, 28 75 C30 70, 38 68, 40 74 C42 80, 36 86, 32 94 C28 102, 38 116, 48 118 Z"
            fill="#d97706"
          />
          {/* Tail Tuft */}
          <circle cx="28" cy="72" r="8" fill="#92400e" />
        </g>

        {/* Body (Sitting chubby cute pose) */}
        <path
          d="M50 115 
             C50 95, 62 88, 80 88 
             C98 88, 110 95, 110 115 
             C110 135, 105 142, 80 142 
             C55 142, 50 135, 50 115 Z"
          fill="#f59e0b"
          stroke="#d97706"
          strokeWidth="2.5"
        />

        {/* Chest Fur (Soft Cream) */}
        <ellipse cx="80" cy="116" rx="16" ry="18" fill="#fef3c7" />

        {/* Paws (Sitting front paws) */}
        {/* Left Paw */}
        <ellipse cx="66" cy="138" rx="10" ry="6" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
        <line x1="63" y1="135" x2="63" y2="141" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="68" y1="135" x2="68" y2="141" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" />

        {/* Right Paw (Animated Wave!) */}
        <g className="animate-paw-wave origin-[95px_120px]">
          <path
            d="M94 118 
               C98 110, 112 108, 116 116 
               C118 122, 108 128, 98 124 Z"
            fill="#f59e0b"
            stroke="#d97706"
            strokeWidth="2"
          />
          <circle cx="114" cy="114" r="5" fill="#fef3c7" />
          {/* Cute paw pads */}
          <circle cx="112" cy="111" r="1.5" fill="#d97706" />
          <circle cx="116" cy="112" r="1.5" fill="#d97706" />
          <circle cx="114" cy="116" r="2" fill="#d97706" />
        </g>

        {/* FLUFFY MANE (Outer Petals/Puffs) */}
        <g fill="#b45309" stroke="#92400e" strokeWidth="2" strokeLinejoin="round">
          {/* Cloud-like puffy mane */}
          <circle cx="80" cy="40" r="16" />
          <circle cx="102" cy="46" r="15" />
          <circle cx="118" cy="62" r="15" />
          <circle cx="120" cy="82" r="15" />
          <circle cx="108" cy="98" r="15" />
          <circle cx="92" cy="106" r="14" />
          <circle cx="68" cy="106" r="14" />
          <circle cx="52" cy="98" r="15" />
          <circle cx="40" cy="82" r="15" />
          <circle cx="42" cy="62" r="15" />
          <circle cx="58" cy="46" r="15" />
          {/* Fill center of mane */}
          <circle cx="80" cy="72" r="32" fill="#d97706" stroke="none" />
        </g>

        {/* Rounded Ears */}
        <circle cx="56" cy="48" r="8" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
        <circle cx="56" cy="48" r="4.5" fill="#fef3c7" />
        <circle cx="104" cy="48" r="8" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
        <circle cx="104" cy="48" r="4.5" fill="#fef3c7" />

        {/* Head Shape */}
        <circle cx="80" cy="74" r="24" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />

        {/* Muzzle (Cream colored chubby cheeks) */}
        <ellipse cx="73" cy="82" rx="8" ry="6" fill="#fef3c7" />
        <ellipse cx="87" cy="82" rx="8" ry="6" fill="#fef3c7" />

        {/* Nose (Soft brown heart / triangle) */}
        <path d="M76 76 H84 L80 81 Z" fill="#78350f" stroke="#78350f" strokeWidth="1" strokeLinejoin="round" />

        {/* Happy Smiling Mouth */}
        <path d="M75 82 Q80 86 85 82" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Tiny cute tongue */}
        <path d="M78 83.5 Q80 88 82 83.5 Z" fill="#f43f5e" />

        {/* Eyes (Friendly blinking eyes) */}
        <g className="animate-lion-blink origin-[80px_68px]">
          {/* Left Eye */}
          <ellipse cx="71" cy="67" rx="3.5" ry="4.5" fill="#1e293b" />
          <circle cx="70" cy="65.5" r="1.5" fill="#ffffff" />
          {/* Right Eye */}
          <ellipse cx="89" cy="67" rx="3.5" ry="4.5" fill="#1e293b" />
          <circle cx="88" cy="65.5" r="1.5" fill="#ffffff" />
        </g>

        {/* Cute rosy blush on cheeks */}
        <circle cx="64" cy="76" r="4" fill="#fb7185" opacity="0.4" />
        <circle cx="96" cy="76" r="4" fill="#fb7185" opacity="0.4" />

        {/* Whiskers */}
        <line x1="68" y1="80" x2="58" y2="78" stroke="#b45309" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="68" y1="83" x2="58" y2="84" stroke="#b45309" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="92" y1="80" x2="102" y2="78" stroke="#b45309" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="92" y1="83" x2="102" y2="84" stroke="#b45309" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
