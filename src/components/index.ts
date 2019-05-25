/**
 * @author: Storm
 * @date: 2019/5/25
 * @email: wenyejie@foxmail.com
 */

import { inBrowser } from '@/utils/env'
import { VueConstructor } from 'vue'
import SModal from './modal'
import SInput from './input'
import SButton from './button'
import { SForm, SFormItem } from './form'

const components = {
  SModal,
  SInput,
  SButton,
  SForm,
  SFormItem
}

const install = (Vue: VueConstructor) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

if (inBrowser && window.Vue) {
  install(window.Vue)
}

export default Object.assign(components, { install })
