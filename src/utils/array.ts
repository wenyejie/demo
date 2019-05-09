/**
 * @author: Storm
 * @date: 2019/5/8
 * @email: wenyejie@foxmail.com
 */
import { isUndefined } from './common'

export const arrRemove = (array: Array<any>, item: any): Array<any> => {
  if (Array.isArray(array) && array.length) {
    const index = array.indexOf(item)
    if (index > -1) {
      array.splice(index, 1)
    }
  }
  return array
}

export const arrToogle = (array: Array<any>, item: any): Array<any> => {
  if (Array.isArray(array) && array.length) {
    const index = array.indexOf(item)
    if (index > -1) {
      array.splice(index, 1)
    } else {
      array.push(item)
    }
  }
  return array
}

// 从复杂数组中查找想要的子集或子集属性
export const arrFindByProp = (array: Array<any>, key: string, value: any, returnKey?: string | undefined): any => {
  if (!Array.isArray(array) || isUndefined(key) || isUndefined(value)) {
    return
  }
  const item = array.find(item => item[key] === value)
  if (!item) {
    return
  }

  return returnKey ? item[returnKey] : item
}
