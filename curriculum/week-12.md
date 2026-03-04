# Week 12 - Next.js 維運能力：設定、觀測、交付

## 本週目標

- 理解環境變數、設定分層與部署注意事項。
- 建立基本 observability（logs、error tracing 思維）。
- 形成可交付的 PR/Release 習慣。

## 對 Delphi 工程師的重要性

能維護專案不只靠寫功能，還要能快速定位問題、估風險、穩定上線。這週是交付能力的關鍵補強。

## 知識模組

1. Env/config strategy (`.env`, secrets boundaries)
2. Logging standards and incident clues
3. Release checklist and rollback mindset
4. Performance basics (TTFB, hydration concerns)

## 圖表（ASCII）

```text
Code change -> lint/test -> review -> deploy -> monitor -> rollback(if needed)
```

## 建議節奏（20+ 小時）

- Day 1: config management (4h)
- Day 2: observability basics (4h)
- Day 3: release practice (4h)
- Day 4: Workshop (5h)
- Day 5: Assignment + runbook writing (4h)

## 本週實作

- Workshop: [week-12](../workshops/week-12/README.md)
- Assignment: [week-12](../assignments/week-12/README.md)
- Rubric: [week-12](../rubrics/week-12.md)

## Cline 必做

- 讓 Cline 審查 config/secrets 是否有暴露風險。
- 要求 Cline 生成 incident triage checklist。
- 人工驗證 Cline 的 rollback 建議是否可行。

## 完成定義

- 能提供 feature 交付所需的 release notes 與風險評估。
- 能建立最小可用的 incident runbook。

## 參考資料

- Next.js deployment docs: <https://nextjs.org/docs/app/getting-started/deploying>
- Next.js env vars: <https://nextjs.org/docs/app/guides/environment-variables>
