---
name: triage
description: >-
  Diagnose bug reports, incidents, and unexpected behavior when a cause is
  needed before deciding on a fix.
---

# Triage

Diagnose one reported issue from a report, link, identifier, logs, or
reproduction steps. Return an evidence-backed explanation or a useful blocked
next step. No tracker or particular tool is required.

Triage is analysis within the user's scope. It does not authorize fixes,
commits, publishing, or tracker updates. Delegation does not expand that
authorization. Keep probes separate from product changes and avoid experiments
with unapproved external effects.

## Investigate

Delegate the first substantive investigation. Prefer a less costly capable
worker, honoring the user's model preference. If delegation is unavailable,
perform the same bounded investigation directly and state that limitation.
Give the worker the report, supplied expectations and diagnosis, accessible
context, authorization limits, and a bounded question. Ask it to start with the
reported path, inspect relevant evidence, and reproduce the symptom under
matching conditions when feasible. It should record the steps, failure signal,
and result. For intermittent or performance issues, preserve attempt counts or
baseline measurements. If reproduction is unavailable, use the supplied logs,
artifacts, source, and other accessible evidence, and name what could not be
reproduced. A nearby failure is a separate finding, and failure to reproduce
does not show that the issue is absent. Expand the investigation when evidence
reveals a relevant gap. Check library behavior at the affected version when
the report implicates a library. Test explanations against distinguishing
observations, including alternatives to the reporter's guess. A conclusion is
a lead until evidence connects the mechanism to the reported symptom. The
worker returns concise findings with source locations or observations and
names evidence it could not access. Assign one owner to experiments that
change shared state.

Use standard tool output and findings in the conversation by default. Create
diagnostic files or log bundles only when the task needs them or an existing
project convention requires them, and state their purpose. Distinguish
reported claims from verified observations and confirmed scope from suspected
impact. Redact sensitive details in shared findings.

The parent coordinates requirements already supplied, asks only for decisions
the report and evidence cannot settle, resolves access gaps, and reconciles
conflicting or incomplete findings. It does not repeat source investigation,
reproduction, or checks assigned to a worker. It requests bounded follow-up
only for a concrete evidence gap, and may make a narrow spot-check when that
gap requires it. A narrow single lookup or check may be done directly when
dispatch and reporting would outweigh the work.

While workers run, coordinate and await their findings without taking over
their assignments. If the host supports notifications, yield or end the turn
when worker results are the only work left. Otherwise use the available wait
or join operation. If the host cannot wait, report what remains pending; do not
poll rapidly or present pending findings as established.

## Finish

Stop when the evidence supports a useful diagnosis or progress needs missing
access, data, authorization, or a user decision. When blocked, preserve what
was checked, label unverified explanations, and name the smallest next check
that would distinguish them.

Return expected versus observed behavior, reproduction status, evidence-backed
causes and hypotheses, affected scope, confidence and its limits, and a
concrete next step. Proposing a fix does not authorize implementing it or
posting findings to a tracker.
