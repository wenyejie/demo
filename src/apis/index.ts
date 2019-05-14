/**
 * @author: Storm
 * @date: 2019/5/14
 * @email: wenyejie@foxmail.com
 */

import http from '../cores/http'
import md5 from '../cores/md5'

interface LoginFormData {
  username: string,
  password: string
}

/**
 * 登录
 * @param username {string} 用户名
 * @param password {string} 密码
 */
export const login = ({ username, password }: LoginFormData) => {
  return http.post('/login', { username, password: md5(password) })
}
