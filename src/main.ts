/*
 * @Author: xiaotao2018
 * @Date: 2022-07-06 11:42:36
 * @LastEditTime: 2023-01-11 17:10:06
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

import '@/styles/index.scss'
import 'uno.css'

const app = createApp(App)


import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

app.use(router)

app.use(createPinia())

app.mount('#app')
