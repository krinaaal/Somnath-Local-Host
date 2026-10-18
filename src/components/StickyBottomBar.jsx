import React from 'react';
import { PhoneCall, Sparkles, MessageCircle } from 'lucide-react';

export default function StickyBottomBar({ onOpenLeadModal, isModalOpen }) {
  // If lead modal is open, completely hide sticky bar to prevent obstruction
  if (isModalOpen) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden pb-safe">
      <div className="mx-2 mb-2 p-2 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-amber-500/30 shadow-2xl shadow-black/80 flex items-center justify-between gap-2">
        {/* Quick Call Button */}
        <a
          href="tel:6359798896"
          className="flex-1 min-h-[46px] px-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-transform active:scale-95"
          aria-label="Call Host directly"
        >
          <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
          <span>Call Host</span>
        </a>

        {/* WhatsApp Direct Chat */}
        <a
          href="https://wa.me/916359798896?text=Namaskar%20Somnath%20Local%20Host!%20I%20want%20to%20plan%20a%20Saurashtra%20trip."
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 min-h-[46px] rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white flex items-center justify-center transition-transform active:scale-95 flex-shrink-0"
          aria-label="WhatsApp Host directly"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Primary Plan My Trip CTA */}
        <button
          type="button"
          onClick={onOpenLeadModal}
          className="flex-[1.6] min-h-[46px] px-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/30 transition-transform active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Plan My Trip</span>
        </button>
      </div>
    </div>
  );
}
