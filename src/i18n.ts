import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './assets/locales/en/translation.json'
import translationES from './assets/locales/es/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
}

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources,
})

export default i18n
