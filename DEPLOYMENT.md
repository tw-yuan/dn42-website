# 🚀 Cloudflare Pages 部署指南

## 🎯 部署步驟

### 方法一：透過 Git 連接自動部署（推薦）

1. **將程式碼推送到 GitHub/GitLab**
   ```bash
   git add .
   git commit -m "準備 Cloudflare Pages 部署"
   git push origin main
   ```

2. **在 Cloudflare Dashboard 設定**
   - 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 選擇 **Pages** → **建立專案**
   - 連接你的 Git 儲存庫

3. **建置設定**
   ```
   框架預設：Next.js (Static HTML Export)
   建置指令：npm run build
   建置輸出目錄：out
   Root目錄：/
   ```

4. **環境變數**（如果需要）
   ```
   NODE_VERSION=18
   NPM_VERSION=latest
   ```

### 方法二：手動上傳靜態檔案

1. **建置專案**
   ```bash
   npm run build
   ```

2. **壓縮 out 目錄**
   ```bash
   cd out
   zip -r ../website.zip .
   cd ..
   ```

3. **在 Cloudflare Pages 手動上傳**
   - 選擇 **上傳資源**
   - 拖拽 `website.zip` 檔案
   - 或選擇 `out` 目錄中的所有檔案

## ⚙️ 建置設定詳細說明

### package.json 指令
- `npm run dev` - 開發伺服器 (port 3003)
- `npm run build` - 建置靜態網站
- `npm run start` - 啟動產品伺服器（部署後不需要）

### Next.js 設定 (next.config.ts)
```typescript
{
  output: 'export',           // 輸出靜態檔案
  trailingSlash: true,        // URL 結尾加 /
  images: { unoptimized: true } // 圖片不優化（靜態部署）
}
```

### 檔案結構
```
out/                    # 建置輸出目錄
├── _headers           # Cloudflare 標頭設定
├── _redirects         # 路由重定向設定
├── _next/            # Next.js 靜態資源
├── *.html            # 靜態 HTML 頁面
└── assets/           # 圖片、CSS、JS 等
```

## 🌍 自訂域名設定

1. **在 Cloudflare Pages 中**
   - 前往專案設定 → **自訂域名**
   - 點擊 **設定自訂域名**

2. **DNS 設定**
   ```
   類型：CNAME
   名稱：@ (或 www)
   目標：your-project.pages.dev
   ```

3. **SSL/TLS 設定**
   - 模式：**完整 (嚴格)**
   - 一律使用 HTTPS：**開啟**

## 🔧 效能優化

### 快取設定
- 靜態資源：1年快取
- HTML 檔案：立即重新驗證
- CSS/JS：長期快取

### 檔案壓縮
- 自動 Gzip/Brotli 壓縮
- 圖片格式優化
- 程式碼最小化

## 📊 監控與分析

1. **Cloudflare Analytics**
   - 即時流量統計
   - 效能指標
   - 錯誤監控

2. **Web Vitals**
   - Core Web Vitals 追蹤
   - 使用者體驗指標

## 🚨 常見問題排除

### 建置失敗
```bash
# 檢查 Node.js 版本
node --version  # 應該 >= 18.17.0

# 清除快取重新安裝
rm -rf node_modules package-lock.json
npm install
```

### 路由問題
- 確認 `_redirects` 檔案存在於 `out/` 目錄
- 檢查 `trailingSlash: true` 設定

### 字體載入問題
- 確認 Google Fonts 在 `globals.css` 中正確載入
- 檢查 CDN 連線

## 💡 建議

1. **分支保護**
   - 主分支自動部署
   - 預覽分支測試

2. **效能監控**
   - 定期檢查 Lighthouse 分數
   - 監控載入時間

3. **安全性**
   - 啟用 Cloudflare 安全功能
   - 設定適當的 CSP 標頭

---
📝 **建立日期**: $(date)
🔗 **相關連結**: 
- [Cloudflare Pages 文件](https://developers.cloudflare.com/pages/)
- [Next.js 靜態輸出文件](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
