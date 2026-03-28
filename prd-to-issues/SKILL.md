---
name: prd-to-issues
description: Break a PRD or, preferably, an approved implementation plan into independently grabbable GitHub issues with clear scope, dependencies, acceptance criteria, and verification steps. Use whenever the user wants planning work turned into actionable execution slices. Prefer this after `prd-to-plan` when the phase design is done and the next step is issue breakdown, and create the issues in GitHub as part of the workflow.
---

# PRD to Issues

Break approved planning work into issue-sized slices that are easy to execute,
review, and track.

## Goals

- Produce atomic, independently understandable issues
- Preserve end-to-end vertical slicing
- Make dependencies obvious
- Make each issue something one person or agent can realistically pick up
- Prefer GitHub-ready output with markdown fallback

## Workflow

1. Start from the best planning artifact available.

   Prefer an approved implementation plan. If only a PRD exists, derive the
   slice breakdown from the PRD and state that the issue set is based directly
   on the PRD.

   Treat the approved plan as the default source of truth when both artifacts
   exist. The plan usually contains the right sequencing and slice boundaries.

2. Reconfirm the codebase context if needed.

   Use the repository to verify system boundaries, naming, risks, and testing
   conventions before locking issue scope.

3. Break the work into independently grabbable slices.

   Each issue should:

    - represent one meaningful unit of value
    - have a clear finish line
    - be reviewable on its own
    - avoid mixing unrelated refactors or follow-on polish

   Default to issue sizes that one engineer or agent could pick up without
   needing the whole project re-explained.

4. Mark dependencies explicitly.

   Sequence blockers first. If two issues can move in parallel, say so.

   Be very explicit about:

   - what blocks what
   - what can start immediately
   - what can proceed in parallel after a dependency lands
   - which issues are better deferred until later validation is complete

5. Review the issue set with the user.

   Before finalizing, confirm:

   - granularity
   - dependency direction
   - where human review is required
   - whether any slices should be merged or split

6. Produce GitHub-ready issue bodies.

   Create the issues in dependency order when the environment supports it.
   Return the created issue links along with the issue bodies.

## Output

Return:

- a recommended issue order
- created GitHub issues and their links
- GitHub-ready issue bodies in markdown
- acceptance criteria and verification steps for each issue
- explicit dependency notes, including blockers and parallelizable work
- any scope boundaries or follow-up slices that should stay out of the current set

## Issue Template

```md
# <Issue Title>

## Why

Why this slice exists and what part of the parent PRD or plan it unlocks.

## What to Build

Describe the end-to-end behavior this issue should deliver.

## Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Verification

- Test or validation step
- Manual check if needed

## Dependencies

- None

## Parent Context

- PRD: <title or link>
- Plan phase: <phase name if available>
```

## Guardrails

- Prefer more small issues over fewer large issues
- Keep refactors separate from behavior changes unless inseparable
- Do not bury blockers inside issue descriptions
- If the plan is still ambiguous, resolve that before creating issues
- Do not silently skip issue creation when the environment supports it
