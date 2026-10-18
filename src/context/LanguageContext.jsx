import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { TRANSLATIONS, LANGUAGES } from '../data/translations';
import { playWelcomeVoice, stopWelcomeVoice } from '../utils/welcomeVoice';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'somnath_preferred_lang';
const FIRST_VISIT_KEY = 'somnath_lang_selected_v2';
const VALID_LANGS = LANGUAGES.map((l) => l.id);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('gu'); // default warm Saurashtra mother tongue
  const [isFirstTimeModalOpen, setIsFirstTimeModalOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  
  // Voice state
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  const [currentVoiceScript, setCurrentVoiceScript] = useState('');
  const [currentVoiceLang, setCurrentVoiceLang] = useState('gu');
  const timerRef = useRef(null);

  // Initialize saved state on startup
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY);
      if (savedLang && VALID_LANGS.includes(savedLang)) {
        setLanguageState(savedLang);
      }
    } catch {
      // Storage access fallback
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      stopWelcomeVoice();
    };
  }, []);

  /**
   * Called by App.jsx after the loading screen finishes (3-5s) and the home screen appears.
   * Comfortably and gently shows the first-time popup after a 1000ms delay.
   */
  const triggerFirstTimePopupAfterDelay = (delayMs = 1000) => {
    try {
      const hasChosen = localStorage.getItem(FIRST_VISIT_KEY);
      if (!hasChosen) {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setIsFirstTimeModalOpen(true);
        }, delayMs);
      }
    } catch {
      // Fallback
    }
  };

  /**
   * User selects language:
   * 1. Updates state & persists in localStorage
   * 2. Plays warm, polite female welcome voice in their language
   */
  const selectLanguage = (newLang, playVoiceGreeting = true) => {
    if (!VALID_LANGS.includes(newLang)) return;
    setLanguageState(newLang);

    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      localStorage.setItem(FIRST_VISIT_KEY, 'true');
    } catch {
      // Ignore storage errors
    }

    setIsFirstTimeModalOpen(false);
    setIsLangModalOpen(false);

    if (playVoiceGreeting) {
      setCurrentVoiceLang(newLang);
      playWelcomeVoice(newLang, {
        onStart: ({ script }) => {
          setIsVoicePlaying(true);
          setCurrentVoiceScript(script);
        },
        onEnd: () => {
          setIsVoicePlaying(false);
        },
        onError: () => {
          setIsVoicePlaying(false);
        }
      });
    }
  };

  const handleStopVoice = () => {
    stopWelcomeVoice();
    setIsVoicePlaying(false);
  };

  const handleReplayVoice = () => {
    selectLanguage(language, true);
  };

  const t = (key) => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS['gu']?.[key] || TRANSLATIONS['hi']?.[key] || key;
  };

  const currentLangObj = LANGUAGES.find((l) => l.id === language) || LANGUAGES[0];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: selectLanguage,
        isFirstTimeModalOpen,
        setIsFirstTimeModalOpen,
        isLangModalOpen,
        setIsLangModalOpen,
        openLanguagePicker: () => setIsLangModalOpen(true),
        triggerFirstTimePopupAfterDelay,
        t,
        currentLangObj,
        languages: LANGUAGES,
        // Voice controls
        isVoicePlaying,
        currentVoiceScript,
        currentVoiceLang,
        stopVoice: handleStopVoice,
        replayVoice: handleReplayVoice,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
