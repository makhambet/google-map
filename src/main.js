import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Api from '@/utils/api'

import '@/assets/css/main.scss'
import 'normalize.css'


// const googleMapOption = {
//     apiKey: process.env.VUE_APP_GOOGLE_APIKEY,
//     tileUrl: 'https://cdn.lima-labs.com/{z}/{x}/{y}.png?free', //example: https://cdn.lima-labs.com/{z}/{x}/{y}.png?free
//     // layerId: '1'
// }


const app = createApp(App)
app.use(store)
app.use(router)

app.config.globalProperties.$api = Api
// app.use(googleMap, googleMapOption)
app.mount('#app')
