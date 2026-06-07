# diagnose

Disciplined debugging loop for hard bugs and performance regressions in the current repo.

## What This Skill Covers

- **Feedback-loop first** — constructs a deterministic, agent-runnable pass/fail signal before any hypothesis
- **Reproduce → minimise → hypothesise → instrument** — a phased loop that prevents premature commitment to a cause
- **Diagnosis separate from fix** — the cause is confirmed via the loop, not by guessing; the skill recommends but does not apply

## Install

```bash
npx skills add abijith-suresh/skills --skill diagnose
```

## Use

- "debug this"
- "diagnose this failing test"
- "the checkout endpoint is throwing 500s"
- "performance regressed after the last deploy"

## How it works

1. **Feedback loop** — build a fast, deterministic signal for the bug. Failing test, HTTP script, fixture diff, replay, harness.
2. **Reproduce** — confirm the bug actually reproduces; report succeeded, failed, or insufficient detail.
3. **Minimise** — shrink the repro to the smallest possible input and path.
4. **Hypothesise** — list candidate causes ranked by likelihood, each with a way to confirm or refute.
5. **Instrument** — if needed, add temporary observability to localise the cause.
6. **Recommend a fix** — smallest change at the root cause, with blast radius and test impact noted. Do not apply it.
