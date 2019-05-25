<template>
  <div class="login">
    <h1>登录</h1>
    <form
      novalidate
      autocomplete
    >
      <s-input
        v-model="login.username"
        placeholder="请输入用户名"
      />
      <s-input
        v-model="login.password"
        type="password"
        placeholder="请输入密码"
      />
      <s-button
        type="primary"
        @click="handleSubmit"
      >
        登 录
      </s-button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { login } from '@/apis'

export default Vue.extend({
  name: 'VLogin',
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
      login(this.login).then(() => {
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.login {
  box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
}
</style>
