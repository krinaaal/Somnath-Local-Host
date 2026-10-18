import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector({ variant = 'default', className = '' }) {
  const { currentLangObj, openLanguagePicker, language } = useLanguage();

  const langPrefix =
    language === 'gu'
      ? 'ભાષા:'
      : language === 'hi'
      ? 'भाषा:'
      : language === 'mr'
      ? 'भाषा:'
      : 'Lang:';

  if (variant === 'compact') {
    return (
      <button
        type="button"
        onClick={openLanguagePicker}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-50/90 border border-amber-300 hover:border-orange-500 hover:bg-amber-100 text-slate-800 text-xs font-black transition-all tap-bounce cursor-pointer shadow-2xs ${className}`}
        aria-label="Change Language / ભાષા બદલો / भाषा बदलें"
        title="Change Language / ભાષા બદલો"
      >
        <Globe className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
        <span className="text-[11px] font-bold text-slate-700">{langPrefix}</span>
        <span className="font-black text-xs text-orange-600 bg-white/80 px-1.5 py-0.5 rounded-md border border-amber-200/60">
          {currentLangObj.label}
        </span>
        <ChevronDown className="w-3 h-3 text-slate-500 flex-shrink-0" />
      </button>
    );
  }

  if (variant === 'drawer') {
    return (
      <button
        type="button"
        onClick={openLanguagePicker}
        className={`w-full py-2.5 px-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 text-slate-800 font-extrabold text-xs flex items-center justify-between tap-bounce cursor-pointer ${className}`}
      >
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-orange-500" />
          <span>Language / ભાષા / भाषा:</span>
        </div>
        <div className="flex items-center gap-1.5 font-black text-orange-600 bg-orange-50 px-2.5 py-1 rounded-xl border border-orange-200">
          <span>{currentLangObj.label}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={openLanguagePicker}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white border border-slate-200 hover:border-orange-400 hover:bg-orange-50/40 text-slate-800 text-xs font-black transition-all shadow-2xs tap-bounce cursor-pointer ${className}`}
      aria-label="Select Language"
    >
      <Globe className="w-3.5 h-3.5 text-orange-500" />
      <span className="text-[11px] text-slate-600 font-bold">Language / ભાષા:</span>
      <span className="text-orange-600 font-black bg-orange-50 px-1.5 py-0.5 rounded-md border border-orange-200">
        {currentLangObj.label}
      </span>
      <ChevronDown className="w-3 h-3 text-slate-400" />
    </button>
  );
}
