/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */

import i18n from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

const importTranslation = (language: string) =>
  import(`./locales/${language}.json`);

void i18n
  .use(resourcesToBackend(importTranslation))
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: import.meta.env.DEV,

    detection: {
      convertDetectedLanguage: (lng) => {
        return lng.split('-')[0] || lng;
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lang) => {
  document.documentElement.setAttribute('lang', lang);
});

export default i18n;
