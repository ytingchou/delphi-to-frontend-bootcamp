# Week 04 - JavaScript 基礎、非同步與除錯

## 本週目標

- 建立 JavaScript 核心語法與資料結構能力。
- 理解 event loop、promise、async/await。
- 能用 fetch 正確處理 loading/error/success。

## 對 Delphi 工程師的重要性

JS 是前端邏輯核心，且是事件驅動、非同步優先。必須先建立執行模型，否則 React/Next 問題會難以定位。

## 知識模組

1. JS fundamentals
- scope、closure
- object/array operations
- pure function vs side effect

2. Async model
- callback vs promise
- microtask queue 概念
- error propagation

3. Practical debugging
- breakpoints
- network + console correlation
- structured logging

## 圖表（ASCII）

```text
Call Stack -> Web APIs -> Task Queue -> Event Loop -> Call Stack
```

## 建議節奏（20+ 小時）

- Day 1: JS syntax/objects/functions (4h)
- Day 2: async/await + error handling (4h)
- Day 3: API integration drills (4h)
- Day 4: Workshop (5h)
- Day 5: Assignment + bug report writing (4h)

## 本週實作

- Workshop: [week-04](../workshops/week-04/README.md)
- Assignment: [week-04](../assignments/week-04/README.md)
- Rubric: [week-04](../rubrics/week-04.md)

## Cline 必做

- 請 Cline 生成 async bug 的最小重現案例。
- 讓 Cline 提出 3 種錯誤處理策略並比較。
- 你必須人工推導至少 1 次 event loop 執行順序。

## 完成定義

- 能寫出穩定的 fetch 流程（含 timeout/error UI）。
- 能讀懂 console/network 訊息並定位問題。

## 參考資料

- MDN JavaScript Guide: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide>
- MDN Promise: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>
- JavaScript.info async: <https://javascript.info/async>
