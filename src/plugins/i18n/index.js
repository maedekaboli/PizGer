import locales from './locales'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'de',
    messages: locales
})

export default i18n