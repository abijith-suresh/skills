# Agent skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 14](https://img.shields.io/badge/Skills-14-green.svg)](#skill-catalog)

A personal collection of standalone skills for the workflows I use every day:
implementation, test cleanup, commits, pull and merge requests, research, issue creation,
handoffs, and writing cleanup. The skills follow the [Agent Skills specification](https://agentskills.io/specification)
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
| `commit-work` | "commit work" | Create conventional commits with a ticket number in every scope. |
| `create-issue` | "create issue" | File one GitHub issue to park a later thought. |
| `explain` | "explain" | Explain existing behavior through a concrete execution path. |
| `grill-me` | "grill me" | Interview the user until a plan or design is settled. |
| `handoff` | "handoff" | Write a compact handoff for another agent or session. |
| `implement` | "implement" | Implement a change and verify it against the original request. |
| `open-mr` | "open MR" | Create or update the GitLab merge request for this branch. |
| `open-pr` | "open PR" | Create or update the GitHub pull request for this branch. |
| `prove-it` | "prove it" | Verify completion claims against observed behavior. |
| `research` | "research" | Resolve API and dependency questions from canonical source. |
| `test-audit` | "test audit" | Audit existing tests and remove low-value coverage. |
| `triage` | "triage" | Diagnose reported issues from evidence before choosing a fix. |
| `unslop` | "unslop" | Remove AI writing patterns and make prose sound human. |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for local development and contribution rules.
