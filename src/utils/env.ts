/**
 * @author: Storm
 * @date: 2019/5/8
 * @email: wenyejie@foxmail.com
 */

export const inBrowser: boolean = typeof window !== 'undefined'

export const ua: string = inBrowser ? window.navigator.userAgent.toLowerCase() : ''

export const isIE: boolean = /msie|trident/.test(ua)

export const isIE9: boolean = ua.includes('msie 9.0')

export const isEdge: boolean = ua.includes('edge/')

export const isAndroid: boolean = ua.includes('android')

export const isIos: boolean = /iphone|ipad|ipod|ios/.test(ua)

export const isChrome: boolean = /chrome\/\d+/.test(ua) && !isEdge

export const isPhantomJs: boolean = /phantomjs/.test(ua)

export const isFirefox: boolean = /firefox\/(\d+)/.test(ua)
