/**
 * @author: Storm
 * @date: 2019/5/9
 * @email: wenyejie@foxmail.com
 */

// 手机
export const mobile: RegExp = /^1\d{10}$/

// 座机
export const tel: RegExp = /^(0\d{2,3}-)?\d{7,8}$/

// 座机含分机号
export const telExt: RegExp = /^(0\d{2,3}-)?\d{7,8}(-\d{3,})?$/

// 联系方式
export const phone: RegExp = /(^1\d{10}$)|(^(0\d{2,3}-)?\d{7,8}(-\d{3,})?$)/

export const emoji: RegExp = /[\uD83C\uD83D\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D\uD83E][\uDC00-\uDFFF]|[0-9|*#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|(A9|AE)\u3030|uA9|uAE|\u3030/ig

export const email: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 字母
export const letter: RegExp = /^[A-z]+$/

export const number: RegExp = /[+|-]?(^[1-9]([0-9]+)?(\.[0-9]+)?$)|(^0$)|(^[0-9]\.[0-9]+$)/

// chinese
export const cn: RegExp = /^[\u4e00-\u9fa5]+$/

// 姓名
export const name: RegExp = /^[\u4E00-\u9FA5|·]{2,}$/

// 身份证号码
export const certNo: RegExp = /^[1-9]\d{7}((0\d)|(1[0-2]))(([012]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([012]\d)|3[0-1])\d{3}([0-9]|X)$/

// url地址
export const url: RegExp = /^https?:\/\/([\w\d]+\.)+\w+(\/[\w\d-_]+)+$/

// IP地址
export const ip: RegExp = /^\d{1,3}(\.\d{1,3}){3}$/

// 验证码
export const smsCode: RegExp = /^\d{4,6}$/
