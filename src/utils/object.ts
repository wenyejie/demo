/**
 * @author: Storm
 * @date: 2019/5/25
 * @email: wenyejie@foxmail.com
 */
import { isObject } from '@/utils/common'

/**
 * 获取对象属性
 * @param obj {Object}
 * @param keys {Array<string>}
 * @return {Object}
 */
export const getObjProp = (obj: object, ...keys: string[]) :object => {
  const result = {}
  if (!isObject(obj)) return result
  for (let key of keys) result[key] = obj[key]
  return result
}

/**
 * 获取对象长度
 * @param obj {Object}
 * @return {Number}
 */
export const objLen = (obj: object): number => {
  return Object.keys(obj).length
}
