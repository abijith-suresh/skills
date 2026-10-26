---
name: triage
description: 'Use when the user says "triage".'
metadata:
  summary: "Diagnose reported issues from evidence before choosing a fix."
---

# Triage

Explain why the reported behavior happens, with evidence a reviewer can check;
do not fix it. Stay read-only on product code, tickets, and shared environments
unless the user asked; local repros are fine. Redact secrets.

Tag every claim as **reported** (including the reporter's guess), **observed**,
**hypothesis**, or **untested**.

## Diagnose

1. **Reproduce** under the reported conditions (versions, dependencies, config,
   data) and record steps and results. Report a rate for intermittent bugs. If
   you cannot reproduce, say why and work from logs, code, and history; a failed
   attempt does not prove the bug is absent; a different failure is separate.
2. **Compete explanations.** Write at least two, including one the reporter did
   not suggest, and choose checks that tell them apart.
3. **Confirm a cause only with a traceable chain** from mechanism to symptom
   (file:line or observed output). Without one it stays a hypothesis.
4. **Bound the scope.** Name affected versions, paths, or users; mark untested.

## Delegate

If subagents are available, hand the investigation to one worker and keep the
parent for review; give one worker any experiment that touches shared state.
Give it the report verbatim, expected behavior, known facts, repo rules, and
scope limits. Work directly if the user asks, for a single-fact lookup, or
without subagents. Open the citations it returns, send uncited or contradictory
claims back as specific questions, and do not redo the investigation.

## Report (omit nothing; write "none" or "not tested")

- **Expected vs observed:**
- **Reproduction:** reproduced / partial / blocked, and how
- **Cause:** confirmed cause, or ranked remaining hypotheses
- **Evidence:** citations
- **Scope:** confirmed vs untested
- **Next step:** if blocked, the smallest missing input
