# AGENTS.md

## Document Ownership

This file is the source of truth for how AI agents should work within
this repository. It defines the expected behavior of all agents, the
standards for skill authoring, and the rules for maintaining project
truth documents.

When an agent works in this repository, it must follow this file. When
the project evolves, this file must be updated before any other file.

## Agent Behavior

### Core expectations

1. **Respect the skill catalog as code.** Skills in `skills/` are the
   product. Changes to SKILL.md files must follow the conventions below.
   Treat them like source files, not loose markdown.

2. **Use the `commit` or `commit-work` skill when committing changes.**
   Use `commit-work` when every commit scope must include a ticket number.
   All commits follow conventional commit format. Commits are split by intent
   — each commit represents exactly one reason to change. Never push to
   `main` directly. Open a PR from a feature branch.

3. **Read `docs/CONTEXT.md` before making scope decisions.** When deciding
   whether something belongs in this project, `CONTEXT.md` is authoritative.

4. **Read `docs/ARCHITECTURE.md` before making structural changes.** When
   adding components, changing the build system, or modifying the docs site,
   `ARCHITECTURE.md` describes how things fit together.

5. **No skill invokes another skill by name.** Skills are atomic and
   self-contained. An agent may compose multiple skills in a session, but
   no SKILL.md text should say "use the research skill" or "run the commit
   skill."

### When to use skills

Agents may invoke skills when a task matches the skill's workflow. The user
may also invoke a skill by name. When several skills could apply, choose the
most specific fit. Do not force a skill into a task that does not need it.

### When to create a skill

A workflow qualifies as a skill when:
- It is done repeatedly (daily or near-daily).
- Different agents produce inconsistent results for the same task.
- The workflow has clear steps, rules, and failure conditions.

A workflow does not qualify when:
- It is rarely used or highly context-specific — use a prompt instead.
- The behavior varies so much by project that a single set of rules
  cannot cover it.
- It is a one-line instruction that doesn't benefit from structure.

## Skill Structure

```
skills/
  <skill-name>/
    SKILL.md      ← the skill definition (required)
    references/   ← optional supporting docs
    scripts/      ← optional deterministic helper scripts
    assets/       ← optional templates/resources
```

Skill names are short verbs or nouns in kebab-case: `commit`, `commit-work`,
`research`, `handoff`, `open-pr`. No namespacing.

## SKILL.md Format

```markdown
---
name: <skill-name>
description: >-
  [One-line what the skill does.]
  Invoke when the workflow applies. The user may also name this skill
  explicitly.
---

# Title

[Content: intent, workflow, rules]
```

Frontmatter: `name` and `description` only. No `metadata` block.

### Description pattern

First sentence says what the skill does in active voice. The remaining
sentences state when the agent should invoke the skill and that the user
may also invoke it by name.

## Truth Maintenance Rules

When the project evolves, update truth documents in this order:

1. **`docs/CONTEXT.md`** — if scope, goals, non-goals, or constraints change.
2. **`docs/ARCHITECTURE.md`** — if the structure, data flow, components,
   or technical decisions change.
3. **`docs/CONTRIBUTING.md`** — if the development workflow, conventions,
   or prerequisites change.
4. **This file** — if agent behavior expectations or skill authoring
   conventions change.
5. **`README.md`** — if the catalog, badge count, or install instructions change.
6. **`CHANGELOG.md`** — always add an entry under `[Unreleased]` for every
   change. Merge into an existing date section if one already exists. Create
   a new `### Added/Changed/Removed — YYYY-MM-DD` section only if none exists
   for today.

## Creating a New Skill

1. Research reference implementations if the workflow is non-trivial.
   Clone one of these reference repos and read their skill structure:
   - `anthropics/skills`
   - `mattpocock/skills`
   - `addyosmani/agent-skills`
   - `muratcankoylan/Agent-Skills-for-Context-Engineering`
   - `vercel-labs/agent-skills`
2. Create `skills/<skill-name>/SKILL.md` with the correct frontmatter.
3. Update the catalog table and badge count in `README.md`.
4. Add an entry to `CHANGELOG.md` under `[Unreleased]`.
5. Install the skill locally by replacing the directory at
   `~/.agents/skills/<skill-name>/`.

## Updating an Existing Skill

1. Edit `skills/<skill-name>/SKILL.md` (and any supporting files).
2. Add an entry to `CHANGELOG.md` under `[Unreleased]`.
3. Replace the locally installed copy at `~/.agents/skills/<skill-name>/`
   so stale files are removed.

## Docs Site

The Astro site at `src/` renders skill content from `skills/`. It uses
Astro content collections, Satteri Markdown rendering, and the Swiss Style
design system. Design tokens are plain CSS custom properties in
`src/styles/global.css`. Components are in `src/components/`. See
`docs/ARCHITECTURE.md` for the full technical design.

## Committing and Pushing

Use conventional commits. Push to a feature branch and open a PR.
Never push directly to `main`. Branch protection requires linear history,
PRs, and conventional commit titles.
