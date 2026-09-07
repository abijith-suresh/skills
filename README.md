# Agent skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 9](https://img.shields.io/badge/Skills-9-green.svg)](#skill-catalog)

A personal collection of standalone skills for the workflows I use every day:
commits, pull and merge requests, research, issue creation, handoffs, and
writing cleanup. The skills follow the [Agent Skills specification](https://agentskills.io/specification)
and work with compatible coding agents.

## Browse

Browse the skills and copy install commands on the [skills site](https://skills-lovat-psi.vercel.app/).

## Scope

The `skills/` directory is the canonical collection. The Astro site reads
those files at build time and provides a browsable catalog with install
commands.

Each skill is standalone and platform-agnostic. Skills do not run one
another. Name the next skill yourself, or let a skill point to it in output.

## Install all skills

```bash
npx skills@latest add abijith-suresh/skills
```

## Install one skill

```bash
npx skills@latest add abijith-suresh/skills --skill <skill-name>
```

## Skill catalog

| Skill | Description |
| --- | --- |
| `commit` | Create conventional commits from the current diff. |
| `commit-work` | Create conventional commits with a ticket number in every scope. |
| `create-issue` | File one GitHub issue to park a later thought. |
| `grill-me` | Settle a plan or design by asking independent questions in one round. |
| `handoff` | Write a compact handoff document for another agent or session. |
| `open-mr` | Create or update the GitLab merge request for this branch. |
| `open-pr` | Create or update the GitHub pull request for this branch. |
| `research` | Read a library's canonical source before implementing against its API. |
| `unslop` | Remove AI writing patterns and make prose sound human. |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for local development and contribution rules.
