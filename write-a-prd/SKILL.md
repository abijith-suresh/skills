---
name: write-a-prd
description: Turn a feature request into a clear, implementation-ready PRD by interviewing the user, inspecting the relevant parts of the codebase, and making scope, constraints, user stories, and success criteria explicit. Use whenever the user wants a PRD, feature spec, or GitHub-ready planning artifact that should be strong enough to feed `prd-to-plan` or `prd-to-issues` without major ambiguity.
---

# Write a PRD

Create a product requirements document that is specific enough to guide
implementation, planning, and issue breakdown.

## Goals

- Capture the real problem, not just the proposed solution
- Drive the conversation until the PRD is implementation-ready
- Make scope and non-goals explicit
- Record the decisions that matter later
- Produce a GitHub-ready artifact with markdown fallback

## Workflow

1. Start with the user problem.

   Ask for the feature request, desired outcome, and any initial constraints or
   solution ideas.

   Light grilling is part of this skill. Challenge fuzzy scope, hidden
   assumptions, and untested solution ideas when they would weaken the PRD.

2. Inspect the relevant parts of the repository before locking the PRD.

   Do a targeted repo read to understand:

   - current product behavior
   - existing modules and boundaries
   - relevant data models and integrations
   - similar features and testing patterns

   Stay focused on the areas that shape the requested feature. This is not a
   full repo-onboarding pass unless the feature spans the whole system.

3. Resolve ambiguity through targeted questions.

   Do not draft the final PRD until these are clear enough:

   - target users or actors
   - goals and non-goals
   - core flows
   - constraints and dependencies
   - edge cases and failure modes
   - rollout expectations
   - how success will be judged

   Ask one focused question at a time when possible. Explain why the question
   matters, give a recommended default when useful, and keep pushing until the
   PRD can drive planning without major guesswork.

4. Convert wishes into requirements.

   Distinguish between:

   - required behavior
   - desirable improvements
   - explicitly out-of-scope ideas

5. Call out implementation-shaping decisions without over-specifying code.

   Include durable technical considerations such as schema shape, integration
   boundaries, migration concerns, and testing strategy, but avoid brittle file
   paths or low-level code instructions.

   If an uncertainty belongs in later planning, record it explicitly as an open
   question instead of pretending it is resolved.

6. Write the PRD.

   Default to a GitHub issue body when the repo uses GitHub. Otherwise produce
   clean markdown the user can save anywhere.

## Output

Return:

- a GitHub-ready PRD in markdown
- clearly separated goals, non-goals, and requirements
- implementation-shaping constraints and technical considerations
- open questions or risks that still need resolution
- the recommended next planning skill, usually `prd-to-plan` or `prd-to-issues`

## PRD Template

```md
# PRD: <Feature Name>

## Problem

What problem exists today and who feels it.

## Goals

- Goal 1
- Goal 2

## Non-Goals

- Non-goal 1
- Non-goal 2

## Users and Core Scenarios

- Primary actor and the outcome they need
- Secondary actor and the outcome they need

## User Stories

1. As a <user>, I want <behavior>, so that <benefit>.
2. As a <user>, I want <behavior>, so that <benefit>.

## Requirements

- Functional requirement 1
- Functional requirement 2
- Operational or compliance requirement

## Constraints and Dependencies

- Technical constraints
- Product or business constraints
- Third-party dependencies

## Technical Considerations

- Durable architectural decisions
- Data model or API implications
- Migration or backward compatibility concerns

## Testing and Validation

- How success should be verified
- Which behaviors need test coverage
- Relevant prior art in the repo

## Rollout and Success Signals

- Rollout notes
- Metrics or qualitative signals to watch

## Risks and Open Questions

- Known risk 1
- Open question 1

## Out of Scope

- Explicitly excluded work
```

## Guardrails

- Ask follow-up questions before planning if the PRD would otherwise be vague
- Prefer explicit tradeoffs over fuzzy requirements
- Keep the document implementation-aware, but not implementation-bound
- Do not invent product constraints that the user did not confirm
- Do not settle for a PRD that still needs major clarification before planning
