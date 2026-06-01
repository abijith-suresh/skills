# to-issues

Convert a plan into flat, vertical-slice GitHub issues using the gh CLI.

## What This Skill Covers

- **Plan-to-issues conversion** — reads a plan from conversation or PLAN.md and breaks it into independent issues
- **Vertical slicing** — each issue cuts through all layers end-to-end (schema, logic, API, UI, tests)
- **Preview-before-creation** — shows the full breakdown for approval before creating anything on GitHub
- **Three-label vocabulary** — issues use only `bug`, `feature`, or `chore`

## Install

```bash
npx skills add abijith-suresh/skills --skill to-issues
```

## Use

- "create issues"
- "turn this into issues"
- "push to GitHub"
- "use the to-issues skill"
- "break this plan into issues"

## Requirements

- `gh` CLI must be installed and authenticated (`gh auth status`)
- A plan must exist in the current conversation or in `PLAN.md` at the project root

## How it works

1. **Find the plan** — looks for the plan in the current conversation first, then falls back to `PLAN.md`.
2. **Explore the codebase** — reads relevant files to ground issue descriptions in actual code.
3. **Slice into vertical issues** — breaks the plan into the smallest independently implementable, demoable slices.
4. **Preview the breakdown** — presents the full breakdown in chat and waits for approval.
5. **Create issues on GitHub** — creates each issue using `gh issue create` with the structured body template.
