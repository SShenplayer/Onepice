import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
const app = createApp(App)
/** 
 * use VueAxios and provide()、inject() to import axios and inject httpRequst
 * https://www.npmjs.com/package/vue-axios npm API org
 * example:
 * import {inject} from 'vue'
 * const axios=inject('axios')
 * axios.get();
 * ....
 * */
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// app.use(VueAxios, axios)
// app.provide('axios', app.config.globalProperties.axios)

/**
 * use app.config.globalPropertise for axios 
 * example:
 * import {getCurruntInstance} from 'vue'
 * const {proxy} = getCurruntInstance()
 * proxy.$axios can use axios API
 */
app.config.globalProperties.$axios = axios
app.use(router)
app.use(store)
app.use(ElementPlus)
app.config.errorHandler = (err) => {
    /** 处理错误 */
    console.log("Vue实例报错,上层捕捉未处理ERROR:", err)
}
app.mount('#app')