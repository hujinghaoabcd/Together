<template>
  <RouterLink class="feature-card" :class="`tone-${tone}`" :to="to">
    <span class="feature-icon">{{ icon }}</span>
    <span class="feature-text"><strong>{{ title }}</strong><small>{{ desc }}</small></span>
    <span class="feature-arrow" aria-hidden="true">›</span>
  </RouterLink>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{ title: string; desc: string; icon: string; to: string; tone: string }>()
</script>
