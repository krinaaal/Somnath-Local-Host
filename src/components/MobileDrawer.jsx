import React from 'react';
import { X, Home, MapPin, Briefcase, PhoneCall, Sparkles, MessageCircle, Database, ChevronRight } from 'lucide-react';

export default function MobileDrawer({ isOpen, onClose, onOpenLeadModal, onOpenAdminLeads }) {
  if (!isOpen) return null;

  const navItems = [
    { label: 'Home', href: '#', icon: Home },
    { label: 'Destinations', href: '#destinations', icon: MapPin },
    { label: 'Services & Cabs', href: '#services', icon: Briefcase },
    { label: 'Tour Packages', href: '#packages', icon: Sparkles },
    { label: 'Why Local Host', href: '#why-us', icon: PhoneCall },
  ];

  return (
    <div className="fixed inset-0 z-50 sm:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 w-[82vw] max-w-xs bg-slate-900 border-l border-amber-500/20 shadow-2xl flex flex-col justify-between p-5 z-10 animate-in slide-in-from-right duration-300">
        <div>
          {/* Header & Brand */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <img src="/images/logo.webp" alt="Logo" className="w-8 h-8 rounded-full border border-amber-500/40" />
              <div>
                <div className="font-bold text-sm text-white">Somnath Local Host</div>
                <div className="text-[10px] text-amber-400 font-mono">Verified Local Partner</div>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center tap-bounce"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="mt-5 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 transition-colors tap-bounce"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-amber-400" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </a>
              );
            })}
          </div>

          {/* Admin Leads View Trigger */}
          <div className="mt-4 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenAdminLeads();
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-amber-300 hover:bg-slate-800/40"
            >
              <div className="flex items-center gap-2.5">
                <Database className="w-3.5 h-3.5 text-amber-400" />
                <span>View Saved Inquiries (Admin)</span>
              </div>
              <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-amber-400 font-mono">DB</span>
            </button>
          </div>
        </div>

        {/* Bottom Actions inside Drawer */}
        <div className="space-y-2.5 pt-4 border-t border-slate-800">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenLeadModal();
            }}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 tap-bounce"
          >
            <Sparkles className="w-4 h-4" />
            <span>Plan My Trip (Free Quote)</span>
          </button>

          <a
            href="tel:6359798896"
            className="w-full py-3 px-4 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 tap-bounce"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Call: 6359798896</span>
          </a>

          <div className="text-[10px] text-center text-slate-400 pt-1">
            Based in Somnath, Gujarat • 24x7 Support
          </div>
        </div>
      </div>
    </div>
  );
}
