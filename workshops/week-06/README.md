# Workshop Week 06 - Generic API Result Wrapper

## 開始前先看

- 開始步驟：[`workshops/START_HERE.md`](../START_HERE.md#start-checklist)
- 卡關處理：[`workshops/START_HERE.md`](../START_HERE.md#troubleshooting-flow)
- 建議先完成 10 分鐘 Start Checklist 再進入 Problem
- 今日紀錄模板：[`work-session-log-template.md`](../../templates/learner-ops/work-session-log-template.md)

## Problem

建立可重用的 API 結果封裝與錯誤模型，供多個 feature 共用。

## Scope

- 實作 `Result<T, E>` 模型。
- 定義 `ApiError` 類型與 mapping。
- 建立 2 個 endpoint 範例（成功/失敗）。

## Constraints

- 不可過度型別魔法，重可讀性。
- 必須支持細粒度錯誤分支處理。
- 文件要能讓新同事快速理解。

## Deliverables

- `result.ts`
- `errors.ts`
- `api-samples.ts`
- `design-note.md`

## Cline Task

- 要求 Cline 提供簡單版與進階版設計。
- 讓 Cline 列出可讀性 tradeoff。
- 人工選擇並記錄決策。

## Acceptance Criteria

- API 呼叫端可安全分支成功/失敗。
- 型別清晰且可復用。
- 有完整使用示例。
