/*
 * @Author: xiaotao2018
 * @Date: 2022-07-08 09:28:02
 * @LastEditTime: 2022-07-08 16:44:44
 */
import axios from 'axios'
import { useMessage } from 'naive-ui'

const nMessage = window.$message
// 创建一个 axios 实例
const service = axios.create({
	timeout: 60000, // 请求超时时间毫秒
	withCredentials: true, // 异步请求携带cookie
	headers: {
		// 设置后端需要的传参类型
		'Content-Type': 'application/json',
		'token': 'your token',
		'X-Requested-With': 'XMLHttpRequest',
	},
})

service.interceptors.request.use(
	function (config) {
		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

service.interceptors.response.use(
	function (response) {
    nMessage?.success('请求成功')
		const dataAxios = response.data
		return dataAxios
	},
	function (error) {
    nMessage?.error('发生了错误')
		return Promise.reject(error)
	}
)

export default service

