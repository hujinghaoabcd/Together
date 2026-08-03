<template>
  <main class="inner-page pattern-bg">
    <PageHeader title="恋爱清单" subtitle="一些已经完成的小幸福，和一些以后要做的事。" icon="💗" />
    <section class="wishlist-box page-width">
      <div class="progress-head"><strong>完成进度</strong><span>{{ doneCount }} / {{ list.length }}</span></div>
      <div class="progress"><i :style="{ width: progress + '%' }"></i></div>

      <form class="wish-add" @submit.prevent="addWish">
        <input v-model.trim="newWish" maxlength="60" placeholder="添加一个想一起完成的小愿望" aria-label="新的恋爱清单项目" />
        <button class="primary-action" type="submit" :disabled="!newWish">添加</button>
      </form>

      <label v-for="item in list" :key="item.id" class="wish-item" :class="{ done: item.done }">
        <input v-model="item.done" type="checkbox" @change="save" />
        <span class="check">✓</span>
        <span>{{ item.text }}</span>
        <button class="wish-remove" type="button" :aria-label="`删除清单项目：${item.text}`" @click.prevent="removeWish(item.id)">×</button>
      </label>

      <p v-if="!list.length" class="empty-state">清单还是空的，先添加一个小愿望吧。</p>
      <p class="local-tip">勾选和新增内容保存在当前浏览器中，可在“数据管理”页面备份。</p>
      <div class="list-tools">
        <button class="mini-action" type="button" @click="restoreDefaults">恢复默认清单</button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { initialWishlist } from '../data/site'
import { readStorage, resetStorage, STORAGE_KEYS, writeStorage } from '../composables/storage'

type WishItem = { id: number; text: string; done: boolean }

const list = ref<WishItem[]>(readStorage(STORAGE_KEYS.wishlist, initialWishlist))
const newWish = ref('')
const doneCount = computed(() => list.value.filter((item) => item.done).length)
const progress = computed(() => list.value.length ? Math.round(doneCount.value / list.value.length * 100) : 0)
const save = () => writeStorage(STORAGE_KEYS.wishlist, list.value)

const addWish = () => {
  if (!newWish.value) return
  list.value.push({ id: Date.now(), text: newWish.value, done: false })
  newWish.value = ''
  save()
}

const removeWish = (id: number) => {
  list.value = list.value.filter((item) => item.id !== id)
  save()
}

const restoreDefaults = () => {
  if (!window.confirm('确定恢复默认清单吗？当前浏览器里的自定义清单会被清除。')) return
  resetStorage(STORAGE_KEYS.wishlist)
  list.value = readStorage(STORAGE_KEYS.wishlist, initialWishlist)
}
</script>
