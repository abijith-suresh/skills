# Agent skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 10](https://img.shields.io/badge/Skills-10-green.svg)](#skill-catalog)

A collection of ten skills for the personal and work workflows I use every day:
test cleanup, commits, pull and merge requests, research, issue creation,
handoffs, and writing cleanup. The skills follow the [Agent Skills specification](https://agentskills.io/specification)
and work with compatible coding agents.

Browse the [skills site](https://skills.abijith.sh/) for skill instructions.
The site reads the canonical `skills/` files at build time.

## Installation

Personal and work skills are distinct collections installed on separate
systems. On the personal system, install the GitHub workflows:

```bash
npx skills@latest add abijith-suresh/skills --skill commit open-pr
```

On the work system, install the ticket-scoped commit and GitLab workflows:

```bash
npx skills@latest add abijith-suresh/skills --skill commit-work open-mr
```

Choose other skills separately for each system:

```bash
npx skills@latest add abijith-suresh/skills --skill <skill-name>
```

The [installer](https://github.com/vercel-labs/skills) prompts for target
agents and installs into the current project by default. Add `--global`
for a user-level installation on that system.

## Skill catalog

| Skill | Description |
| --- | --- |
| `commit` | Create conventional commits from the current diff. |
| `commit-work` | Create conventional commits with a ticket number in every scope. |
| `create-issue` | File one GitHub issue to park a later thought. |
| `grill-me` | Ask one question at a time to settle a plan or design. |
| `handoff` | Write a compact handoff document for another agent or session. |
| `open-mr` | Create or update the GitLab merge request for this branch. |
| `open-pr` | Create or update the GitHub pull request for this branch. |
| `research` | Read a library's canonical source before implementing against its API. |
| `test-audit` | Audit existing tests and remove low-value coverage. |
| `unslop` | Remove AI writing patterns and make prose sound human. |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for local development and contribution rules.
