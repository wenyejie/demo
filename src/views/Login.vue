<template>
  <div class="login">
    <h1 class="login__title">
      登录
    </h1>
    <s-form>
      <s-form-item>
        <s-input
          v-model="login.username"
          block
          placeholder="请输入用户名"
        />
      </s-form-item>

      <s-form-item>
        <s-input
          v-model="login.password"
          block
          type="password"
          placeholder="请输入密码"
        />
      </s-form-item>

      <s-form-item>
        <s-button
          type="primary"
          block
          @click="handleSubmit"
        >
          登 录
        </s-button>
      </s-form-item>
    </s-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { login } from '@/apis'
import router from '../router'

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
        router.push('/')
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.login {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  &__title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
  }

  .s-form-item {
    margin-bottom: 30px;
  }
}
</style>
