import I18next, {InitOptions} from 'i18next';
import XHR from 'i18next-xhr-backend';
import {initReactI18next} from 'react-i18next';

const i18NextConfig: InitOptions = {
  debug: true,
  defaultNS: 'common',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  load: 'languageOnly',
  supportedLngs: ['fr', 'en'],
  detection: {
    order: ['querystring', 'path', 'localStorage', 'cookie'],
    lookupQuerystring: 'lang',
    caches: ['localStorage', 'cookie'],
  },
};

const initializeI18next = () => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  I18next.use(XHR).use(initReactI18next).init(i18NextConfig);

  return I18next;
};

export default initializeI18next;
