<!--
 - @author: Storm
 - @date: 2019/5/9
 - @email: wenyejie@foxmail.com
 -->
<template>
  <div class="demo">
    {{ name }}
  </div>
</template>

<script lang="ts">
import { arrFindByProp } from '@/utils'

export default {
  name: 'Demo',
  data (): object {
    return {
      name: 'storm'
    }
  },
  created (): void {
    const list: object[] = [
      {
        name: 'wenyejie',
        age: 29
      }
    ]
    console.log(arrFindByProp(list, 'name', 'wenyejie', 'age'))
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
