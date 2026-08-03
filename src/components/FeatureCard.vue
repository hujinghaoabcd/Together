<template>
<div class="card">
 <div class="icon">{{icon}}</div>
 <div><h3>{{title}}</h3><p>{{desc}}</p></div>
 <span>›</span>
</div>
</template>
<script setup lang="ts">
defineProps<{title:string;desc:string;icon:string}>()
</script>
<style scoped>
.card{height:90px;background:white;border-radius:16px;box-shadow:0 6px 20px rgba(0,0,0,.06);display:flex;align-items:center;padding:0 25px;gap:18px}.icon{font-size:36px}.card h3{margin:0;font-size:20px}.card p{margin:6px 0;color:#999}.card span{margin-left:auto;font-size:28px;color:#aaa}
</style>