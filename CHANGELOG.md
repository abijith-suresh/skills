# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed — 2026-08-15

- Split the `commit` skill into `commit` and `commit-work` (ticket-scoped
  commits). Updated AGENTS.md, README catalog, and contributing guidance.

### Changed — 2026-08-15

- Shifted skill invocation policy from user-only to agent-selectable: agents
  may invoke skills when a task matches the workflow, and users may still
  invoke skills by name. Updated AGENTS.md, product docs, architecture docs,
  contributing guidance, README, and all skill descriptions.

### Removed — 2026-08-15

- Removed `diagnose`, `explain-flow`, `improve`, `plan`, `review`, and `tdd`
  from the skill catalog and docs site.
- Updated catalog badge count to 9 and trimmed product docs that described
  the removed investigation, flow-knowledge, plan, review, improve, and TDD
  workflows.

### Changed — 2026-08-15

- Bumped all direct Bun dependencies to their latest releases, aligned the
  Biome schema with CLI 2.5.8, and refreshed the pinned Node version to
  24.19.0 across engines, `.node-version`, deploy workflow, and contributing
  docs.

### Changed — 2026-07-03

- Reworked `diagnose` around resumable, evidence-driven production and QA
  investigations spanning code, data, service contracts, configuration, and
  infrastructure. Replaced mandatory local reproduction with calibrated
  hypotheses, targeted evidence probes, and persistent incident ledgers under
  `~/.agents/investigations/<task-key>.md`.
- Renamed `trace-feature` to `explain-flow` and made explicit invocation
  produce or refresh a verified flow document under
  `~/.agents/knowledge/flows/<topic>.md`.
- Changed the catalog policy from automatic model invocation to explicit,
  user-controlled invocation and documented the portable description
  convention and external runtime-state layout.

### Changed — 2026-06-16

- Aligned the docs site with the reference Astro projects: Satteri Markdown,
  IBM Plex typography, neutral CSS design tokens, Biome, Vitest, and PR CI.
- Updated docs-site architecture and contribution docs to reflect the current
  component tree, verification gate, and Markdown rendering stack.

### Changed — 2026-06-09

- **Design system overhaul**: replaced Manrope + JetBrains Mono with Geist
  (Sans + Mono) throughout the site; removed decorative noise texture;
  introduced an implied 12-column asymmetric grid system; removed monospace
  headings from skill names and detail pages
- **Skill detail page layout**: restructured `[skill].astro` to match
  skills.sh format — skill name (H1) → install command → description →
  full SKILL.md body; removed asymmetric RHS whitespace; replaced
  "Back to Skills" nav with a minimal breadcrumb
- **Typography audit**: aligned all line-height, letter-spacing, and
  spacing tokens with Tailwind v4 canonical scale; removed arbitrary
  Tailwind values in favor of native utilities (`tracking-tight`,
  `leading-snug`, `duration-150`, `translate-x-0.5`, etc.)
- **Accessibility audit**: added `text-balance` to all H1s; added
  `translate="no"` to identifiers and code; fixed tap targets to
  minimum 44px; added `aria-live="polite"` to copy button feedback;
  added `tabindex="0"` to scrollable code blocks; fixed semantic HTML
  (`<ul>`/`<li>` for skill list); added `touch-action: manipulation`
  and `-webkit-tap-highlight-color: transparent`
- **Performance**: added `rel="preload"` for both Geist font files;
  removed dead `ClientRouter` import and unused view-transition CSS;
  removed dead `astro:page-load` event listeners from ScrollReveal
- `src/styles/global.css`: added `@font-face` declarations for Geist Variable
  and Geist Mono Variable; added `.grid-site`, `.col-main`, `.col-full` grid
  utilities; removed `body::before` fractal noise overlay; renamed custom
  tokens to avoid shadowing Tailwind utilities (`--leading-tight` →
  `--leading-snug`); fixed spacing values off the 4px grid
- `src/layouts/SiteLayout.astro`: removed Google Fonts preconnect and
  Manrope/JetBrains Mono stylesheet links; added `theme-color` meta tag
  and font preload hints
- `src/pages/index.astro`: skill list uses semantic `<ul>`/`<li>`;
  removed layout-triggering `hover:pl-6` transition; added
  `translate="no"` to skill identifiers
