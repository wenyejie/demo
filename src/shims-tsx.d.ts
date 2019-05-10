import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }

  // 伪元素名称
  export enum PseudoElementName {
    BEFORE = 'before',
    AFTER = 'after'
  }

  export interface ZeroizeOpts {
    pos: string
    rtnType: string
  }
}
