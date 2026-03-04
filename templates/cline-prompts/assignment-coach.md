# Cline Prompt Template - Assignment Coach

## Intent

Use Cline to coach, not to blindly generate final code.

## Prompt

```text
Act as a strict tech lead. Do NOT give full final answer first.
Guide me in checkpoints for this assignment:
<assignment>

My current understanding:
<what I know>

Please:
1) Ask me 3 diagnostic questions to check my understanding.
2) Give a milestone breakdown.
3) For each milestone, provide success criteria and common mistakes.
4) After I answer, give targeted hints instead of full solution.
```

## Verification Prompt

```text
Review my implementation against this rubric:
<rubric criteria>

Output:
- Pass/Fail per criterion
- Evidence from my code
- Concrete fixes
```
