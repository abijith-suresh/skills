---
name: triage
description: >-
  Find the root cause of a bug report, failing test, incident, regression, or
  unexpected behavior before anyone proposes a fix. Use whenever the user
  shares an error, stack trace, or log, says something "stopped working",
  "broke after X", or "is flaky", or asks "why is this happening", even if they
  never say "triage" or "diagnose". Produces an evidence-backed diagnosis, not a patch.
---

# Triage

Explain why the reported behavior happens, with evidence a reviewer can check.
Don't fix it. A fix built on a guess is the most common way this goes wrong,
and a solid diagnosis is what makes the fix easy to review.

## Ground rules

- Stay read-only on the product and its systems. Don't edit product code,
  update tickets, or touch shared environments (prod, shared DBs, CI) unless
  the user asked. Scratch scripts and local repros are fine.
- Tag every claim as one of: **reported** (including the reporter's own guess),
  **observed** (you saw it), **hypothesis**, or **untested**. Readers act on
  your confidence, so it has to be legible.

## Who does the work

If subagents are available, hand the investigation to one worker and keep the
parent for review. This keeps the parent's context clean and gives you an
independent check on the evidence. Announce the assignment, then give the
worker: the report verbatim, expected behavior, anything already known, repo
rules, and scope limits. Let one worker own any experiment that touches shared
state so runs don't collide.

Work directly if the user asks you to, if there are no subagents, or for a
single-fact lookup.

## How to diagnose

1. **Reproduce** under the reported conditions (versions, dependencies, config,
   data). Record steps and results. For intermittent bugs, run it enough times
   to report a rate. If you can't reproduce, say why and work from logs, code,
   and history. A failed attempt doesn't prove the bug is absent, and a
   different failure is a separate finding.
2. **Compete explanations.** Write down at least two, including one the
   reporter didn't suggest. Choose checks that would tell them apart, not
   checks that merely confirm the favorite.
3. **Confirm a cause only with a traceable chain** from mechanism to symptom
   (file:line, or observed output). Without that chain it's a hypothesis.
4. **Bound the scope.** Which versions, paths, or users are affected? Mark
   what you didn't test.

## Review

Open the citations the worker gives you. Send anything uncited, contradictory,
or overclaimed back to the same worker as a specific question. Don't redo the
investigation yourself. If work is still running, report that separately from
findings.

## Report

Use this structure. Omit nothing; write "none" or "not tested" where needed.

**Expected vs observed:**
**Reproduction:** (reproduced / partial / blocked, and how)
**Cause:** (confirmed cause, or ranked remaining hypotheses)
**Evidence:** (citations)
**Scope:** (confirmed vs untested)
**Next step:** (if blocked: what was checked and the smallest missing input)

Keep findings in the conversation. Don't write files unless asked or the repo
requires it. Redact secrets and personal data.

## Example

Weak: "Probably a race condition in the cache layer."
Strong: "Confirmed: `cache.py:88` reads the entry after `evict()` at line 74
releases the lock. Observed in 14 of 50 runs with 8 threads, 0 of 50 with
1 thread. Untested: whether the async path hits the same code."
