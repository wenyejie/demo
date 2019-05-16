<!--
 - @author: Storm
 - @date: 2019/5/15
 - @email: wenyejie@foxmail.com
 -->
<template>
  <main class="main">
    <div class="content">
      <slot />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SMain'
})
</script>
