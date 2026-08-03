<template>
  <div class="app-shell">
    <AppHeader />
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <footer class="site-footer">
      <strong>Together</strong>
      <span>把普通的日子，慢慢过成值得珍藏的故事。</span>
      <small>© {{ new Date().getFullYear() }} · Made with ♥</small>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>
