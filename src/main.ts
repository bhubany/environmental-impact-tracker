import 'leaflet/dist/leaflet.css'
import 'vue-toast-notification/dist/theme-sugar.css'
import './assets/main.css'

import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import Toast from 'vue-toast-notification'
import vue3GoogleLogin from 'vue3-google-login'

import App from '@/App.vue'
import router from '@/router'
import { config } from './config'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.use(pinia)

app.use(router)

app.use(Toast, { position: 'top-right' })

app.use(vue3GoogleLogin, {
  clientId: config.googleAuthClientId
})

app.mount('#app')
