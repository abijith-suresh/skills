# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added — 2026-10-01

- `inbox-zero` skill: scan a Gorgias support inbox, classify open tickets into
  one primary action, and execute only the actions the user explicitly approves.

### Added — 2026-09-25

- `test-audit` skill: clean up existing test suites by checking for independent
  behavior coverage and removing low-value tests and unused test-only code.

### Changed — 2026-09-07

- `handoff` records branch, PR or MR URL, ticket, last failure, and what
  not to redo so the next session can load the work. Arguments to the
  invocation describe the next session's focus and tailor the document.
  Suggested skills are limited to this collection. Print the temp path for
  the user to paste.

- `open-pr` now creates or updates the GitHub pull request for the current
  branch. Title is a conventional commit from the net diff. Body is Why,
  optional How, and optional Out of scope. Local test runs no longer gate
  opening.
- `open-mr` now creates or updates the GitLab merge request for the current
  branch. Title stays `TICKET-123: …`. Body is Summary plus behaviour
  bullets, omitted when they would only name files.

### Removed — 2026-09-07

- `update-pr` and `update-mr`. Use `open-pr` or `open-mr`; each upserts.

### Added — 2026-09-06

- `create-issue` skill: file one GitHub issue to park a follow-up thought
  from the current work. GitHub-only. Stops on a GitLab remote.

### Changed — 2026-09-06

- Site catalog treats `metadata.featured` as the string `"true"`, matching the
  Agent Skills spec's string-to-string metadata map.
- User-invoked skills now ship harness invocation locks: `disable-model-invocation`
  in `SKILL.md`, `agents/openai.yaml` with `allow_implicit_invocation: false`,
  and `metadata.opencode/autoinvoke: "false"`. Model-invoked skills (`research`,
  `unslop`) ship `agents/openai.yaml` display metadata only.
- User-invoked skill descriptions are short human summaries. Discovery is the
  invocation flag, not trigger-phrase padding.

### Removed — 2026-09-06

- `to-issues` skill: the plan-to-tickets breakdown was unused. Capture a single
  later thought with `create-issue` instead.

### Changed — 2026-09-05

- Aligned the tooling baseline with the main site: mise.toml is the single
  source for tool versions (bun 1.4.1, node 24.20.0), the .bun-version and
  .node-version dotfiles are removed, engines.bun is pinned to the exact
  1.4.1 version, and the CI bun-quality and dependency-review workflows are
  re-pinned to the v0.4.0 release that reads Bun from mise.toml.
- Restructured the site to mirror the main site's architecture: the stylesheet
  split into fonts.css, tokens.css (the canonical design tokens, shared by the
  critical inline CSS), base.css (element resets), and global.css (component
  and prose styles), with tokens and base inlined into the document head so
  the first paint carries the real background and type and no longer shifts.
- Extracted the SEO meta tags into a `components/seo/SEO.astro` component and
  added `JsonLd.astro`, which renders WebSite structured data.
- Added the main site's ui primitives — `Container`, `PageShell`, and
  `PageHeader` — and rewired the homepage, all-skills, skill detail, and 404
  pages onto them, retiring the bespoke `PageHero` component. The shell owns
  the shared page rhythm (block-start air, tight header-to-content gap,
  block-end padding) and inner-page titles now render at 650 weight with
  heading tracking.
- Adopted the main site's inner-page rhythm: pages start at the shared
  --page-block-start air (4–6.25rem) instead of the tighter local top padding.
- Adopted the `@/` path alias for all imports from `src/` and renamed
  `src/lib/site-metadata.ts` to `src/consts.ts`, matching the main site's
  layout; AGENTS.md documents both.
- Fixed expressive-code tab colors referencing the removed --color-muted
