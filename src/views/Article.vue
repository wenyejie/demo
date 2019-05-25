<template>
  <SArticle class="article" />
</template>

<script lang="ts">
import Vue from 'vue'
import SArticle from '../components/aritcle'

export default Vue.extend({
  name: 'VArticle',
  components: {
    SArticle
  }
})
</script>

<style lang="scss" scoped>
.article {
  margin: 50px 0 100px;
}
</style>
