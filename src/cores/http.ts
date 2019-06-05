/**
 * @author: Storm
 * @date: 2019/5/14
 * @email: wenyejie@foxmail.com
 */

import axios, { AxiosInstance } from 'axios'
import { stringify } from 'qs'

const instance: AxiosInstance = axios.create({
  baseURL: '//localhost:8004',
  timeout: 30000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [(data: any, headers: Object) => {
    const serialize: boolean = headers['Content-Type'] === 'application/x-www-form-urlencoded'
    if (!(data instanceof Object) || (data instanceof FormData)) return data
    if (!serialize) {
      return JSON.stringify(data)
    }
    // let ret: string = ''
    // for (let it in data) {
    //   if (!data.hasOwnProperty(it) || data[it] === undefined || data[it] === null || Number.isNaN(data[it])) continue
    //   if (!serialize) {
    //     ret += data[it]
    //     continue
    //   }
    //   ret += encodeURI(it) + '='
    //   switch (typeof data[it]) {
    //     case 'object':
    //       ret += encodeURI(JSON.stringify(data[it]))
    //       break
    //     case 'string':
    //       ret += encodeURI(data[it])
    //       break
    //     default:
    //       ret += data[it]
    //       break
    //   }
    //   ret += '&'
    // }
    // ret = ret.replace(/&$/, '')
    return stringify(data)
  }]
})

instance.interceptors.request.use((config = {}) => {
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default instance
