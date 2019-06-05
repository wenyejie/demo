/**
 * @author: Storm
 * @date: 2019/5/14
 * @email: wenyejie@foxmail.com
 */

import http from '../cores/http'
import md5 from '../cores/md5'
import { AxiosPromise } from 'axios'

interface LoginFormData {
  username: string,
  password: string
}

/**
 * 登录
 * @param username {string} 用户名
 * @param password {string} 密码
 */
export const login = ({ username, password }: LoginFormData): AxiosPromise => {
  return http.post('/users/login', { username, password: md5(password) })
}

/**
 * 登出
 */
export const logout = (): AxiosPromise => {
  return http.post('/users/logout')
}
