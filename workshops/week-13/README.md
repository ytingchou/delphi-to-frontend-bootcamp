# Workshop Week 13 - Keycloak OIDC Lab

## 開始前先看

- 開始步驟：[`workshops/START_HERE.md`](../START_HERE.md#start-checklist)
- 卡關處理：[`workshops/START_HERE.md`](../START_HERE.md#troubleshooting-flow)
- 建議先完成 10 分鐘 Start Checklist 再進入 Problem
- 今日紀錄模板：[`work-session-log-template.md`](../../templates/learner-ops/work-session-log-template.md)

## Problem

在本機 Docker 啟動 Keycloak，建立 realm/client/user/role，並實際驗證 Authorization Code Flow。

## Scope

- 撰寫 `docker-compose.yml` 啟動 Keycloak。
- 建立 `bootcamp` realm 與 public/confidential client。
- 擷取 login+callback+token exchange 流程紀錄。

## Constraints

- redirect URI 必須明確設定。
- 不得將 client secret 暴露在瀏覽器端。
- 必須記錄至少 2 個故障案例。

## Deliverables

- `keycloak-setup.md`
- `flow-trace.md`
- `failure-cases.md`

## Cline Task

- 讓 Cline 檢查設定步驟是否漏項。
- 請 Cline 提供常見錯誤排查表。
- 人工對照官方 docs 驗證。

## Acceptance Criteria

- 可成功完成 code flow。
- 可重現並修復至少 2 個錯誤場景。
- 能口頭講清每一步驟。
