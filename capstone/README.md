# Capstone Specification - Enterprise Admin Console

## Scenario

Build a production-like internal admin console for employee and report management.

## Mandatory Requirements

- Next.js 15 with App Router
- Server Components + Client Components with explicit boundary decisions
- BFF via `app/api/*/route.ts`
- OIDC login using Auth.js + Keycloak provider
- Server-side token handling (no browser token exposure)
- ESLint clean run
- Jest test coverage for critical paths

## Functional Scope

- Login/Logout
- Protected dashboard page
- Employee list view (with filter/search)
- Admin report endpoint guarded by role
- Error and loading handling for all data views

## Non-Functional Scope

- Basic security hardening (auth checks, no secret leakage)
- Observability baseline (structured logs + debugging notes)
- Delivery docs (PR summary, risk and rollback plan)

## Required Artifacts

- Source code
- `architecture-decision-log.md`
- `risk-register.md`
- `test-strategy.md`
- `release-plan.md`
- `cline-learning-journey.md`

## Demo Format

- 20 minutes product + technical walkthrough
- 10 minutes reviewer Q&A

## Evaluation Focus

- Correctness
- Security posture
- Test quality
- Decision quality
- Ability to challenge and refine Cline output
