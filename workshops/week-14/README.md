# Workshop Week 14 - Auth.js + Keycloak Integration

## 開始前先看

- 開始步驟：[`workshops/START_HERE.md`](../START_HERE.md#start-checklist)
- 卡關處理：[`workshops/START_HERE.md`](../START_HERE.md#troubleshooting-flow)
- 建議先完成 10 分鐘 Start Checklist 再進入 Problem
- 今日紀錄模板：[`work-session-log-template.md`](../../templates/learner-ops/work-session-log-template.md)

## Problem

在 Next.js App Router 中整合 Auth.js(Keycloak provider)，實作登入、登出、受保護頁與 server-side session 取用。

## Scope

- `auth.ts` provider/callbacks
- 登入與登出入口
- 保護 `/dashboard` 頁
- 透過 BFF route handler 轉發 token 呼叫後端

## Constraints

- token 僅在 server-side 使用。
- 必須有 unauthorized/forbidden UI 流程。
- session 型別需擴充明確。

## Deliverables

- auth integration code
- `auth-flow-debug.md`
- `security-notes.md`

## Cline Task

- 讓 Cline 審查 callback/token handling。
- 要求 Cline 列出 5 個安全風險點。
- 人工確認是否存在 token 洩漏。

## Acceptance Criteria

- 登入流程可用。
- 保護頁面與 BFF token forwarding 正常。
- CORS 風險描述正確。
