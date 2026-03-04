# Week 07 - React 核心：元件、狀態、事件、Effect

## 本週目標

- 理解 React 元件模型與單向資料流。
- 掌握 state/props/event 的最小正確用法。
- 了解 effect 與資料同步的正確時機。

## 對 Delphi 工程師的重要性

Delphi 多為事件驅動 UI，但 React 更強調資料驅動畫面。把狀態設計好，比「把畫面做出來」更重要。

## 知識模組

1. Component composition
2. State lifting
3. Controlled components
4. Effect pitfalls（依賴陣列、重複請求）

## 圖表（ASCII）

```text
State -> Render UI -> User event -> State update -> Re-render
```

## 建議節奏（20+ 小時）

- Day 1: JSX + component basics (4h)
- Day 2: state/event modeling (4h)
- Day 3: effect and data fetching basics (4h)
- Day 4: Workshop (5h)
- Day 5: Assignment + refactor (4h)

## 本週實作

- Workshop: [week-07](../workshops/week-07/README.md)
- Assignment: [week-07](../assignments/week-07/README.md)
- Rubric: [week-07](../rubrics/week-07.md)

## Cline 必做

- 讓 Cline 先審查 state 設計，而不是直接寫 JSX。
- 要求 Cline 指出可能造成無限 re-render 的風險。
- 用 checklist 驗證 Cline 是否把 business rule 放錯層。

## 完成定義

- 能拆出可重用元件並維持資料流清楚。
- 能避免常見 effect 錯誤與不必要重渲染。

## 參考資料

- React Learn: <https://react.dev/learn>
- React Managing State: <https://react.dev/learn/managing-state>
- React Synchronizing with Effects: <https://react.dev/learn/synchronizing-with-effects>
