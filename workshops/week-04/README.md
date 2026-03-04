# Workshop Week 04 - Async Data Fetch and Error UX

## 開始前先看

- 開始步驟：[`workshops/START_HERE.md`](../START_HERE.md#start-checklist)
- 卡關處理：[`workshops/START_HERE.md`](../START_HERE.md#troubleshooting-flow)
- 建議先完成 10 分鐘 Start Checklist 再進入 Problem
- 今日紀錄模板：[`work-session-log-template.md`](../../templates/learner-ops/work-session-log-template.md)

## Problem

實作「員工列表」資料載入流程，處理 loading/error/success 三態並可手動重試。

## Scope

- 使用 `fetch` 讀取 mock API。
- 顯示 loading skeleton。
- error state 需有錯誤訊息與 retry 按鈕。

## Constraints

- 不可只做 happy path。
- 必須有 timeout 機制或等效策略。
- 需記錄錯誤碼與簡要上下文。

## Deliverables

- `employees.js`
- `state-flow.md`（狀態圖）
- Cline 對話摘要

## Cline Task

- 要求 Cline 先給 state machine，再給實作。
- 請 Cline 提供 timeout 實作選項。
- 人工驗證 race condition 風險。

## Acceptance Criteria

- 三態切換正確。
- retry 行為穩定。
- 除錯紀錄完整。
