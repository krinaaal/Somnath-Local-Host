import React from 'react';
import TravelCar from './characters/TravelCar';
import GirLion from './characters/GirLion';
import { CheerfulSun, CartoonCloud } from './characters/NatureElements';
import { PhoneCall, MessageCircle, Sparkles, RotateCcw } from 'lucide-react';

export default function ConversionSection({ onOpenContact, onExploreAgain }) {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-amber-50/70 via-sky-50/50 to-white border-2 border-amber-200/80 p-6 sm:p-12 text-center relative shadow-sm overflow-hidden">
          {/* Playful Floating Background Elements */}
          <div className="absolute top-4 left-6 pointer-events-none opacity-80 hidden sm:block">
            <CartoonCloud className="w-20 h-10" />
          </div>
          <div className="absolute top-4 right-8 pointer-events-none opacity-80 hidden sm:block">
            <CheerfulSun className="w-12 h-12" />
          </div>

          {/* Friendly Mascot Duo (Car + Lion) */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <TravelCar className="w-24 sm:w-28 h-16 sm:h-18" moving={true} />
            <div className="hidden xs:block">
              <GirLion className="w-20 sm:w-24 h-20 sm:h-24" />
            </div>
          </div>

          {/* Heading strictly as specified */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-amber-300 text-amber-800 text-xs sm:text-sm font-extrabold mb-3 shadow-2xs">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Local Buddy Ready To Help</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Your Local Journey Starts Here!
          </h2>

          <p className="mt-3 text-base sm:text-xl font-bold text-slate-700 max-w-xl mx-auto leading-relaxed">
            Somnath, Dwarka, Diu ke Sasan Gir — let your local host help you plan your journey.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium max-w-md mx-auto">
            Direct personal support from Somnath. No confusing booking engines, just friendly local advice.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="mt-8 flex flex-col xs:flex-row items-center justify-center gap-3">
            {/* Primary CTA: Contact Us */}
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full xs:w-auto min-h-[50px] px-8 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 active:scale-95 transition-all tap-bounce border border-orange-300"
            >
              <span>Contact Us</span>
              <Sparkles className="w-4 h-4 text-amber-200" />
            </button>

            {/* Direct WhatsApp Call */}
            <a
              href="https://wa.me/916359798896?text=Namaskar%20Somnath%20Local%20Host!%20Chalo%20Somnath%20Farva%20Jaiye!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full xs:w-auto min-h-[50px] px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs active:scale-95 transition-all tap-bounce"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            {/* Secondary CTA: Explore Again */}
            <button
              type="button"
              onClick={onExploreAgain}
              className="w-full xs:w-auto min-h-[50px] px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-bold text-sm flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all tap-bounce"
            >
              <RotateCcw className="w-4 h-4 text-slate-500" />
              <span>Explore Again</span>
            </button>
          </div>

          {/* Quick Direct Hotline Call */}
          <div className="mt-6 pt-4 border-t border-amber-200/60 inline-flex items-center gap-2 text-xs font-bold text-slate-600">
            <PhoneCall className="w-4 h-4 text-orange-500" />
            <span>Prefer calling directly? Dial: </span>
            <a href="tel:6359798896" className="font-mono text-slate-900 underline hover:text-orange-600">
              6359798896
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
