/**
 * @author: Storm
 * @date: 2019/5/7
 * @email: wenyejie@foxmail.com
 */

export const emptyObject: Object = Object.freeze({})

export const nullObject = (): Object => {
  return Object.create(null)
}

export const isUndefined = (val: any): boolean => {
  return val === undefined || val === null
}

export const isDefined = (val: any): boolean => {
  return val !== undefined && val !== null
}

export const isTrue = (val: any): boolean => {
  return val === true
}

export const isFalse = (val: any): boolean => {
  return val === false
}

export const isPrimitive = (val: any): boolean => {
  const type: string = typeof val
  return type === 'string' || type === 'number' || type === 'symbol' || type === 'boolean'
}

export const isObject = (val: any): boolean => {
  return val !== null && typeof val === 'object'
}

export const _toString: Function = Object.prototype.toString

export const toRawType = (val: any): string => {
  return _toString.call(val).slice(8, -1)
}

export const isPlainObject = (val: any): boolean => {
  return toRawType(val) === 'Object'
}

export const isRegExp = (val: any): boolean => {
  return toRawType(val) === 'RegExp'
}

export const isPromise = (val: any): boolean => {
  return isDefined(val) && typeof val.then === 'function' && typeof val.catch === 'function'
}

export const toNumber = (val: any): any => {
  const num = parseFloat(val)
  return Number.isNaN(num) ? val : num
}

export const hasOwnProperty: Function = Object.prototype.hasOwnProperty

export const hasOwn = (obj: any, key: string): boolean => {
  return hasOwnProperty.call(obj, key)
}

export const cached = (fn: Function): Function => {
  const cache: {} = nullObject()
  return function (str: string): any {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

// 横杠命名法转驼峰命名发
const camelizeRE: RegExp = /-(\w)/g
export const camelize = (str: string): string => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
}
export const camelizeCached: Function = cached(camelize)

// 首字母大写
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
export const capitalizeCached = cached(capitalize)

// 驼峰命名法转横杠命名法
const hyphenateRE: RegExp = /\B([A-Z])/g
export const hyphenate = (str: string): string => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}
export const hyphenateCached: Function = cached(hyphenate)

/**
 * 函数只执行一次
 * @param fn 执行函数
 * @returns {Function}
 */
export const once = (fn: Function): Function => {
  let called = false
  return function () {
    if (!called) {
      called = true
      // @ts-ignore
      fn.apply(this, arguments)
    }
  }
}
