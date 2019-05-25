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
import { convert } from '@/utils/date'
import router from '@/router'
import watemark from '../cores/watermark'

export default {
  name: 'VDemo',
  data (): object {
    return {
      name: 'storm'
    }
  },
  created (): void {
    router.push('/')
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

    console.log(`convert => `, convert(1557396136895), convert(1557396136))
  },
  mounted () {
    watemark.set('Hello Watermark!')
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
