# Agent skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 17](https://img.shields.io/badge/Skills-17-green.svg)](#skill-catalog)

A collection of standalone skills for my personal and work coding and writing
workflows. The skills follow the [Agent Skills specification](https://agentskills.io/specification)
and work with compatible agents.

Browse the [skills site](https://skills.abijith.sh/) for skill instructions.
The site reads the canonical `skills/` files at build time.

Each skill carries its own method, including the delegation it uses. Skills
work without siblings being installed or invoked. A completed workflow may
suggest a next skill for the user to choose.

## Installation

Personal and work skills are distinct collections installed on separate
systems. On the personal system, install the GitHub workflows:

```bash
npx skills@latest add abijith-suresh/skills --skill commit --skill open-pr
```

On the work system, install the ticket-scoped commit and GitLab workflows:

```bash
npx skills@latest add abijith-suresh/skills --skill commit-work --skill open-mr
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
| `explain` | Explain existing code through concrete execution paths. |
| `grill-me` | Ask one question at a time to settle a plan or design. |
| `handoff` | Write a compact handoff document for another agent or session. |
| `implement` | Implement features and fixes through verified code. |
| `java` | Write and review Java for the supported runtime. |
| `open-mr` | Create or update the GitLab merge request for this branch. |
| `open-pr` | Create or update the GitHub pull request for this branch. |
| `prove-it` | Verify completion claims against observed behavior. |
| `research` | Resolve API and dependency behavior questions from canonical source. |
| `test-audit` | Audit existing tests and remove low-value coverage. |
| `triage` | Diagnose reported issues from evidence before choosing a fix. |
| `typescript` | Write and review TypeScript against runtime contracts. |
| `unslop` | Remove AI writing patterns and make prose sound human. |
| `writing` | Draft and edit prose for its reader and purpose. |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for local development and contribution rules.
