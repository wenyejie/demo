<!--
 - @author: Storm
 - @date: 2019/5/15
 - @email: wenyejie@foxmail.com
 -->
<template>
  <article class="article">
    <header class="article__header">
      <h1 class="article__title">
        <router-link
          class="article__link"
          to="/article"
        >
          Hello World!
        </router-link>
      </h1>
      <div class="article__info">
        发表时间:
        <time>2019-05-15 12:20:20</time>
        分类: HTML
      </div>
    </header>
    <section class="article__content">
      The purpose of this HTML is to help determine what default settings are with CSS and to make sure that all
      possible HTML Elements are included in this HTML so as to not miss any possible Elements when designing a site.
      Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 [top] Paragraph…
    </section>
    <slot />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SArticle',
  props: {
    title: {
      type: String,
      default: ''
    },
    createTime: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.article {
  padding: 40px 0;
  max-width: 700px;

  &__header {

  }

  &__info {
    color: #777777;
    font-size: 16px;
  }

  &__title {
    font-weight: bold;
    font-size: 40px;
  }

  &__link {
    color: #333333;
    display: block;

    &:hover {
      color: #cc0000;
    }
  }

  &__content {
    margin-top: 20px;
  }
}
</style>
