---
name: grill-me
description: Pressure-test a plan, feature idea, architecture choice, or implementation strategy until assumptions, risks, dependencies, and missing decisions are explicit. Use when the user says "grill me", wants rigorous challenge, or needs clarity before committing to an approach.
---

# Grill Me

Use this skill to aggressively de-risk an idea before implementation starts.

## Goals

- Remove ambiguity
- Expose hidden constraints
- Force durable decisions
- Surface the biggest risks early

## Workflow

1. Establish what is being reviewed.

   Accept a PRD, feature request, architecture sketch, implementation plan,
   migration plan, or rough idea. If the artifact is missing, ask the user for
   the smallest useful version of it before continuing.

2. Explore the codebase for facts first.

   If a question can be answered by reading the repository, answer it yourself
   instead of asking the user.

3. Interrogate the plan in dependency order.

   Move from high leverage topics to lower leverage topics:

   - problem and user value
   - goals, non-goals, and success signals
   - constraints and assumptions
   - data model and API boundaries
   - UX, edge cases, and failure modes
   - testing, rollout, and observability
   - migration, backward compatibility, and operations

4. Ask one focused question at a time when possible.

   For each question:

   - explain why it matters
   - give a recommended default
   - explain what changes if the answer goes another way

5. Keep a running decision log.

   Track:

   - confirmed decisions
   - open questions
   - assumptions that still need proof
   - blockers that must be resolved before planning or implementation

6. Do not stop at vague answers.

   Continue drilling until the current branch of the design tree is concrete
   enough to implement or intentionally defer.

## Output

When the grilling is complete, return:

- Confirmed decisions
- Open questions
- Top risks
- Recommended next step

Recommended next steps are usually one of:

- `write-a-prd`
- `prd-to-plan`
- `prd-to-issues`

## Guardrails

- Prefer evidence from the repo over assumptions
- Separate facts from guesses
- Challenge convenience decisions that create long-term complexity
- Call out scope creep when the plan mixes unrelated work
