import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import VueCountdown from '@chenfengyuan/vue-countdown';
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)

const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(vue3GoogleLogin, {
    clientId: '267721971858-deoiqsa1glghdtpd503k49cnq8616sgu.apps.googleusercontent.com',
})
app.use(router)
app.component(VueCountdown.name, VueCountdown);
app.use(pinia)
app.mount('#app')