# Triage Issue

Turn a bug report or failing behavior into an evidence-backed diagnosis and a
smallest-safe fix plan.

## When to Use

- A bug report is vague and you need to understand what is really happening.
- A failing behavior needs reproduction notes and likely root cause analysis.
- You want a diagnosis before writing a fix.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/triage-issue
```

## Install the Full Collection

```bash
npx skills@latest add abijith-suresh/skills
```

## Example Prompts

- "Use the triage-issue skill on this bug report."
- "Triage this failing behavior before we touch the code."
- "Use triage-issue and tell me the likely root cause and safest fix plan."

## What It Produces

- Reproduction status
- Evidence and likely root cause
- A smallest-safe fix strategy
- Validation steps and remaining unknowns

## Works Well With

- `repo-onboarding` when the repo context is still unclear.
- `tdd` once the fix strategy is known.
- `code-review` before shipping the fix.

## Notes

- This skill is diagnosis-first; it is meant to reduce guessy bug fixing.
- It is most useful when tests, logs, or clear reproduction steps exist.
