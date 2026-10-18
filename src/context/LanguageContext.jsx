import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS, LANGUAGES } from '../data/translations';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'somnath_preferred_lang';
const FIRST_VISIT_KEY = 'somnath_lang_selected_v1';

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('hi');
  const [isFirstTimeModalOpen, setIsFirstTimeModalOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY);
      const hasChosenBefore = localStorage.getItem(FIRST_VISIT_KEY);

      if (savedLang && ['hi', 'gu', 'en', 'mr'].includes(savedLang)) {
        setLanguageState(savedLang);
        setIsFirstTimeModalOpen(false);
      } else if (!hasChosenBefore) {
        // First time visitor: show language selection prompt
        setIsFirstTimeModalOpen(true);
      }
    } catch {
      // Fallback for private mode
    }
  }, []);

  const selectLanguage = (newLang) => {
    if (!['hi', 'gu', 'en', 'mr'].includes(newLang)) return;
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      localStorage.setItem(FIRST_VISIT_KEY, 'true');
    } catch {
      // Ignore storage errors
    }
    setIsFirstTimeModalOpen(false);
    setIsLangModalOpen(false);
  };

  const t = (key) => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS['hi']?.[key] || key;
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
        t,
        currentLangObj,
        languages: LANGUAGES,
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
