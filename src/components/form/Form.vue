<!--
 - @author: Storm
 - @date: 2019/5/25
 - @email: wenyejie@foxmail.com
 -->
<template>
  <form
    class="s-form"
    :novalidate="novalidate"
    :autocomplete="autocomplete"
  >
    <slot />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SForm',
  props: {
    novalidate: {
      type: String,
      default: 'novalidate'
    },
    autocomplete: {
      type: String,
      default: 'autocomplete'
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
