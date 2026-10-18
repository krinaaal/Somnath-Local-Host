import React, { useState, useEffect } from 'react';
import { Menu, PhoneCall, Sparkles } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

export default function Header({ onOpenMobileMenu, onOpenLeadModal, onScrollToJourney }) {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-2 sm:py-2.5'
          : 'bg-white/90 backdrop-blur-xs py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo & Friendly Name */}
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 group">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-amber-400 shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
            <img
              src="/images/logo.webp"
              alt="Somnath Local Host Logo"
              className="w-full h-full object-cover"
              width="44"
              height="44"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm sm:text-lg tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
              Somnath <span className="text-orange-500">Local Host</span>
            </span>
            <span className="text-[10px] text-emerald-600 font-extrabold tracking-wide hidden xs:block">
              {t('tagline')}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-extrabold text-slate-700">
          <a href="#" className="hover:text-orange-500 transition-colors">{t('navHome')}</a>
          <button
            type="button"
            onClick={onScrollToJourney}
            className="hover:text-orange-500 transition-colors cursor-pointer"
          >
            {t('navRoute')}
          </button>
          <a href="#stations" className="hover:text-orange-500 transition-colors">
            {t('navStations')}
          </a>
          <a href="#services" className="hover:text-orange-500 transition-colors">{t('navServices')}</a>
          <a href="#reviews" className="hover:text-orange-500 transition-colors">{t('navReviews')}</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">{t('navContact')}</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Selector Button */}
          <LanguageSelector variant="compact" />

          {/* Direct Hotline */}
          <a
            href="tel:6359798896"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs transition-colors hover:bg-amber-100 tap-bounce"
          >
            <PhoneCall className="w-3.5 h-3.5 text-orange-500" />
            <span className="font-mono">6359798896</span>
          </a>

          {/* Primary CTA */}
          <button
            type="button"
            onClick={onOpenLeadModal}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs sm:text-sm shadow-xs transition-transform active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('planTrip')}</span>
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-100 transition-colors tap-bounce"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
