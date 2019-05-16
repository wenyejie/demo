<template>
  <div class="home">
    <Article class="home__article" />
    <Article class="home__article" />
    <Article class="home__article" />
    <Article class="home__article" />
    <Article class="home__article" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Article from '../components/aritcle'

export default Vue.extend({
  name: 'Home',
  components: {
    Article
  }
})
</script>

<style lang="scss" scoped>
.home {
  margin: 40px 0 120px;

  &__article:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, .0785)
  }
}
</style>
