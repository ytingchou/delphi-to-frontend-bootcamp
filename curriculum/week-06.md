# Week 06 - TypeScript 進階：Generics 與 API 契約

## 本週目標

- 掌握 generics、utility types、mapped types 基礎用法。
- 設計前後端契約型別與 DTO 映射策略。
- 建立「型別即文件」的維運習慣。

## 對 Delphi 工程師的重要性

這週是把「資料結構設計」能力轉換成 TS 可組合型別。重點是可讀、可維護，不是炫技型別體操。

## 知識模組

1. Generics 實用模式
2. Utility types (`Pick`, `Omit`, `Partial`, `Record`)
3. API contract typing
4. Error model typing（成功/失敗分支）

## 圖表（ASCII）

```text
Backend payload -> DTO mapper -> Domain model -> UI props
```

## 建議節奏（20+ 小時）

- Day 1: Generics drills (4h)
- Day 2: Utility types in real modules (4h)
- Day 3: API contract modeling (4h)
- Day 4: Workshop (5h)
- Day 5: Assignment + peer review (4h)

## 本週實作

- Workshop: [week-06](../workshops/week-06/README.md)
- Assignment: [week-06](../assignments/week-06/README.md)
- Rubric: [week-06](../rubrics/week-06.md)

## Cline 必做

- 請 Cline 提供兩種型別建模方案（簡單/進階）並比較維護成本。
- 對 Cline 產生的 generic helper 進行可讀性審查。
- 要求 Cline 補出失敗路徑的型別定義。

## 完成定義

- 能建立可復用 API client 型別與結果封裝。
- 能在 PR 中清楚描述型別設計決策。

## 參考資料

- TS Generics: <https://www.typescriptlang.org/docs/handbook/2/generics.html>
- TS Utility Types: <https://www.typescriptlang.org/docs/handbook/utility-types.html>
