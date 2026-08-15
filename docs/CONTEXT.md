# CONTEXT.md

Product truth for the Agent Skills collection. This document defines what
the project is, who it is for, and the decisions that shape it. It is the
single source of truth for scope decisions.

## Why This Project Exists

AI coding agents make different choices for the same task. The same prompt
produces different commit messages, PR bodies, review approaches, and test
strategies depending on which agent or session runs it.

This project standardizes the workflows that matter most — the ones done
daily and the ones agents consistently get wrong. Each skill captures a
repeatable workflow: what to do, in what order, with what guardrails.

A companion docs site makes the collection browseable and installable from
any machine with a single copy-paste command.

## Target Users

- **Primary**: The maintainer — used in both personal (GitHub) and work
  (GitLab) development workflows.
- **Secondary**: Anyone who finds the skills useful. The skills follow the
  [Agent Skills specification](https://agentskills.io/specification) and
  are platform-agnostic — they work with any AI coding agent that supports
  the format.
- **Tertiary**: People looking for well-structured skill examples to model
  their own after.

## Goals

1. **Consistent agent behavior** across sessions and platforms for common
   development workflows.
2. **Frictionless installation** — browse the site, copy the command,
   install on any system.
3. **Agent-selectable invocation** — agents choose the right skill when a
   task matches its workflow; users may also invoke skills by name.
4. **Self-contained skills** — each skill is usable on its own without
   depending on other skills in the collection.
5. **Portfolio-quality showcase** — the docs site should look professional
   and communicate the value of the collection.

## Non-Goals

- **Multi-user collaboration platform** — this is a personal collection
  first. It is public and usable by anyone, but collaboration features
  (shared editing, team workspaces) are out of scope.
- **Skill orchestration** — skills do not invoke each other by name. A
  workflow that spans skills (grill-me → to-issues) is assembled by the
  user at runtime, not hard-coded into any skill.
- **Success metrics** — this is not measured by adoption numbers or
  engagement. Personal utility and portfolio value are sufficient.
- **One-off prompts** — prompts that are rarely used or context-specific
  belong in a separate prompts repository, not in this skills collection.

## Constraints

- **Agent Skills specification compliance** — every skill follows the spec
  format: YAML frontmatter with `name` and `description`, markdown body.
- **Platform-agnostic** — skills must not assume a specific AI agent platform.
  GitHub vs GitLab detection is done at runtime from the remote URL.
- **Agent-selectable activation** — descriptions tell agents when to invoke
  the skill; users may also invoke skills by name.
- **External working state** — local skill installs and any durable agent
  artifacts live under `~/.agents/`, outside project repositories and
  version control.
- **No external build step for skills** — skills are standalone SKILL.md
  files. The Astro site reads them at build time but does not transform them.
- **Linear git history on main** — branch protection enforces linear
  history, requires PRs, and enforces conventional commit titles via CI.

## Success Criteria

- Skills produce consistent, predictable behavior across different agents
  and sessions.
- Installation takes one copy-paste and works on any machine.
- The docs site loads fast, looks good, and makes the catalog browseable.
- The collection covers the maintainer's daily workflows without bloat.

## Decision Log

- **Skills vs prompts**: Tasks done daily or requiring consistent standards
  become skills. Rarely used or context-specific instructions are prompts.
- **Atomic over orchestrated**: Skills are decoupled. No skill depends on or
  invokes another by name. The user composes them as needed.
- **Agent-selectable over rigid**: Agents invoke skills when the workflow
  applies. Users may also invoke skills by name when they want that workflow
  explicitly.
- **Local installs over repo copies**: Installed skills and any durable
  agent artifacts live under `~/.agents/`; skills do not depend on
  automatic semantic memory.
- **Docs site in the same repo**: The Astro site lives alongside the skills
  because the site's sole purpose is rendering skill content. Separate repos
  would create a sync problem.
- **Single source of truth**: `skills/` at the repo root is the canonical
  location. The site reads from there. Nothing is duplicated.
