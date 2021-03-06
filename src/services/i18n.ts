import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import {Languages} from '@constants';

const en = require('./localization/en.json');
const ru = require('./localization/ru.json');

const defaultLanguage = Languages.EN;

export default i18n.use(initReactI18next).init({
  resources: {
    [Languages.EN]: {translation: en},
    [Languages.RU]: {translation: ru}
  },
  lng: defaultLanguage,
  fallbackLng: Languages.EN,
  compatibilityJSON: 'v2',
  react: {
    nsMode: 'default',
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  nsSeparator: false,
  keySeparator: '.',
  debug: true, // DISABLE EIF NO NEED LOGS
});
