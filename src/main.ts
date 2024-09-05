import 'leaflet/dist/leaflet.css'
import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)
// app.use(VueGoogleMaps, { load: { key: config.googleMapApiKey, libraries: 'visualization' } })
app.use(createPinia())
app.use(router)

app.mount('#app')
