<template>
  <section class="counter">
    <p>♥ 我们已经一起走过 ♥</p>
    <div class="time">
      <b>{{days}}</b> 天 <b>{{hours}}</b> 小时 <b>{{minutes}}</b> 分钟 <b>{{seconds}}</b> 秒
    </div>
    <div class="line"></div>
    <p>距离在一起二周年</p>
    <div class="time small">已过去 <b>{{days}}</b> 天 <b>{{hours}}</b> 小时 <b>{{minutes}}</b> 分钟</div>
  </section>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
const days=ref(1120),hours=ref(3),minutes=ref(41),seconds=ref(47)
function update(){
 const start=new Date('2023-07-12').getTime();
 const diff=Date.now()-start;
 days.value=Math.floor(diff/86400000);
 hours.value=Math.floor(diff/3600000)%24;
 minutes.value=Math.floor(diff/60000)%60;
 seconds.value=Math.floor(diff/1000)%60;
}
onMounted(()=>{update();setInterval(update,1000)})
</script>

<style scoped>
.counter{text-align:center;padding:40px 20px;color:#444}
.counter p{font-size:20px}
.time{font-size:28px;margin:20px}.time b{color:#ff718e;font-size:42px;margin:0 6px}.line{height:1px;background:#ffd1db;max-width:500px;margin:auto}.small{font-size:22px}
</style>