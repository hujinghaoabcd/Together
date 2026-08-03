<template>
  <main class="inner-page pattern-bg">
    <PageHeader title="祝福墙" subtitle="留下一句简单的话，就会成为这里的一部分。" icon="💌" />
    <section class="guestbook page-width">
      <form class="blessing-form" @submit.prevent="submit">
        <div class="form-row">
          <input v-model.trim="name" maxlength="20" autocomplete="name" placeholder="你的昵称" required />
          <textarea v-model.trim="message" maxlength="160" placeholder="写下祝福，最多 160 字" required></textarea>
        </div>
        <button type="submit">送出祝福</button>
        <small>留言保存在当前浏览器中，可前往“数据管理”导出备份。</small>
      </form>

      <div v-if="blessings.length" class="blessing-grid">
        <article v-for="item in blessings" :key="item.id" class="blessing-card">
          <span class="quote">“</span>
          <p>{{ item.message }}</p>
          <footer>
            <strong>{{ item.name }}</strong>
            <time>{{ item.date }}</time>
            <button class="blessing-remove" type="button" :aria-label="`删除 ${item.name} 的祝福`" @click="remove(item.id)">×</button>
          </footer>
        </article>
      </div>
      <p v-else class="empty-state">祝福墙还是空的，写下第一句话吧。</p>

      <div class="list-tools">
        <button class="mini-action" type="button" @click="restoreDefaults">恢复示例祝福</button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { readStorage, resetStorage, STORAGE_KEYS, writeStorage } from '../composables/storage'

type Blessing = { id: number; name: string; message: string; date: string }

const defaults: Blessing[] = [
  { id: 1, name: '一位朋友', message: '愿你们在普通的日子里，一直拥有稳定而温柔的幸福。', date: '2026.08.04' },
  { id: 2, name: 'Together', message: '欢迎来到我们的祝福墙。', date: '2026.08.04' },
]

const blessings = ref<Blessing[]>(readStorage(STORAGE_KEYS.blessings, defaults))
const name = ref('')
const message = ref('')

const save = () => writeStorage(STORAGE_KEYS.blessings, blessings.value)

const submit = () => {
  if (!name.value || !message.value) return
  blessings.value.unshift({
    id: Date.now(),
    name: name.value,
    message: message.value,
    date: new Date().toLocaleDateString('zh-CN').replace(/\//g, '.'),
  })
  save()
  name.value = ''
  message.value = ''
}

const remove = (id: number) => {
  blessings.value = blessings.value.filter((item) => item.id !== id)
  save()
}

const restoreDefaults = () => {
  if (!window.confirm('确定恢复示例祝福吗？当前浏览器里的自定义祝福会被清除。')) return
  resetStorage(STORAGE_KEYS.blessings)
  blessings.value = readStorage(STORAGE_KEYS.blessings, defaults)
}
</script>
