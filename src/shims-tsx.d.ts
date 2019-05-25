import Vue, { VNode, VueConstructor } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {
    }
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {
    }
    interface IntrinsicElements {
      [elem: string]: any
    }
  }

  export interface Window {
    Vue: VueConstructor
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
