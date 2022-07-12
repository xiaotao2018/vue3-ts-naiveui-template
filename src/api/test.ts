/*
 * @Author: xiaotao2018
 * @Date: 2022-07-08 09:41:48
 * @LastEditTime: 2022-07-08 09:51:58
 */
import request from '@/utils/request'

export function getPubPageBasicData(pageid: any) {
  return request({
    url: '/xt-api/tbland',
    method: 'get',
    params: { pageid },
  })
}