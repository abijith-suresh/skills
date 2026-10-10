# Agent skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 14](https://img.shields.io/badge/Skills-14-green.svg)](#skill-catalog)

A personal collection of composable skills for investigating, explaining,
building, verifying, and reviewing software. Each workflow follows the
[Agent Skills specification](https://agentskills.io/specification) and works
without another skill, a specific model, or a particular agent platform.

Browse the collection on the [skills site](https://skills.abijith.sh/).
The Astro site reads the canonical content from `skills/` at build time.

## Use natural language

Describe the work. You do not need a slash command:

- "Use triage to analyze the issue reported here."
- "Explain how retries work in this service."
- "Implement the change and prove it handles a failed request."
- "Orchestrate this with subagents and verify the combined result."
- "Commit this with PROJ-214 in every scope, then open a merge request."
- "Rewrite this explanation so it sounds like me."

Every description says when the skill applies. There are no automatic
invocation locks. Compatible agents can select `prove-it` during feature
work, language guidance during code changes, and `writing` during prose
work. Discovery still depends on the host's skill support; descriptions
cannot force every platform to load a skill. Naming it in ordinary language
also makes the intent clear.

## Compose within the task

Skills may use installed companions when helpful. `commit` can continue
into `open-pr` when both actions were requested. `triage` can feed evidence
into a fix and `prove-it` when fixing was requested. Missing companions
never block a skill's own workflow.

Loading a skill does not authorize additional actions. Analysis does not
authorize changing code or posting comments. A local commit does not
authorize a push. Each skill carries its own scope and stopping conditions.

## Install

```sh
npx skills@latest add abijith-suresh/skills
```

Install only what you need:

```sh
npx skills@latest add abijith-suresh/skills --skill triage
```

## Skill catalog

| Skill | When it applies |
| --- | --- |
| `commit` | Commit current work, split by intent, or include required ticket scopes. |
| `create-issue` | File one issue or park a follow-up in the project's tracker. |
| `explain` | Understand actual runtime behavior or walk through a subsystem. |
| `grill-me` | Stress-test an idea and settle consequential design decisions. |
| `handoff` | Preserve verified context for another agent or session. |
| `java` | Write or review Java code with explicit contracts and resource ownership. |
| `open-pr` | Create or update a pull or merge request on the repository's forge. |
| `orchestration` | Delegate work while the main agent coordinates integration and acceptance. |
| `prove-it` | Check observable behavior before claiming an implementation works. |
| `research` | Resolve an unfamiliar API or version-sensitive technical question. |
| `test-audit` | Remove redundant tests while preserving distinct behavioral evidence. |
| `triage` | Investigate a reported issue and determine the next action. |
| `typescript` | Write or review TypeScript and TSX with sound types and runtime boundaries. |
| `writing` | Draft or edit concrete prose that preserves meaning and the author's voice. |

## Migrate existing installations

| Previous skill | Replacement |
| --- | --- |
| `commit-work` | `commit`, which reads required ticket scope conventions. |
| `open-mr` | `open-pr`, which detects the forge and honors its review conventions. |
| `unslop` | `writing`, which covers drafting and editing. |

Install the replacements and remove the old copies from your agent's skill
directory. Installation may leave renamed skills behind. Check for project
and global copies so stale invocation locks or duplicate workflows do not
remain. This repository does not modify local installations automatically.

Read the [design decisions and audit](docs/skill-design.md) and
[evaluation scenarios](docs/skill-evaluations.md). See
[CONTRIBUTING.md](CONTRIBUTING.md) for local development.
