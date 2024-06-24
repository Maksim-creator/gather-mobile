import i18n, {TFunction} from 'i18next';
import {initReactI18next} from 'react-i18next';

export enum Locales {
  en = 'en',
  ua = 'ua',
}

export interface Locale {
  locale: Locales;
  name: string;
}

export const LocalesMap = (t: TFunction) => [
  {locale: Locales.en, name: `🇬🇧 ${t('OnboardingScreen.english_lng')}`},
  {locale: Locales.ua, name: `🇺🇦 ${t('OnboardingScreen.ukrainian_lng')}`},
];

export const DEFAULT_LANGUAGE = Locales.ua;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: require('./translations/en.json'),
    },
    ua: {
      translation: require('./translations/ua.json'),
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
  language: i18n.language,
};
