# Week 03 - CSS 佈局系統與 Tailwind CSS 入門

## 本週目標

- 掌握 box model、position、z-index、Flexbox、Grid。
- 建立 RWD 思維（mobile-first）。
- 使用 Tailwind CSS 完成可維護樣式。

## 對 Delphi 工程師的重要性

Delphi 常見 UI 是組件配置；前端要處理不同螢幕、字體、瀏覽器差異。CSS 先打底，後面 React/Next 才不會卡在樣式問題。

## 知識模組

1. CSS layout primitives
- block/inline/inline-block
- margin/padding/border/content
- stacking context

2. Responsive Design
- breakpoints
- fluid layout
- overflow control

3. Tailwind 基礎
- utility-first 思維
- 常用 spacing/typography/layout utilities
- 組件可讀性與 class 組織方式

## 圖表（ASCII）

```text
Raw CSS concepts -> Tailwind utilities -> Reusable UI patterns
```

## 建議節奏（20+ 小時）

- Day 1: Box model + flow (4h)
- Day 2: Flex/Grid 深入 (4h)
- Day 3: Tailwind + responsive patterns (4h)
- Day 4: Workshop layout implementation (5h)
- Day 5: Assignment + visual QA (4h)

## 本週實作

- Workshop: [week-03](../workshops/week-03/README.md)
- Assignment: [week-03](../assignments/week-03/README.md)
- Rubric: [week-03](../rubrics/week-03.md)

## Cline 必做

- 讓 Cline 比較兩種 layout 實作（Flex vs Grid）並給 tradeoff。
- 要求 Cline 對 Tailwind class 命名可讀性提出改善建議。
- 檢查 Cline 是否產生重複 utility 或不必要 wrapper。

## 完成定義

- 能在 desktop/mobile 皆正確顯示 dashboard layout。
- 能說明何時用 Flex、何時用 Grid。

## 參考資料

- MDN CSS: <https://developer.mozilla.org/en-US/docs/Learn/CSS>
- Tailwind docs: <https://tailwindcss.com/docs>
- Tailwind + Next.js: <https://tailwindcss.com/docs/guides/nextjs>
