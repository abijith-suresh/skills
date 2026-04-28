# Agent Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 9](https://img.shields.io/badge/Skills-9-green.svg)](#skill-catalog)

Practical AI agent skills for planning features, writing clean commits, opening PRs, and building with TDD.

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
| [`plan`](plan/README.md) | Explore the codebase and produce a settled PLAN.md before writing any code. |
| [`commit`](commit/README.md) | Inspect the diff, split by intent, and create clean conventional commits. Auto-adds ticket scope for GitLab repos. |
| [`open-pr`](open-pr/README.md) | Push the branch and open a PR or MR. Detects GitHub vs GitLab and uses the right format for each. |
| [`tdd`](tdd/README.md) | Build features test-first with red-green-refactor. Language and framework agnostic. |
| [`review`](review/README.md) | Review code changes and write a structured REVIEW.md. Standard diff review or story-aware review. |
| [`improve`](improve/README.md) | Holistic codebase health audit. Surfaces accumulated technical debt and heals it incrementally via IMPROVE.md. |
| [`research`](research/README.md) | Clone remote repos to a temp directory as source-of-truth reference material before implementing. |
| [`investigate`](investigate/README.md) | Deep structured investigation of a codebase, system, or problem. Produces a written analysis. |
| [`plan-to-issues`](plan-to-issues/README.md) | Turn a settled PLAN.md into GitHub issues with a parent tracking issue and child issues per step. |
