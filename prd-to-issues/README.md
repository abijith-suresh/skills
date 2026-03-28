# PRD to Issues

Break a PRD or approved implementation plan into independently understandable
work items with clear scope, dependencies, and verification steps.

## When to Use

- You want planning work turned into issue-sized slices.
- You want clean handoff artifacts for yourself or a team.
- You want dependencies and acceptance criteria made explicit before coding.
- You already have a phase plan and now want execution-ready issue breakdown.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/prd-to-issues
```

## Install the Full Collection

```bash
npx skills@latest add abijith-suresh/skills
```

## Example Prompts

- "Use the prd-to-issues skill on this implementation plan."
- "Turn this PRD into GitHub-ready issues."
- "Use prd-to-issues and break this work into reviewable slices."
- "We already agreed on the plan. Now turn it into independently grabbable issues with clear dependencies."

## What It Produces

- Issue-ready markdown bodies
- Acceptance criteria and verification steps
- Explicit dependency notes between slices
- A recommended issue order instead of just an unordered task dump

## Works Well With

- `prd-to-plan` for a better source artifact.
- `triage-issue` when one of the new issues turns into a bug investigation.

## Notes

- This skill is GitHub-friendly, but the output still works as plain markdown.
- It is meant to create clean execution slices, not a generic task dump.
- It prefers an approved implementation plan as input; go straight from a PRD only when no plan exists yet.
