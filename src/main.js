import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify'
import App from '@/App.vue'
import '@/assets/main.css'

//router
import router from '@/routes'

//Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

//i18n
import i18n from './plugins/i18n'

createApp(App).use(pinia).use(i18n).use(vuetify).use(router).mount('#app')