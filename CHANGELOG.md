# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added — 2026-04-28

- `review` skill: two-mode code review (standard diff review and story-aware review); writes a structured `REVIEW.md` for handoff to a fresh fix session
- `investigate` skill: stub for deep structured investigation and analysis of a codebase, system, or problem — content to be developed with concrete use cases
- `improve` skill: holistic codebase health audit for codebases developed with fast agentic iteration; surfaces accumulated technical debt and heals it incrementally via `IMPROVE.md`
- `research` skill: clone remote repositories to `/tmp/research/<task>/` as source-of-truth reference material when implementing against a framework, library, or pattern
- `.github/workflows/pr-title.yml`: PR title linter enforcing conventional commit format on all PRs

### Changed — 2026-04-28

- `tdd` skill: stripped to language-agnostic methodology only; removed Java Spring Boot test layer table and all concrete code examples; description updated to remove Spring Boot mention
- `AGENTS.md`: rewritten as a practical guide for agents working in this repo — covers skill structure, authoring conventions, design principles, and how to use the `research` skill for reference material
- `.gitignore`: added entries for agent-generated planning files (`PLAN.md`, `IMPROVE.md`, `REVIEW.md`) and local reference repos

### Removed — 2026-04-28

- `tdd/tests.md`: Java-specific examples file removed; skill is now language-agnostic

### Added — 2026-04-28

- `plan` skill: explore the codebase and produce a settled `PLAN.md` using bulk questions with labeled options — never one-at-a-time grilling
- `commit` skill: conventional commits with intent-based splitting; detects GitLab repos and adds ticket scope automatically
- `open-pr` skill: push and open a PR or MR; detects GitHub vs GitLab from the remote URL and applies the right description template for each
- `tdd` skill: red-green-refactor with explicit anti-horizontal-slicing rules; language and framework agnostic

### Removed — 2026-04-28

- `create-a-commit` — replaced by `commit`
- `create-a-plan` — replaced by `plan`

### Changed — earlier

- Renamed `plan-a-feature` to `create-a-plan`
- Renamed `auto-commit` to `create-a-commit`
- Removed `metadata` block (author, version) from all skills
