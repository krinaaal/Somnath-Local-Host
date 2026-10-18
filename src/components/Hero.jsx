import React from 'react';
import { PhoneCall, Sparkles, Shield, Clock, HeartHandshake, Calendar, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenLeadModal, onSelectQuickDestination }) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-[88vh] flex flex-col justify-end sm:justify-center overflow-hidden pt-20 pb-10 sm:py-24">
      {/* ART-DIRECTED RESPONSIVE BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile specific portrait crops */}
          <source
            media="(max-width: 640px)"
            srcSet="/images/hero-mobile-480.webp 480w, /images/hero-mobile-750.webp 750w, /images/hero-mobile.webp 941w"
            sizes="100vw"
          />
          {/* Tablet & Desktop widescreen crops */}
          <source
            media="(min-width: 641px)"
            srcSet="/images/hero-desktop-1200.webp 1200w, /images/hero-desktop.webp 1920w"
            sizes="100vw"
          />
          <img
            src="/images/hero-mobile.webp"
            alt="Shree Somnath Local Host - Personalized Travel Partner"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-top sm:object-center transform scale-105 transition-transform duration-1000"
          />
        </picture>

        {/* Cinematic Multi-stop Dark Scrim Gradient for Ultra-Readable Typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 sm:via-slate-950/60 to-slate-950/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/40 to-slate-950/80" />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl sm:max-w-3xl">
          {/* Heritage Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/40 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4 shadow-lg">
            <span className="text-amber-400">🔱</span>
            <span className="font-semibold">नमः पार्वती पतये, हर हर महादेव !</span>
            <span className="hidden sm:inline text-slate-400">• Somnath Local Host</span>
          </div>

          {/* Core Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
            “बस एक कॉल... <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              बाकी पूरी व्यवस्था हमारी।
            </span>”
          </h1>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-slate-200/90 leading-relaxed font-medium max-w-xl drop-shadow">
            Your verified local companion in Somnath. Private AC Cabs, handpicked walking-distance hotels, VIP Darshan guidance, and 24x7 on-ground assistance across Somnath, Sasan Gir, Diu & Dwarka.
          </p>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 sm:mt-6 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-sm border border-slate-800 px-2.5 py-1 rounded-lg">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Verified Local Host</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-sm border border-slate-800 px-2.5 py-1 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>24x7 Assistance</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-sm border border-slate-800 px-2.5 py-1 rounded-lg">
              <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
              <span>Come as Guest, Leave as Family</span>
            </div>
          </div>

          {/* HERO CALL-TO-ACTION BUTTONS */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Primary Plan My Trip CTA */}
            <button
              type="button"
              onClick={onOpenLeadModal}
              className="min-h-[52px] px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-95 transition-all tap-bounce border border-amber-300"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Plan My Trip (Free Quote)</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Direct Phone / WhatsApp Button */}
            <a
              href="tel:6359798896"
              className="min-h-[52px] px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700 hover:border-amber-500/50 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 backdrop-blur-md transition-all tap-bounce active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Call: 6359798896</span>
            </a>
          </div>

          {/* Quick Destination Pill Pickers (1-tap interaction) */}
          <div className="mt-6 pt-4 border-t border-slate-800/60">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Popular Quick Routes:
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['Somnath Darshan', 'Somnath + Sasan Gir', 'Somnath + Diu', 'Complete Saurashtra'].map((route) => (
                <button
                  key={route}
                  type="button"
                  onClick={() => onSelectQuickDestination && onSelectQuickDestination(route)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900/70 hover:bg-amber-500/20 border border-slate-800 hover:border-amber-500/40 text-xs text-slate-300 hover:text-amber-300 transition-colors tap-bounce"
                >
                  {route}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
