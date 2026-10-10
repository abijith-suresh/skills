---
name: triage
description: >-
  Analyze a reported issue to locate the failure, assess its cause, and recommend
  the next step. Use when asked to triage a report, find the issue reported in a
  link or message, or diagnose unexpected behavior.
---

# Triage

Investigate one reported issue and return a diagnosis supported by evidence,
or a precise account of what blocks it. Accept a report, link, identifier,
logs, or reproduction steps. No tracker or particular tool is required.

## Authorization

A request to triage covers analysis within the user's existing scope. Loading this
skill or a companion never expands that authorization. Do not infer permission
to implement fixes, commit, publish, or create, comment on, label, assign,
close, or otherwise update tracker items.

Use read-only inspection and local reproduction within the authorized
environment. Keep temporary fixtures or probes separate from product changes.
If reproduction requires unapproved external effects or shared-environment
changes, stop that experiment and name the required action in the next step.

## Establish the report

Read the report and relevant replies, attachments, and prior investigation.
Use supplied evidence before asking questions. If a link or identifier is
ambiguous, resolve it from context or ask which report the user means.

Record:

- Expected behavior and its basis, such as documentation, a contract, a prior
  working version, or the reporter's expectation. Mark unsettled intent.
- Observed behavior, exact errors or wrong output, trigger, and frequency.
- Version or revision, environment, inputs, and relevant configuration.
- What has already been tried, related reports or fixes, and missing evidence.

Distinguish the reporter's claims from observations you verify. If an attachment
or source is inaccessible, state the gap. Never invent its contents. If the
behavior may be intentional, explain the uncertainty before calling it a bug.

## Collect evidence and reproduce

Trace the reported action through the relevant code or system boundaries.
Inspect targeted logs, traces, tests, documentation, and history. Preserve
source links or file locations so another person can check each finding.
Redact secrets and personal data from commands, output, and artifacts you share.

Attempt the smallest reproduction that exercises the reported symptom in a
matching environment. Define a failure signal specific to that symptom. Record
the steps or command, conditions, expected result, actual result, and evidence.
A nearby failure or passing unrelated test does not verify the report.

Reduce inputs or steps one at a time while preserving the failure. For
intermittent behavior, record attempts and failures under stated conditions.
For performance reports, compare measurements against a relevant baseline.
Report reproduction as confirmed, not reproduced under the tested conditions,
or blocked. Failure to reproduce does not establish that the issue is absent.

## Test competing explanations

Form plausible hypotheses from the evidence, including alternatives to the
reporter's suspected cause. For each, state what supports it, what contradicts
it, and which observation would distinguish it from the alternatives.

Choose the next permitted experiment that separates the leading explanations.
Change one relevant variable at a time, record the prediction and result, and
update the hypotheses. Use targeted inspection or temporary local probes when
existing evidence cannot distinguish them. Stop when the evidence supports a
useful diagnosis or further progress needs missing access, data, or permission.

Call a cause demonstrated only when evidence connects its mechanism to the
reported symptom and distinguishes competing explanations. Code that looks
suspicious, timing correlation, or a related fix is a lead. If reproduction is
blocked, hypotheses may still guide the next check, but remain unverified.

## Assess scope and return findings

Check which versions, configurations, inputs, components, or user paths are
affected. Separate observed scope from suspected scope and untested cases.
Similar wording alone does not prove that two reports share a cause.

Lead with the diagnosis or blocker. Keep the result proportional to the issue
and include:

- Expected versus observed behavior and reproduction status.
- The strongest evidence, with links or locations and reproducible steps.
- Demonstrated causes, supported hypotheses, and unresolved alternatives.
- Confidence in the diagnosis and the evidence or gaps that justify it.
- Confirmed affected scope, likely impact, and what remains untested.
- A concrete next step, such as a targeted check, required artifact, access
  request, or proposed fix for separately authorized implementation.

When blocked, preserve partial findings and attempted checks. Name the missing
fact or capability and the smallest action that would distinguish the remaining
explanations. Ask a focused question if the user can supply it. Do not fill the
gap with a guessed root cause or silently proceed into fixing or tracker writes.

## Optional companion

If available, `research` can help verify dependency behavior against canonical
source. Without it, read the relevant official documentation or source directly
and record the version and evidence. Triage remains complete without a companion,
and any companion stays within the same authorization boundary.

## Sources

Adapted from these primary sources, with platform-specific orchestration,
tracker mutations, and implementation phases omitted:

- [pstack report triage](https://github.com/cursor/plugins/blob/ccb5507cec1546dc88135c1139c811e6c59115ba/pstack/automations/benny/skills/triage-issue-reports/SKILL.md)
- [pstack epistemics](https://github.com/cursor/plugins/blob/ccb5507cec1546dc88135c1139c811e6c59115ba/pstack/skills/why/references/epistemics.md)
- [mattpocock triage](https://github.com/mattpocock/skills/blob/49dd158d1076134a641b33efb035946536778336/skills/engineering/triage/SKILL.md)
- [mattpocock diagnosing-bugs](https://github.com/mattpocock/skills/blob/49dd158d1076134a641b33efb035946536778336/skills/engineering/diagnosing-bugs/SKILL.md)
