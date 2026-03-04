# Week 05 - TypeScript 核心型別系統

## 本週目標

- 理解 TypeScript 對大型專案維護的價值。
- 掌握 `type`、`interface`、`union`、`literal`、`narrowing`。
- 能把 JavaScript 模組安全地遷移到 TypeScript。

## 對 Delphi 工程師的重要性

Delphi 開發者對型別的敏感度是優勢。這週重點是把既有型別思維轉成 TS 的 structural typing 與泛型慣用法。

## 知識模組

1. TS 基礎語法與推斷
2. 型別收斂（type narrowing）
3. null/undefined 安全處理
4. 資料模型與 API response 型別建模

## 圖表（ASCII）

```text
Unknown data -> Runtime checks -> Narrowed type -> Safe usage
```

## 建議節奏（20+ 小時）

- Day 1: TS syntax and tooling (4h)
- Day 2: Union/intersection/narrowing (4h)
- Day 3: Legacy JS to TS refactor (4h)
- Day 4: Workshop (5h)
- Day 5: Assignment + review (4h)

## 本週實作

- Workshop: [week-05](../workshops/week-05/README.md)
- Assignment: [week-05](../assignments/week-05/README.md)
- Rubric: [week-05](../rubrics/week-05.md)

## Cline 必做

- 讓 Cline 解釋它建議的型別設計理由。
- 強制 Cline 列出 `any` 出現位置與替代方案。
- 人工抽查至少 3 個 type guard 是否可靠。

## 完成定義

- 可完成一個 JS 模組到 TS 的遷移且無 type error。
- 可清楚解釋 union 與 narrowing 在真實 bug 預防上的作用。

## 參考資料

- TypeScript Handbook: <https://www.typescriptlang.org/docs/handbook/intro.html>
- Narrowing: <https://www.typescriptlang.org/docs/handbook/2/narrowing.html>
