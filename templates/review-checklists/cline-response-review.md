# Cline Response Review Checklist

Use this checklist for every workshop and assignment.

## A. Context Integrity

- [ ] Prompt included exact file paths and relevant constraints.
- [ ] Cline response references the same context (no hallucinated files/services).
- [ ] Assumptions are explicitly listed.

## B. Technical Correctness

- [ ] Proposed code aligns with framework version (`Next.js 15`, App Router).
- [ ] Types are coherent (`TypeScript` not bypassed with `any` without reason).
- [ ] Suggested logic handles error/empty/loading states.

## C. Security & Reliability

- [ ] No secret/token exposure in client-side code.
- [ ] Auth/session flow is server-side when required.
- [ ] API error handling avoids leaking sensitive internals.

## D. Testing Discipline

- [ ] Response includes unit/integration test suggestions.
- [ ] Edge cases are covered (invalid input, timeout, unauthorized, null data).
- [ ] Regression tests proposed for fixed bugs.

## E. Delivery Readiness

- [ ] Suggests small reviewable commits.
- [ ] PR summary/risk notes are present.
- [ ] Clear rollback or mitigation plan exists for risky changes.

## Verdict

- [ ] Accept as-is
- [ ] Accept with modifications
- [ ] Reject and reprompt Cline

## Notes

- Reviewer:
- Date:
- Most critical correction:
