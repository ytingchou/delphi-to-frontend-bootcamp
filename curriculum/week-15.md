# Week 15 - ESLint + Jest + CI 品質閘

## 本週目標

- 建立 ESLint 規範與自動化檢查。
- 使用 Jest/Testing Library 為關鍵邏輯補齊測試。
- 形成 CI-ready 的交付品質門檻。

## 對 Delphi 工程師的重要性

你即將進入真實交付，品質閘是壓力下維持穩定的保險。這週要把「會寫功能」提升成「可放心 merge」。

## 知識模組

1. ESLint config and rule rationale
2. Jest basics and test strategy pyramid
3. Testing RSC-adjacent logic via isolation
4. CI signal quality（快、準、可行動）

## 圖表（ASCII）

```text
Code -> lint -> unit test -> integration test -> PR review -> merge
```

## 建議節奏（20+ 小時）

- Day 1: lint rule tuning (4h)
- Day 2: unit test writing (4h)
- Day 3: integration scenario tests (4h)
- Day 4: Workshop (5h)
- Day 5: Assignment + CI notes (4h)

## 本週實作

- Workshop: [week-15](../workshops/week-15/README.md)
- Assignment: [week-15](../assignments/week-15/README.md)
- Rubric: [week-15](../rubrics/week-15.md)

## Cline 必做

- 讓 Cline 審查 test cases 是否只測 happy path。
- 要求 Cline 提供 flakiness 風險與修正策略。
- 人工評估 Cline 建議是否過度 mock。

## 完成定義

- 能建立 lint/test 腳本並通過。
- 能為 auth/BFF/error path 寫出有價值測試。

## 參考資料

- ESLint docs: <https://eslint.org/docs/latest/use/getting-started>
- Jest docs: <https://jestjs.io/docs/getting-started>
- Next.js Jest guide: <https://nextjs.org/docs/app/guides/testing/jest>
