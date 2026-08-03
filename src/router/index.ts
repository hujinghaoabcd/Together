import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home, meta: { title: '首页' } },
    { path: '/blessings', component: () => import('../views/Blessings.vue'), meta: { title: '祝福墙' } },
    { path: '/moments', component: () => import('../views/Moments.vue'), meta: { title: '点点滴滴' } },
    { path: '/notes', component: () => import('../views/Notes.vue'), meta: { title: '随笔说说' } },
    { path: '/about', component: () => import('../views/About.vue'), meta: { title: '关于我们' } },
    { path: '/wishlist', component: () => import('../views/Wishlist.vue'), meta: { title: '恋爱清单' } },
    { path: '/gallery', component: () => import('../views/Gallery.vue'), meta: { title: '相册' } },
    { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue'), meta: { title: '页面不存在' } },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  document.title = `${String(to.meta.title ?? 'Together')} · Together`
})

export default router
