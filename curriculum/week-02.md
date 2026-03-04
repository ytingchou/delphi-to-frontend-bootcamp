# Week 02 - Semantic HTML、Form 與 Accessibility 基礎

## 本週目標

- 掌握 HTML 語意化標籤與文件結構。
- 建立表單欄位、驗證與錯誤訊息的正確模式。
- 理解可存取性（a11y）最小必要集合。

## 對 Delphi 工程師的重要性

前端 UI 不只是畫面，它還是資訊架構與可被輔助技術使用的語義系統。語意化做對，後續 CSS/React/測試都更穩定。

## 知識模組

1. Semantic Tags
- `header`, `main`, `nav`, `section`, `article`, `footer`
- heading hierarchy (`h1`~`h6`)

2. Forms
- `label` 與 `for`
- input types、required、aria-describedby
- 錯誤呈現與可讀性

3. Accessibility baseline
- Keyboard navigation
- Focus management
- Contrast 與可讀性

## 圖表（ASCII）

```text
Semantic HTML
  -> Better accessibility
  -> Better maintainability
  -> Better automated testing selectors
```

## 建議節奏（20+ 小時）

- Day 1: HTML 結構與語意 (4h)
- Day 2: Form 與 validation (4h)
- Day 3: A11y 基礎演練 (4h)
- Day 4: Workshop (5h)
- Day 5: Assignment + audit (4h)

## 本週實作

- Workshop: [week-02](../workshops/week-02/README.md)
- Assignment: [week-02](../assignments/week-02/README.md)
- Rubric: [week-02](../rubrics/week-02.md)

## Cline 必做

- 讓 Cline 對你的 HTML 結構做 a11y critique。
- 要求 Cline 提供「不改功能、只改語意」的重構 patch。
- 人工驗證 Cline 是否錯用 ARIA（常見錯誤）。

## 完成定義

- 可設計語意正確且可鍵盤操作的表單頁。
- 可指出至少 5 個常見 a11y 反模式並修正。

## 參考資料

- MDN HTML: <https://developer.mozilla.org/en-US/docs/Learn/HTML>
- MDN Accessibility: <https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides>
- WebAIM: <https://webaim.org/>
