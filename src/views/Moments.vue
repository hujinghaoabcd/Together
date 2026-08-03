<template>
  <main class="inner-page pattern-bg">
    <PageHeader title="点点滴滴" subtitle="平常生活里的小事，也值得被好好记住。" icon="📔" />
    <section class="content-list page-width">
      <article v-for="item in moments" :key="item.date + item.title" class="content-card">
        <div class="date-badge">{{ item.date }}</div>
        <div><span class="tag">{{ item.tag }}</span><h2>{{ item.title }}</h2><p>{{ item.text }}</p></div>
      </article>
    </section>
  </main>
</template>
<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import { moments } from '../data/site'
</script>
