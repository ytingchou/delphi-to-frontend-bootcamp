# Week 10 - React Server Components (RSC) 深入

## 本週目標

- 精準區分 Server Components 與 Client Components。
- 理解 streaming/rendering 成本與邊界。
- 掌握 Next.js server-side data fetching 的正確模式。

## 對 Delphi 工程師的重要性

RSC 是 Next.js 現代專案的核心能力。能正確切分 server/client，直接影響效能、安全與維護成本。

## 知識模組

1. RSC execution model
2. `use client` 邊界與 bundle 成本
3. Server Actions（概念級）與 mutation 邊界
4. Streaming UI 與 loading state

## 圖表（ASCII）

```text
Server Component
  |- fetch data (server)
  |- compose Client Component props
Client Component
  |- interactivity only
```

## 建議節奏（20+ 小時）

- Day 1: RSC mental model (4h)
- Day 2: server/client boundary drills (4h)
- Day 3: streaming/loading behavior observation (4h)
- Day 4: Workshop (5h)
- Day 5: Assignment + performance notes (4h)

## 本週實作

- Workshop: [week-10](../workshops/week-10/README.md)
- Assignment: [week-10](../assignments/week-10/README.md)
- Rubric: [week-10](../rubrics/week-10.md)

## Cline 必做

- 請 Cline 對每個 component 標記 server/client 與理由。
- 要求 Cline 預估錯誤邊界處理方式。
- 人工檢查是否有 token/secrets 泄漏到 client。

## 完成定義

- 能完成一頁 RSC dashboard（含 loading/error）。
- 能說明為什麼某些邏輯必須停留在 server。

## 參考資料

- Server Components: <https://nextjs.org/docs/app/building-your-application/rendering/server-components>
- Client Components: <https://nextjs.org/docs/app/building-your-application/rendering/client-components>
