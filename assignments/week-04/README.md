# Assignment Week 04 - Async Robustness Exercise

## Task

建立一個資料載入模組，能穩定處理成功、延遲、錯誤、取消請求。

## Required Output

- 實作檔案
- `async-state-diagram.md`
- `failure-handling-notes.md`

## Expected Solution Shape

- 明確 state transition。
- 含 timeout/retry。
- UI 對失敗情境有具體回饋。

## Cline Journey

1. 請 Cline 定義狀態機。
2. 讓 Cline 找 race condition 風險。
3. 人工驗證實際可重現與可修復。

## Submission Checklist

- [ ] 四種情境可重現
- [ ] 錯誤處理完整
- [ ] Cline 風險審查已完成
