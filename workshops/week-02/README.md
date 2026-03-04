# Workshop Week 02 - Semantic Employee Form

## 開始前先看

- 開始步驟：[`workshops/START_HERE.md`](../START_HERE.md#start-checklist)
- 卡關處理：[`workshops/START_HERE.md`](../START_HERE.md#troubleshooting-flow)
- 建議先完成 10 分鐘 Start Checklist 再進入 Problem
- 今日紀錄模板：[`work-session-log-template.md`](../../templates/learner-ops/work-session-log-template.md)

## Problem

把舊版 `div` 堆疊表單改造成語意化、可鍵盤操作、可存取的員工建立表單。

## Scope

- 使用語意標籤建立頁面結構。
- 完整連結 `label` 與 `input`。
- 為驗證錯誤加入可被讀取的提示。

## Constraints

- 不使用 ARIA 取代原生語意（除非必要）。
- 必須可用 keyboard 完整操作。
- heading hierarchy 必須正確。

## Deliverables

- `employee-form.html`
- `a11y-audit.md`（列出問題與修復）
- Cline 對話摘要

## Cline Task

- 請 Cline 審查 HTML 結構是否語意正確。
- 請 Cline 只建議語意與可存取性修正，不改商業需求。
- 人工驗證每項建議。

## Acceptance Criteria

- 結構語意正確。
- 表單可鍵盤操作。
- 錯誤訊息可被輔助技術辨識。
