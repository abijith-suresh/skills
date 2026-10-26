---
name: prove-it
description: 'Use when the user says "prove it".'
metadata:
  summary: "Verify completion claims against observed behavior."
---

# Prove it

The verifier runs the checks and records observations; the parent judges the
claim. Verification alone authorizes no product edits.

## 1. Delegate first

- Honor explicit delegation and model choices. If required delegation is
  unavailable, report the blocker.
- Otherwise, run directly only for one already-prescribed cheap check or when
  delegation is unavailable. State the reason first.
- Otherwise, dispatch a capable verifier before investigating or choosing
  checks. Prefer lower cost and announce the assignment.

Judge the whole request, not its next command's cost. Reading the request and
locating the workspace may precede dispatch. Give checks that change a shared
instance one owner.

Fill only these fields in each assignment:

- Claim: the user's request and expected behavior unchanged.
- Context: supplied facts, workspace, environment, and access limits.
- Instructions: section 2 verbatim.

Context carries facts and access; verification instructions stay in section 2.

## 2. Verify the claim

Make the claim falsifiable with starting conditions, action or input, and
expected observable result. Derive expectations from the user or an independent
contract. A reported failure is reproduction evidence; the implementation and
test fixtures do not set the desired behavior.

Run the smallest meaningful check at the boundary that owns the claim, such as
the public API, command, user interaction, or stored result. For a fix,
reproduce the failure first when practical. Run project checks required for the
requested scope. Reuse valid evidence until a change, failure, or gap makes it
stale. Keep failed observations visible across retries.

Confirm the version, instance, and intended cases actually exercised. Observe
the result and relevant side effects. Mocks support only the mocked cases;
builds and static checks leave unexecuted runtime behavior unverified.

Run one-off checks inline and read their output from the tool response. Return
the commands or actions and actual observations. Create files only when the
behavior or project tooling requires them, or the user requests saved evidence;
state their purpose.

Finish when proportionate evidence addresses the requested scope. If blocked,
name the affected claim and smallest missing prerequisite. Continue independent
checks only when they help answer the request.

## 3. Judge and report

Compare the observations with the original expectation. A claim is verified
when observations match, required checks pass, and relevant failures are
resolved. Failed, blocked, and untested claims remain unverified. Keep the
conclusion within the observed environment and cases.

The parent may spot-check a specific claim; substantial verification stays
with the verifier. Send concrete gaps back as bounded follow-up. Forward new
evidence and user steering to the same owner.

When only verifier results remain, yield for completion notifications or use
wait/join. If neither is available, report pending work separately from findings.

Present what ran, expected versus observed behavior, the verdict, and remaining
gaps. Stop when the claim is verified or its failure or blocker is established.
