# Agent skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 11](https://img.shields.io/badge/Skills-11-green.svg)](#skill-catalog)

Skills for everyday coding work, triggered by short request keywords such as
"implement X", "verify branch Y", or "grill me". Compose them in one sentence:
"implement, verify and open a PR" chains the work and ends with the PR or MR link.
The collection follows the [Agent Skills specification](https://agentskills.io/specification).

## Browse

Browse the skills and copy install commands on the [skills site](https://skills.abijith.sh/).

## Scope

`skills/` is the canonical collection. The Astro site reads it at build time to
build the catalog, skill pages and install commands.

The main agent plans, dispatches subagents, integrates results and reports.
Subagents do the actual work and never start their own subagents. Skills do not
hardcode a model, provider or harness. Name a model per request, such as "using
deepseek", or use the harness default. If the named model is unavailable, the
agent says so without substituting.

Each skill has a `metadata.scope` tag: `personal` for the GitHub laptop, `work`
for the separate GitLab and Jira laptop, or `personal work` for both. There is
no `common` tag. Adapted skills credit the original author only in
`metadata.author`, with no license files or credit sections.

Install through the `skills` CLI. No global loader files are needed. The
[site](https://skills.abijith.sh/) builds separate laptop commands from scope tags.
Skill bodies and descriptions are moving to this design in later PRs.

## Install all skills

```bash
npx skills@latest add abijith-suresh/skills
```

## Install one skill

```bash
npx skills@latest add abijith-suresh/skills --skill <skill-name>
```

## Skill catalog

| Skill | Say | Scope | What it does |
| --- | --- | --- | --- |
| `commit` | "commit" | personal | Create conventional commits from the current diff, one intent per commit. |
| `commit-work` | "commit or commit work" | work | Commit work as TICKET-123: short description; conventional commits only when a change has no ticket. |
| `grill-me` | "grill me" | personal work | Interview the user until a plan or design is settled. |
| `handoff` | "handoff" | personal work | Write a compact handoff for another agent or session. |
| `how-i-work` | "always loaded" | personal | Know who Abijith is and how to work for him on his personal laptop. |
| `implement` | "implement" | personal work | Implement a change and verify it against the original request. |
| `mr` | "open an MR" | work | Open or update the GitLab merge request for this branch with a description reviewers can scan. |
| `pr` | "open a PR" | personal | Open or update the GitHub pull request for this branch with a body reviewers can scan. |
| `prove-it` | "prove it" | personal work | Verify completion claims against observed behavior. |
| `triage` | "triage" | personal work | Diagnose reported issues from evidence before choosing a fix. |
| `unslop` | "unslop" | personal work | Remove AI writing patterns and make prose sound human. |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for local development and contribution rules.
