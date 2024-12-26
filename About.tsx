import React from 'react';
import { useTranslation } from '../components/TranslationContext';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif text-gray-800 mb-8">{t('aboutTitle')}</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">{t('aboutDescription')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <img
              src="https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6"
              alt="Candle making process"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1603006905003-be475563bc59"
              alt="Our products"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}