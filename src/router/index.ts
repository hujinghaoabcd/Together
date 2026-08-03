import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home, meta: { title: '首页', description: 'Together：记录两个人的点点滴滴。' } },
    { path: '/blessings', component: () => import('../views/Blessings.vue'), meta: { title: '祝福墙', description: '写下对我们的祝福。' } },
    { path: '/moments', component: () => import('../views/Moments.vue'), meta: { title: '点点滴滴', description: '记录平常生活里的温暖小事。' } },
    { path: '/notes', component: () => import('../views/Notes.vue'), meta: { title: '随笔说说', description: '一些简短的日常想法。' } },
    { path: '/about', component: () => import('../views/About.vue'), meta: { title: '关于我们', description: '沿着时间线回看我们一起走过的日子。' } },
    { path: '/wishlist', component: () => import('../views/Wishlist.vue'), meta: { title: '恋爱清单', description: '记录已经完成和准备一起完成的小愿望。' } },
    { path: '/gallery', component: () => import('../views/Gallery.vue'), meta: { title: '相册', description: '用照片保存值得记住的时刻。' } },
    { path: '/data', component: () => import('../views/DataTools.vue'), meta: { title: '数据管理', description: '导出、导入或清理当前浏览器中的 Together 数据。' } },
    { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue'), meta: { title: '页面不存在', description: '没有找到这个页面。' } },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  document.title = `${String(to.meta.title ?? 'Together')} · Together`
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (description) description.content = String(to.meta.description ?? 'Together：记录两个人的点点滴滴。')
})

export default router
