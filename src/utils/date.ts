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
export const convert = (date: Date | string | number, defVal: any = ''): Date | string => {
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

    const length: number = (date + '').length

    if (length < 13) {
      date = zeroize(<number>date, 13, {
        pos: 'after',
        rtnType: 'number'
      })
    }

    date = new Date(date)
  } else {
    return defVal
  }

  return <Date>date
}
