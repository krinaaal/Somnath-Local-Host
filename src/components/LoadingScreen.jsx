import React, { useState, useEffect } from 'react';
import { Sparkles, Sun } from 'lucide-react';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(15);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      onFinish && onFinish();
      return;
    }

    // Smooth progress counter from 15% to 100% over 3.7 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 70);

    const t1 = setTimeout(() => setStep(1), 1000);
    const t2 = setTimeout(() => setStep(2), 2200);
    const t3 = setTimeout(() => {
      onFinish && onFinish();
    }, 3700);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish]);

  return (
    <div
      className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-4 select-none"
    >
      <div className="relative w-full max-w-md flex flex-col items-center text-center">
        {/* Soft Golden Spiritual Halo Glow (Pure White Background Stays Steady) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-100/60 blur-3xl pointer-events-none" />

        {/* Sacred Badging */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-black mb-5 shadow-2xs">
          <Sparkles className="w-4 h-4 text-orange-500 animate-spin-slow" />
          <span>ॐ नमः शिवाय • प्रथम ज्योतिर्लिंग</span>
        </div>

        {/* UNIQUE SACRED AKHAND JYOT & DIVINE AURA (Replaces Car Animation) */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center my-2">
          {/* Concentric Divine Aura Rings */}
          <div className="absolute inset-2 rounded-full border border-amber-300/40 animate-ping opacity-40 pointer-events-none" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-8 rounded-full border-2 border-amber-400/30 animate-pulse pointer-events-none" />
          <div className="absolute inset-14 rounded-full bg-radial from-amber-200/40 via-orange-100/20 to-transparent blur-sm pointer-events-none" />

          {/* Majestic Sacred Temple Diya & Trishul SVG */}
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-lg relative z-10 overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Flame Radial Gradient */}
              <radialGradient id="flameInner" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#fef08a" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#dc2626" />
              </radialGradient>

              {/* Brass Temple Lamp Gradient */}
              <linearGradient id="brassLamp" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="30%" stopColor="#f59e0b" />
                <stop offset="70%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>

              {/* Golden Trishul Gradient */}
              <linearGradient id="goldTrishul" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            {/* Sacred Trishul Behind Flame */}
            <g opacity="0.85">
              {/* Central Trishul Spear */}
              <line x1="100" y1="30" x2="100" y2="115" stroke="url(#goldTrishul)" strokeWidth="3.5" strokeLinecap="round" />
              {/* Trishul Prongs */}
              <path
                d="M78 45 Q82 75, 100 80 Q118 75, 122 45"
                stroke="url(#goldTrishul)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M74 46 L78 38 L82 46 Z"
                fill="url(#goldTrishul)"
              />
              <path
                d="M118 46 L122 38 L126 46 Z"
                fill="url(#goldTrishul)"
              />
              <path
                d="M96 32 L100 20 L104 32 Z"
                fill="url(#goldTrishul)"
              />
              {/* Sacred Damru at center */}
              <polygon points="90,72 110,72 94,86 106,86" fill="url(#goldTrishul)" stroke="#78350f" strokeWidth="0.8" />
            </g>

            {/* Sacred Om Symbol in subtle golden light */}
            <text
              x="100"
              y="68"
              textAnchor="middle"
              fill="#d97706"
              fontSize="14"
              fontWeight="bold"
              fontFamily="serif"
              opacity="0.9"
            >
              ॐ
            </text>

            {/* Ornate Brass Lamp Stand (Akhand Jyot Diya) */}
            {/* Base Pedestal */}
            <ellipse cx="100" cy="165" rx="36" ry="7" fill="url(#brassLamp)" stroke="#78350f" strokeWidth="1" />
            <path d="M90 163 L95 142 H105 L110 163 Z" fill="url(#brassLamp)" stroke="#78350f" strokeWidth="0.8" />
            {/* Middle decorative ring */}
            <ellipse cx="100" cy="142" rx="14" ry="3.5" fill="url(#brassLamp)" stroke="#78350f" strokeWidth="0.8" />
            
            {/* Main Oil Bowl of Diya */}
            <path
              d="M60 135 C60 152, 140 152, 140 135 C140 128, 60 128, 60 135 Z"
              fill="url(#brassLamp)"
              stroke="#78350f"
              strokeWidth="1.2"
            />
            {/* Liquid Ghee Surface */}
            <ellipse cx="100" cy="133" rx="34" ry="5" fill="#f59e0b" opacity="0.85" />

            {/* Dancing Sacred Flame (Akhand Jyot) */}
            <g className="animate-pulse origin-[100px_130px]" style={{ animationDuration: '1.2s' }}>
              {/* Outer Amber Flame Aura */}
              <path
                d="M100 85 
                   C110 102, 118 116, 114 130 
                   C110 138, 90 138, 86 130 
                   C82 116, 90 102, 100 85 Z"
                fill="url(#flameInner)"
                opacity="0.95"
              />
              {/* Inner Bright Golden Core */}
              <path
                d="M100 96 
                   C106 108, 110 118, 108 127 
                   C105 133, 95 133, 92 127 
                   C90 118, 94 108, 100 96 Z"
                fill="#ffffff"
                opacity="0.9"
              />
              {/* Blue Base of Flame */}
              <ellipse cx="100" cy="129" rx="6" ry="2.5" fill="#38bdf8" opacity="0.85" />
            </g>
          </svg>
        </div>

        {/* Sacred Sanskrit Shloka */}
        <p className="text-xs sm:text-sm font-bold text-amber-900 tracking-wide mt-1 mb-2 font-serif">
          सौराष्ट्रदेशे विशदेऽतिरम्ये ज्योतिर्मयं सोमनाथम्
        </p>

        {/* Dynamic Journey Loading Progress Bar */}
        <div className="w-full max-w-xs mt-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1.5 px-0.5">
            <span className="flex items-center gap-1 text-slate-600">
              <Sun className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
              <span>Somnath Darshan Guide</span>
            </span>
            <span className="font-mono text-amber-800 font-black">{progress}%</span>
          </div>

          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 rounded-full transition-all duration-100 ease-out shadow-xs"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Destination Route Markers */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 my-3.5">
          {['Somnath', 'Dwarka', 'Diu', 'Sasan Gir'].map((dest, i) => (
            <span
              key={dest}
              className={`text-[11px] font-black px-2.5 py-0.5 rounded-full transition-all duration-300 ${
                step >= 1
                  ? 'bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs scale-100 opacity-100'
                  : 'bg-slate-100 text-slate-400 scale-95 opacity-60'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              📍 {dest}
            </span>
          ))}
        </div>

        {/* Brand reveal */}
        <div className={`transition-all duration-500 ${step >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
          <div className="flex items-center justify-center gap-2 mb-0.5">
            <img
              src="/images/logo.webp"
              alt="Logo"
              className="w-8 h-8 rounded-full border border-amber-300 shadow-xs"
              width="32"
              height="32"
              loading="eager"
              decoding="async"
            />
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              Shree Somnath Local Host
            </h2>
          </div>
          <p className="text-xs text-amber-700 font-bold">
            Har Har Mahadev • Saurashtra Darshan Yatra ✨
          </p>
        </div>

        {/* Skip button */}
        <button
          type="button"
          onClick={() => onFinish && onFinish()}
          className="mt-4 text-[11px] text-slate-400 hover:text-slate-600 underline transition-colors cursor-pointer"
        >
          Skip into trip
        </button>
      </div>
    </div>
  );
}
