<template>
  <section class="hero" :style="{ backgroundImage: `url(${asset('images/classroom-hero.webp')})` }">
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
