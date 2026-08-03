# Together

一个不依赖 PHP 和数据库的情侣纪念网站，使用 Vue 3、TypeScript 和 Vite 构建，可直接部署到 GitHub Pages。

## 已实现

- 教室主题首页、双头像与恋爱计时器
- 下一纪念日倒计时
- 祝福墙、点点滴滴、随笔、关于我们、恋爱清单和相册
- 祝福与清单的浏览器本地保存
- 响应式布局与 GitHub Pages 自动部署
- 所有占位图片均为仓库内原创 SVG，不依赖外部 CDN

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

可修改昵称、相恋日期、寄语、时间线、日常、清单和相册数据。

替换资源：

```text
public/images/classroom.svg   顶部背景
public/avatars/boy.svg        左侧头像
public/avatars/girl.svg       右侧头像
public/images/photo-*.svg     相册图片
```

替换为 JPG、PNG 或 WebP 后，同时修改 `src/data/site.ts` 中的路径即可。

## GitHub Pages

工作流已经写入 `.github/workflows/deploy.yml`。在仓库设置中进入：

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

随后推送到 `main`，GitHub Actions 会自动构建并发布到：

```text
https://hujinghaoabcd.github.io/Together/
```

项目采用 Hash Router，因此子页面刷新不会产生 GitHub Pages 404。

## 动态功能说明

GitHub Pages 是静态托管。当前祝福墙和恋爱清单使用 `localStorage`，数据仅保存在访问者当前浏览器中。若需要多人共享留言，可在后续接入 Cloudflare Workers、Supabase 或 GitHub Discussions。
