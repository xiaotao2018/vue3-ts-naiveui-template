/*
 * @Author: xiaotao2018
 * @Date: 2022-07-08 17:59:37
 * @LastEditTime: 2022-07-11 15:37:48
 */
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: '超级管理员',
  }),
  getters: { // getter中的值有缓存特性，如果值没有改变，多次使用也只会调用一次
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data
    },
  },
})
