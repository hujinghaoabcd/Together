<template>
  <section class="counter section-pad" aria-live="polite">
    <p class="counter-title"><span>♥</span> 我们已经一起走过 <span>♥</span></p>
    <div class="time-row">
      <div v-for="item in elapsedItems" :key="item.label" class="time-unit">
        <strong :class="item.color">{{ item.value }}</strong><span>{{ item.label }}</span>
      </div>
    </div>
    <div class="counter-divider"><span>♥</span></div>
    <p class="counter-title secondary">距离下一次纪念日还有</p>
    <div class="time-row compact">
      <div v-for="item in remainingItems" :key="item.label" class="time-unit">
        <strong :class="item.color">{{ item.value }}</strong><span>{{ item.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { site } from '../data/site'

const now = ref(Date.now())
let timer: number | undefined

const split = (milliseconds: number) => {
  const safe = Math.max(0, milliseconds)
  return {
    days: Math.floor(safe / 86_400_000),
    hours: Math.floor(safe / 3_600_000) % 24,
    minutes: Math.floor(safe / 60_000) % 60,
    seconds: Math.floor(safe / 1_000) % 60,
  }
}

const nextAnniversary = computed(() => {
  const current = new Date(now.value)
  let year = current.getFullYear()
  let target = new Date(year, site.anniversaryMonth - 1, site.anniversaryDay)
  if (target.getTime() <= now.value) target = new Date(++year, site.anniversaryMonth - 1, site.anniversaryDay)
  return target.getTime()
})

const elapsed = computed(() => split(now.value - new Date(site.startDate).getTime()))
const remaining = computed(() => split(nextAnniversary.value - now.value))
const colors = ['pink', 'orange', 'blue', 'purple']
const toItems = (value: ReturnType<typeof split>) => [
  { value: value.days, label: '天', color: colors[0] },
  { value: String(value.hours).padStart(2, '0'), label: '小时', color: colors[1] },
  { value: String(value.minutes).padStart(2, '0'), label: '分钟', color: colors[2] },
  { value: String(value.seconds).padStart(2, '0'), label: '秒', color: colors[3] },
]
const elapsedItems = computed(() => toItems(elapsed.value))
const remainingItems = computed(() => toItems(remaining.value))

onMounted(() => { timer = window.setInterval(() => { now.value = Date.now() }, 1000) })
onUnmounted(() => window.clearInterval(timer))
</script>
