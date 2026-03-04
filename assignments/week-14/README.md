# Assignment Week 14 - Server-Side Auth Integration

## Task

把 Auth.js + Keycloak 整合到 Next.js 專案，並透過 BFF 呼叫受保護 API，避免瀏覽器端處理 access token。

## Required Output

- auth 相關程式碼
- `auth-integration-notes.md`
- `cors-risk-analysis.md`

## Expected Solution Shape

- 登入/登出可運作。
- session 與角色資訊可在 server 端讀取。
- BFF route handler 代替 browser 直呼後端。

## Cline Journey

1. 讓 Cline 審查 auth callback。
2. 讓 Cline 提供 CORS 風險比較（直連 vs BFF）。
3. 人工驗證 token 未暴露到 client。

## Submission Checklist

- [ ] auth 功能完成
- [ ] server-side token handling 完成
- [ ] CORS 分析完成
