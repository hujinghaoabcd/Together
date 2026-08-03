<template>
  <main class="inner-page pattern-bg">
    <PageHeader title="随笔说说" subtitle="一句话、一点心情，随手写下来。" icon="✏️" />
    <section class="notes-grid page-width">
      <article v-for="item in notes" :key="item.date + item.title" class="note-card">
        <time>{{ item.date }}</time><h2>{{ item.title }}</h2><p>{{ item.text }}</p><span>♥</span>
      </article>
    </section>
  </main>
</template>
<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue'
import { notes } from '../data/site'
</script>
