<!--
 - @author: Storm
 - @date: 2019/5/25
 - @email: wenyejie@foxmail.com
 -->
<template>
  <div class="s-input">
    <input
      v-model="innerVal"
      :type="type"
      class="s-input__inner"
      v-bind="$attrs"
      v-on="innerListeners"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { nullObject } from '@/utils'

export default Vue.extend({
  name: 'SInput',
  inheritAttrs: false,
  props: {
    value: {
      type: [ String, Number, Date, Object, Array ],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      innerVal: this.value
    }
  },
  computed: {
    innerListeners () {
      return Object.assign(nullObject(), this.$listeners, {
        input: () => this.$emit('input', this.innerVal)
      })
    }
  },
  watch: {
    value (val, oldVal) {
      if (val === oldVal) {
        return
      }
      this.innerVal = val
    }
  }
})
</script>

<style lang="scss">
.s-input {
  position: relative;
  display: inline-block;

  &__inner {
    border-radius: 3px;
    border: 1px #ddd solid;
    font-size: 14px;
    line-height: 1;
    padding: 7px 10px;
    transition: border-color .3s ease;
    width: 100%;
  }
}
</style>
