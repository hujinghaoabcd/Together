<template>
  <main class="inner-page pattern-bg">
    <PageHeader title="随笔说说" subtitle="一句话、一点心情，随手写下来。" icon="✏️" />
    <section class="page-width">
      <form class="content-editor notes-editor" @submit.prevent="addNote">
        <div class="editor-heading">
          <div><strong>写一条随笔</strong><p>适合记录一句话、一个念头或此刻的心情。</p></div>
          <button class="editor-toggle" type="button" :aria-expanded="editorOpen" @click="editorOpen = !editorOpen">
            {{ editorOpen ? '收起' : '写一条' }}
          </button>
        </div>
        <div v-if="editorOpen" class="editor-fields">
          <label>日期<input v-model="form.date" type="date" required /></label>
          <label>标题<input v-model.trim="form.title" maxlength="36" placeholder="给这段话一个简单标题" required /></label>
          <label>内容<textarea v-model.trim="form.text" maxlength="220" placeholder="随手写下此刻想到的话……" required></textarea></label>
          <div class="editor-actions"><button class="primary-action" type="submit">保存随笔</button></div>
        </div>
      </form>

      <section class="notes-grid">
        <article v-for="item in list" :key="item.id" class="note-card editable-card">
          <time>{{ item.date }}</time><h2>{{ item.title }}</h2><p>{{ item.text }}</p><span>♥</span>
          <button class="card-remove" type="button" :aria-label="`删除随笔：${item.title}`" @click="removeNote(item.id)">×</button>
        </article>
      </section>
      <p v-if="!list.length" class="empty-state">这里还没有随笔，写下第一句话吧。</p>
      <div class="list-tools"><button class="mini-action" type="button" @click="restoreDefaults">恢复示例内容</button></div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { notes, type NoteItem } from '../data/site'
import { readStorage, resetStorage, STORAGE_KEYS, writeStorage } from '../composables/storage'

const today = () => new Date().toISOString().slice(0, 10)
const displayDate = (date: string) => date.replace(/-/g, '.')
const list = ref<NoteItem[]>(readStorage(STORAGE_KEYS.notes, notes))
const editorOpen = ref(false)
const form = reactive({ date: today(), title: '', text: '' })
const save = () => writeStorage(STORAGE_KEYS.notes, list.value)

const addNote = () => {
  if (!form.title || !form.text || !form.date) return
  list.value.unshift({ id: Date.now(), date: displayDate(form.date), title: form.title, text: form.text })
  save()
  form.title = ''
  form.text = ''
  editorOpen.value = false
}

const removeNote = (id: number) => {
  list.value = list.value.filter((item) => item.id !== id)
  save()
}

const restoreDefaults = () => {
  if (!window.confirm('确定恢复示例内容吗？当前浏览器里的自定义随笔会被清除。')) return
  resetStorage(STORAGE_KEYS.notes)
  list.value = readStorage(STORAGE_KEYS.notes, notes)
}
</script>
