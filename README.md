# Agent Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills: 12](https://img.shields.io/badge/Skills-12-green.svg)](#skill-catalog)

Practical AI agent skills for planning, investigation, research, review,
codebase improvement, clean commits, PRs, and TDD.

This repository now also ships a small docs site for browsing the collection,
opening a skill page, and copying a skills.sh-compatible install command.
The site is designed for GitHub Pages and is served from `/skills/`.

## Docs Site

- Deployed route: `https://abijith-suresh.github.io/skills/`
- Landing page: `/skills/`
- Skill page: `/skills/<skill-name>/`

The Astro app reads markdown directly from the root `skills/` directory at build time,
so the website stays in sync with the actual skill source files.

## Install Everything

```bash
npx skills add abijith-suresh/skills
```

## Install One Skill

```bash
npx skills add abijith-suresh/skills --skill <skill-name>
```

## Local Development

### Prerequisites

- [mise](https://mise.jdx.dev/)
- Bun `1.3.14` (pinned in `mise.toml`)

### Run locally

```bash
mise install
bun install
bun run dev
```

Then open:

- `http://localhost:4321/skills/`

Because this repo is deployed as a GitHub Pages project site, Astro is configured
with `base: "/skills"`. That means local dev, preview, and production all use the
same route prefix, and `/` is not the page you want to open.

### Validate locally

```bash
bun run test
bun run check
bun run build
bun run preview
```

Preview the built site at:

- `http://localhost:4321/skills/`

## Repository Layout

```text
skills/
  <skill-name>/
    SKILL.md
    README.md
    references/
src/
  components/
  layouts/
  lib/
  pages/
```

- `skills/` is the source of truth for the installable skill collection.
- `src/` contains the Astro site.
- The site renders content directly from `skills/`, so adding or removing a skill is a content change first, not a website migration.

## Skill Catalog

| Skill | Source | Description |
| --- | --- | --- |
| `plan` | [README](skills/plan/README.md) | Present a concrete implementation plan in chat based on the grill-me decisions summary. |
| `grill-me` | [README](skills/grill-me/README.md) | Interview the user relentlessly about a plan or design until shared understanding is reached. |
| `commit` | [README](skills/commit/README.md) | Inspect the diff, split changes by intent, and create clean conventional commits. |
| `open-pr` | [README](skills/open-pr/README.md) | Push the current branch and open a new pull request on GitHub using the `gh` CLI. Detects if a PR already exists and directs the user to use `update-pr` instead. |
| `update-pr` | [README](skills/update-pr/README.md) | Regenerate and update an existing pull request's title and body on GitHub using the `gh` CLI. |
| `open-mr` | [README](skills/open-mr/README.md) | Push the current branch and open a new merge request on GitLab using the `glab` CLI. Detects if an MR already exists and directs the user to use `update-mr` instead. |
| `update-mr` | [README](skills/update-mr/README.md) | Regenerate and update an existing merge request's title and body on GitLab using the `glab` CLI. |
| `tdd` | [README](skills/tdd/README.md) | Build features test-first with red-green-refactor. Language and framework agnostic. |
| `review` | [README](skills/review/README.md) | Review code changes and write a structured `REVIEW.md` using standard or story-aware review. |
| `improve` | [README](skills/improve/README.md) | Audit overall codebase health, write a prioritized `IMPROVE.md`, and then decide whether to fix issues. |
| `research` | [README](skills/research/README.md) | Clone and reference external repositories as source-of-truth from `~/.research/` when implementing against frameworks, libraries, or tools. |
| `investigate` | [README](skills/investigate/README.md) | Analyze the current repo in a read-only way to understand stories, bug paths, and existing behavior. |
