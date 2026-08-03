export const site = {
  title: 'Together',
  subtitle: '记录我们的点点滴滴',
  startDate: '2023-07-12T00:00:00+08:00',
  anniversaryMonth: 7,
  anniversaryDay: 12,
  motto: '日子不必轰轰烈烈，有你在身边就很好。',
  couple: {
    boy: { name: '杰杰', avatar: 'avatars/boy.svg' },
    girl: { name: '安安', avatar: 'avatars/girl.svg' },
  },
}

export const features = [
  { title: '祝福墙', desc: '写下对我们的祝福', icon: '💌', to: '/blessings', tone: 'rose' },
  { title: '点点滴滴', desc: '记录你我生活', icon: '📔', to: '/moments', tone: 'mint' },
  { title: '随笔说说', desc: '偶尔记录此刻心情', icon: '✏️', to: '/notes', tone: 'peach' },
  { title: '关于我们', desc: '我们的经历与故事', icon: '🌍', to: '/about', tone: 'blue' },
  { title: '恋爱清单', desc: '一起完成的小愿望', icon: '💗', to: '/wishlist', tone: 'lavender' },
  { title: '相册', desc: '留住每一段回忆', icon: '📷', to: '/gallery', tone: 'sky' },
]

export const story = [
  { date: '2023.07.12', title: '故事开始', text: '在一个普通的夏日，我们决定认真地走进彼此的生活。', icon: '♥' },
  { date: '2023.10.03', title: '第一次旅行', text: '第一次一起看陌生城市的夜景，也第一次拥有共同的旅行照片。', icon: '✈' },
  { date: '2024.02.14', title: '第一个情人节', text: '没有复杂安排，一顿饭、一束花，也足够成为难忘的一天。', icon: '✿' },
  { date: '2025.07.12', title: '第二个纪念日', text: '我们还在认真生活，也还在认真喜欢对方。', icon: '★' },
]

export const moments = [
  { date: '2026.08.01', title: '开始搭建 Together', text: '终于有了一个只属于我们的线上小空间。', tag: '生活' },
  { date: '2026.07.20', title: '周末散步', text: '天气不算凉快，但傍晚的风很好。', tag: '日常' },
  { date: '2026.06.18', title: '一起做晚饭', text: '卖相普通，味道意外不错。', tag: '下厨' },
]

export const notes = [
  { date: '08-01', title: '关于这个网站', text: '想把照片、清单和日常都放在同一个地方，简单一点，也长久一点。' },
  { date: '07-20', title: '傍晚', text: '很多时候没有特别的事情发生，但一起走一段路就觉得很好。' },
  { date: '06-18', title: '今天的晚饭', text: '两个人在厨房忙来忙去，是很具体的幸福。' },
]

export const initialWishlist = [
  { id: 1, text: '一起去看一次日出', done: true },
  { id: 2, text: '完成一趟没有攻略的旅行', done: true },
  { id: 3, text: '一起学会一道拿手菜', done: false },
  { id: 4, text: '去北方看一场大雪', done: false },
  { id: 5, text: '整理一本纸质照片册', done: false },
  { id: 6, text: '养一盆共同照顾的植物', done: true },
]

export const gallery = [
  { src: 'images/photo-1.svg', title: '校园午后', date: '2023.09', span: 'wide' },
  { src: 'images/photo-2.svg', title: '海边散步', date: '2023.10', span: '' },
  { src: 'images/photo-3.svg', title: '城市夜晚', date: '2024.01', span: '' },
  { src: 'images/photo-4.svg', title: '一起吃饭', date: '2024.05', span: 'wide' },
]
