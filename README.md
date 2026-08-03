# Together

一个不依赖 PHP 和数据库的情侣纪念网站，使用 Vue 3、TypeScript 和 Vite 构建，可直接部署到 GitHub Pages。

## 已实现

- 教室主题首页、双头像与恋爱计时器
- 下一纪念日自动倒计时
- 祝福墙、点点滴滴、随笔、关于我们、恋爱清单和相册
- 可新增、删除和恢复的本地祝福墙
- 可新增、删除和恢复的点点滴滴与随笔说说
- 可新增、勾选、删除和恢复的恋爱清单
- 相册灯箱预览，支持键盘方向键与 `Esc`
- 本地数据 JSON 导出、导入和清理
- 页面标题与描述随路由更新
- Favicon、Web App Manifest 与基础分享元数据
- 响应式布局、减少动画偏好支持和 GitHub Pages 自动部署
- 首页教室背景采用仓库内 WebP，其他占位图片为原创 SVG，不依赖外部 CDN

## 本地运行

```bash
npm install
npm run dev
```

构建检查：

```bash
npm run build
```

## 修改网站内容

主要配置集中在：

```text
src/data/site.ts
```

可修改：

- 网站标题与副标题
- 两个人的昵称和头像
- 相恋日期与纪念日
- 首页寄语
- 时间线、点滴、随笔、默认清单和相册数据

替换资源：

```text
public/images/classroom-hero.webp   顶部教室背景
public/avatars/boy.svg              左侧头像
public/avatars/girl.svg             右侧头像
public/images/photo-*.svg           相册图片
```

替换头像或相册为 JPG、PNG 或 WebP 后，同时修改 `src/data/site.ts` 中的路径即可。资源路径不要以 `/` 开头，项目会自动拼接 GitHub Pages 的 `/Together/` 基础路径。首页背景路径位于 `src/components/HeroBanner.vue`。

## 页面路由

项目采用 Hash Router，适合 GitHub Pages：

```text
#/                  首页
#/blessings         祝福墙
#/moments           点点滴滴
#/notes             随笔说说
#/about             关于我们
#/wishlist          恋爱清单
#/gallery           相册
#/data              数据管理
```

## 本地数据与备份

以下内容保存在当前浏览器的 `localStorage` 中：

- 祝福墙
- 恋爱清单
- 点点滴滴
- 随笔说说

访问“数据管理”页面可以：

- 导出 JSON 备份
- 从备份文件恢复
- 清除当前浏览器里的 Together 数据

这些数据不会自动同步到其他设备，也不会上传到 GitHub。需要多人共享留言时，可在后续接入 Cloudflare Workers、Supabase 或 GitHub Discussions。

## GitHub Pages

工作流位于：

```text
.github/workflows/deploy.yml
```

在仓库设置中进入：

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

随后推送到 `main`，GitHub Actions 会自动构建并发布到：

```text
https://hujinghaoabcd.github.io/Together/
```

## 项目文档

后续路线见：

```text
docs/ROADMAP.md
```
