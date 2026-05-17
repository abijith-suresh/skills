# Agent Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 10](https://img.shields.io/badge/Skills-10-green.svg)](#skill-catalog)

Practical AI agent skills for planning, investigation, research, review,
codebase improvement, clean commits, PRs, and TDD.

This repo is personal-first, but each skill lives in `skills/<skill-name>/`
so people can copy only the ones they want and install them cleanly on a
fresh machine.

## Install Everything

```bash
npx skills add abijith-suresh/skills
```

## Install One Skill

```bash
npx skills add abijith-suresh/skills --skill <skill-name>
```

Each skill folder has its own `README.md` with the install command and example prompts.

## Skill Catalog

| Skill | Description |
| --- | --- |
| [`plan`](skills/plan/README.md) | Explore the codebase first and produce a settled `PLAN.md` before writing any code. |
| [`commit`](skills/commit/README.md) | Inspect the diff, split changes by intent, and create clean conventional commits. |
| [`open-pr`](skills/open-pr/README.md) | Push the current branch and open a new pull request on GitHub using the `gh` CLI. Detects if a PR already exists and directs the user to use update-pr instead. |
| [`update-pr`](skills/update-pr/README.md) | Regenerate and update an existing pull request's title and body on GitHub using the `gh` CLI. |
| [`open-mr`](skills/open-mr/README.md) | Push the current branch and open or update a merge request on GitLab using the `glab` CLI. Detects if an MR already exists and updates it instead of creating a duplicate. |
| [`tdd`](skills/tdd/README.md) | Build features test-first with red-green-refactor. Language and framework agnostic. |
| [`review`](skills/review/README.md) | Review code changes and write a structured `REVIEW.md` using standard or story-aware review. |
| [`improve`](skills/improve/README.md) | Audit overall codebase health, write a prioritized `IMPROVE.md`, and then decide whether to fix issues. |
| [`research`](skills/research/README.md) | Clone and reference external repositories as source-of-truth from `~/.research/` when implementing against frameworks, libraries, or tools. |
| [`investigate`](skills/investigate/README.md) | Analyze the current repo in a read-only way to understand stories, bug paths, and existing behavior. |
