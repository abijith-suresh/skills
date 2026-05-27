# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed — 2026-05-28

- Fixed CSS bugs, consolidated design tokens, improved accessibility (color contrast, focus indicators, reduced-motion support), and migrated to Tailwind v4 syntax across the docs site

### Changed — 2026-05-26

- Consolidated docs-site CSS into a token-driven system: extracted `SectionHeader` component, replaced raw values with design tokens, added utility classes (`section`, `card`, `tag`, `prose`), and slimmed per-page styles

### Changed — 2026-05-25

- Redesigned expressive-code terminal blocks on skill detail pages to align with the Swiss Style Design System: minimal header with subtle 15% opacity dots, unified `color-mix` surface background, sharp corners, and a text-based "Copy" button matching the index page install command
- Added `terminalTitlebarDotsOpacity`, `terminalTitlebarBorderBottomColor`, and `terminalTitlebarBackground` overrides to the expressive-code global config

### Added — 2026-05-17

- Astro-powered docs site with a GitHub Pages-friendly `/skills/` base route, a catalog landing page, per-skill detail pages, and copy-ready skills install commands sourced directly from the repository
- Bun-based frontend tooling (`bun.lock`, `mise.toml`, Astro/Tailwind/TypeScript setup) plus targeted tests for catalog metadata and route generation
- GitHub Pages deployment workflow using the official Astro action

### Changed — 2026-05-17

- skill source files now live under `skills/<skill-name>/` so the repository cleanly separates installable skills from the Astro site implementation
- install instructions now use the current `npx skills add <repo> --skill <name>` syntax throughout the repository
- `README.md` and `AGENTS.md` now document the new project layout, local Bun-based development flow, and the `/skills/` routing model used for GitHub Pages

### Changed — 2026-05-16

- `open-pr` skill: split into `open-pr` (create-only) and `update-pr` (update-only);
  `open-pr` now stops with a pointer to `update-pr` if a PR already exists, adds
  automated test-running before creation, and provides a structured PR body with
  conditional sections; `update-pr` runs tests and regenerates title and body from
  scratch on the existing PR
- `README.md`: added `update-pr` to the catalog, bumped badge count to 10

### Changed — 2026-05-14

- `plan` skill: strengthened wording to prevent writing PLAN.md without
  explicit user confirmation; made Step 3 (ask all open questions) mandatory
  before presenting any plan; added warning about chat-only default; refined
  description to not trigger on "present a plan" or "come up with a plan"
  (those are chat-only)
- `open-pr` skill: split into `open-pr` (GitHub-only) and `open-mr`
  (GitLab-only); both skills now detect whether a PR/MR already exists for
  the current branch and update it instead of creating a duplicate; removed
  the routing shell and `references/` folder; `open-pr` uses `gh pr edit`
  for updates, `open-mr` uses `glab mr update`

### Changed — 2026-05-08

- `AGENTS.md`: clarified changelog guidance — when adding an entry under `[Unreleased]`, merge into an existing date section rather than creating a duplicate
- `open-pr` skill: split into a routing shell (`SKILL.md`) with platform-specific workflows extracted into `references/github-workflow.md` and `references/gitlab-workflow.md`; GitLab flow now uses two-step push + manual description paste instead of push options; removed shared body template in favor of platform-specific ones
- `research` skill: redesigned with a persistent `~/.research/` store (replaces per-task `/tmp/research/`), full clones instead of `--depth 1`, pull-once-per-task semantics, silent implementation mode, and new `references/list.md` and `references/citations.md` extensions

### Changed — 2026-05-04

- `commit` skill: removed the confirmation step before committing; the skill now plans the split and executes without asking for permission
- `plan` skill: plan content is displayed in chat first; only writes `PLAN.md` if the user confirms
- `improve` skill: findings are displayed in chat first; only writes `IMPROVE.md` if the user confirms
- `review` skill: findings are displayed in chat first; only writes `REVIEW.md` if the user confirms

### Added — 2026-05-01

- `investigate` skill: expanded from a stub into a full current-repo analysis workflow with read-only defaults, evidence-based findings, optional `INVESTIGATION.md`, and an explicit handoff into implementation only after confirmation
- `.gitignore`: added `INVESTIGATION.md` to ignored agent-generated analysis files

### Changed — 2026-05-01

- `improve` skill: added a lightweight architecture-health pass using `module`, `interface`, `deep/shallow module`, `deletion test`, `locality`, and `leverage`; now stops after writing `IMPROVE.md` until the user confirms whether to start fixing
- `research` skill: clarified that it is for external reference repositories, not for understanding the current repo
- `commit` skill: added default-branch guardrails, optional personal scopes, explicit GitLab/work ticket-as-scope rules, and expanded exclusions for agent-generated files
- `open-pr` skill: unified the PR/MR body structure, added GitHub self-assignment, corrected GitLab target and assignment push options, and clarified platform-specific title rules
- `plan` skill: made exploration-before-questions explicit, with a single focused clarifying question only when the repo area is too ambiguous to inspect
- `review` skill: replaced hardcoded `origin/main` diffing with dynamic base-branch detection from the open PR or remote default branch
- `AGENTS.md`: updated the spec link, reference repos, preferred supporting-file layout, and local skill sync guidance
- `README.md`: updated the catalog and badge to reflect the current 8-skill collection

### Removed — 2026-05-01

- `plan-to-issues` skill: removed from the collection and local installs

### Added — 2026-04-28

- `review` skill: two-mode code review (standard diff review and story-aware review); writes a structured `REVIEW.md` for handoff to a fresh fix session
- `investigate` skill: stub for deep structured investigation and analysis of a codebase, system, or problem — content to be developed with concrete use cases
- `improve` skill: holistic codebase health audit for codebases developed with fast agentic iteration; surfaces accumulated technical debt and heals it incrementally via `IMPROVE.md`
- `research` skill: clone remote repositories to `/tmp/research/<task>/` as source-of-truth reference material when implementing against a framework, library, or pattern
- `.github/workflows/pr-title.yml`: PR title linter enforcing conventional commit format on all PRs
- `plan` skill: explore the codebase and produce a settled `PLAN.md` using bulk questions with labeled options — never one-at-a-time grilling
- `commit` skill: conventional commits with intent-based splitting; detects GitLab repos and adds ticket scope automatically
- `open-pr` skill: push and open a PR or MR; detects GitHub vs GitLab from the remote URL and applies the right description template for each
- `tdd` skill: red-green-refactor with explicit anti-horizontal-slicing rules; language and framework agnostic

### Changed — 2026-04-28

- `tdd` skill: stripped to language-agnostic methodology only; removed Java Spring Boot test layer table and all concrete code examples; description updated to remove Spring Boot mention
- `AGENTS.md`: rewritten as a practical guide for agents working in this repo — covers skill structure, authoring conventions, design principles, and how to use the `research` skill for reference material
- `.gitignore`: added entries for agent-generated planning files (`PLAN.md`, `IMPROVE.md`, `REVIEW.md`) and local reference repos

### Removed — 2026-04-28

- `tdd/tests.md`: Java-specific examples file removed; skill is now language-agnostic
- `create-a-commit` — replaced by `commit`
- `create-a-plan` — replaced by `plan`

### Changed — earlier

- Renamed `plan-a-feature` to `create-a-plan`
- Renamed `auto-commit` to `create-a-commit`
- Removed `metadata` block (author, version) from all skills
