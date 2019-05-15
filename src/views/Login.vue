<template>
  <div class="login">
    <h1>This is an login page</h1>
    <form
      novalidate
      autocomplete
    >
      <input
        v-model="login.username"
        type="text"
        placeholder="请输入用户名"
      >
      <input
        v-model="login.password"
        type="password"
        placeholder="请输入密码"
      >
      <button
        type="button"
        @click="handleSubmit"
      >
        登 录
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import Vue from 'vue'
import { login } from '@/apis'

export default Vue.extend({
  name: 'Login',
  data () {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit (): void {
      login(this.login)
        .then(() => {
        })
    }
  }
})
</script>
