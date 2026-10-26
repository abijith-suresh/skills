---
name: prove-it
description: 'Use when the user says "prove it".'
metadata:
  summary: "Verify completion claims against observed behavior."
---

# Prove it

Verify a completion claim against observed behavior. The verifier runs checks
and records observations; the parent judges the claim. Verification alone
authorizes no product edits.

Dispatch a capable verifier before choosing checks, honoring explicit user
delegation and model choices; report a blocker if required delegation is
unavailable. Run directly only for one prescribed cheap check or when none can
be dispatched, and state why. Give the verifier the claim unchanged, the
supplied facts and access limits, and the rules below.

## Verify

Make the claim falsifiable: starting conditions, action or input, and expected
observable result. Expectations come from the user or an independent contract,
never from the implementation or its tests. A reported failure is reproduction
evidence.

Run the smallest meaningful check at the boundary that owns the claim: public
API, command, interaction, or stored result. For a fix, reproduce the failure
first where practical, then run the project checks the requested scope
requires. Reuse valid evidence until a change or gap makes it stale; keep
failures visible.

Confirm the version, instance, and cases ran, and observe results and side
effects. Mocks cover only mocked cases; builds and static checks leave runtime
behavior unverified. Report checks and commands inline; save only when required.

## Judge

A claim is verified when observations match, required checks pass, and failures
are resolved, within the observed environment and cases. Failed, blocked, and
untested claims stay unverified; send gaps back as bounded follow-up.

Present what ran, expected versus observed behavior, the verdict, and remaining
gaps. Stop when the claim is verified or its failure or blocker is established.
