import React, { useState, useEffect } from 'react';
import { Menu, PhoneCall, Sparkles, Database } from 'lucide-react';

export default function Header({ onOpenMobileMenu, onOpenLeadModal, onOpenAdminLeads }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20 shadow-lg py-2.5'
          : 'bg-gradient-to-b from-slate-950/90 to-transparent py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-amber-400/80 shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
            <img
              src="/images/logo.webp"
              alt="Shree Somnath Local Host Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-amber-400 transition-colors">
              Somnath <span className="text-amber-400">Local Host</span>
            </span>
            <span className="text-[10px] text-slate-300/80 font-medium tracking-wider hidden xs:block">
              Your Journey, Our Responsibility
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-300">
          <a href="#" className="hover:text-amber-400 transition-colors">Home</a>
          <a href="#destinations" className="hover:text-amber-400 transition-colors">Destinations</a>
          <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
          <a href="#packages" className="hover:text-amber-400 transition-colors">Tour Packages</a>
          <a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a>
          <button
            type="button"
            onClick={onOpenAdminLeads}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 px-2 py-1 rounded bg-slate-900 border border-slate-800"
          >
            <Database className="w-3.5 h-3.5 text-amber-400" />
            <span>Leads DB</span>
          </button>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Hotline Call Button */}
          <a
            href="tel:6359798896"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-amber-400 text-amber-300 font-bold text-xs sm:text-sm transition-all hover:bg-slate-800 tap-bounce"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono">6359798896</span>
          </a>

          {/* Primary CTA (Desktop / Tablet) */}
          <button
            type="button"
            onClick={onOpenLeadModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-transform active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Plan My Trip</span>
          </button>

          {/* Mobile Hamburger Toggle (>= 48px tap target) */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="md:hidden w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 flex items-center justify-center hover:border-amber-500/40 hover:text-amber-400 transition-colors tap-bounce"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
