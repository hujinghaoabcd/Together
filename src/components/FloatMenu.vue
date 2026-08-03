<template>
  <aside class="float-menu" aria-label="快捷导航">
    <RouterLink to="/" title="首页">⌂</RouterLink>
    <RouterLink to="/wishlist" title="恋爱清单">☆</RouterLink>
    <RouterLink to="/blessings" title="祝福墙">♡</RouterLink>
    <button title="返回顶部" @click="top">↑</button>
  </aside>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
const top = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>
