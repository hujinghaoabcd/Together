<template>
  <main class="inner-page pattern-bg">
    <PageHeader title="相册" subtitle="照片会褪色，但拍下那一刻的心情不会。" icon="📷" />
    <section class="gallery-grid page-width">
      <figure v-for="item in gallery" :key="item.src" :class="item.span">
        <img :src="asset(item.src)" :alt="item.title" loading="lazy" />
        <figcaption><strong>{{ item.title }}</strong><span>{{ item.date }}</span></figcaption>
      </figure>
    </section>
  </main>
</template>
<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import { gallery } from '../data/site'
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
</script>
