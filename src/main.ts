import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'

import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.config.errorHandler = (err) => {
    /** 处理错误 */
    console.log("Vue实例报错,上层捕捉未处理ERROR:", err)
}
app.use(axios)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')