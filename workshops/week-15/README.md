# Workshop Week 15 - Lint/Test Quality Gate Setup

## Problem

建立專案 ESLint + Jest 品質閘，確保核心功能（auth/bff/error paths）有可執行測試。

## Scope

- ESLint 設定與指令。
- Jest + Testing Library 基本配置。
- 撰寫至少 6 個有價值測試。

## Constraints

- 不可只測 happy path。
- 覆蓋 auth/bff/error 至少一條。
- 測試名稱需反映行為。

## Deliverables

- lint/test config
- test files
- `test-strategy.md`

## Cline Task

- 讓 Cline 先審查測試矩陣是否完整。
- 要求 Cline 指出 flakiness 來源。
- 人工驗證 mock 是否合理。

## Acceptance Criteria

- lint/test 指令可穩定執行。
- 關鍵路徑皆有測試。
- 測試可讀且可維護。
