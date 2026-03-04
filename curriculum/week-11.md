# Week 11 - Next.js Route Handlers 作為 BFF

## 本週目標

- 使用 `app/api/*/route.ts` 建立 BFF layer。
- 將 backend payload 轉換為前端穩定 DTO。
- 建立一致的 error mapping 與 status contract。

## 對 Delphi 工程師的重要性

Delphi 工程師擅長商業邏輯。BFF 是把這個優勢帶到前端專案的最佳橋樑，並可隔離前後端變動。

## 知識模組

1. Route Handler patterns
2. DTO mapping
3. Error handling contract
4. Cache/no-store/revalidate 概念

## 圖表（ASCII）

```text
UI -> /api/bff/orders -> Backend /orders
      (normalize + validate + map errors)
```

## 建議節奏（20+ 小時）

- Day 1: Route handler basics (4h)
- Day 2: DTO and schema mapping (4h)
- Day 3: error contract drills (4h)
- Day 4: Workshop (5h)
- Day 5: Assignment + API review (4h)

## 本週實作

- Workshop: [week-11](../workshops/week-11/README.md)
- Assignment: [week-11](../assignments/week-11/README.md)
- Rubric: [week-11](../rubrics/week-11.md)

## Cline 必做

- 讓 Cline 產出 error mapping table（upstream -> frontend）。
- 要求 Cline 列出 BFF security risks（header/token/logging）。
- 人工驗證 Cline 的 HTTP status 是否合理。

## 完成定義

- 能建立至少兩個 BFF endpoints 並有穩定 response shape。
- 能說明 BFF 對 CORS 與維護性的價值。

## 參考資料

- Next.js Route Handlers: <https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware>
- HTTP status reference: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>
