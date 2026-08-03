<template>
  <main>
    <HeroBanner />
    <section class="home-body pattern-bg">
      <LoveCounter />
      <MottoBar />
      <section class="feature-grid page-width" aria-label="功能入口">
        <FeatureCard v-for="item in features" :key="item.title" v-bind="item" />
      </section>
      <section class="home-note page-width">
        <span>今天也要认真生活</span>
        <p>这里不追求复杂，只想把值得记住的日子放在一起。</p>
      </section>
    </section>
    <FloatMenu />
  </main>
</template>
<script setup lang="ts">
import HeroBanner from '../components/HeroBanner.vue'
import LoveCounter from '../components/LoveCounter.vue'
import MottoBar from '../components/MottoBar.vue'
import FeatureCard from '../components/FeatureCard.vue'
import FloatMenu from '../components/FloatMenu.vue'
import { features } from '../data/site'
</script>
