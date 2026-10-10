---
name: triage
description: >-
  Diagnose reported issues from evidence. Use when asked to triage a report or
  find the issue described in a link or message.
---

# Triage

Diagnose one reported issue from a report, link, identifier, logs, or
reproduction steps. Return an evidence-backed explanation or a useful blocked
next step. No tracker or particular tool is required.

Triage covers analysis within the user's scope. It does not authorize fixes,
commits, publishing, or tracker comments and updates. Loading a companion or
delegating work never expands authorization. Keep local probes separate from
product changes; experiments with unapproved external effects must wait.

## Diagnose

Establish expected versus observed behavior, the basis for the expectation,
and the relevant version, environment, trigger, and frequency. Read existing
replies and artifacts before asking for information already supplied. Ask the
user about intended behavior or decisions the code cannot resolve.

Follow evidence through the relevant code, logs, tests, and history. Preserve
source locations and distinguish reporter claims from verified observations.
Name inaccessible evidence and redact sensitive details from shared output.

Reproduce the reported symptom under matching conditions. Record the steps,
failure signal, and result. For intermittent or performance issues, preserve
attempt counts or baseline measurements. A nearby failure is a different
finding; failure to reproduce does not show that the issue is absent.

Test plausible explanations against observations that distinguish them.
Include alternatives to the reporter's guess and revise hypotheses when
evidence contradicts them. A demonstrated cause needs evidence connecting
its mechanism to the symptom; suspicious code or correlation is a lead.

Assess affected versions, inputs, configurations, and user paths. Separate
confirmed scope from suspected impact and untested cases.

## Finish

Stop when the evidence supports a useful diagnosis or progress needs missing
access, data, permission, or a user decision. When blocked, preserve findings
and attempted checks, label unverified hypotheses, and identify the smallest
question or experiment that would separate the remaining explanations.

Return reconciled findings with expected versus observed behavior, reproduction
status and evidence, demonstrated causes versus hypotheses, affected scope,
confidence and its limits, and a concrete next step. Proposing a fix does not
authorize implementing it or posting the findings to a tracker.

## Optional companions

When available and delegation is permitted, `subagents` can guide delegated
investigation. `research` can help verify dependency behavior against canonical
source. Triage owns the diagnosis and stopping criteria.

Neither companion is required. Without them, investigate directly when
permitted and read relevant official documentation or source. Use companions
only for analysis here; they must not route back into triage.
