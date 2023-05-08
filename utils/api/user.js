// 引用网络请求中间件
import request from '@/utils/request';
// 注册
export function signIn(data) {
	return request({
		url: '/user/login',
		method: 'POST',
		data
	})
}

/**
 *    登陆请求
 */
export function signUp(data) {
	return request({
		url: '/user/login',
		method: 'POST',
		data
	})
}

/**
 *    获取用户信息
 */
export function info(data) {
	return request({
		url: '/user/info',
		method: 'GET',
		data
	})
}
