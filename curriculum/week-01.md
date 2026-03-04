# Week 01 - Web 平台心智模型與開發環境

## 本週目標

- 理解前端在整體系統中的位置（Browser、Server、API、CDN）。
- 建立本機開發環境（Node.js、pnpm/npm、Git、VS Code、DevTools）。
- 理解 HTTP request/response、status code、header、cookie 的基本行為。
- 建立「先觀察再修改」的維運習慣。

## 對 Delphi 工程師的重要性

Delphi 經驗很強在商業邏輯與穩定交付，但前端多了一層 Browser runtime、網路協定與 UI state。第一週先建立共同語言，避免直接進 React/Next.js 時失焦。

## 知識模組

1. Web Runtime 地圖
- Browser engine、DOM、CSSOM、JavaScript engine
- Static assets、API、BFF、CDN

2. HTTP 基礎
- Method: GET/POST/PUT/PATCH/DELETE
- Status: 2xx/4xx/5xx
- Cookies vs localStorage（先建立安全直覺）

3. 開發工具
- Node.js LTS、package manager
- Git 基本 workflow
- Chrome DevTools：Network/Console/Sources

4. 維運工程習慣
- 問題重現（reproduction first）
- 最小修改（minimal diff）
- 先寫驗收條件再改 code

## 圖表（ASCII）

```text
User -> Browser -> Next.js Server -> BFF/API -> DB
          |           |
          |           +-> SSR/RSC render
          +-> HTML/CSS/JS render & interactions
```

## 建議節奏（20+ 小時）

- Day 1: Web 架構與 HTTP 概念 (4h)
- Day 2: Node/Git/Editor/DevTools setup (4h)
- Day 3: Network tracing 與 bug reproduction 練習 (4h)
- Day 4: Workshop 實作 (5h)
- Day 5: Assignment + retrospective (4h)

## 本週實作

- Workshop: [week-01](../workshops/week-01/README.md)
- Assignment: [week-01](../assignments/week-01/README.md)
- Rubric: [week-01](../rubrics/week-01.md)

## Cline 必做

- 用 `templates/cline-prompts/workshop-execution.md` 生成實作計畫。
- 用 `templates/review-checklists/cline-response-review.md` 評估回覆品質。
- 交付一份 `Cline 盲點報告`（至少 3 點）。

## 完成定義

- 可口頭講清楚 request 從 browser 到 server 的流程。
- 可在 DevTools 找出 API 失敗原因（status/header/payload）。
- 可建立乾淨的開發環境並完成第一個靜態頁任務。

## 參考資料

- MDN Web 概念: <https://developer.mozilla.org/en-US/docs/Learn>
- MDN HTTP: <https://developer.mozilla.org/en-US/docs/Web/HTTP>
- Chrome DevTools: <https://developer.chrome.com/docs/devtools>
- Next.js App docs: <https://nextjs.org/docs/app>
