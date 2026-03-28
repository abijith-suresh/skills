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
| [`repo-onboarding`](repo-onboarding/README.md) | Explore a repo before making changes so the agent understands the stack, commands, architecture, conventions, and risk areas. |
| [`write-a-prd`](write-a-prd/README.md) | Turn a feature request into a clear, implementation-ready PRD. |
| [`grill-me`](grill-me/README.md) | Stress-test an idea or plan until the real decisions, assumptions, and risks are explicit. |
| [`prd-to-plan`](prd-to-plan/README.md) | Convert an approved PRD into thin, demoable implementation phases. |
| [`prd-to-issues`](prd-to-issues/README.md) | Break a PRD or plan into independently understandable work items. |
| [`triage-issue`](triage-issue/README.md) | Investigate a bug report and turn it into an evidence-backed diagnosis and fix plan. |
| [`tdd`](tdd/README.md) | Implement or fix behavior with a red-green-refactor loop. |
| [`refactor`](refactor/README.md) | Improve structure safely without changing externally visible behavior. |
| [`code-review`](code-review/README.md) | Review a diff, branch, or PR for correctness, regression risk, and missing validation. |
| [`commit-atomically`](commit-atomically/README.md) | Split mixed changes into small, honest, conventional commits. |
| [`ticketed-git-workflow`](ticketed-git-workflow/README.md) | Apply atomic git hygiene in repos that require ticket-based branch and commit conventions. |

## Attribution

Some skills in this repo are adapted from or inspired by public skills. When a
skill has meaningful upstream influence, the attribution lives in that skill's
local `README.md`.
