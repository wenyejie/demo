/**
 * @author: Storm
 * @date: 2019/5/8
 * @email: wenyejie@foxmail.com
 */

import { emptyObject } from './common'

enum StorageName {
  local = 'local',
  session = 'session'
}

const storage = (name: StorageName): Object => {
  const s: Storage = window[`${name}Storage`]
  return {
    get (key: string): any {
      return (JSON.parse(s.getItem(key) || '0') || emptyObject).value
    },

    set (key: string, value: any): void {
      s.setItem(key, JSON.stringify({ value }))
    },

    remove (key: string): void {
      s.removeItem(key)
    },

    clear (): void {
      s.clear()
    },

    length (): number {
      return s.length
    }
  }
}

export const local = storage(StorageName.local)

export const session = storage(StorageName.session)
