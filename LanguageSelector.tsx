import React from 'react';
import { useTranslation } from './TranslationContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-2 z-50">
      <button
        onClick={() => setLanguage('en')}
        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 rounded ${
          language === 'en' ? 'text-sage-600' : 'text-gray-700'
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 rounded ${
          language === 'fr' ? 'text-sage-600' : 'text-gray-700'
        }`}
      >
        Français
      </button>
      <button
        onClick={() => setLanguage('ar')}
        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 rounded ${
          language === 'ar' ? 'text-sage-600' : 'text-gray-700'
        }`}
      >
        العربية
      </button>
    </div>
  );
}