import React from 'react';
import { PhoneCall, Sparkles, MessageCircle } from 'lucide-react';

export default function StickyBottomBar({ onOpenLeadModal, isModalOpen }) {
  if (isModalOpen) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden pb-safe">
      <div className="mx-3 mb-2 p-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center justify-between gap-2">
        {/* Call Host Button */}
        <a
          href="tel:6359798896"
          className="flex-1 min-h-[46px] px-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-black flex items-center justify-center gap-1.5 transition-transform active:scale-95"
          aria-label="Call Host directly"
        >
          <PhoneCall className="w-3.5 h-3.5 text-orange-500" />
          <span>Call Host</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/916359798896?text=Namaskar%20Somnath%20Local%20Host!%20Chalo%20Somnath%20Farva%20Jaiye!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 min-h-[46px] rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-transform active:scale-95 flex-shrink-0 shadow-xs"
          aria-label="WhatsApp directly"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Primary Plan My Trip */}
        <button
          type="button"
          onClick={onOpenLeadModal}
          className="flex-[1.5] min-h-[46px] px-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-xs transition-transform active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
          <span>Plan My Trip</span>
        </button>
      </div>
    </div>
  );
}
