---
name: grill-me
description: Pressure-test a plan, feature idea, architecture choice, or implementation strategy until assumptions, risks, dependencies, and missing decisions are explicit. Use whenever the user asks to be grilled, wants rigorous pushback, or needs a serious de-risking pass before writing a PRD, making a plan, or committing to an approach.
---

# Grill Me

Use this skill to deeply de-risk an idea before implementation starts.

## Goals

- Remove ambiguity
- Expose hidden constraints
- Force durable decisions
- Surface the biggest risks early
- Challenge hard without becoming combative

## Workflow

1. Establish what is being reviewed.

   Accept a PRD, feature request, architecture sketch, implementation plan,
   migration plan, or rough idea. If the artifact is missing, ask the user for
   the smallest useful version of it before continuing.

2. Explore the codebase for facts first.

   Do targeted fact-finding in the repository before asking the user questions.
   If a question can be answered by reading the repo, answer it yourself instead
   of asking the user.

   Stay focused on evidence that changes the grilling. This is not a full
   onboarding pass unless the problem truly spans the whole system.

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

   Keep the tone tough but collaborative. The goal is better decisions, not
   performative skepticism.

5. Keep a running decision log.

   Track:

   - confirmed decisions
   - open questions
   - assumptions that still need proof
   - blockers that must be resolved before planning or implementation

6. Do not stop at vague answers.

   Continue drilling until the current branch of the design tree is concrete
   enough to implement or intentionally defer.

   When the design is sharp enough, stop grilling and hand the user to the next
   artifact or workflow instead of restating the same concerns.

## Output

When the grilling is complete, return:

- Confirmed decisions
- Open questions
- Top risks
- Recommended next step

Treat this as a decision log plus next move, not as a PRD draft.

Recommended next steps are usually one of:

- `write-a-prd`
- `prd-to-plan`
- `prd-to-issues`

## Guardrails

- Prefer evidence from the repo over assumptions
- Separate facts from guesses
- Challenge convenience decisions that create long-term complexity
- Call out scope creep when the plan mixes unrelated work
- Do not drift into writing the PRD or implementation plan unless the user asks
