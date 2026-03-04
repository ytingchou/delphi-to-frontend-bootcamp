# Assignment Week 11 - BFF Contract Hardening

## 開始前先看

- 開始步驟：[`assignments/START_HERE.md`](../START_HERE.md#start-checklist)
- 卡關處理：[`assignments/START_HERE.md`](../START_HERE.md#troubleshooting-flow)
- 建議先完成 Start Checklist，再開始 Task
- 今日站會模板：[`daily-standup-template.md`](../../templates/learner-ops/daily-standup-template.md)

## Task

為兩個 BFF endpoints 加上 DTO mapping、錯誤映射、防呆與測試。

## Required Output

- `app/api/bff/*/route.ts`
- `dto.ts` + `error-map.ts`
- `bff-contract.md`

## Expected Solution Shape

- 前端看到固定 response shape。
- upstream 錯誤不直接外洩。
- 錯誤碼與訊息策略一致。

## Cline Journey

1. 讓 Cline 先提出 contract schema。
2. 請 Cline 審查安全與維護風險。
3. 人工驗證 status 與 payload 穩定性。

## Submission Checklist

- [ ] contract 穩定
- [ ] error mapping 完整
- [ ] 風險報告完成
