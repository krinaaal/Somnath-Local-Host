import React from 'react';
import TravelCar from './characters/TravelCar';
import AutoRickshaw from './characters/AutoRickshaw';
import TouristBus from './characters/TouristBus';
import { CheerfulSun, CartoonCloud, SwayingPalmTree, OceanWaves, CartoonBird, SomnathIllustration } from './characters/NatureElements';
import { Sparkles, MapPin, Compass, ArrowDown, PhoneCall } from 'lucide-react';

export default function Hero({ onOpenLeadModal, onScrollToJourney }) {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-b from-sky-50/80 via-white to-amber-50/20 overflow-hidden">
      {/* Floating Sky Elements */}
      <div className="absolute top-16 left-6 sm:left-12 pointer-events-none opacity-80 animate-cloud-drift-1">
        <CartoonCloud className="w-24 sm:w-32 h-12" />
      </div>
      <div className="absolute top-20 right-8 sm:right-24 pointer-events-none opacity-80 animate-cloud-drift-2">
        <CartoonCloud className="w-20 sm:w-28 h-10" />
      </div>
      <div className="absolute top-12 right-4 sm:right-12 z-0">
        <CheerfulSun className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>

      {/* Playful Floating Seagulls */}
      <div className="absolute top-24 left-1/4 pointer-events-none hidden sm:block">
        <CartoonBird className="w-7 h-4 text-sky-700" delay="0s" />
      </div>
      <div className="absolute top-28 left-[30%] pointer-events-none hidden sm:block">
        <CartoonBird className="w-5 h-3 text-sky-700" delay="1.5s" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* TEXT CONTENT (Centered & Friendly) */}
        <div className="text-center max-w-2xl mx-auto">
          {/* Welcome Tag */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs sm:text-sm font-extrabold mb-3 shadow-xs">
            <span>👋 Kem Chho!</span>
            <span className="text-amber-500">•</span>
            <span>Welcome to Saurashtra</span>
          </div>

          {/* Main Playful Heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.18]">
            Chalo, Somnath <br className="hidden xs:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600">
              Farva Jaiye!
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-3 text-base sm:text-xl font-bold text-slate-700 leading-snug">
            Somnath, Dwarka, Diu ke Sasan Gir — your friendly local travel buddy is here!
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium max-w-lg mx-auto">
            Experience joyful family pilgrimages and road trips with clean AC cabs, handpicked stays, and caring local guidance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col xs:flex-row items-center justify-center gap-3">
            {/* Primary CTA: Plan My Trip */}
            <button
              type="button"
              onClick={onOpenLeadModal}
              className="w-full xs:w-auto min-h-[48px] px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 active:scale-95 transition-all tap-bounce border border-orange-300"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Plan My Trip</span>
            </button>

            {/* Secondary CTA: Explore Places */}
            <button
              type="button"
              onClick={onScrollToJourney}
              className="w-full xs:w-auto min-h-[48px] px-6 py-3 rounded-2xl bg-white hover:bg-sky-50 border-2 border-sky-300 hover:border-sky-400 text-sky-700 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs active:scale-95 transition-all tap-bounce"
            >
              <Compass className="w-4 h-4 text-sky-600" />
              <span>Explore Places</span>
            </button>
          </div>
        </div>

        {/* PROMINENT MOBILE & DESKTOP ILLUSTRATION SCENERY */}
        <div className="mt-8 sm:mt-12 relative w-full rounded-3xl bg-gradient-to-b from-sky-100/60 via-amber-50/40 to-emerald-50/50 border-2 border-slate-200/80 p-4 sm:p-8 overflow-hidden shadow-sm">
          {/* Background Palm Trees */}
          <div className="absolute -left-2 bottom-8 z-10 opacity-90 scale-75 sm:scale-100">
            <SwayingPalmTree delay="0s" />
          </div>
          <div className="absolute right-0 bottom-8 z-10 opacity-80 scale-75 sm:scale-100">
            <SwayingPalmTree delay="1.2s" />
          </div>

          {/* Destination Markers Floating */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 z-20 relative">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 border border-orange-200 text-orange-800 text-[11px] font-bold shadow-xs">
              📍 1. Somnath
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 border border-sky-200 text-sky-800 text-[11px] font-bold shadow-xs">
              📍 2. Dwarka
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 border border-teal-200 text-teal-800 text-[11px] font-bold shadow-xs">
              📍 3. Diu Island
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 border border-emerald-200 text-emerald-800 text-[11px] font-bold shadow-xs">
              📍 4. Sasan Gir
            </span>
          </div>

          {/* Central Curved Road with Animated Vehicles */}
          <div className="relative h-44 sm:h-52 w-full flex items-center justify-center">
            {/* Curved Road SVG */}
            <svg viewBox="0 0 800 180" className="w-full h-full" preserveAspectRatio="none">
              {/* Road Asphalt */}
              <path
                d="M 10 130 C 200 40, 350 160, 500 80 C 650 10, 720 120, 790 90"
                fill="none"
                stroke="#64748b"
                strokeWidth="48"
                strokeLinecap="round"
              />
              {/* Road White Border Edges */}
              <path
                d="M 10 130 C 200 40, 350 160, 500 80 C 650 10, 720 120, 790 90"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="52"
                strokeLinecap="round"
                opacity="0.5"
              />
              <path
                d="M 10 130 C 200 40, 350 160, 500 80 C 650 10, 720 120, 790 90"
                fill="none"
                stroke="#64748b"
                strokeWidth="44"
                strokeLinecap="round"
              />
              {/* Yellow Dashed Center Line */}
              <path
                d="M 10 130 C 200 40, 350 160, 500 80 C 650 10, 720 120, 790 90"
                fill="none"
                stroke="#facc15"
                strokeWidth="4"
                strokeDasharray="16 12"
                strokeLinecap="round"
              />
            </svg>

            {/* VEHICLE 1: Primary Cartoon Travel Car */}
            <div className="absolute left-[38%] top-[25%] sm:top-[28%] -translate-x-1/2 z-20">
              <TravelCar className="w-24 sm:w-32 h-16 sm:h-20" moving={true} />
            </div>

            {/* VEHICLE 2: Supporting Indian Auto-Rickshaw */}
            <div className="absolute left-[12%] bottom-[15%] z-20 hidden xs:block">
              <AutoRickshaw className="w-20 sm:w-24 h-16 sm:h-18" moving={true} />
            </div>

            {/* VEHICLE 3: Supporting Tourist Mini Bus */}
            <div className="absolute right-[10%] top-[10%] z-20 hidden sm:block">
              <TouristBus className="w-24 sm:w-28 h-16 sm:h-18" moving={true} />
            </div>
          </div>

          {/* Gentle Coastal Blue Waves at bottom */}
          <div className="mt-2 -mx-4 sm:-mx-8">
            <OceanWaves className="w-full h-8 sm:h-10" />
          </div>
        </div>

        {/* Scroll Indicator Prompt */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={onScrollToJourney}
            className="inline-flex flex-col items-center gap-1 text-slate-500 hover:text-orange-500 transition-colors tap-bounce"
          >
            <span className="text-xs font-bold">Scroll down to start the road trip</span>
            <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center animate-bounce">
              <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
