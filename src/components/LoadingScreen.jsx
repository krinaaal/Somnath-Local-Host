import React, { useState, useEffect } from 'react';
import StylizedCar3D from './cinematic/StylizedCar3D';
import { Compass, Sparkles } from 'lucide-react';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(15);
  const [step, setStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

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

    const t1 = setTimeout(() => setStep(1), 900);
    const t2 = setTimeout(() => setStep(2), 2000);
    const t3 = setTimeout(() => setFadeOut(true), 3300);
    const t4 = setTimeout(() => onFinish && onFinish(), 3700);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-gradient-to-b from-white via-amber-50/40 to-white flex flex-col items-center justify-center p-4 transition-opacity duration-400 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative w-full max-w-md flex flex-col items-center text-center">
        {/* Soft Ambient Glow in Background */}
        <div className="absolute -top-12 w-64 h-64 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

        {/* Top Badging */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[11px] font-black mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-spin-slow" />
          <span>સૌરાષ્ટ્ર તીર્થ યાત્રા શરૂ થઈ રહી છે...</span>
        </div>

        {/* Professional Highway Stage with Continuous Moving Road */}
        <div className="relative w-full max-w-sm h-36 flex flex-col items-center justify-end overflow-hidden rounded-2xl bg-gradient-to-b from-transparent via-slate-50/50 to-slate-100/80 border border-slate-200/60 p-2 shadow-inner">
          
          {/* Milestone Indicator on Highway */}
          <div className="absolute top-2 left-3 flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              {step === 0 ? '📍 સોમનાથ હાઇવે • 0 KM' : step === 1 ? '🚗 દ્વારકા-પોરબંદર કોસ્ટલ રૂટ' : '✨ પવિત્ર દર્શન યાત્રા'}
            </span>
          </div>

          {/* Luxury Executive Car firmly cruising on the tarmac */}
          <div className="relative z-10 mb-[-6px]">
            <StylizedCar3D className="w-48 sm:w-56 h-24 sm:h-28" moving={true} />
          </div>

          {/* Realistic Highway Tarmac Strip with Smooth Scrolling Centerline */}
          <div className="relative w-full h-8 bg-gradient-to-b from-slate-700 to-slate-900 rounded-lg overflow-hidden border-t-2 border-slate-600 shadow-md flex items-center">
            {/* Smooth Scrolling Dashed Yellow & White Highway Centerline */}
            <svg viewBox="0 0 360 16" className="w-full h-full" preserveAspectRatio="none">
              {/* Outer Shoulder Guides */}
              <line x1="0" y1="2" x2="360" y2="2" stroke="#64748b" strokeWidth="1" />
              <line x1="0" y1="14" x2="360" y2="14" stroke="#64748b" strokeWidth="1" />
              {/* Animated Continuous Center Divider */}
              <line
                x1="0"
                y1="8"
                x2="360"
                y2="8"
                stroke="#fbbf24"
                strokeWidth="2.5"
                strokeDasharray="20 16"
                className="animate-highway-scroll"
              />
            </svg>
          </div>
        </div>

        {/* Dynamic Progress Percentage & Odometer */}
        <div className="w-full max-w-xs mt-5">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1.5 px-0.5">
            <span className="flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
              <span>યાત્રા લોડિંગ...</span>
            </span>
            <span className="font-mono text-amber-800 font-black">{progress}%</span>
          </div>

          {/* Clean Rounded Progress Bar */}
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 rounded-full transition-all duration-100 ease-out shadow-xs"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Destination Route Markers pop in seamlessly */}
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
            />
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              Somnath Local Host
            </h2>
          </div>
          <p className="text-xs text-amber-700 font-bold">
            Chalo, Somnath Darshan karne Chalein! ✨
          </p>
        </div>

        {/* Quick Skip button */}
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
