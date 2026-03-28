---
name: repo-onboarding
description: Explore a repository before planning or coding so the agent understands the stack, commands, architecture, conventions, and risk areas. Use whenever entering a new codebase or resuming work after a long gap, especially before using deeper skills that assume repo context. Build a strong working mental model, then hand off to the next best skill instead of drifting into implementation, diagnosis, or review.
---

# Repo Onboarding

Build a reliable mental model of the repository before making changes.

## Goals

- Understand how the project is built, tested, and shipped
- Identify the real architecture and boundaries
- Learn the repo's conventions before proposing changes
- Surface risky areas early
- Set up the next task with the minimum context needed to move safely

## Workflow

1. Start with the obvious entry points.

   Review the README, package manifests, workspace config, lockfiles, and any
   tool or framework configuration that reveals how the project works.

   Keep the pass targeted but solid. The goal is enough understanding to work
   safely and quickly, not a full audit of every directory.

2. Identify the key commands.

   Determine how to:

   - install dependencies
   - run the app
   - run tests
   - lint and typecheck
   - build or package the project

3. Map the architecture.

   Find the major modules, service boundaries, UI entry points, APIs, data
   models, background jobs, and integration seams.

4. Learn the conventions.

   Look for patterns in naming, folder structure, testing style, state
   management, error handling, and recent commit history.

5. Identify risk areas.

   Call out:

   - fragile or complex subsystems
   - missing tests around critical paths
   - migrations, auth, billing, or deployment touchpoints
   - local setup quirks that could block later work

6. Summarize the repository for the next task.

   End with a next-step-oriented handoff. Recommend the next skill or workflow
   that best fits the user's likely task, such as `write-a-prd`, `triage-issue`,
   `tdd`, `refactor`, or `code-review`.

## Output

Return:

- stack and tooling
- key commands
- architecture map
- conventions to follow
- risk areas
- open questions
- recommended next skill

## Guardrails

- Distinguish confirmed facts from inferred conclusions
- Prefer reading before editing
- Use the repo's conventions unless the user asks to change them
- Do not drift into deep bug triage, implementation planning, or code review unless the user asks
