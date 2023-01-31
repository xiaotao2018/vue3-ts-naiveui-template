/*
 * @Author: xiaotao2018
 * @Date: 2023-01-30 10:39:23
 * @LastEditTime: 2023-01-30 10:43:05
 */
import request from '@/utils/request'

export function getYiKeTianqiData() {
  return request({
    url: '/yiketianqi-api/api',
    method: 'get',
    params: { 
      unescape:1,
      version: 'v91',
      appid:43656176,
      appsecret: 'I42og6Lm',
      ext:'',
      cityid:'',
      city: ''
    },
  })
}