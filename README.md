# Agent Skills

Practical AI agent skills I use for planning, onboarding, debugging, TDD,
review, refactoring, and clean git workflows.

This repo is personal-first, but each skill lives in its own root-level folder
so people can copy only the ones they want and install them cleanly on a
fresh machine.

## Install Everything

```bash
npx skills@latest add abijith-suresh/skills
```

## Install One Skill

```bash
npx skills@latest add abijith-suresh/skills/<skill-name>
```

Each skill folder also has its own `README.md` with the localized install
command, example prompts, and notes.

## Skill Catalog

| Skill | Description |
| --- | --- |
| [`auto-commit`](auto-commit/README.md) | Create small, conventional commits with one clear intent each for personal or repository-agnostic workflows. |
| [`plan-feature`](plan-feature/README.md) | Plan a new feature or project change before writing code and produce a settled PLAN.md. |
| [`plan-to-issues`](plan-to-issues/README.md) | Turn a settled PLAN.md into GitHub issues (one parent tracking issue and child issues per step). |

## Attribution

Some skills in this repo are adapted from or inspired by public skills. When a
skill has meaningful upstream influence, the attribution lives in that skill's
local `README.md`.
