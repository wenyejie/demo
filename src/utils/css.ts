/**
 * @author: Storm
 * @date: 2019/5/9
 * @email: wenyejie@foxmail.com
 */
import { camelize, isElement } from '@/utils/common'
import { PseudoElementName } from 'enmus.ts'

// 判断是否支持CSS属性和值
export const support = (attrName: string, attrVal?: number | string): boolean => {
  const supportsCSS: Function = (CSS && CSS.supports) || window['supportsCSS']
  const plainAttrName: string = camelize(attrName)
  if (supportsCSS) {
    return supportsCSS(plainAttrName, attrVal)
  }

  const el: HTMLElement = document.createElement('div')
  if (attrName in el.style) {
    el.style[plainAttrName] = attrVal
    return el.style[plainAttrName] === attrVal
  }
  return false
}

// 获取
export const get = (el: HTMLElement, attrName: string, pseudoElement?: PseudoElementName): string | number | void => {
  if (!isElement(el)) {
    return
  }

  // @ts-ignore
  const computedStyle: CSSStyleDeclaration = document.defaultView.getComputedStyle(el, pseudoElement)

  return computedStyle[camelize(attrName)]
}

// 设置
export const set = (el: HTMLElement, attName: string, attrVal: string | number): void => {
  if (!isElement(el) || attName) {
    return
  }

  el.style[camelize(attName)] = attrVal
}
