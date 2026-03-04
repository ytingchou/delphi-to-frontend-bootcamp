# Assignment Week 10 - RSC Dashboard Delivery

## Task

開發一頁 RSC dashboard：server 端抓資料、client 端提供互動篩選，並保留 streaming/loading 體驗。

## Required Output

- dashboard 實作
- `rsc-boundary-report.md`
- `data-flow.md`

## Expected Solution Shape

- server/client 邊界有理有據。
- sensitive data 不進 client。
- loading/error path 可測。

## Cline Journey

1. 讓 Cline 為每個 component 標註邊界。
2. 讓 Cline 提供安全性檢查清單。
3. 人工核對是否符合 Next.js 實踐。

## Submission Checklist

- [ ] RSC 邊界清楚
- [ ] streaming/loading 正常
- [ ] 安全檢查完成
