import React from 'react';
import { Check, Globe, X } from 'lucide-react';
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
      // If first time and user closes without choosing, save default
      setLanguage('hi');
    } else {
      setIsLangModalOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-scale-up"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lang-modal-title"
      >
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-amber-600 p-5 text-white relative">
          {!isFirstTime && (
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-black tracking-wider uppercase text-amber-100">
              {isFirstTime ? 'Welcome to Somnath Local Host' : 'Select Language'}
            </span>
          </div>

          <h3 id="lang-modal-title" className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
            {isFirstTime ? 'अपनी भाषा चुनें • આપની ભાષા પસંદ કરો' : 'Choose Your Language'}
          </h3>
          <p className="text-xs text-amber-100 font-semibold mt-1">
            Pick your language to explore Somnath, Dwarka, Diu & Gir
          </p>
        </div>

        {/* Language Options List */}
        <div className="p-5 space-y-2.5">
          {languages.map((lang) => {
            const isSelected = language === lang.id;
            return (
              <button
                key={lang.id}
                type="button"
                onClick={() => setLanguage(lang.id)}
                className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all tap-bounce ${
                  isSelected
                    ? 'border-orange-500 bg-orange-50/70 shadow-xs ring-2 ring-orange-400/20'
                    : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50/80 bg-white'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-2xl">{lang.flag}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-black text-slate-900">
                        {lang.label}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        ({lang.englishName})
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                      {lang.subtitle}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-orange-500 text-white' : 'border border-slate-300'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="px-5 pb-5 pt-1 text-center">
          <p className="text-[11px] text-slate-400 font-medium">
            💡 You can change this language anytime from the menu.
          </p>
        </div>
      </div>
    </div>
  );
}
