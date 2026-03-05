# Cline Playbook for This Bootcamp

## Objective

Use Cline to speed up learning and delivery while keeping human engineering judgment in control.

## Start Guides

- Workshop quick start: `workshops/START_HERE.md`
- Assignment quick start: `assignments/START_HERE.md`
- One-page quick SOP: `LEARNER_ONE_PAGE_SOP.md`
- Learner ops templates: `templates/learner-ops/`

## Golden Rules

- Ask Cline for plans and options first, not immediate final code.
- Always provide real context (file paths, constraints, framework versions).
- Never accept security-sensitive code without manual review.
- Require Cline to critique its own answer.

## Standard Weekly Loop

1. Clarify task and acceptance criteria.
2. Prompt Cline for implementation options.
3. Implement minimal version.
4. Run lint/tests or manual checks.
5. Ask Cline for reviewer-style critique.
6. Apply fixes and document tradeoffs.
7. Write retrospective.

## Prompt Patterns

Use these templates:

- `templates/cline-prompts/workshop-execution.md`
- `templates/cline-prompts/assignment-coach.md`
- `templates/cline-prompts/chapter-exercise-review.md`
- `templates/cline-prompts/pr-review.md`
- `templates/cline-prompts/learning-retrospective.md`

## Review Discipline

Always apply:

- `templates/review-checklists/cline-response-review.md`
- `templates/review-checklists/delivery-readiness.md`

## High-Risk Areas (Mandatory Human Review)

- Authentication and token handling
- Authorization checks (role-based behavior)
- API error mapping and status code contracts
- Test coverage claims made by Cline
- Refactors touching routing and data boundaries

## Anti-Patterns

- Blind copy-paste from Cline
- Over-abstracting too early
- Skipping failure-path tests
- Asking vague prompts without constraints

## Evidence to Keep Every Week

- Prompt used
- Cline response summary
- Accepted/rejected suggestions with reasons
- Bugs found after Cline suggestion
- Final improvements and lessons learned

Suggested evidence template:

- `templates/learner-ops/chapter-evidence-template.md`
