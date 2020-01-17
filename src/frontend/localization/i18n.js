import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { resources } from './translations';

i18n
  .use(Backend)// load translation using xhr -> see /public/locales
  .use(LanguageDetector)// detect user language
  .use(initReactI18next)// pass the i18n instance to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
