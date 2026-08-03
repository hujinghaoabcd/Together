<template>
  <header class="topbar">
    <RouterLink class="brand" to="/">
      <span class="brand-mark">T</span>
      <span><strong>Together</strong><small>我们的日常</small></span>
    </RouterLink>
    <nav aria-label="主要导航">
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/moments">点滴</RouterLink>
      <RouterLink to="/gallery">相册</RouterLink>
      <RouterLink to="/wishlist">清单</RouterLink>
      <RouterLink to="/about">关于</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
