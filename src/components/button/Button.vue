<!--
 - @author: Storm
 - @date: 2019/5/25
 - @email: wenyejie@foxmail.com
 -->
<template>
  <button
    :class="classes"
    :type="nativeType"
    class="s-button"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button',
      validator (val: string): boolean {
        return [ 'button', 'submit', 'reset' ].includes(val)
      }
    }
  },
  computed: {
    classes () {
      return {
        [`s-button__${this.type}`]: this.type
      }
    }
  }
})
</script>

<style lang="scss">
.s-button {
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  color: #888;
  text-align: center;
  padding: 7px 12px;
  min-width: 64px;
  font-size: 14px;
  border-radius: 3px;
  transition: all .3s ease-in-out;

  &__primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover,
    &:focus {
      background-color: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }
}
</style>
