<template>
  <main class="inner-page pattern-bg">
    <PageHeader title="相册" subtitle="照片会褪色，但拍下那一刻的心情不会。" icon="📷" />
    <section class="gallery-grid page-width">
      <figure
        v-for="(item, index) in gallery"
        :key="item.src"
        :class="item.span"
        tabindex="0"
        role="button"
        :aria-label="`预览照片：${item.title}`"
        @click="open(index)"
        @keydown.enter="open(index)"
        @keydown.space.prevent="open(index)"
      >
        <img :src="asset(item.src)" :alt="item.title" loading="lazy" />
        <figcaption><strong>{{ item.title }}</strong><span>{{ item.date }}</span></figcaption>
      </figure>
    </section>

    <Teleport to="body">
      <div v-if="activeItem" class="lightbox" role="dialog" aria-modal="true" aria-label="照片预览" @click.self="close">
        <button class="lightbox__close" type="button" aria-label="关闭预览" @click="close">×</button>
        <div class="lightbox__content">
          <button class="lightbox__nav" type="button" aria-label="上一张" @click="previous">‹</button>
          <figure class="lightbox__figure">
            <img :src="asset(activeItem.src)" :alt="activeItem.title" />
            <figcaption><strong>{{ activeItem.title }}</strong><span>{{ activeItem.date }}</span></figcaption>
          </figure>
          <button class="lightbox__nav" type="button" aria-label="下一张" @click="next">›</button>
        </div>
      </div>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { gallery } from '../data/site'

const activeIndex = ref<number | null>(null)
const activeItem = computed(() => activeIndex.value === null ? null : gallery[activeIndex.value])
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const open = (index: number) => { activeIndex.value = index }
const close = () => { activeIndex.value = null }
const previous = () => {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value - 1 + gallery.length) % gallery.length
}
const next = () => {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + 1) % gallery.length
}
const handleKeydown = (event: KeyboardEvent) => {
  if (activeIndex.value === null) return
  if (event.key === 'Escape') close()
  if (event.key === 'ArrowLeft') previous()
  if (event.key === 'ArrowRight') next()
}

watch(activeIndex, (value) => {
  document.body.style.overflow = value === null ? '' : 'hidden'
})
onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>
