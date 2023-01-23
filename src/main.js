import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

//router
import router from './routes'

//Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

createApp(App).use(pinia).use(vuetify).use(router).mount('#app')