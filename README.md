# Agent skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 10](https://img.shields.io/badge/Skills-10-green.svg)](#skill-catalog)

A personal collection of standalone skills for the workflows I use every day:
implementation, commits, pull and merge requests, handoffs, and writing cleanup. The skills follow the [Agent Skills specification](https://agentskills.io/specification)
and work with compatible coding agents.

## Browse

Browse the skills and copy install commands on the [skills site](https://skills.abijith.sh/).

## Scope

The `skills/` directory is the canonical collection. The Astro site reads
those files at build time and provides a browsable catalog with install
commands.

Each skill is standalone and uses spec-only frontmatter. Invoke a skill by saying its phrase. Skills do not run one another. A skill may name a follow-up skill in its output.

## Install all skills

```bash
npx skills@latest add abijith-suresh/skills
```

## Install one skill

```bash
npx skills@latest add abijith-suresh/skills --skill <skill-name>
```

## Skill catalog

| Skill | Say | What it does |
| --- | --- | --- |
| `commit` | "commit" | Create conventional commits from the current diff, one intent per commit. |
| `commit-work` | "commit or commit work" | Commit work as TICKET-123: short description; conventional commits only when a change has no ticket. |
| `grill-me` | "grill me" | Interview the user until a plan or design is settled. |
| `handoff` | "handoff" | Write a compact handoff for another agent or session. |
| `implement` | "implement" | Implement a change and verify it against the original request. |
| `mr` | "agent" | Open or update the GitLab merge request for this branch with a description reviewers can scan. |
| `pr` | "agent" | Open or update the GitHub pull request for this branch with a body reviewers can scan. |
| `prove-it` | "prove it" | Verify completion claims against observed behavior. |
| `triage` | "triage" | Diagnose reported issues from evidence before choosing a fix. |
| `unslop` | "unslop" | Remove AI writing patterns and make prose sound human. |

> `"agent"` in the Say column marks agent-invoked skills: the agent calls them when the workflow applies, in response to a user phrase for the rest.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for local development and contribution rules.
