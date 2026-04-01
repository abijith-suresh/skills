# Triage Issue

Turn a bug report or failing behavior into an evidence-backed diagnosis and a
smallest-safe fix plan.

## When to Use

- A bug report is vague and you need to understand what is really happening.
- A failing behavior needs reproduction notes and likely root cause analysis.
- You want a diagnosis before writing a fix.
- You want the safest path into a test-first fix instead of guessing at patches.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/triage-issue
```

## Example Prompts

- "Use the triage-issue skill on this bug report."
- "Triage this failing behavior before we touch the code."
- "Use triage-issue and tell me the likely root cause and safest fix plan."
- "We do not fully reproduce this yet, but localize it and give me the safest next move."

## What It Produces

- Reproduction status
- Evidence and likely root cause
- A smallest-safe fix strategy
- Validation steps and remaining unknowns
- A clear handoff into `tdd` when the diagnosis is ready for implementation

## Works Well With

- `repo-onboarding` when the repo context is still unclear.
- `tdd` once the fix strategy is known.
- `code-review` before shipping the fix.

## Notes

- This skill is diagnosis-first; it is meant to reduce guessy bug fixing.
- It is most useful when tests, logs, or clear reproduction steps exist.
- If full reproduction is difficult, it should still localize the issue with evidence instead of stopping too early.
