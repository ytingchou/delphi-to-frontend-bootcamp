# Week 08 - React 架構化實戰：表單、資料流、可測試性

## 本週目標

- 建立可維護的 React feature 結構。
- 完成中等複雜度表單（驗證、錯誤、提交狀態）。
- 以「可測試」驅動元件設計。

## 對 Delphi 工程師的重要性

從單一畫面轉為 feature/module 思維，會是接手 Next.js 專案的關鍵。這週要開始對齊真實團隊交付方式。

## 知識模組

1. Feature folder 與元件分層
2. Form state patterns
3. Error boundary 基礎概念
4. Testability by design

## 圖表（ASCII）

```text
UI Components <-> Hooks/State Logic <-> Service layer
```

## 建議節奏（20+ 小時）

- Day 1: component architecture patterns (4h)
- Day 2: form modeling and validation strategy (4h)
- Day 3: testability improvements (4h)
- Day 4: Workshop (5h)
- Day 5: Assignment + mini review (4h)

## 本週實作

- Workshop: [week-08](../workshops/week-08/README.md)
- Assignment: [week-08](../assignments/week-08/README.md)
- Rubric: [week-08](../rubrics/week-08.md)

## Cline 必做

- 讓 Cline 評估目前檔案分層是否過度耦合。
- 要求 Cline 先給測試案例再給實作建議。
- 人工判斷 Cline 是否引入過度抽象。

## 完成定義

- 能交付一個有表單、驗證、錯誤狀態的 React feature。
- 能提供可執行的測試案例與元件邏輯切分理由。

## 參考資料

- React forms: <https://react.dev/reference/react-dom/components/input>
- Testing Library intro: <https://testing-library.com/docs/react-testing-library/intro/>
