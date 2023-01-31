/*
 * @Author: xiaotao2018
 * @Date: 2022-07-06 11:42:36
 * @LastEditTime: 2023-01-31 15:03:24
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

import '@/styles/index.scss'
import 'uno.css'

const app = createApp(App)


import echarts from '@/components/Echarts/echarts'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })


import { vLoading } from '@/directive/loading/index'
app.directive('loading', vLoading)

router.beforeEach(() => {
	NProgress.start()
})
router.afterEach(() => {
	NProgress.done()
})

app.use(router)

app.use(createPinia())

app.mount('#app')

app.provide('$echarts', echarts)


function addThemeColorCssVars() {
	const cssVars = `--primary-color: #007AFF`
	document.documentElement.style.cssText = cssVars
}

addThemeColorCssVars()

