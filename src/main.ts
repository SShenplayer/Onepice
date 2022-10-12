import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'

import ElementPlus from 'element-plus'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')