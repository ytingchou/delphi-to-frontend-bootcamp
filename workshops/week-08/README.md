# Workshop Week 08 - React Form Architecture

## Problem

實作「建立員工」多欄位表單，含同步驗證、提交狀態、錯誤回饋。

## Scope

- 具備基本欄位驗證。
- 提交時顯示 pending 狀態。
- 錯誤回傳時顯示 user-friendly message。

## Constraints

- 表單邏輯與呈現分離。
- 不得把所有邏輯寫在 JSX。
- 必須具備可測試切入點。

## Deliverables

- `EmployeeCreateForm.tsx`
- `useEmployeeForm.ts`
- `form-test-plan.md`

## Cline Task

- 請 Cline 先輸出測試案例草案。
- 要求 Cline 指出表單架構風險。
- 人工驗證每項驗證規則是否符合需求。

## Acceptance Criteria

- 表單流程完整。
- 錯誤處理明確。
- 架構可測且可維護。
