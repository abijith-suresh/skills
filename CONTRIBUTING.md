# Contributing

## Setup and checks

Use [mise](https://mise.jdx.dev/) to install the Node and Bun versions pinned in
`mise.toml`.

```bash
mise install
bun install
bun run dev
```

The site runs at `http://localhost:4321/` and reads `skills/` at build time.
Run `bun run verify` before handing off. It checks types, lint, formatting,
tests and the build. Add focused tests for behavior you change.

## Edit skills

Create or edit `skills/<name>/SKILL.md`. Keep that directory canonical, with no
per-skill README or duplicated content. Supporting `references/`, `scripts/`
and `assets/` directories are allowed.

Follow the [Agent Skills specification](https://agentskills.io/specification).
The directory and frontmatter `name` must match in lowercase kebab-case. Include
`description`, `metadata.summary` and `metadata.scope`. Scope is `personal`,
`work`, or `personal work`, for the GitHub laptop, the GitLab and Jira laptop,
or both. Add `metadata.featured: "true"` only for site curation.

Use short request keywords and let skills compose. The main agent plans,
dispatches subagents, integrates results and reports; subagents do the work and
never start subagents. Do not hardcode models, providers or harnesses. Use the
user's named model per request, or the harness default when none is named.
Report an unavailable model without substituting.

For adapted skills, use only `metadata.author: "<original author>"` for
attribution. Do not add license files or credit sections. Install with
`npx skills@latest add abijith-suresh/skills --skill <name> ...`, without global
loader files.

Keep the README catalog and count in sync. Use plain words, sentence-case
headings and concrete claims. Keep workflows focused without a line target.

## Edit the site

Keep design tokens in `src/styles/global.css`, reusable components in
`src/components/`, collection validation in `src/content.config.ts`, and catalog
and path logic in `src/lib/`. Preserve the site's dark design and accessibility
behavior. Build laptop install commands from skill scope tags.

## Commits and review

Branch from `main` with a descriptive feature branch name. Never push directly
to `main`. Keep commits focused and use conventional commits in the form
`type(scope?): summary`; allowed types live in `commitlint.config.ts`.
Open a focused pull request and let CI pass. The owner reviews and squash merges.
Do not merge it yourself.

## Releases

Add a [changeset](https://changesets.dev/) for skill or site changes with
`bun run changeset`. Choose `patch` for corrections, `minor` for new skills or
workflow changes, and `major` only for an intended `1.0.0`. Use
`bun run changeset --empty` when no release is needed.

The release workflow opens a version PR. The owner merges it to update the
changelog and package version, tag `vX.Y.Z` and create a GitHub Release. Do not
edit `CHANGELOG.md` or the package version by hand.
