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
user only about missing or conflicting expectations or decisions the code
cannot resolve. Carry supplied expectations forward without asking for them
again.

Delegate substantive investigation by default. Give each worker a bounded
question, the report and relevant context, the evidence to inspect, and a
concrete finding to return.

Start with broad relevant investigation, then test competing explanations and
close specific evidence gaps. Workers may inspect different paths or evaluate
different hypotheses; assign one owner to any overlapping investigation. Keep
partial analysis internal, compare findings against the same symptom, and
follow up where evidence conflicts or leaves a gap. A worker's conclusion is a
lead until its supporting evidence connects the mechanism to the symptom.
Preserve source locations and distinguish reporter claims from verified
observations. Name inaccessible evidence and redact sensitive details from
shared output.

Keep scope, user decisions, and the combined result with the parent. Prefer a
less costly capable worker, honoring the user's model preferences. Include
applicable guidance and authorization limits in each brief, and use context
pointers only when the worker can access them. Keep coordination with the
parent and avoid repeating completed discovery. Parallelize independent work
and sequence dependencies. Trivial lookups or checks can stay direct when
worker setup and reporting would outweigh the work.

Run workers in the background when completion notifications are supported.
When only worker results remain, acknowledge the launch and end the turn; let
completion bring you back. Carry user steering into active work and keep
partial worker analysis internal. If notifications are unavailable, use the
supported completion mechanism and state the limitation. If delegation is
unavailable, perform the workflow directly and say so.

Reproduce the reported symptom under matching conditions. Record the steps,
failure signal, and result. For intermittent or performance issues, preserve
attempt counts or baseline measurements. A nearby failure is a different
finding; failure to reproduce does not show that the issue is absent.

Test plausible explanations against observations that distinguish them.
Include alternatives to the reporter's guess and revise hypotheses when
evidence contradicts them. A demonstrated cause needs evidence connecting its
mechanism to the symptom; suspicious code or correlation is a lead.

Assess affected versions, inputs, configurations, and user paths. Separate
confirmed scope from suspected impact and untested cases.

## Finish

Stop when the evidence supports a useful diagnosis or progress needs missing
access, data, permission, or a user decision. When blocked, preserve findings
and attempted checks, label unverified hypotheses, and identify the smallest
question or experiment that would separate the remaining explanations.

Return reconciled findings with expected versus observed behavior,
reproduction status and evidence, demonstrated causes versus hypotheses,
affected scope, confidence and its limits, and a concrete next step. Proposing
a fix does not authorize implementing it or posting the findings to a tracker.

`research` may help verify dependency behavior against canonical source when
useful. It is optional and analysis-only. Triage owns the diagnosis and stop
criteria; delegated work does not authorize fixes or tracker writes.
