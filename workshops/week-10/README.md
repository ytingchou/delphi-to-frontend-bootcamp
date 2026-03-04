# Workshop Week 10 - RSC Boundary Implementation

## Problem

實作 dashboard：Server Component 抓資料，Client Component 負責互動；同時加入 streaming/loading。

## Scope

- 一個 server component page
- 兩個 client component（filter, interactive panel）
- 明確資料流設計

## Constraints

- 僅互動邏輯放 client。
- 不可把 secrets 放在 client。
- loading 與 error 需可驗證。

## Deliverables

- `boundary-map.md`
- `rsc-decisions.md`
- Cline 對話摘要

## Cline Task

- 讓 Cline 標註每個 component 邊界。
- 讓 Cline 評估 bundle 成本影響。
- 人工驗證 token/secret 安全。

## Acceptance Criteria

- Server/client 邊界清楚。
- 功能正常且資料流可解釋。
- streaming/loading 行為正確。
