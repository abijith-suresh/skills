# Agent Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 9](https://img.shields.io/badge/Skills-9-green.svg)](#skill-catalog)

A personal collection of AI agent skills for committing, opening and
updating PRs/MRs, researching, and other daily development workflows.

Each skill tells an AI coding agent how to perform a specific task
correctly — the way you want it done, every time.

Agents invoke skills when a task matches their workflow. You can also name a
skill explicitly when you want that workflow to govern the session.

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
| `grill-me` | Interview the user relentlessly about a plan or design until shared understanding is reached. |
| `handoff` | Compact the current conversation into a handoff document for another agent or session to pick up. |
| `open-mr` | Push the current branch and open a new GitLab MR. |
| `open-pr` | Push the current branch and open a new GitHub PR. |
| `research` | Clone the canonical source and read the actual API before implementing against a framework or library. |
| `to-issues` | Convert a plan into flat, vertical-slice GitHub issues. |
| `update-mr` | Update an existing GitLab MR's title and body. |
| `update-pr` | Update an existing GitHub PR's title and body. |

## Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for the development workflow.
The [CONTEXT.md](docs/CONTEXT.md) and [ARCHITECTURE.md](docs/ARCHITECTURE.md)
documents describe the product vision and technical design.
