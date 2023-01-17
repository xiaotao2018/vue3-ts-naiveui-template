/*
 * @Author: xiaotao2018
 * @Date: 2022-11-24 17:45:30
 * @LastEditTime: 2022-11-25 15:33:15
 */
import { _RouteRecordBase } from 'vue-router'

declare module 'vue-router'{
  interface _RouteRecordBase{
    hidden?: boolean | string | number
  }
  interface RouteRecordNormalized{
    hidden?: boolean | string | number
  }
}
