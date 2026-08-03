<template>
  <main class="inner-page pattern-bg">
    <PageHeader title="关于我们" subtitle="没有传奇故事，只是两个人认真走过的日子。" icon="🌍" />
    <section class="timeline page-width">
      <article v-for="item in story" :key="item.date" class="timeline-item">
        <div class="timeline-dot">{{ item.icon }}</div>
        <div class="timeline-card"><time>{{ item.date }}</time><h2>{{ item.title }}</h2><p>{{ item.text }}</p></div>
      </article>
    </section>
  </main>
</template>
<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import { story } from '../data/site'
</script>
