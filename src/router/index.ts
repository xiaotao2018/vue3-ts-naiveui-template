/*
 * @Author: xiaotao2018
 * @Date: 2022-07-06 11:42:36
 * @LastEditTime: 2022-07-12 11:26:33
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
  },
  {
    path: '/login',
    name: 'Login2',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/unocss',
    name: 'UnocssPage',
    component: () => import('@/views/unocssPage/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
