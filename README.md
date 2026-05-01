# Agent Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 8](https://img.shields.io/badge/Skills-8-green.svg)](#skill-catalog)

Practical AI agent skills for planning, investigation, research, review,
codebase improvement, clean commits, PRs, and TDD.

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

Each skill folder has its own `README.md` with the install command and example prompts.

## Skill Catalog

| Skill | Description |
| --- | --- |
| [`plan`](plan/README.md) | Explore the codebase first and produce a settled `PLAN.md` before writing any code. |
| [`commit`](commit/README.md) | Inspect the diff, split changes by intent, and create clean conventional commits. |
| [`open-pr`](open-pr/README.md) | Push the current branch and open a PR or MR with platform-specific title rules and a shared body format. |
| [`tdd`](tdd/README.md) | Build features test-first with red-green-refactor. Language and framework agnostic. |
| [`review`](review/README.md) | Review code changes and write a structured `REVIEW.md` using standard or story-aware review. |
| [`improve`](improve/README.md) | Audit overall codebase health, write a prioritized `IMPROVE.md`, and then decide whether to fix issues. |
| [`research`](research/README.md) | Clone external reference repos into `/tmp/research/` and read real implementations before building. |
| [`investigate`](investigate/README.md) | Analyze the current repo in a read-only way to understand stories, bug paths, and existing behavior. |
