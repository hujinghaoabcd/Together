<template>
  <main class="inner-page pattern-bg">
    <PageHeader title="恋爱清单" subtitle="一些已经完成的小幸福，和一些以后要做的事。" icon="💗" />
    <section class="wishlist-box page-width">
      <div class="progress-head"><strong>完成进度</strong><span>{{ doneCount }} / {{ list.length }}</span></div>
      <div class="progress"><i :style="{ width: progress + '%' }"></i></div>
      <label v-for="item in list" :key="item.id" class="wish-item" :class="{ done: item.done }">
        <input v-model="item.done" type="checkbox" @change="save" />
        <span class="check">✓</span><span>{{ item.text }}</span>
      </label>
      <p class="local-tip">清单勾选状态保存在当前浏览器中。</p>
    </section>
  </main>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { initialWishlist } from '../data/site'
const stored = localStorage.getItem('together-wishlist')
const list = ref(stored ? JSON.parse(stored) : structuredClone(initialWishlist))
const doneCount = computed(() => list.value.filter((item: { done: boolean }) => item.done).length)
const progress = computed(() => Math.round(doneCount.value / list.value.length * 100))
const save = () => localStorage.setItem('together-wishlist', JSON.stringify(list.value))
</script>
