# Agent Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 3](https://img.shields.io/badge/Skills-3-green.svg)](#skill-catalog)

Practical AI agent skills I use for planning features, tracking work, and
maintaining clean git workflows.

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
| [`create-a-commit`](create-a-commit/README.md) | Create small, conventional commits with one clear intent each for personal or repository-agnostic workflows. |
| [`create-a-plan`](create-a-plan/README.md) | Create a plan for a new feature or project change before writing code and produce a settled PLAN.md. |
| [`plan-to-issues`](plan-to-issues/README.md) | Turn a settled PLAN.md into GitHub issues (one parent tracking issue and child issues per step). |
