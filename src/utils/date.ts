/**
 * @author: Storm
 * @date: 2019/5/8
 * @email: wenyejie@foxmail.com
 */
import { isDate, isNumber, zeroize } from '@/utils/common'

export const monthLength = (date: Date = new Date()): number => {
  const val: Date = new Date(date)
  val.setMonth(val.getMonth() + 1, 0)
  return val.getDate()
}

export const isOneDay = (date1: Date, date2: Date = new Date()): boolean => {
  return date1.toLocaleDateString() === date2.toLocaleDateString()
}

export const isOneMonth = (date1: Date, date2: Date = new Date()): boolean => {
  return date1.toLocaleDateString().slice(0, 7) === date2.toLocaleDateString().slice(0, 7)
}

export const isOneYear = (date1: Date, date2: Date = new Date()): boolean => {
  return date1.getFullYear() === date2.getFullYear()
}

// 转换成date类型
export const convert = (date: any, defVal: any = ''): Date | string => {
  if (isDate(date)) {
    return <Date>date
  }

  if (!date) {
    return defVal
  }

  if (typeof date === 'string' && /^\d+$/.test(<string>date)) {
    date = Number.parseInt(<string>date)
  }

  if (isNumber(date)) {
    if ((date + '').length > 13) {
      date = parseInt((date + '').substr(0, 13))
    }

    // NaN
    if (Number.isNaN(<number>date)) {
      return defVal
    }

    if ((date + '').length < 13) {
      date = zeroize(<number>date, 13, {
        pos: 'after',
        rtnType: 'number'
      })
    }
  }

  date = new Date(date)

  if (!isDate(date)) {
    return defVal
  }

  return <Date>date
}

export const format = (date: any, format: string = 'YYYY-MM-DD hh:mm:ss'): string => {
  date = convert(date)

  if (!date) {
    return ''
  }

  return format.replace(/"[^"]*"|'[^']*'|\b(?:D{1,2}|d{1,3}|m{1,4}|YY(?:YY)?|([hHMstT])\1?|[lLZ])\b/g, (str: string) => {
    switch (str) {
      case 'YYYY':
        return date.getFullYear()
      case 'YY':
        return date.getFullYear() % 100
      case 'MM':
        return zeroize(date.getMonth() + 1)
      case 'M':
        return date.getMonth() + 1
      case 'DD':
        return zeroize(date.getDate())
      case 'D':
        return date.getDate()
      case 'hh':
        return zeroize(date.getHours())
      case 'h':
        return date.getHours()
      case 'mm':
        return zeroize(date.getMinutes())
      case 'm':
        return date.getMinutes()
      case 'ss':
        return zeroize(date.getSeconds())
      case 's':
        return date.getSeconds()
      case 'd':
        return date.getDay()
      case 'dd':
        return '\u5468' + ['\u65E5', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D'][date.getDay()]
      case 'ddd':
        return '\u661F\u671F' + ['\u65E5', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D'][date.getDay()]
      case 'tt':
        return date.getHours() < 12 ? 'am' : 'pm'
      case 'TT':
        return date.getHours() < 12 ? 'AM' : 'PM'
      case 't':
        return date.getHours() < 12 ? '\u4E0A\u5348' : '\u4E0B\u5348'
    }
  })
}
