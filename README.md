# Agent Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 15](https://img.shields.io/badge/Skills-15-green.svg)](#skill-catalog)

A personal collection of AI agent skills for planning, committing,
reviewing, testing, researching, and other daily development workflows.

Each skill tells an AI coding agent how to perform a specific task
correctly — the way you want it done, every time.

Skills are user-invoked: name the skill explicitly when you want its workflow
to govern the session.

## Browse

The docs site lets you browse skills, read their docs, and copy
install commands: **[abijith-suresh.github.io/skills](https://abijith-suresh.github.io/skills/)**

## Install Everything

```bash
npx skills add abijith-suresh/skills
```

## Install One Skill

```bash
npx skills add abijith-suresh/skills --skill <skill-name>
```

## Skill Catalog

| Skill | Description |
| --- | --- |
| `commit` | Create clean conventional commits from the current diff. |
| `diagnose` | Investigate production and QA defects through a persistent evidence loop. |
| `explain-flow` | Explain and persist one verified application or business flow. |
| `grill-me` | Interview the user relentlessly about a plan or design until shared understanding is reached. |
| `handoff` | Compact the current conversation into a handoff document for another agent or session to pick up. |
| `improve` | Audit the codebase for technical debt and fix issues incrementally. |
| `open-mr` | Push the current branch and open a new GitLab MR. |
| `open-pr` | Push the current branch and open a new GitHub PR. |
| `plan` | Present a concrete implementation plan in chat based on a decisions summary. |
| `research` | Clone the canonical source and read the actual API before implementing against a framework or library. |
| `review` | Review the current diff and produce a structured review. |
| `tdd` | Build features test-first using red-green-refactor. |
| `to-issues` | Convert a plan into flat, vertical-slice GitHub issues. |
| `update-mr` | Update an existing GitLab MR's title and body. |
| `update-pr` | Update an existing GitHub PR's title and body. |

## Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for the development workflow.
The [CONTEXT.md](docs/CONTEXT.md) and [ARCHITECTURE.md](docs/ARCHITECTURE.md)
documents describe the product vision and technical design.
