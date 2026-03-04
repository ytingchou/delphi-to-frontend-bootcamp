# Week 09 - Next.js 15 App Router 入門到可維護

## 本週目標

- 理解 App Router 的 routing/layout/error/loading 機制。
- 掌握 server-first 的思維與檔案慣例。
- 建立頁面結構與共用 layout 的可維護實作。

## 對 Delphi 工程師的重要性

這週是從 React 單頁思維進入 Next.js 全端框架思維，後續 RSC/BFF/Auth 都建立在 App Router 慣例上。

## 知識模組

1. App Router conventions (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`)
2. Nested routes and route groups
3. Data fetching 在 App Router 的基本路徑
4. Error boundaries 和 not-found handling

## 圖表（ASCII）

```text
app/
  layout.tsx
  page.tsx
  (admin)/dashboard/page.tsx
  (admin)/dashboard/loading.tsx
  (admin)/dashboard/error.tsx
```

## 建議節奏（20+ 小時）

- Day 1: App Router structure (4h)
- Day 2: nested routes/layouts (4h)
- Day 3: loading/error patterns (4h)
- Day 4: Workshop (5h)
- Day 5: Assignment + refactor (4h)

## 本週實作

- Workshop: [week-09](../workshops/week-09/README.md)
- Assignment: [week-09](../assignments/week-09/README.md)
- Rubric: [week-09](../rubrics/week-09.md)

## Cline 必做

- 讓 Cline 先輸出 route tree，再開始寫 code。
- 請 Cline 指出哪些檔案應該 server component。
- 人工驗證 routing conventions 是否正確。

## 完成定義

- 能建立多層 layout + loading/error 的企業後台骨架。
- 能解釋 App Router 與 Pages Router 的關鍵差異。

## 參考資料

- Next.js App Router: <https://nextjs.org/docs/app>
- Route groups: <https://nextjs.org/docs/app/building-your-application/routing/route-groups>
