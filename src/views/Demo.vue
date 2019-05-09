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
import { isDate, isJSON, isNull } from '@/utils'
import { arrFindByProp } from '@/utils/array'

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
    console.log(`arrFindByProp => `, arrFindByProp(list, 'name', 'wenyejie', 'age'))

    console.log(`isJSON => `, isJSON(list))

    console.log(`isNull => `, isNull(null), isNull(1))

    console.log(`isDate => `, isDate(new Date()), isDate(new Date('aaaa')))
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
