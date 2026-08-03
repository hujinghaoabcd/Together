<template>
  <main class="inner-page pattern-bg">
    <PageHeader title="点点滴滴" subtitle="平常生活里的小事，也值得被好好记住。" icon="📔" />
    <section class="content-list page-width">
      <form class="content-editor" @submit.prevent="addMoment">
        <div class="editor-heading">
          <div><strong>记录一件小事</strong><p>内容只保存在当前浏览器中。</p></div>
          <button class="editor-toggle" type="button" :aria-expanded="editorOpen" @click="editorOpen = !editorOpen">
            {{ editorOpen ? '收起' : '写一条' }}
          </button>
        </div>
        <div v-if="editorOpen" class="editor-fields">
          <div class="editor-row editor-row--compact">
            <label>日期<input v-model="form.date" type="date" required /></label>
            <label>分类<input v-model.trim="form.tag" maxlength="12" placeholder="日常" required /></label>
          </div>
          <label>标题<input v-model.trim="form.title" maxlength="40" placeholder="今天发生了什么" required /></label>
          <label>内容<textarea v-model.trim="form.text" maxlength="240" placeholder="简单记下当时的心情……" required></textarea></label>
          <div class="editor-actions"><button class="primary-action" type="submit">保存记录</button></div>
        </div>
      </form>

      <article v-for="item in list" :key="item.id" class="content-card editable-card">
        <div class="date-badge">{{ item.date }}</div>
        <div><span class="tag">{{ item.tag }}</span><h2>{{ item.title }}</h2><p>{{ item.text }}</p></div>
        <button class="card-remove" type="button" :aria-label="`删除记录：${item.title}`" @click="removeMoment(item.id)">×</button>
      </article>

      <p v-if="!list.length" class="empty-state">这里还没有记录，写下第一件小事吧。</p>
      <div class="list-tools"><button class="mini-action" type="button" @click="restoreDefaults">恢复示例内容</button></div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { moments, type MomentItem } from '../data/site'
import { readStorage, resetStorage, STORAGE_KEYS, writeStorage } from '../composables/storage'

const today = () => new Date().toISOString().slice(0, 10)
const displayDate = (date: string) => date.replace(/-/g, '.')
const list = ref<MomentItem[]>(readStorage(STORAGE_KEYS.moments, moments))
const editorOpen = ref(false)
const form = reactive({ date: today(), tag: '日常', title: '', text: '' })
const save = () => writeStorage(STORAGE_KEYS.moments, list.value)

const addMoment = () => {
  if (!form.title || !form.text || !form.tag || !form.date) return
  list.value.unshift({ id: Date.now(), date: displayDate(form.date), tag: form.tag, title: form.title, text: form.text })
  save()
  form.title = ''
  form.text = ''
  editorOpen.value = false
}

const removeMoment = (id: number) => {
  list.value = list.value.filter((item) => item.id !== id)
  save()
}

const restoreDefaults = () => {
  if (!window.confirm('确定恢复示例内容吗？当前浏览器里的自定义记录会被清除。')) return
  resetStorage(STORAGE_KEYS.moments)
  list.value = readStorage(STORAGE_KEYS.moments, moments)
}
</script>
