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

Triage covers analysis within the user's scope. It does not authorize fixes,
commits, publishing, or tracker comments and updates. Loading a skill or
delegating work never expands that authorization. Keep local probes separate
from product changes; hold experiments with unapproved external effects.

## Establish the report

Record expected versus observed behavior, the basis for the expectation, and
the relevant version, environment, trigger, and frequency. Read existing
replies and artifacts first, and carry every supplied expectation forward
without asking for it again. Ask only about missing or conflicting
expectations and decisions the code cannot resolve, one question per decision.

## Gather evidence

Attempt to reproduce the reported symptom under matching conditions when
feasible. Record the steps, failure signal, and result. For intermittent or
performance issues, preserve attempt counts or baseline measurements. If
reproduction is blocked or unavailable, continue with the supplied logs,
artifacts, source, and other accessible evidence; name what could not be
reproduced. A nearby failure is a different finding, and failure to reproduce
does not show that the issue is absent.

## Diagnose

Delegate substantive investigation by default. Choose a capable worker at the
lowest cost that fits the task, honoring the user's model preference. If the
task is a narrow lookup or check whose dispatch and reporting would outweigh
the work, handle it directly. If delegation is unavailable, run the same
investigation directly and say so.

Give each worker a bounded question, the report and other context it can
access, the evidence to inspect, the authorization limits, and a concrete
finding with source locations or observations to return. Carry forward the
report, artifacts, and discovery already available instead of repeating
completed investigation. Use a broad sweep to map affected paths and the
version boundary, and identify observations that distinguish the leading
explanations. Then assign focused reads to answer the gaps it reveals.
Check that each supplied context pointer is accessible to the worker. If not,
include the relevant content in the brief; if that is not possible, do that
part directly or name the access gap.

If the report implicates a library, verify the claimed behavior in that
library's own source at the affected version. The default branch and current
documentation do not establish behavior in an older release.

Test plausible explanations against observations that distinguish them.
Include alternatives to the reporter's guess and revise hypotheses when
evidence contradicts them. Run independent read-only hypothesis checks in
parallel, even when they inspect the same files. Assign one owner to
experiments that change shared state. A worker's conclusion is a lead until
its evidence connects the mechanism to the reported symptom. Reconcile
findings against the same symptom, then follow up where evidence conflicts or
leaves a gap. Assess affected versions, inputs, configurations, and user
paths; separate confirmed scope from suspected impact and untested cases.
Preserve source locations, distinguish reporter claims from verified
observations, name inaccessible evidence, and redact sensitive details from
shared output.

Use background work when the harness supports completion notifications.
Acknowledge the dispatch and carry user steering into active work. Continue
useful investigation and reconciliation; with notifications, end the turn for worker completion
only when worker results are the only work left. If notifications are
unavailable, use an available wait or join operation when results are the
only work left. If the harness offers only status queries, check at meaningful work boundaries with time for
useful work between checks, never in rapid succession. If workers remain
active at turn end, report that limitation without presenting their findings.

## Finish

Stop when the evidence supports a useful diagnosis or progress needs missing
access, data, permission, or a user decision. When blocked, preserve findings
and attempted checks, label unverified hypotheses, and identify the smallest
question or experiment that would separate the remaining explanations.

Return expected versus observed behavior, reproduction status and evidence,
demonstrated causes versus hypotheses, affected scope, confidence and its
limits, and a concrete next step. Proposing a fix does not authorize
implementing it or posting findings to a tracker.
