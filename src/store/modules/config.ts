/*
 * @Author: xiaotao2018
 * @Date: 2023-01-18 10:28:27
 * @LastEditTime: 2023-01-18 11:01:07
 */
import { defineStore } from 'pinia'

export const useConfigStore = defineStore({
  id: 'config',
  state: () => ({
    theme: window.localStorage.getItem('vue3TestTheme') || 'light',
  }),
  getters: { // getter中的值有缓存特性，如果值没有改变，多次使用也只会调用一次
    
  },
  actions: {
    changeWebTheme(data: string) {
      window.localStorage.setItem('vue3TestTheme',data)

      this.theme = data
      
    },
  },
})