- `src/components/InstallCommandBlock.astro`: added `tabindex="0"` and
  `aria-label` to scrollable `<code>`; added `aria-live` region for
  copy feedback; increased copy button tap target to 44px minimum
- `src/components/Footer.astro`: increased GitHub link tap target to
  44px minimum; replaced arbitrary `[2px]` translate with
  `translate-x-0.5`; improved link label to "Source on GitHub"
- `astro.config.mjs`: updated `codeFontFamily` to Geist Mono; aligned
  `codeLineHeight` to `1.625` (Tailwind `leading-relaxed`)
- `src/pages/[skill].astro`: restructured detail page with explicit
  "Installation", "Summary", and "SKILL.md" sections using `<SectionHeader>`
  (consistent with the landing page); kept skill name as H1; removed
  `bg-card` wrapper and `hr` separators in favor of the shared
  `SectionHeader` component
- `src/components/InstallCommandBlock.astro`: reverted `showLabel` prop
- `src/styles/global.css`: removed dead `body::before { display: none; }`
  from print styles (the noise texture itself was already removed)
- `src/components/Footer.astro`: reverted link label back to "GitHub"
- `src/styles/global.css`: fixed font `url()` paths to use `/skills/fonts/...`
  (matching the site's base URL); removed all dead scroll-reveal CSS
  (`[data-scroll-reveal]`, `.scroll-revealed`, `.scroll-stagger-*`)
  and the `--scroll-reveal-distance` / `--stagger-step` custom properties
- `src/components/ScrollReveal.astro`: removed — no elements used
  `data-scroll-reveal`, so the entire component and its IntersectionObserver
  logic was dead code
- `package.json`: removed unused dependencies `@lucide/astro`, `geist`,
  `marked`, and `vitest`; removed dead `test` script
- `src/lib/skill-catalog.ts`: removed unused `findSkillSummary()` export
- `src/styles/global.css`: removed dead `.col-main` CSS class; removed
  unused custom properties (`--color-card`, `--text-section-title`,
  `--leading-snug`, `--duration-normal`, `--duration-slow`, `--z-skip-link`,
  `--measure-narrow`)
- `src/layouts/SiteLayout.astro`: moved `@font-face` declarations to inline
  `<style>` block to suppress Vite build-time resolution warnings for
  public-directory font files
- **Install UX**: replaced "Copy" text button with clipboard/checkmark SVG
  icon pair; co-located copy-to-clipboard event handler in
  `InstallCommandBlock.astro` instead of the layout's inline script
- **404 page**: added `src/pages/404.astro` with consistent site design and a
  "Back to skills" link for unknown routes
- **Dependency cleanup**: removed unused `@types/node` dev dependency
- **Code cleanup**: removed `prose-custom` no-op class from `[skill].astro`;
  removed `buildCatalogPath` indirection from `site-paths.ts`; removed
  `findSkillSummary()` dead export from `skill-catalog.ts`; removed
  `Grid System` CSS block (`.grid-site`/`.col-full`) from `global.css`;
  inlined breadcrumb URL with `import.meta.env.BASE_URL`
- **Copy updates**: changed hero title from "Personal AI agent skills." to
  "Skills"; updated subtitle to "AI agent workflows I reach for every day.";
  renamed "Installation" section to "Install" and "Summary" to "Description"
  on skill detail pages
- **Font path source of truth**: derived font `url()` paths from
  `import.meta.env.BASE_URL` so they adapt if the deployment base changes

### Removed — 2026-06-08

- All 15 per-skill `README.md` files (`skills/*/README.md`): removed in favor
  of rendering `SKILL.md` directly, matching the canonical Agent Skills
  ecosystem pattern (skills.sh, anthropics, vercel-labs, mattpocock)
- `src/content.config.ts`: removed `skillReadmes` content collection
- `src/lib/skill-catalog.ts`: removed `parseReadmeBody`, `ReadmeSection`,
  `ParsedReadme`, `ReadmeLike`, and README-dependent `buildSkillSummaries`
  logic
- `AGENTS.md`: removed README.md authoring requirements and format section
- `docs/ARCHITECTURE.md`: updated data flow diagram, component tree, and
  design decisions to reflect single-collection architecture
- `docs/CONTRIBUTING.md`: removed README creation and update steps

### Added — 2026-06-07

- `skills/trace-feature/SKILL.md`: new trace-feature skill — traces how a
  specific feature or code path works in the current repo from entry to
  side effects; read-only by default with cited symbols and a surfaced
  test surface
- `skills/trace-feature/README.md`: install instructions, trigger phrases,
  and workflow overview for trace-feature
- `skills/diagnose/SKILL.md`: new diagnose skill — disciplined debugging
  loop for hard bugs and performance regressions; feedback-loop first,
  phased reproduce → minimise → hypothesise → instrument, regression
  test required
- `skills/diagnose/README.md`: install instructions, trigger phrases,
  and workflow overview for diagnose

### Removed — 2026-06-07

- `skills/investigate/SKILL.md` and `skills/investigate/README.md`:
  removed the catch-all investigate skill — its description triggered on
  generic verbs ("analyze", "investigate", "deep dive") and fired for
  unrelated requests; replaced by `trace-feature` (working code paths)
  and `diagnose` (broken behavior), each with narrower, non-overlapping
  trigger phrases

### Changed — 2026-06-07

- `README.md`: replaced `investigate` with `trace-feature` and `diagnose`
  in the catalog; bumped badge count to 15

### Added — 2026-06-05

- `skills/handoff/SKILL.md`: new handoff skill — writes a standalone session summary
  with suggested next skills to the OS temp directory for cross-session continuity
- `skills/handoff/README.md`: install instructions, trigger phrases, and workflow
  overview for handoff

### Changed — 2026-06-05

- `skills/grill-me/SKILL.md`: decoupled from plan — removed all name references to the
  plan skill; decisions summary is now framed as a generic handoff, not plan-specific;
  wrap-up no longer prompts the user to invoke plan
- `skills/grill-me/README.md`: removed `Requirements` section referencing plan;
  updated descriptions to match decoupled workflow
- `skills/plan/SKILL.md`: decoupled from grill-me — consumes a decisions summary from
  any source, not specifically from grill-me; rules now accept any provenance for
  the decisions summary; no longer refuses to run without a grill-me session
- `skills/plan/README.md`: removed `Requirements` section referencing grill-me;
  updated descriptions to reflect source-agnostic consumption
- `README.md`: updated `plan` and `grill-me` catalog descriptions; added `handoff`
  to catalog and bumped badge count to 14

### Added — 2026-06-01

- `skills/grill-me/SKILL.md`: new grill-me skill — interviews the user
  one question at a time until shared understanding is reached, then
  hands off a decisions summary to the plan skill
- `skills/grill-me/README.md`: install instructions, trigger phrases,
  and workflow overview for grill-me
- `skills/to-issues/SKILL.md`: new to-issues skill — converts plans into
  flat vertical-slice GitHub issues using the gh CLI, with preview before
  creation and a three-label vocabulary (bug, feature, chore)
- `skills/to-issues/README.md`: install instructions, trigger phrases,
  and workflow overview for to-issues

### Changed — 2026-06-01

- `AGENTS.md`: replaced bloated description pattern guide with a concise
  pointer to examples under `skills/`
- `skills/*/SKILL.md`: trimmed all 11 skill descriptions to follow
  agent-oriented trigger-first format
- `skills/*/README.md`: trimmed first-sentence in all 11 readmes to
  match SKILL.md descriptions
- `skills/plan/SKILL.md`: redesigned to pair with grill-me — plan no longer
  explores the codebase or asks questions; reads the grill-me decisions
  summary and produces the implementation plan
- `skills/plan/README.md`: updated description and how-it-works to match
  the grill-me-paired workflow
- `README.md`: added `grill-me` to catalog, bumped badge count to 12,
  updated `plan` catalog description
- `README.md`: added `to-issues` to catalog, bumped badge count to 12

### Changed — 2026-05-31

- `open-mr` skill: split into `open-mr` (create-only) and `update-mr` (update-only);
  `open-mr` now stops with a pointer to `update-mr` if an MR already exists;
  `update-mr` regenerates title and body from scratch on the existing MR
- `README.md`: added `update-mr` to the catalog, bumped badge count to 11
- `research` skill: redesigned as a shallow-clone research-first implementation gate;
  replaced full clones with `git clone --depth 1` and refresh via
  `git fetch --depth 1 origin HEAD && git reset --hard FETCH_HEAD`;
  added explicit "identify target" step before cloning;
  removed `references/list.md` and `references/citations.md` extensions;
  updated README to match the new workflow

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
