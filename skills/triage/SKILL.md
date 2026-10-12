---
name: triage
description: >-
  Diagnose bug reports, incidents, and unexpected behavior when a cause is
  needed before deciding on a fix.
---

# Triage

A worker owns the diagnosis; the parent coordinates and reviews evidence.
Triage is analysis. Product or tracker changes require authorization;
delegation adds none. Keep probes separate from product edits and within
effects the user authorized.

## 1. Delegate first

- Honor explicit user delegation and model choices. If required delegation is
  unavailable, report the blocker.
- Otherwise, work directly only for an isolated single-fact lookup or when
  delegation is unavailable. State a one-line reason before investigating.
- For a diagnosis, dispatch one worker before investigating evidence or
  attempting reproduction. Prefer a lower-cost capable worker and announce
  the assignment.

The exception concerns the whole request, not the cost of its next command.
Reading the skill and report, locating the workspace, and requested source
synchronization may precede dispatch.

Give the worker the report, expected behavior, existing findings, accessible
context, scope, and repository rules. Ask only for missing decisions that
evidence cannot settle. Give shared-state experiments one owner.

## 2. Diagnose

The worker reproduces the symptom where feasible, matching reported conditions
and affected versions, including dependencies. It records steps and results,
with attempt counts or baselines when relevant. If reproduction is blocked,
it investigates accessible evidence and names the limitation. A failed attempt
does not establish absence; a different failure is a separate finding.

The worker tests competing explanations, including alternatives to the
reporter's guess. A confirmed cause connects a mechanism to the reported
symptom through source locations or observed results. It separates reported
claims, verified observations, hypotheses, and untested impact.

Keep findings in the conversation and redact sensitive details. Save diagnostic
files or log bundles only for a stated task need or required project convention.

## 3. Review

The parent reviews the worker's cited observations. Send missing citations,
conflicting observations, and untested claims back as bounded follow-up. Route
source inspection, reproduction, and checks through the worker. New logs and
user steering go to the same owner.

When only worker results remain, yield for completion notifications or use
wait/join. If neither is available, report pending work separately from findings.

## Finish

Finish when evidence supports a diagnosis or the next distinguishing check is
blocked. Return expected versus observed behavior, reproduction status, cause
or remaining hypotheses, supporting evidence, confirmed scope, uncertainty,
and the next step. If blocked, include what was checked and the smallest
missing input or check needed to proceed.
