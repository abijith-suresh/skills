# Contributing

## Prerequisites

- [mise](https://mise.jdx.dev/) for managing tool versions
- Node `24.20.0` and Bun `1.4.1`, pinned in `mise.toml`

```bash
mise install
bun install
```

## Run locally

```bash
bun run dev
```

Open `http://localhost:4321/` in a browser. Changes under `skills/` reload
through Astro's development server.

## Verify changes

```bash
bun run type-check
bun run lint
bun run format:check
bun run test
bun run build
bun run verify
```

Run `bun run verify` before handing off; add focused tests for behavior you
change and let CI own the full suite.

## Branches, commits, and pull requests

- Branch from `main` with a descriptive feature branch name.
- Never push directly to `main`.
- Keep each commit focused on one reason to change.
- Use conventional commit messages in the form `type(scope?): summary`; the allowed types live in `commitlint.config.ts`.
- Open a focused pull request from the feature branch and wait for CI to pass.
- Squash merge the pull request into `main`. Merging is the owner's call — leave it to them.
- Adding, removing, or renaming a skill means updating the catalog and count in `README.md`.

## Releases

The collection is versioned as one package with
[Changesets](https://changesets.dev/). Add a changeset to any pull request that
changes a skill or the site:

```bash
bun run changeset
```

Choose `patch` for fixes and corrections, `minor` for new skills or workflow
changes, and `major` only when you mean `1.0.0`. The release workflow opens or
updates a `chore: version skills` pull request. Merge that pull request when you
want to cut a release. It updates `CHANGELOG.md` and `package.json`, then tags
`vX.Y.Z` and creates a GitHub Release.

Do not edit `CHANGELOG.md` or the package version by hand. Use
`bun run changeset --empty` when a pull request needs no release.

## Prose

Skill text is direct: sentence-case headings, concrete claims, plain punctuation.

## Add a skill

1. Create `skills/<skill-name>/SKILL.md`.
2. Follow the [Agent Skills specification](https://agentskills.io/specification).
   Use frontmatter with `name`, `description` as the trigger
   (`Use when the user says "<say>".`), and `metadata.summary` as the
   one-line human summary. Add `metadata.featured: "true"` only when the skill
   belongs in site curation.
3. Make the directory name and frontmatter `name` match in lowercase
   kebab-case.
4. Keep the workflow standalone. It must not require or run another skill.
5. Add a catalog row to `README.md` using the same say phrase and summary, and
   update the count.
6. Run `bun run verify`.

Supporting `references/`, `scripts/`, or `assets/` directories are allowed
when a skill needs them. Do not add a per-skill README.

### Body

Keep the body to the core workflow: put the contract and authorization
boundary in the first paragraph, then steps, output, and only non-obvious stop
conditions. Cut goals that restate steps, generic advice, repeated rules, and
harness wait mechanics. Aim for 60 lines or fewer, with complex forge skills
allowed up to 90.

## Update a skill

1. Edit the relevant `SKILL.md` and supporting files.
2. Keep the trigger and summary in sync with the `README.md` catalog.
3. Run `bun run verify`.

## Change the site

- Put design tokens in `src/styles/global.css`.
- Put reusable components in `src/components/`.
- Keep content collection configuration in `src/content.config.ts`.
- Keep catalog and path logic in `src/lib/`.
- Preserve the site's dark, high-contrast, typography-led design and its
  accessibility behavior.
