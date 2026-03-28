# Repo Onboarding

Explore a repository before making changes so the agent understands the stack,
commands, architecture, conventions, and risk areas.

## When to Use

- You just pulled a repo and need a reliable mental model.
- You are resuming work after time away from the codebase.
- You want the agent to read first instead of jumping into edits blindly.
- You want a strong context-building step before using deeper repo-specific skills.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/repo-onboarding
```

## Install the Full Collection

```bash
npx skills@latest add abijith-suresh/skills
```

## Example Prompts

- "Use repo-onboarding on this repository before we make changes."
- "I just pulled the latest code. Run the repo-onboarding skill first."
- "Use repo-onboarding and tell me the commands, architecture, and risk areas."
- "I haven't touched this repo in a while. Onboard yourself, then tell me the best next step."

## What It Produces

- Stack and tooling summary
- Key run, test, build, and lint commands
- Architecture map and conventions to follow
- Risk areas and open questions
- A recommended next skill instead of a dead-end repo summary

## Works Well With

- `write-a-prd` before planning repo-specific work.
- `triage-issue`, `tdd`, or `refactor` after the repo shape is clear.

## Notes

- This is the best first skill for a fresh codebase or after a long gap.
- It is intentionally front-loaded so later skills can move faster and safer.
- It should stop after building a strong working mental model and hand off to a deeper skill when needed.
