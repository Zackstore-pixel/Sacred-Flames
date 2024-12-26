import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, Globe } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from './TranslationContext';

export default function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { t } = useTranslation();
  
  return (
    <header className="w-full">
      <div className="bg-sage-600 text-white text-center py-2">
        <p className="text-sm font-medium">{t('freeShipping')}</p>
      </div>
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-serif font-bold text-gray-800">
              Sacred Flames
            </h1>
            
            <div className="hidden md:flex space-x-6">
              <a href="/about" className="text-gray-600 hover:text-gray-800">{t('about')}</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-800">{t('contact')}</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
            >
              <Globe className="w-5 h-5" />
            </button>
            {isLanguageOpen && <LanguageSelector />}
            
            <div className="hidden md:flex items-center">
              <input
                type="search"
                placeholder={t('searchPlaceholder')}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500"
              />
              <Search className="w-5 h-5 text-gray-400 -ml-8" />
            </div>
            
            <button className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-sage-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}