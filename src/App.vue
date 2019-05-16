<template>
  <div id="app">
    <Header />
    <Main><router-view /></Main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from './components/header'
import Main from './components/main'

export default Vue.extend({
  components: { Header, Main }
})
</script>
