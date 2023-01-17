/*
 * @Author: xiaotao2018
 * @Date: 2022-07-06 11:42:36
 * @LastEditTime: 2023-01-17 09:22:38
 */
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'


const Layout = () => import('@/layouts/index.vue')

const routes: RouteRecordRaw[] = [{
    path: '/login',
    name: 'Login2',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/login3',
    // component: Layout,
    children: [{
        path: '/login3',
        component: () => import('@/views/login/Login.vue'),
      }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/',
    meta: { title: '首页', breadcrumb: false },
    hidden: true, 
    children: [{
      path: '',
      meta: { title: '首页', isChild: true, breadcrumb: false },
      component: () => import('@/views/userPage/console.vue'),
    }]
  },
  {
    path: '/console',
    component: Layout,
    redirect: '/console/page1',
    meta: { title: '多菜单', breadcrumb: false },
    children: [{
      path: 'page1',
      meta: { title: '菜单1', isChild: true, breadcrumb: false },
      component: () => import('@/views/userPage/console.vue'),
    },{
      path: 'page2',
      meta: { title: '菜单2', isChild: true, breadcrumb: false },
      component: () => import('@/views/userPage/console.vue'),
    },{
      path: 'page3',
      meta: { title: '菜单3', isChild: true, breadcrumb: false },
      component: () => import('@/views/userPage/console.vue'),
    }]
  },
  {
    path: '/unocss',
    component: Layout,
    redirect: '/unocss',
    meta: { title: 'Unocss', breadcrumb: false },
    children: [{
      path: '',
      meta: { title: 'Unocss', isChild: true, breadcrumb: false },
      component: () => import('@/views/unocssPage/index.vue'),
    }]
  },
  {
    path: '/redirect/:path*',
    component: () => import('@/views/publicPage/redirect.vue'),
    hidden: true
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/publicPage/404.vue'),
    hidden: true
  },]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
