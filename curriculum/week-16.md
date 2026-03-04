# Week 16 - Capstone：企業後台交付演練

## 本週目標

- 完成一個可演示、可測試、可維運的 Next.js 後台專題。
- 實作 RSC + BFF + OIDC + 品質閘整合。
- 完成「可交付」文件（PR 說明、風險、回滾、後續計畫）。

## 對 Delphi 工程師的重要性

這是正式接案前的壓力測試。重點不是做最多功能，而是在有限時間內做出穩定、可維護、可審查的成果。

## 專題需求（必達）

- Next.js 15 App Router
- RSC 與 Client Component 邊界合理
- Route Handlers 作為 BFF
- Auth.js + Keycloak OIDC 登入流程
- Server-side token handling
- ESLint 無 error
- Jest 核心測試覆蓋達標

## 圖表（ASCII）

```text
Feature delivery = Functionality + Security + Testability + Operability
```

## 建議節奏（20+ 小時）

- Day 1: scope freeze + architecture (4h)
- Day 2: core features implementation (5h)
- Day 3: auth + bff hardening (5h)
- Day 4: tests + lint + bug fixes (4h)
- Day 5: demo + retro + handover docs (4h)

## 本週實作

- Workshop: [week-16](../workshops/week-16/README.md)
- Assignment: [week-16](../assignments/week-16/README.md)
- Rubric: [week-16](../rubrics/week-16.md)

## Cline 必做

- 你要提交完整 Cline 對話摘要（需求拆解、除錯、審查、重構）。
- 人工標記至少 5 個 Cline 回覆不可靠之處與修正證據。
- 產出 final PR narrative（含風險與回滾方案）。

## 完成定義

- 通過所有驗收項目與 rubric 門檻。
- 可進行 20 分鐘技術 demo + 10 分鐘 reviewer 問答。
- 可清楚說明下一步自學路徑（TS/Next/Tailwind/Testing 深化）。

## 參考資料

- Next.js docs: <https://nextjs.org/docs/app>
- Auth.js docs: <https://authjs.dev/>
- Keycloak docs: <https://www.keycloak.org/documentation>
