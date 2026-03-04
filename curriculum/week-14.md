# Week 14 - Auth.js(next-auth) + Keycloak Provider（Server-Side OIDC）

## 本週目標

- 在 Next.js 15 App Router 實作 Auth.js + Keycloak provider。
- 完成 server-side session/token 讀取與保護頁面。
- 透過 BFF route handlers server-side 轉發 token，避免 browser 直接處理 token。

## 對 Delphi 工程師的重要性

這週是「懂 protocol」到「做出可用系統」的關鍵跳躍，直接對應未來專案的認證維運工作。

## 知識模組

1. Auth.js setup (`auth.ts`, handlers)
2. Session/JWT callbacks
3. Protected routes/middleware patterns
4. BFF + token forwarding + CORS risk reduction

## 圖表（ASCII）

```text
Browser -> Next.js(Auth.js) -> Keycloak
Browser -> Next.js BFF -> Backend API
(token stays on server side)
```

## 建議節奏（20+ 小時）

- Day 1: Auth.js setup (4h)
- Day 2: Keycloak provider integration (4h)
- Day 3: BFF token forwarding (4h)
- Day 4: Workshop (5h)
- Day 5: Assignment + security review (4h)

## 本週實作

- Workshop: [week-14](../workshops/week-14/README.md)
- Assignment: [week-14](../assignments/week-14/README.md)
- Rubric: [week-14](../rubrics/week-14.md)
- Reference example: [next-auth-keycloak](../references/examples/next-auth-keycloak/README.md)

## Cline 必做

- 讓 Cline 檢查 callback 裡是否有 token 洩漏風險。
- 請 Cline 產出 auth flow 故障排查表。
- 人工驗證 Cline 對 session type augmentation 的正確性。

## 完成定義

- 能完成登入/登出/保護頁存取。
- 能透過 server-side route handler 呼叫受保護 API。
- 能解釋為什麼這樣設計可減少 CORS 與安全問題。

## 參考資料

- Auth.js providers: <https://authjs.dev/getting-started/providers/keycloak>
- Next.js auth guide: <https://nextjs.org/docs/app/guides/authentication>
