---
name: code-review
description: Review a diff, branch, or pull request for correctness, regressions, missing tests, and maintainability. Use whenever the user asks for a code review, review of a diff or PR, or wants a high-signal pre-merge pass that separates blockers from non-blocking concerns.
---

# Code Review

Use this skill to produce a high-signal review before code is merged, handed
off, or committed.

## Goals

- Find correctness and regression risk early
- Distinguish blockers from suggestions
- Use evidence from the diff and surrounding context
- Recommend the smallest useful follow-up actions
- Surface maintainability risks that are likely to matter after merge

## Workflow

1. Understand the intended change.

   Read the user request, issue, PRD, commit message, or branch context so the
   review is anchored to the purpose of the change.

2. Inspect the diff in context.

   Review the changed files plus the nearby code, tests, configuration, and
   interfaces needed to understand actual risk.

3. Check the highest-signal areas first.

   Prioritize:

   - correctness and edge cases
   - missing or weak tests
   - backward compatibility and migrations
   - security, auth, and data handling
   - performance or operability concerns
   - maintainability issues that materially raise future change risk

4. Separate findings by severity.

   Classify findings as:

   - blocking issue
   - significant suggestion
   - minor note

   Bias toward a few important findings. If something would not change whether
   the code should move forward, do not inflate it into a blocker.

5. Explain each finding concretely.

   For each finding, say:

   - what looks wrong or risky
   - why it matters
   - what would make it safe enough to proceed

6. Close with an overall assessment.

   Summarize readiness, missing validation, and the most important next step.

   Keep the review moderately detailed: enough explanation to justify each
   finding, but not so much that the signal gets buried.

## Output

Return:

- Overall assessment
- Blocking issues
- Suggestions
- Missing validation
- Recommended next step

## Guardrails

- Do not invent problems without evidence
- Do not nitpick style that tooling already enforces
- Prefer a few high-value findings over many shallow comments
- Distinguish confirmed defects from speculative risk
- Keep this skill review-focused; do not drift into deep issue triage unless the user asks
