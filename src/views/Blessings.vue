<template>
  <main class="inner-page pattern-bg">
    <PageHeader title="祝福墙" subtitle="留下一句简单的话，就会成为这里的一部分。" icon="💌" />
    <section class="guestbook page-width">
      <form class="blessing-form" @submit.prevent="submit">
        <div class="form-row"><input v-model.trim="name" maxlength="20" placeholder="你的昵称" required /><input v-model.trim="message" maxlength="100" placeholder="写下祝福" required /></div>
        <button type="submit">送出祝福</button>
        <small>当前版本将留言保存在本机浏览器；接入云端后可公开同步。</small>
      </form>
      <div class="blessing-grid">
        <article v-for="item in blessings" :key="item.id" class="blessing-card">
          <span class="quote">“</span><p>{{ item.message }}</p><footer><strong>{{ item.name }}</strong><time>{{ item.date }}</time></footer>
        </article>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
type Blessing = { id: number; name: string; message: string; date: string }
const defaults: Blessing[] = [
  { id: 1, name: '一位朋友', message: '愿你们在普通的日子里，一直拥有稳定而温柔的幸福。', date: '2026.08.04' },
  { id: 2, name: 'Together', message: '欢迎来到我们的祝福墙。', date: '2026.08.04' },
]
const stored = localStorage.getItem('together-blessings')
const blessings = ref<Blessing[]>(stored ? JSON.parse(stored) : defaults)
const name = ref('')
const message = ref('')
const submit = () => {
  blessings.value.unshift({ id: Date.now(), name: name.value, message: message.value, date: new Date().toLocaleDateString('zh-CN').replaceAll('/', '.') })
  localStorage.setItem('together-blessings', JSON.stringify(blessings.value))
  name.value = ''
  message.value = ''
}
</script>
