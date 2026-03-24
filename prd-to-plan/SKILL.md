---
name: prd-to-plan
description: Turn an approved PRD into a phased implementation plan built from thin, demoable vertical slices with durable architectural decisions, dependencies, validation steps, and rollout considerations. Use when the user wants a plan from a PRD.
---

# PRD to Plan

Transform a PRD into a practical implementation plan that an engineer or agent
can execute in small, reviewable slices.

## Goals

- Preserve the intent of the PRD
- De-risk implementation by sequencing thin vertical slices
- Make dependencies and validation explicit
- Produce a plan that works for GitHub-first teams and markdown-first teams

## Workflow

1. Confirm the source artifact.

   Start from an approved PRD in the conversation, a local file, or a GitHub
   issue. If the PRD is incomplete, stop and resolve the gaps first.

2. Re-read the codebase with planning in mind.

   Identify the actual architecture, integration points, testing layers, and
   operational constraints that will shape the plan.

3. Extract durable decisions.

   Record the decisions that should remain stable across phases, such as:

   - routes and user entry points
   - schema or data model shape
   - service boundaries
   - authorization model
   - migration or compatibility strategy

4. Slice the work vertically.

   Each phase should cut through the whole stack and deliver something that can
   be demonstrated, verified, or meaningfully reviewed.

   Prefer:

   - thin slices over large batches
   - end-to-end behavior over layer-by-layer tasks
   - early slices that validate the riskiest assumptions

5. Check the plan with the user before finalizing it.

   Present the phase list and ask whether the granularity, ordering, and risk
   handling feel right.

6. Write the plan.

   Default to markdown that can be pasted into GitHub issues, PR descriptions,
   or internal docs.

## Plan Template

```md
# Plan: <Feature Name>

> Source: <PRD title or link>

## Durable Decisions

- Routes or entry points
- Schema or model decisions
- Service boundaries
- Rollout or migration strategy

## Phase 1: <Thin Vertical Slice>

### Outcome

Describe the smallest end-to-end behavior this phase should deliver.

### Covers

- User story 1
- User story 2

### Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

### Validation

- Test or verification step
- Demo or observability signal

### Risks and Notes

- Risk or dependency

## Phase 2: <Thin Vertical Slice>

Repeat until the PRD is fully covered.
```

## Guardrails

- Do not decompose the work into horizontal layers only
- Do not include brittle file paths or function names unless the user asks
- Call out unknowns that block planning instead of pretending they are solved
- Prefer a plan that can survive normal implementation changes
