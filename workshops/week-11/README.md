# Workshop Week 11 - BFF Route Handlers with DTO Mapping

## Problem

建立 `/api/bff/employees` 與 `/api/bff/reports`，統一後端回應格式並處理錯誤碼映射。

## Scope

- 建立兩個 route handlers。
- 實作 DTO 映射。
- 統一 error response contract。

## Constraints

- 不直接把 upstream payload 原封不動回傳。
- 不可洩漏內部錯誤細節。
- 必須處理超時/401/403/500 分支。

## Deliverables

- `route.ts` files
- `dto.ts`
- `error-map.md`

## Cline Task

- 要求 Cline 先輸出 error mapping table。
- 請 Cline 提供最小測試案例。
- 人工驗證 status code 正確性。

## Acceptance Criteria

- 回應結構一致。
- 錯誤 mapping 清楚。
- 可被前端穩定消費。
