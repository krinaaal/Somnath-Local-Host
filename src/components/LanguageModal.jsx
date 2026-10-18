import React from 'react';
import { Check, Globe, X, Volume2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageModal() {
  const {
    language,
    setLanguage,
    isFirstTimeModalOpen,
    setIsFirstTimeModalOpen,
    isLangModalOpen,
    setIsLangModalOpen,
    languages,
  } = useLanguage();

  const isOpen = isFirstTimeModalOpen || isLangModalOpen;
  const isFirstTime = isFirstTimeModalOpen;

  if (!isOpen) return null;

  const handleClose = () => {
    if (isFirstTime) {
      // Default to Hindi for pan-India visitors until chosen
      setLanguage('hi', false);
    } else {
      setIsLangModalOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-slate-900/65 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-lg bg-white rounded-3xl sm:rounded-4xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-scale-up flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lang-modal-title"
      >
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-amber-600 p-4 sm:p-5 text-white relative flex-shrink-0">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer tap-bounce"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span className="text-[11px] font-black tracking-wider uppercase text-amber-100">
              SHREE SOMNATH LOCAL HOST • YATRA GUIDE
            </span>
          </div>

          <h3 id="lang-modal-title" className="text-lg sm:text-2xl font-black tracking-tight leading-snug">
            Select Your Preferred Language
          </h3>
          <p className="text-xs text-amber-100 font-semibold mt-0.5 flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 inline text-amber-200" />
            <span>Gentle audio welcome will greet you in your chosen language</span>
          </p>
        </div>

        {/* 10 Indian Languages Scrollable List */}
        <div className="p-3.5 sm:p-5 overflow-y-auto max-h-[62vh] space-y-2 divide-y divide-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {languages.map((lang) => {
              const isSelected = language === lang.id;
              // Clean typography badges instead of confusing emojis
              const badgeMap = {
                gu: 'ગુ',
                hi: 'हिं',
                mr: 'म',
                raj: 'रा',
                en: 'EN',
                bn: 'বা',
                te: 'తె',
                ta: 'த',
                kn: 'ಕ',
                pa: 'ਪੰ',
              };
              const scriptBadge = badgeMap[lang.id] || lang.id.toUpperCase();

              return (
                <button
                  key={lang.id}
                  type="button"
                  onClick={() => setLanguage(lang.id, true)}
                  className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all tap-bounce cursor-pointer group ${
                    isSelected
                      ? 'border-orange-500 bg-orange-50/80 shadow-xs ring-2 ring-orange-400/25'
                      : 'border-slate-200 hover:border-amber-400 hover:bg-amber-50/40 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`w-9 h-9 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-orange-500 text-white shadow-xs'
                          : 'bg-amber-100/70 border border-amber-300/80 text-amber-900 group-hover:bg-amber-200'
                      }`}
                    >
                      {scriptBadge}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-sm font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                          {lang.label}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">
                          ({lang.englishName})
                        </span>
                      </div>
                      <p className="text-[10px] font-semibold text-slate-500 truncate mt-0.5">
                        {lang.state}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                      isSelected ? 'bg-orange-500 text-white' : 'border border-slate-300 group-hover:border-amber-400'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-4 py-3 bg-slate-50/80 border-t border-slate-100 text-center flex-shrink-0">
          <p className="text-[11px] text-slate-500 font-medium flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>
              {language === 'gu'
                ? 'તમે ઉપર આપેલા બટન (ભાષા / Language) પરથી ગમે ત્યારે ભાષા બદલી શકો છો.'
                : language === 'hi'
                ? 'आप ऊपर दिए गए बटन (भाषा / Language) से किसी भी समय भाषा बदल सकते हैं।'
                : language === 'mr'
                ? 'तुम्ही वरील बटणावरून (भाषा / Language) कधीही भाषा बदलू शकता.'
                : 'You can change the language anytime via the top bar button (Language / ભાષા).'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
