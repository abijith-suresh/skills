# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

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
  token (they now use --color-muted-foreground).

- Migrated the site to the monochrome chrome standard the main site adopted:
  neutral hueless surfaces (oklch(20.8% 0 0) background ≈ #141414) with no UI
  accent — hovers, links, eyebrows, selection, and focus rings are white or
  neutral — and the pink palette color survives only as the signature: the
  glowing period and the "as." favicon period. The site-wide breathing aurora
  glow is removed; the design is flat, and only the period's glow-breathe
  remains.
- Moved OG images and site icons to the canonical sRGB set (#141414
  background, #e8e8e8 text, #a3a3a3 muted, #2c2c2c hairlines) with the
  theme-color meta updated to match; the "as." monogram keeps the shared
  geometry on the neutral tile.
- Adopted the main site's link language: inline prose and text links carry a
  persistent quiet underline (1px, white at 35% alpha) that brightens to 90%
  on hover, instead of violet color-only links.
- Aligned chrome with the main site: the topbar brand is plain "skills" (the
  pink period lives only in the favicon and page headers), eyebrows render as
  lowercase neutral mono, the skip link and focus ring are white-on-neutral,
  section links and the card "read →" foot hover to full text color, the
  copy affordance hovers neutral, and inline text links lost the violet hover.
- Updated the shared type tokens: --text-hero now renders 48px on small
  phones and 60px on desktop (previously 36–52px), hero titles use the
  display tracking, section heads match the main site's clamp, prose gained
  the main site's heading scale (h2/h3/h4 sizes with shared margins), and
  tokens were renamed to the shared names (--radius-card, --leading-*, glow
  color/duration tokens, letter-spacing tokens).
- Reworked the footer into the main site's single row: "© 2026 abijith
  suresh" on the left, "github ↗ · abijith.sh ↗" on the right, with
  symmetric 1.5rem/3rem padding.
- Centered the 404 page vertically like the main site's template: the
  "page not found." stack sits in the viewport's middle with a symmetric
  safety padding.
- Gated card hover effects (lift and ring brighten) behind hover-capable
  pointers so touch devices no longer trigger the animation mid-scroll.

- Applied the Dusk Aurora House Standard v1 across the site: OG images and site
  icons now use the canonical sRGB palette (#1a1823 background, #e0ddef text,
  #a09aad muted, #312f39 hairlines), the theme-color meta matches the new
  background, and the "as." monogram follows the shared icon geometry — a
  full-bleed 16%-radius tile with no frame and a larger 0.52-size "as" glyph.
- Switched browser titles to the shared middle-dot vocabulary: the home page
  titles as the bare domain ("skills.abijith.sh"), and section, detail, and 404
  pages as "<page> · skills.abijith.sh" through a new buildPageTitle() helper;
  og:site_name stays "skills".
- Rebuilt the 404 page on the canonical template: a "page not found." hero with
  the glowing pink period, one muted explanation line, and a "← back to skills"
  link, left-aligned with 0/60/120ms reveals and no eyebrow or numeral.
- Gave inline prose links a persistent quiet underline (3px offset, muted at
  half alpha) that warms to violet on hover; chrome links keep their
  underline-free style. Card titles stepped up to 1.2rem, and the type scale
  gained the shared --text-hero/--text-page/--text-lg token names.
- Enabled Astro's ClientRouter for client-side navigation: the aurora glow
  persists across navigations so its 22s breathe doesn't restart, and the
  install-command copy script re-binds on astro:page-load with an idempotent
  guard so copy keeps working after soft navigations.
- Retimed the rise choreography to the shared table: header at 0ms, content at
  80ms, and list items at 160ms plus 70ms per card, capped after eight items.
- Adopted the Dusk Aurora design system across the site: a violet OKLCH palette
  with a breathing aurora glow, Bricolage Grotesque display and Geist body
  type, a topbar and restyled footer, card-based skill entries with a "read →"
  foot, and staggered load reveals that respect reduced-motion preferences.
- Widened the site to the main site's measure: a 64rem content container with
  clamp(1.25rem, 5vw, 2.5rem) gutters, while detail-page prose keeps a ~70ch
  measure.
- Restructured the catalog around favourites: the homepage dropped its eyebrow
  and now lists only skills flagged `featured: true` inside the spec's
  `metadata` frontmatter map (commit, grill-me, research) under a "favourite
  skills" section head with an "all skills →" link, and a new /all/ page lists
  the full collection with its own SEO metadata and OG image.
- Shortened the topbar brand to "skills." and its links to "all" and
  "abijith.sh ↗"; the GitHub link now lives in the footer alongside
  "part of abijith.sh ↗".
- Streamlined skill detail pages: removed the breadcrumb eyebrow, placed the
  install command as the primary action under the title and lede, and rendered
  SKILL.md directly as the page body.
- Tightened the Dusk Aurora translation on the site: card titles and detail
  page titles use the display face with a glowing pink period on detail pages,
  eyebrow labels render as lowercase violet mono, prose horizontal rules are
  quiet 1px hairlines, links and the copy affordance hover violet, the install
  command block matches the prompts site's copy block, and OG images and site
  icons use the violet palette.
- Reworked the site icon into an "as." monogram — lowercase letterforms with
  the signature pink period on the violet rounded tile, sized to stay legible
  at 16px — branding the site as part of the abijith.sh family.
- Simplified the footer links to "github ↗ · abijith.sh ↗" and removed the
  hairline divider between the homepage hero and the favourite skills section.
- Lowercased browser and OG image titles ("skills", "all skills | skills",
  "commit | skills", "404 | skills") and the visible copy and 404 link labels
  to match the lowercase voice used across the sibling sites.
- Tokenized the stylesheet: added radius and z-index tokens, mapped one-off
  rem gaps, sizes, and paddings to the fluid scale tokens, and centralized
  the glowing pink period in global.css instead of duplicating it per page.
- Fixed card and arrow hover transitions that browsers silently dropped
  because their shorthand repeated the easing function after a duration token
  that already contained one.

### Changed — 2026-08-31

- Prepared the catalog for root-hosted Vercel static output with canonical and
  social metadata, static skill OG images, generated icons, a sitemap, and
  robots.txt.
- Limited heading removal to a document's first node and added baseline Vercel
  security headers with conservative caching for unversioned static assets.
- Aligned Bun, Node, TypeScript, Astro, Satori, Resvg, and shared CI versions
  with the repository baseline.
- Removed the GitHub Pages deployment workflow and fixed root-hosted asset paths.

### Changed — 2026-08-22

- Reworked repository guidance with direct, task-focused language.
- Moved contributor instructions to the repository root and removed the
  standalone context and architecture documents.
- Updated installation commands and the skill catalog in `README.md`.

### Added — 2026-08-21

- Added `unslop` skill for cutting AI tells from writing and adding human
  voice. Sourced from [cursor/plugins](https://github.com/cursor/plugins).

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
- `src/styles/global.css`: fixed font `url()` paths to use root-hosted `/fonts/...`
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

- Astro-powered docs site with a root-hosted base route, a catalog landing page, per-skill detail pages, and copy-ready skills install commands sourced directly from the repository
- Bun-based frontend tooling (`bun.lock`, `mise.toml`, Astro/Tailwind/TypeScript setup) plus targeted tests for catalog metadata and route generation
- GitHub Pages deployment workflow using the official Astro action

### Changed — 2026-05-17

- skill source files now live under `skills/<skill-name>/` so the repository cleanly separates installable skills from the Astro site implementation
- install instructions now use the current `npx skills add <repo> --skill <name>` syntax throughout the repository
- `README.md` and `AGENTS.md` now document the new project layout, local Bun-based development flow, and the root-hosted routing model

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
