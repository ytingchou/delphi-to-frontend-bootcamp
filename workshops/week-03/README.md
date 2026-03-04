# Workshop Week 03 - Responsive Admin Layout

## 開始前先看

- 開始步驟：[`workshops/START_HERE.md`](../START_HERE.md#start-checklist)
- 卡關處理：[`workshops/START_HERE.md`](../START_HERE.md#troubleshooting-flow)
- 建議先完成 10 分鐘 Start Checklist 再進入 Problem
- 今日紀錄模板：[`work-session-log-template.md`](../../templates/learner-ops/work-session-log-template.md)

## Problem

製作企業後台首頁 layout，支援 desktop/mobile，並用 Tailwind 達成一致 spacing 與 typography。

## Scope

- Desktop: sidebar + topbar + content
- Mobile: drawer-like navigation + stacked content
- 建立 4 個可重用 UI 區塊（card/table/filter bar/action bar）

## Constraints

- 必須 mobile-first。
- 優先使用 utility classes，不額外寫大量 custom CSS。
- 不得出現水平捲軸。

## Deliverables

- `layout.html` 或框架頁面
- `style-decisions.md`
- Cline 對話摘要

## Cline Task

- 讓 Cline 比較 Flex/Grid 方案。
- 請 Cline 列出 RWD 斷點策略。
- 人工選擇可維護性最高方案。

## Acceptance Criteria

- 在 390px 與 1280px 都可讀、可操作。
- 主要區塊間距一致。
- Tailwind class 組織可讀。
