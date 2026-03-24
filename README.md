# Abijith's Agent Skills

Practical agent skills for personal projects and work projects.

Each skill lives in its own root-level folder so the repo works cleanly with
`skills.sh` and is easy to install on a fresh machine.

## Install Everything

```bash
npx skills@latest add abijith-suresh/skills
```

## Install Individual Skills

Copy and paste any of these on a new laptop:

```bash
npx skills@latest add abijith-suresh/skills/grill-me
npx skills@latest add abijith-suresh/skills/write-a-prd
npx skills@latest add abijith-suresh/skills/prd-to-plan
npx skills@latest add abijith-suresh/skills/prd-to-issues
npx skills@latest add abijith-suresh/skills/commit-atomically
npx skills@latest add abijith-suresh/skills/repo-onboarding
npx skills@latest add abijith-suresh/skills/triage-issue
npx skills@latest add abijith-suresh/skills/tdd
```

## Suggested Workflow

1. `repo-onboarding`
2. `write-a-prd`
3. `grill-me`
4. `prd-to-plan`
5. `prd-to-issues`
6. `tdd`
7. `commit-atomically`

## Skills

### grill-me

Stress-test a feature idea, design, or implementation plan until assumptions,
constraints, risks, and missing decisions are explicit.

### write-a-prd

Interview the user, inspect the codebase, and turn a feature request into a
GitHub-ready product requirements document with goals, non-goals, user stories,
constraints, and rollout notes.

### prd-to-plan

Convert an approved PRD into a phased implementation plan built from thin,
demoable vertical slices.

### prd-to-issues

Break a PRD or approved plan into independently grabbable GitHub issues with
clear dependencies, acceptance criteria, and verification steps.

### commit-atomically

Coach the agent toward conventional, atomic commits by detecting mixed intent,
proposing safer split points, and writing better commit messages.

### repo-onboarding

Explore a repository before making changes so the agent understands the stack,
commands, architecture, conventions, and risk areas.

### triage-issue

Turn a bug report into an evidence-backed diagnosis, reproduction notes, and a
smallest-safe fix plan.

### tdd

Implement or fix behavior using a red-green-refactor loop with one small,
verifiable slice at a time.

## License

MIT
