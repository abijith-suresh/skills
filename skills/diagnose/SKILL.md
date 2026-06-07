---
name: diagnose
description: >-
  Disciplined debugging loop for hard bugs and performance regressions
  in the current repo.
  Use when asked to "debug this" or "diagnose this", reports a bug,
  says something is broken/throwing/failing, or describes a
  performance regression.
---

# Diagnose

A discipline for hard bugs. The phases are not optional. Skip one
only when you can justify why.

## What this is for

Use this skill when something is broken and the cause is not
obvious:

- a runtime error or exception
- a failing test
- a performance regression
- flaky behavior
- any case where you need to find the cause of unexpected behavior

## Phase 1 — Build a feedback loop

**This is the skill.** Everything else is mechanical. If you have a
fast, deterministic, agent-runnable pass/fail signal for the bug, you
will find the cause. If you don't, no amount of reading code will
save you.

Spend disproportionate effort here. Be aggressive. Be creative.
Refuse to give up.

Ways to construct one, in rough order of preference:

1. **Failing test** at whatever seam reaches the bug — unit,
   integration, or e2e.
2. **HTTP script** against a running dev server.
3. **CLI invocation** with a fixture input, diffing stdout against
   a known-good snapshot.
4. **Replay a captured trace** — save a real request/payload/log to
   disk; replay it through the code in isolation.
5. **Throwaway harness** — spin up a minimal subset of the system
   that exercises the bug path with one function call.
6. **Bisection harness** — if the bug appeared between two known
   states, automate "boot at state X, check, repeat" for
   `git bisect run`.

If you genuinely cannot construct a feedback loop, say so and ask
for help.

## Phase 2 — Reproduce

Before any hypothesis, confirm the bug actually reproduces. Read
the reporter's steps, follow them, run the loop. Report one of:

- **Reproduced** — with the exact path and feedback signal
- **Failed to reproduce** — with what you tried
- **Insufficient detail** — a strong signal to ask for more info

A confirmed repro is a 10x force multiplier for the rest of the
phases.

## Phase 3 — Minimise

Reduce the repro to the smallest possible input, code path, and
config. Cut out anything that doesn't change the outcome. The
smaller the repro, the fewer hypotheses survive.

## Phase 4 — Hypothesise

List the candidate causes ranked by likelihood. For each:

- the assumption it relies on
- how to confirm or refute it quickly via the feedback loop
- what you observed

Don't settle on a cause until the loop has ruled out the rivals.

## Phase 5 — Instrument

If hypotheses survive, add temporary instrumentation — logs,
asserts, breakpoints, tracepoints — to localise the cause. Use the
loop to make the bug observable. Keep instrumentation tight;
remove it after.

## Phase 6 — Recommend a fix

Once the cause is confirmed, recommend the smallest change that
addresses the root cause, not the symptom. Note:

- the fix surface and blast radius
- any tests that need updating
- any related code that may share the bug

Ask before applying the fix. Diagnosis and fix are separate
phases; don't blur them.

## Output

Respond in chat using this structure:

```markdown
## Symptom
## Repro
## Minimised repro
## Hypotheses
## Confirmed cause
## Recommended fix
```

## Rules

- Don't guess the cause. Build a feedback loop first.
- Don't present hypotheses as confirmed causes.
- Don't apply the fix. Diagnose and recommend, then stop.
- If you can't reproduce, say so and ask for more info.
- The smallest repro wins.
