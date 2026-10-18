import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector({ variant = 'default', className = '' }) {
  const { currentLangObj, openLanguagePicker } = useLanguage();

  if (variant === 'compact') {
    return (
      <button
        type="button"
        onClick={openLanguagePicker}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-slate-800 text-xs font-black transition-all tap-bounce ${className}`}
        aria-label="Change Language"
        title="Change Language"
      >
        <span className="text-sm">{currentLangObj.flag}</span>
        <span className="hidden xs:inline">{currentLangObj.label}</span>
        <ChevronDown className="w-3 h-3 text-slate-500" />
      </button>
    );
  }

  if (variant === 'drawer') {
    return (
      <button
        type="button"
        onClick={openLanguagePicker}
        className={`w-full py-2.5 px-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 text-slate-800 font-extrabold text-xs flex items-center justify-between tap-bounce ${className}`}
      >
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-orange-500" />
          <span>Language / ભાષા:</span>
        </div>
        <div className="flex items-center gap-1.5 font-black text-orange-600">
          <span>{currentLangObj.flag}</span>
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
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white border border-slate-200 hover:border-orange-400 hover:bg-orange-50/40 text-slate-800 text-xs font-black transition-all shadow-2xs tap-bounce ${className}`}
      aria-label="Select Language"
    >
      <Globe className="w-3.5 h-3.5 text-orange-500" />
      <span>{currentLangObj.flag}</span>
      <span>{currentLangObj.label}</span>
      <ChevronDown className="w-3 h-3 text-slate-400" />
    </button>
  );
}
