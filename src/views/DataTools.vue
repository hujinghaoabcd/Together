<template>
  <main class="inner-page pattern-bg">
    <PageHeader title="数据管理" subtitle="备份这个浏览器里的祝福与清单，换设备时也能继续使用。" icon="🗂️" />
    <section class="data-tools page-width">
      <article class="data-panel">
        <div class="data-panel__icon">⬇</div>
        <div>
          <h2>导出备份</h2>
          <p>下载一个 JSON 文件，包含当前浏览器中的祝福墙和恋爱清单数据。</p>
        </div>
        <button class="primary-action" type="button" @click="downloadBackup">导出数据</button>
      </article>

      <article class="data-panel">
        <div class="data-panel__icon">⬆</div>
        <div>
          <h2>导入备份</h2>
          <p>选择此前导出的 Together 备份文件。导入后页面会自动刷新。</p>
        </div>
        <button class="secondary-action" type="button" @click="fileInput?.click()">选择文件</button>
        <input ref="fileInput" class="visually-hidden" type="file" accept="application/json,.json" @change="handleImport" />
      </article>

      <article class="data-panel danger-panel">
        <div class="data-panel__icon">↺</div>
        <div>
          <h2>恢复默认</h2>
          <p>清除当前浏览器保存的祝福和清单状态。仓库中的静态内容不会受到影响。</p>
        </div>
        <button class="danger-action" type="button" @click="clearData">清除本地数据</button>
      </article>

      <p v-if="message" class="data-message" role="status">{{ message }}</p>
      <aside class="privacy-note">
        <strong>数据说明</strong>
        <p>GitHub Pages 不提供数据库。当前数据仅保存在访问者自己的浏览器中，不会自动上传到仓库或第三方服务。</p>
      </aside>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { clearTogetherData, downloadBackup, importBackup } from '../composables/storage'

const fileInput = ref<HTMLInputElement | null>(null)
const message = ref('')

const handleImport = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file) return

  try {
    await importBackup(file)
    message.value = '导入成功，正在刷新页面……'
    window.setTimeout(() => window.location.reload(), 500)
  } catch (error) {
    message.value = error instanceof Error ? error.message : '导入失败，请检查文件格式'
  } finally {
    target.value = ''
  }
}

const clearData = () => {
  if (!window.confirm('确定清除当前浏览器中的祝福与清单数据吗？')) return
  clearTogetherData()
  message.value = '本地数据已清除，正在恢复默认内容……'
  window.setTimeout(() => window.location.reload(), 500)
}
</script>
