/**
 * @author: Storm
 * @date: 2019/5/10
 * @email: wenyejie@foxmail.com
 */

export enum ZeroizeOptsPos {
  BEFORE = 'before',
  AFTER = 'after'
}

export enum ZerioizeOptsRtnType {
  STRING = 'string',
  NUMBER = 'number'
}

export interface ZeroizeOpts {
  pos: ZeroizeOptsPos
  rtnType: ZerioizeOptsRtnType
}
