# Together 后续路线

## 当前版本

- Vue 3 + TypeScript + Vite
- GitHub Pages 静态部署
- 首页、祝福墙、点点滴滴、随笔、关于我们、恋爱清单、相册
- 祝福与清单使用浏览器本地存储

## 下一阶段

1. 替换真实头像、教室背景与相册照片。
2. 将昵称、日期、寄语、时间线和内容统一维护在 `src/data/site.ts`。
3. 为相册增加预览灯箱与键盘操作。
4. 为本地数据增加导出、导入与恢复默认功能。
5. 按需接入 Cloudflare Workers 或 Supabase，实现多人共享祝福。

## GitHub Pages

仓库设置中将 Pages 发布源设为 GitHub Actions。推送到 `main` 后自动构建部署。
