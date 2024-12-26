import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '../components/TranslationContext';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif text-gray-800 mb-8">{t('contactTitle')}</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-sage-600" />
              <div>
                <h3 className="font-medium text-gray-900">{t('contactEmail')}</h3>
                <p className="text-gray-600">soubai1250@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-sage-600" />
              <div>
                <h3 className="font-medium text-gray-900">{t('contactPhone')}</h3>
                <p className="text-gray-600">+212662049210</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-sage-600" />
              <div>
                <h3 className="font-medium text-gray-900">{t('contactAddress')}</h3>
                <p className="text-gray-600">Casablanca, Morocco</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Clock className="w-6 h-6 text-sage-600" />
              <div>
                <h3 className="font-medium text-gray-900">{t('availability')}</h3>
                <p className="text-gray-600">{t('availabilityHours')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}