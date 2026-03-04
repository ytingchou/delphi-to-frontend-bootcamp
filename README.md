# Delphi-to-Frontend Bootcamp (Cline-First)

A 16-week, production-grade bootcamp for a senior Delphi engineer (frontend baseline: zero) to become capable of maintaining a `Next.js 15 + App Router` project.

## Goals

- Build solid web fundamentals (HTML/CSS/JavaScript/HTTP/browser runtime).
- Build practical frontend engineering habits with TypeScript, React, Next.js, Tailwind CSS, ESLint, and Jest.
- Implement secure authentication with OIDC Authorization Code Flow using `Auth.js (next-auth)` + Keycloak provider.
- Learn to use Cline as a core learning and delivery accelerator (not passive AI usage).
- Reach delivery readiness for real project onboarding under time constraints.

## Audience

- Experienced backend/desktop engineer (Delphi) with little to no frontend background.
- Needs to start maintaining existing Next.js codebase quickly without sacrificing quality.

## Program Format

- Duration: **16 weeks**
- Weekly effort: **20+ hours**
- Language: **Traditional Chinese + English terms**
- Every week includes:
  - 1 curriculum module (`curriculum/week-XX.md`)
  - 1 workshop (`workshops/week-XX/README.md`)
  - 1 assignment (`assignments/week-XX/README.md`)
  - 1 rubric (`rubrics/week-XX.md`)
  - 1 mandatory Cline usage report

## Program Design Team (Agent Roles)

- CTO Agent: overall roadmap, sequencing, and delivery standards
- Frontend Architecture Agent: React/Next.js/RSC/BFF design
- Identity & Security Agent: OIDC/Auth.js/Keycloak integration guidance
- QA & Testing Agent: ESLint/Jest strategy and quality gates
- Learning Experience Agent: workshop and assignment scaffolding

## Learning Flow

```text
Learn concepts -> Workshop -> Assignment -> Cline review -> Fix & test -> Demo -> Retrospective
```

## Repository Structure

- `curriculum/`: Week-by-week lessons and diagrams
- `workshops/`: Guided hands-on tasks with constraints and acceptance criteria
- `assignments/`: Homework-style deliverables with submission checklist
- `rubrics/`: Scoring model and pass/fail standards
- `templates/cline-prompts/`: Reusable prompt templates for Cline
- `templates/review-checklists/`: Human review checklists for Cline output and release readiness
- `assets/diagrams/`: Shared diagrams (ASCII/Mermaid)
- `references/examples/next-auth-keycloak/`: Server-side OIDC reference snippets

## Start Here

1. Program overview: `README.md`
2. Weekly map: `curriculum/README.md`
3. Cline operating guide: `CLINE_PLAYBOOK.md`
4. Calendar and milestone gates: `BOOTCAMP_CALENDAR.md`
5. Auth/OIDC references: `references/README.md`
6. Mentor operations guide: `MENTOR_OPERATIONS.md`
7. Final project spec: `capstone/README.md`

## Weekly Progression

1. Web platform, tooling, and debugging foundation
2. Semantic HTML, forms, and accessibility
3. CSS layout system, responsive design, Tailwind fundamentals
4. JavaScript runtime, async model, and practical API usage
5. TypeScript core typing and narrowing
6. TypeScript advanced modeling and API contracts
7. React fundamentals and component lifecycle thinking
8. React architecture, testable forms, and data flow
9. Next.js 15 App Router fundamentals
10. React Server Components (RSC) and rendering boundaries
11. Route Handlers as BFF, DTO mapping, and error contracts
12. Operational readiness in Next.js projects
13. OIDC/OAuth2 and Authorization Code Flow
14. Auth.js + Keycloak server-side integration in Next.js
15. ESLint + Jest quality gates and CI behavior
16. Capstone: enterprise admin app with auth/BFF/testing

## Standard Scoring Dimensions

Each week uses the same dimensions (weights vary by week):

- `completeness`
- `code_quality`
- `test_quality`
- `security`
- `cline_usage_quality`
- `delivery_readiness`

## Diagrams

- ASCII diagrams in lesson files for guaranteed compatibility.
- Mermaid source is available in `assets/diagrams/` where useful.
- Diagram files:
  - `assets/diagrams/learning-journey.txt`
  - `assets/diagrams/rsc-bff-auth-flow.txt`
  - `assets/diagrams/oidc-auth-code-flow.mmd`
  - `assets/diagrams/cline-loop.mmd`

## Primary References

- Next.js docs: <https://nextjs.org/docs/app>
- React docs: <https://react.dev/learn>
- TypeScript handbook: <https://www.typescriptlang.org/docs/handbook/intro.html>
- Tailwind + Next.js: <https://tailwindcss.com/docs/guides/nextjs>
- ESLint docs: <https://eslint.org/docs/latest/use/getting-started>
- Jest docs: <https://jestjs.io/docs/getting-started>
- Auth.js Keycloak provider: <https://authjs.dev/getting-started/providers/keycloak>
- Keycloak OIDC: <https://www.keycloak.org/securing-apps/oidc-layers>
- OAuth 2.0 RFC 6749: <https://www.rfc-editor.org/rfc/rfc6749>
- OpenID Connect Core: <https://openid.net/specs/openid-connect-core-1_0-18.html>

## Suggested Cadence (20+ hr/week)

- 6h concept study + note taking
- 8h workshop implementation and debugging
- 4h assignment implementation/testing
- 2h Cline transcript review + retrospective

## Completion Criteria

Graduate is considered project-ready when:

- Can independently read and modify a Next.js App Router codebase.
- Can explain server/client boundaries and choose RSC/Client components correctly.
- Can route API calls through BFF and explain CORS/security tradeoffs.
- Can implement and troubleshoot OIDC login with Keycloak and Auth.js.
- Consistently passes lint/tests and submits high-quality PR notes with risk analysis.
