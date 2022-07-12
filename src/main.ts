/*
 * @Author: xiaotao2018
 * @Date: 2022-07-06 11:42:36
 * @LastEditTime: 2022-07-07 15:10:24
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

import '@/styles/index.scss'
import 'uno.css'

const app = createApp(App)

app.use(router)

app.use(createPinia())

app.mount('#app')
