# PRD to Issues

Break a PRD or approved implementation plan into independently understandable
work items with clear scope, dependencies, and verification steps.

## When to Use

- You want planning work turned into issue-sized slices.
- You want clean handoff artifacts for yourself or a team.
- You want dependencies and acceptance criteria made explicit before coding.

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

## What It Produces

- Issue-ready markdown bodies
- Acceptance criteria and verification steps
- Explicit dependency notes between slices

## Works Well With

- `prd-to-plan` for a better source artifact.
- `triage-issue` when one of the new issues turns into a bug investigation.

## Notes

- This skill is GitHub-friendly, but the output still works as plain markdown.
- It is meant to create clean execution slices, not a generic task dump.
