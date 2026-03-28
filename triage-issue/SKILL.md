---
name: triage-issue
description: Investigate a bug report or failing behavior, gather evidence, identify the most likely root cause, and produce a smallest-safe fix plan with validation steps. Use whenever the user wants diagnosis before implementation, especially when a bug report is vague or reproduction is incomplete. Prefer this before `tdd` when the fix path is not yet clear.
---

# Triage Issue

Use this skill to turn a vague problem report into a grounded diagnosis and a
clear next action.

## Goals

- Separate symptoms from causes
- Gather evidence before proposing a fix
- Find the smallest safe change that addresses the issue
- Define how the fix should be validated
- Hand off cleanly to implementation once the diagnosis is strong enough

## Workflow

1. Capture the problem clearly.

   Identify the reported behavior, expected behavior, environment, and any known
   reproduction steps.

2. Try to reproduce or at least localize the issue.

   Use available tests, logs, stack traces, code paths, and configuration to
   narrow the surface area.

   If exact reproduction is not practical, keep narrowing with evidence instead
   of pretending the investigation failed.

3. Gather evidence.

   Record concrete observations from the repository, runtime output, or failing
   tests before forming strong conclusions.

4. Form and test hypotheses.

   Generate plausible causes, eliminate weaker ones, and explain why the most
   likely root cause fits the evidence.

5. Propose the smallest safe fix.

   The plan should explain:

   - what to change
    - why that change addresses the root cause
    - what collateral risk it introduces
    - what tests or checks must pass

   Stop at diagnosis plus a smallest-safe fix plan. If the user wants the fix
   implemented, hand off naturally to `tdd` when practical.

6. Package the result.

   Default to a short diagnosis summary that is easy to scan. Expand into a
   fuller markdown artifact only when the user wants something persistent.

## Output

Return:

- symptom summary
- reproduction status
- key evidence
- likely root cause
- smallest-safe fix strategy
- validation steps
- recommended next step, usually `tdd`

## Output Template

```md
# Triage: <Short Title>

## Symptom

What is going wrong.

## Reproduction Status

- Confirmed locally / not confirmed locally / partially confirmed

## Evidence

- Observation 1
- Observation 2

## Likely Root Cause

Explain the most likely cause and why it fits the evidence.

## Fix Strategy

Describe the smallest safe change.

## Validation

- Test step 1
- Test step 2

## Unknowns

- Remaining uncertainty
```

## Guardrails

- Separate observations from guesses
- Do not claim certainty without evidence
- Keep triage focused on diagnosis before implementation
- Do not drift into broad refactoring unless the evidence shows structure is the real problem
