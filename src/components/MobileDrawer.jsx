import React from 'react';
import { X, Home, MapPin, Compass, Briefcase, PhoneCall, Sparkles, MessageCircle, ChevronRight } from 'lucide-react';

export default function MobileDrawer({ isOpen, onClose, onOpenLeadModal, onScrollToJourney }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 sm:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs animate-in fade-in"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 w-[82vw] max-w-xs bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between p-5 z-10 animate-in slide-in-from-right duration-300">
        <div>
          {/* Brand Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <img src="/images/logo.webp" alt="Logo" className="w-8 h-8 rounded-full border border-amber-300" />
              <div>
                <div className="font-black text-sm text-slate-900">Somnath Local Host</div>
                <div className="text-[10px] text-emerald-600 font-extrabold">Aapka Local Travel Buddy • Har Har Mahadev</div>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center tap-bounce"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="mt-5 space-y-1">
            <a
              href="#"
              onClick={onClose}
              className="flex items-center justify-between px-3.5 py-3 rounded-2xl text-sm font-extrabold text-slate-800 hover:bg-amber-50 hover:text-orange-600 transition-colors tap-bounce"
            >
              <div className="flex items-center gap-3">
                <Home className="w-4 h-4 text-orange-500" />
                <span>Home</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onScrollToJourney();
              }}
              className="w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-sm font-extrabold text-slate-800 hover:bg-sky-50 hover:text-sky-600 transition-colors tap-bounce"
            >
              <div className="flex items-center gap-3">
                <Compass className="w-4 h-4 text-sky-500" />
                <span>सौराष्ट्र यात्रा मार्ग (The Road Trip)</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </button>

            <a
              href="#services"
              onClick={onClose}
              className="flex items-center justify-between px-3.5 py-3 rounded-2xl text-sm font-extrabold text-slate-800 hover:bg-emerald-50 hover:text-emerald-600 transition-colors tap-bounce"
            >
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-emerald-500" />
                <span>यात्रा सुविधाएं (Services)</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </a>

            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center justify-between px-3.5 py-3 rounded-2xl text-sm font-extrabold text-slate-800 hover:bg-amber-50 hover:text-orange-600 transition-colors tap-bounce"
            >
              <div className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-amber-500" />
                <span>लोकल होस्ट संपर्क (Contact)</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </a>
          </div>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="space-y-2.5 pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenLeadModal();
            }}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-xs tap-bounce"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>यात्रा प्लान करें (Plan Trip)</span>
          </button>

          <a
            href="tel:6359798896"
            className="w-full py-3 px-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 font-extrabold text-xs flex items-center justify-center gap-2 tap-bounce"
          >
            <PhoneCall className="w-3.5 h-3.5 text-orange-500" />
            <span>कॉल करें: 6359798896</span>
          </a>

          <a
            href="https://wa.me/916359798896?text=Namaskar%20Somnath%20Local%20Host!%20Chalo%20Somnath%20Darshan%20karne%20Chalein!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-2xl bg-emerald-50 text-emerald-800 font-extrabold text-xs flex items-center justify-center gap-2 tap-bounce"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp पर बात करें</span>
          </a>
        </div>
      </div>
    </div>
  );
}
