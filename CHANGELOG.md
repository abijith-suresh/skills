# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed — 2026-05-08

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
