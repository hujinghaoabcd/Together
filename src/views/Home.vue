<template>
<div>
 <HeroBanner/>
 <LoveCounter/>
 <div class="motto">历经千险，锐逾坚、啸润越峡东去。</div>
 <section class="grid">
  <FeatureCard v-for="item in items" :key="item.title" v-bind="item"/>
 </section>
</div>
</template>
<script setup lang="ts">
import HeroBanner from '../components/HeroBanner.vue'
import LoveCounter from '../components/LoveCounter.vue'
import FeatureCard from '../components/FeatureCard.vue'
const items=[
{title:'祝福墙',desc:'写下对我们的祝福',icon:'💌'},
{title:'点点滴滴',desc:'记录你我生活',icon:'📔'},
{title:'随笔说说',desc:'你言我语',icon:'📝'},
{title:'关于我们',desc:'我们的经历',icon:'🌍'},
{title:'恋爱清单',desc:'甜蜜瞬间有你陪伴',icon:'💗'},
{title:'相册',desc:'留住你我回忆',icon:'🖼️'}
]
</script>
<style scoped>
.grid{max-width:1200px;margin:35px auto;display:grid;grid-template-columns:repeat(3,1fr);gap:25px}.motto{max-width:1200px;margin:auto;background:#ffdfe7;border-radius:18px;text-align:center;padding:18px;font-size:22px}@media(max-width:800px){.grid{grid-template-columns:1fr}}
</style>