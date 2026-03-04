# Assignment Week 06 - API Contract Typing Challenge

## 開始前先看

- 開始步驟：[`assignments/START_HERE.md`](../START_HERE.md#start-checklist)
- 卡關處理：[`assignments/START_HERE.md`](../START_HERE.md#troubleshooting-flow)
- 建議先完成 Start Checklist，再開始 Task
- 今日站會模板：[`daily-standup-template.md`](../../templates/learner-ops/daily-standup-template.md)

## Task

定義一組通用 API contract types，覆蓋 success/error，並在 2 個功能模組落地。

## Required Output

- `contracts.ts`
- `mappers.ts`
- `contract-decisions.md`

## Expected Solution Shape

- `Result<T, E>` 或等效可讀模型。
- 有錯誤分類與 mapping。
- 呼叫端可穩定分支處理。

## Cline Journey

1. 請 Cline 給簡單版與進階版 contract。
2. 要求 Cline 比較 long-term 維護成本。
3. 人工選擇並記錄理由。

## Submission Checklist

- [ ] Contract 可重用
- [ ] 失敗路徑可處理
- [ ] 決策文件完整
