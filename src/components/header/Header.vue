<!--
 - @author: Storm
 - @date: 2019/5/15
 - @email: wenyejie@foxmail.com
 -->
<template>
  <header class="header">
    <div class="content header__content">
      <div class="header__left">
        <router-link
          class="header__logo"
          to="/"
        >
          <img
            src="../../assets/logo.jpg"
            alt="Storm"
          >
        </router-link>
        <span class="header__split" />
        <h1 class="header__title">
          <router-link to="/">
            Storm
          </router-link>
        </h1>
        <!--<h2 class="header__subtitle">
          记录代码, 记录生活, 记录世界
        </h2>-->
      </div>
      <div class="header__right">
        <a
          href="javascript:;"
          class="header__logout"
          @click="handleLogout"
        >退出登录</a>
      </div>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'
import { logout } from '../../apis'

export default Vue.extend({
  name: 'SHeader',
  methods: {
    handleLogout () {
      logout()
        .then(() => {
          console.log('登出成功')
        })
    }
  }
})
</script>

<style lang="scss">
.header {
  background-color: #fff;
  color: rgba(0, 0, 0, .54);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .05);

  &__left {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }

  &__split {
    height: 28px;
    border-left: 1px solid rgba(0, 0, 0, .15);
    margin-left: 20px;
    margin-right: 20px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    width: 45px;
    height: 45px;
    display: block;
    padding: 5px;
  }

  &__title {
    font-size: 28px;
    font-weight: bold;

    & > a {
      color: #333333;

      &:hover {
        color: #cc0000;
      }
    }
  }

  &__subtitle {
    color: #666666;
    letter-spacing: 10px;
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__logout {
    padding: 5px;
  }
}
</style>
