# Workshop Week 12 - Operational Readiness Drill

## 開始前先看

- 開始步驟：[`workshops/START_HERE.md`](../START_HERE.md#start-checklist)
- 卡關處理：[`workshops/START_HERE.md`](../START_HERE.md#troubleshooting-flow)
- 建議先完成 10 分鐘 Start Checklist 再進入 Problem
- 今日紀錄模板：[`work-session-log-template.md`](../../templates/learner-ops/work-session-log-template.md)

## Problem

為現有 Next.js feature 補上 release checklist、環境變數清單、基本觀測與 incident 快速排查流程。

## Scope

- 定義 env var matrix（local/staging/prod）。
- 加入結構化 logging 規範。
- 寫一份 minimal runbook。

## Constraints

- 不能把 secrets 寫入 repo。
- Runbook 要可實際操作。
- Logging 不得包含敏感資訊。

## Deliverables

- `env-matrix.md`
- `runbook.md`
- `release-checklist.md`

## Cline Task

- 要求 Cline 審查 runbook 完整性。
- 請 Cline 提供 incident triage flow。
- 人工驗證建議能否實作。

## Acceptance Criteria

- 發布與回滾流程可描述且可操作。
- env/config 管理清楚。
- 基本觀測與除錯路徑存在。
