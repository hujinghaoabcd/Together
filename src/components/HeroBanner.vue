<template>
  <section class="hero">
    <img
      class="hero-background"
      :src="asset('images/classroom.webp?v=20260804-2')"
      alt=""
      aria-hidden="true"
      loading="eager"
      decoding="async"
      fetchpriority="high"
    />
    <div class="hero-shade"></div>
    <div class="hero-copy">
      <span class="eyebrow">OUR LITTLE SPACE</span>
      <h1>{{ site.title }}</h1>
      <p>{{ site.subtitle }}</p>
    </div>
    <div class="couple" aria-label="情侣信息">
      <div class="person">
        <img :src="asset(site.couple.boy.avatar)" :alt="site.couple.boy.name" />
        <span>{{ site.couple.boy.name }}</span>
      </div>
      <div class="heart" aria-hidden="true">♥</div>
      <div class="person">
        <img :src="asset(site.couple.girl.avatar)" :alt="site.couple.girl.name" />
        <span>{{ site.couple.girl.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { site } from '../data/site'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
</script>

<style scoped>
.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 46%;
}

.hero-shade {
  z-index: 1;
}

.hero-copy,
.couple {
  z-index: 2;
}
</style>
