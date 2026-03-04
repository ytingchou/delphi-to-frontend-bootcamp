# Cline Prompt Template - Workshop Execution

## Context

- Week: `<week-number>`
- Workshop goal: `<goal>`
- Current files: `<paths>`
- Constraints:
  - Do not change unrelated files.
  - Keep code simple and testable.
  - Follow ESLint rules.

## Prompt

```text
You are my pair programmer. I need to complete this workshop:
<problem statement>

Project context:
<project context>

Constraints:
<constraints>

Please respond in this format:
1) Plan (max 8 steps)
2) Minimal implementation proposal
3) Risks and edge cases
4) Test cases (unit/integration)
5) Self-review checklist
```

## Follow-up Prompt (Quality Challenge)

```text
Critique your previous solution as a senior reviewer.
List at least 5 potential issues grouped by severity.
Then propose a revised version.
```

## Follow-up Prompt (Debug)

```text
I got this error:
<error message>

Given the current code:
<relevant snippets>

Give me:
1) Most likely root cause
2) Verification steps
3) Minimal fix
4) Regression tests
```
