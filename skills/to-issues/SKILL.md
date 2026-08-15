---
name: to-issues
description: >-
  Converts a plan into flat, vertical-slice GitHub issues using the gh CLI.
  Use only when the user explicitly invokes the to-issues skill. Do not
  trigger from ordinary requests to discuss or decompose work.
---

# To Issues

## What this skill does
Reads the plan from the current conversation (or from `PLAN.md` if invoked
in a fresh session), breaks it into flat vertical-slice issues, previews
the full breakdown for approval, then creates each issue on GitHub using
the `gh` CLI.

## Label vocabulary
Every repo uses exactly these labels — nothing else, nothing invented:

- `bug` — something is broken
- `feature` — new functionality
- `chore` — maintenance, refactor, dependency updates

Every issue gets exactly one of these. Never create or apply any other label.

## Issue body template
Every issue uses this structure:

```
## What
[One sentence: what this slice delivers]

## Why
[One sentence: why this is needed]

## Steps
1. [Concrete step — name the file, function, and what changes]
2. ...

## Acceptance Criteria
- [ ] [Specific, verifiable condition]
- [ ] [Specific, verifiable condition]
```

## Steps

### 1. Find the plan
Look for the plan in the current conversation first. If the conversation
already contains a plan, use it. If invoked in a fresh session with no plan
in context, read `PLAN.md` from the project root.

### 2. Explore the codebase
If you have not already explored the codebase in this session, do so now.
Read files relevant to the plan's steps so that issue descriptions and
acceptance criteria are grounded in the actual code, not abstractions.

### 3. Slice the plan into vertical issues
Break the plan into the smallest independently implementable slices. Each
issue must:
- Cut through all relevant layers end-to-end (schema, logic, API, UI,
  tests) — never a horizontal slice of one layer only
- Be demoable or verifiable on its own when complete
- Map to exactly one label from the vocabulary above

If a goal clearly requires multiple slices, create multiple issues. There
are no epics, no parent issues, no milestones — just flat independent issues.

### 4. Preview the breakdown in chat
Present the full proposed breakdown as a numbered list before creating
anything on GitHub:

```
1. [Issue title] · `feature`
   What: ...
   Why: ...
   Steps: ...
   Acceptance Criteria: ...

2. [Issue title] · `bug`
   ...
```

Wait for the user to confirm or request adjustments. Iterate until approved.
Do not create any GitHub issues before approval.

### 5. Create issues on GitHub
Once approved, create each issue using the `gh` CLI:

```bash
gh issue create \
  --title "[Issue title]" \
  --body "[Rendered issue body from template]" \
  --label "[bug|feature|chore]" \
  --assignee @me
```

Create issues one at a time in the order presented. After all issues are
created, print a summary list with each issue number and URL.

## Rules
- Never create or apply labels outside the three-label vocabulary
- Never create issues before the user approves the preview
- Never use epics, milestones, or parent issues
- Auto-assign every issue to `@me`
- Steps in each issue must name specific files and functions — not vague
  descriptions
- Acceptance criteria must be specific and verifiable, not generic
- If `PLAN.md` is missing and no plan is in context, tell the user and stop
