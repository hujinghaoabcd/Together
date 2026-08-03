<template>
  <section class="page-header">
    <RouterLink to="/" class="back">← 返回首页</RouterLink>
    <span class="page-icon">{{ icon }}</span>
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </section>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{ title: string; subtitle: string; icon: string }>()
</script>
