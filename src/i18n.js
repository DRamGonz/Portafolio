import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/i18n/en/translation.json';
import es from './assets/i18n/es/translation.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
});

export default i18n;