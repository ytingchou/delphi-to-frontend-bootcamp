# Workshop Week 05 - JS to TS Migration Drill

## 開始前先看

- 開始步驟：[`workshops/START_HERE.md`](../START_HERE.md#start-checklist)
- 卡關處理：[`workshops/START_HERE.md`](../START_HERE.md#troubleshooting-flow)
- 建議先完成 10 分鐘 Start Checklist 再進入 Problem
- 今日紀錄模板：[`work-session-log-template.md`](../../templates/learner-ops/work-session-log-template.md)

## Problem

把一個既有 JS API 模組遷移到 TS，移除隱性型別風險，並補上 type guards。

## Scope

- 定義 request/response types。
- 為不可信資料加 runtime checks。
- 移除不必要 `any`。

## Constraints

- 必須開啟 strict mode。
- `any` 只能在有註解理由時使用。
- 型別命名需可讀且反映業務意義。

## Deliverables

- `api-client.ts`
- `type-guards.ts`
- `migration-notes.md`

## Cline Task

- 請 Cline 列出 `any` 位置與替代型別。
- 要求 Cline 比較 `type` vs `interface` 的選擇。
- 人工驗證 type guard 是否真的縮小型別。

## Acceptance Criteria

- 編譯無 TS error。
- 關鍵資料流有型別保護。
- 遷移說明清楚。
