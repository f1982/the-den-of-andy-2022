import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './languages/en';

const languages = {
  ENGLISH: 'en',
};

const DEFAULT_NAMESPACE = 'translation';

export const resources = {
  [languages.ENGLISH]: en,
};

export const initI18n = (): void => {
  i18n.use(initReactI18next).init({
    lng: languages.ENGLISH,
    debug: false,
    ns: [DEFAULT_NAMESPACE],
    defaultNS: DEFAULT_NAMESPACE,
    fallbackLng: languages.ENGLISH,
    load: 'languageOnly',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
