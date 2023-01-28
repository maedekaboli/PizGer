import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify'
import App from '@/App.vue'
import '@/assets/main.css'

//router
import router from '@/routes'

//Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(pinia).use(vuetify).use(router).mount('#app')