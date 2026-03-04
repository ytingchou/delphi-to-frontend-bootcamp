# Workshop Week 07 - React Employee List Feature

## Problem

建立員工列表功能：搜尋、篩選、選取，並保持單向資料流與元件可讀性。

## Scope

- 拆分至少 4 個元件。
- 父層管理狀態，子層透過 props/event 溝通。
- 加入空狀態與錯誤提示。

## Constraints

- 避免把所有 state 塞在一個元件。
- effect 使用要有明確目的。
- 禁止不必要 re-render。

## Deliverables

- `EmployeeListFeature.tsx`
- 元件拆分結構圖
- `state-decisions.md`

## Cline Task

- 先讓 Cline 評估 state placement。
- 再請 Cline 提供組件拆分建議。
- 人工審核是否過度抽象。

## Acceptance Criteria

- 功能可用且邏輯清楚。
- 元件職責分明。
- 基本效能與可維護性可接受。
