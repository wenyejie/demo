/**
 * @author: Storm
 * @date: 2019/5/25
 * @email: wenyejie@foxmail.com
 */
import { isObject } from '@/utils/common'

export const getObjProp = (obj: object, ...keys: string[]) => {
  const result = {}
  if (!isObject(obj)) return result
  for (let key of keys) result[key] = obj[key]
  return result
}
