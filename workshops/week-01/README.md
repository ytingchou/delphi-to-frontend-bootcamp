# Workshop Week 01 - Web Request Tracing Lab

## Problem

你接手一個「員工查詢頁」但 API 不穩。請建立最小靜態頁，並用 DevTools 追蹤 3 種失敗情境（404、500、timeout）。

## Scope

- 建立一個含 header/main/footer 的靜態頁。
- 加上一個「模擬呼叫 API」按鈕（可用 mock endpoint）。
- 截圖並解釋每次失敗的 network trace。

## Constraints

- 不使用 framework（純 HTML/CSS/JS）。
- 不能跳過錯誤訊息 UI。
- 必須留下重現步驟文檔。

## Deliverables

- `index.html`, `styles.css`, `app.js`
- `debug-notes.md`（3 種失敗情境）
- Cline 對話摘要

## Cline Task

- 用 `templates/cline-prompts/workshop-execution.md` 先產出實作計畫。
- 要求 Cline 提供「如何在 DevTools 驗證」步驟。
- 以 `cline-response-review` checklist 審查。

## Acceptance Criteria

- 可在瀏覽器重現 3 種失敗。
- 每種失敗都有對應 UI 訊息與 log。
- 可清楚解釋 request lifecycle。
