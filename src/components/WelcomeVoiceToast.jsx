import React from 'react';
import { Volume2, VolumeX, RotateCcw, X, PhoneCall, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WelcomeVoiceToast() {
  const {
    isVoicePlaying,
    currentVoiceScript,
    stopVoice,
    replayVoice,
    currentLangObj,
  } = useLanguage();

  if (!isVoicePlaying && !currentVoiceScript) return null;

  return (
    <aside
      aria-label="Welcome Voice Message"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 max-w-sm w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-amber-300 ring-2 ring-amber-400/20 transition-all duration-300 animate-in slide-in-from-bottom-5"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isVoicePlaying
                ? 'bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-xs'
                : 'bg-amber-100 text-amber-800'
            }`}
          >
            {isVoicePlaying ? (
              <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <Volume2 className="w-3.5 h-3.5 relative" />
              </span>
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black text-slate-900">
                {isVoicePlaying ? 'સ્વાગત સંદેશ (Audio Playing)' : 'સ્વાગત સંદેશ (Welcome Note)'}
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-amber-100 text-amber-800 font-bold">
                {currentLangObj.flag} {currentLangObj.label}
              </span>
            </div>
            <span className="text-[10px] text-emerald-600 font-bold block">
              પ્રેમભર્યો ફીમેલ અવાજ • Somnath Local Host
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={stopVoice}
          className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Dismiss voice alert"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Loving Transcript snippet */}
      <p className="text-xs text-slate-700 leading-relaxed italic bg-amber-50/70 p-2.5 rounded-2xl border border-amber-200/60 mb-3">
        "{currentVoiceScript}"
      </p>

      {/* Control Actions */}
      <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100">
        <div className="flex items-center gap-1.5">
          {isVoicePlaying ? (
            <button
              type="button"
              onClick={stopVoice}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-black transition-all tap-bounce"
            >
              <VolumeX className="w-3.5 h-3.5 text-rose-500" />
              <span>અવાજ બંધ કરો (Mute)</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={replayVoice}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-[11px] font-black transition-all tap-bounce"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>ફરી સાંભળો (Replay)</span>
            </button>
          )}
        </div>

        <a
          href="tel:6359798896"
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-black transition-all tap-bounce"
        >
          <PhoneCall className="w-3 h-3" />
          <span>કૉલ કરો</span>
        </a>
      </div>
    </aside>
  );
}
