import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

export enum Locales {
  en = 'en',
  es = 'es',
}

export const DEFAULT_LANGUAGE = Locales.en;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: require('./translations/en.json'),
    },
  },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default {
  withScope: function (scope: string) {
    return i18n.getFixedT(null, null, scope);
  },
  t: i18n.t,
};
