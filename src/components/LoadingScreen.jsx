import React, { useState, useEffect } from 'react';
import TravelCar from './characters/TravelCar';
import { CheerfulSun, CartoonCloud } from './characters/NatureElements';

export default function LoadingScreen({ onFinish }) {
  const [step, setStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      onFinish && onFinish();
      return;
    }

    // Sequence:
    // 0ms: Car starts moving on curved road
    // 400ms: Destination tags appear
    // 800ms: Somnath Local Host brand reveals
    // 1300ms: Fade out & finish
    const t1 = setTimeout(() => setStep(1), 350);
    const t2 = setTimeout(() => setStep(2), 750);
    const t3 = setTimeout(() => setFadeOut(true), 1300);
    const t4 = setTimeout(() => onFinish && onFinish(), 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative w-full max-w-sm flex flex-col items-center text-center">
        {/* Sky Elements */}
        <div className="absolute -top-12 right-6">
          <CheerfulSun className="w-14 h-14" />
        </div>
        <div className="absolute -top-8 left-4">
          <CartoonCloud className="w-16 h-8" />
        </div>

        {/* Animated Character Vehicle on Curved Road */}
        <div className="relative w-full h-24 my-2 flex items-center justify-center overflow-hidden">
          {/* Animated Road Track */}
          <svg viewBox="0 0 300 60" className="w-full h-full" fill="none">
            <path
              d="M10 45 Q 80 15, 150 40 T 290 30"
              stroke="#e2e8f0"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M10 45 Q 80 15, 150 40 T 290 30"
              stroke="#fbbf24"
              strokeWidth="3"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
          </svg>

          {/* Moving Travel Car */}
          <div className="absolute top-2 animate-car-bounce transition-transform duration-1000 ease-out"
            style={{
              transform: step === 0 ? 'translateX(-80px)' : step === 1 ? 'translateX(0px)' : 'translateX(70px)'
            }}
          >
            <TravelCar className="w-20 h-14" />
          </div>
        </div>

        {/* Destination Markers pop in */}
        <div className="flex items-center justify-center gap-1.5 my-3">
          {['Somnath', 'Dwarka', 'Diu', 'Sasan Gir'].map((dest, i) => (
            <span
              key={dest}
              className={`text-[11px] font-bold px-2 py-0.5 rounded-full transition-all duration-300 ${
                step >= 1
                  ? 'bg-amber-100 text-amber-800 scale-100 opacity-100'
                  : 'scale-75 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              📍 {dest}
            </span>
          ))}
        </div>

        {/* Brand reveal */}
        <div className={`transition-all duration-500 mt-2 ${step >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
          <div className="flex items-center justify-center gap-2 mb-1">
            <img src="/images/logo.webp" alt="Logo" className="w-8 h-8 rounded-full border border-amber-300 shadow-sm" />
            <h2 className="text-xl font-black text-slate-800 tracking-tight">
              Somnath <span className="text-amber-500">Local Host</span>
            </h2>
          </div>
          <p className="text-xs font-semibold text-emerald-600">
            Chalo, Somnath Farva Jaiye! ✨
          </p>
        </div>

        {/* Instant Skip button for accessibility */}
        <button
          type="button"
          onClick={() => onFinish && onFinish()}
          className="mt-6 text-xs text-slate-400 hover:text-slate-600 underline font-medium"
        >
          Skip into trip →
        </button>
      </div>
    </div>
  );
}
