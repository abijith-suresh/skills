# Contributing

## Local development

[mise](https://mise.jdx.dev/) manages the Node and Bun versions pinned in
`mise.toml`, currently Node `24.20.0` and Bun `1.4.1`.

```bash
mise install
mise exec -- bun install --frozen-lockfile
mise exec -- bun run dev
```

Open `http://localhost:4321/`. The Astro site loads its skill content from
`skills/` through `src/content.config.ts`.

## Verification

```bash
bun run verify
```

This runs type checking, linting, formatting checks, unit tests, and the
production build. If the pinned tools are not on `PATH`, use
`mise exec -- bun run verify`.

Browser tests are separate. Run `bun run test:e2e:build` to build and test,
or `bun run test:e2e` to test an existing `dist/`. They require Playwright's
Chromium, Firefox, and WebKit installations.

## Authoring skills

- Define one repeatable workflow with clear inputs, outputs, and failure
  conditions in `skills/<skill-name>/SKILL.md`. Include the complete method in
  that skill so it works without another skill being installed or invoked.
  A skill must not run another skill as part of its method.
  A completed workflow may recommend a follow-on skill in its output, but the
  recommendation must be optional and must not be a required next step.
- Follow the [Agent Skills specification](https://agentskills.io/specification).
  Use matching lowercase kebab-case names for the directory and frontmatter
  `name`.
- Keep discovery descriptions short and natural. Explain what the skill
  does and when to invoke it.
- Write direct English. State each action with its condition and the evidence
  or observable finish that shows it is complete. Put an instruction beside
  the decision it governs. Remove slogans and repeated rules within one skill;
  concise repetition across independently installed skills is acceptable.
  Preserve domain constraints that change what the workflow does.
- Put delegation instructions in the workflow that owns the work. Default
  substantive investigation, implementation, and verification to workers.
  Prefer a less costly capable worker, honoring the user's model preferences.
  Keep the task scope,
  user decisions, and combined result with the parent. Keep trivial actions
  direct when dispatch and reporting would outweigh the work.
- Give each worker a bounded assignment: state the question to answer or edits
  it owns, provide context it can access, set what it may change, and name the
  evidence to return. Parallelize independent tasks, sequence dependencies,
  and give overlapping edits one owner. If delegation is unavailable, perform
  the workflow directly and say so. When the harness supports completion
  notifications, acknowledge the dispatch and end the turn when only worker
  results remain. Without notifications, use an available wait or join
  operation. If only status queries are available, make bounded checks at
  meaningful work boundaries without rapid polling. Report pending work
  when the host cannot await completion.
- Keep canonical instructions portable across agents. Name a model, platform,
  API, tool, or service only when the task depends on it; otherwise describe
  the required capability. Each workflow owns its evidence standard and finish
  conditions.
- Use specification frontmatter fields. New skills follow default discovery
  unless the user asks for explicit-only invocation. Preserve invocation
  metadata when editing an existing skill, and change it only when invocation
  policy is in scope. `agents/openai.yaml` is optional display metadata; retain
  any policy fields already present. `metadata` values are strings; the site
  uses `featured: "true"` to curate skills.
- Loading a skill does not authorize edits, external writes, or publishing.
- Adapt research conclusions into useful instructions. Include a
  `references/` file only when using the skill requires its material, and name
  the decision or condition that tells the agent when to consult it. Add
  scripts or assets only when the workflow needs them.
- Preserve personal and work skills as separate workflows and installations.

## Submitting changes

1. Branch from `main`. Never commit or push directly to `main`.
2. Keep each commit and PR focused on one reason to change. Use conventional
   commit messages in the form `type(scope?): summary`.
3. Update the README catalog when a skill's name or summary changes. Update
   its count when adding or removing a skill.
4. Add a dated entry under `[Unreleased]` in `CHANGELOG.md`. Add to today's
   section if one exists, and preserve history.
5. Run `bun run verify`, then open a PR against `main` for review. Wait for
   CI and review before squash merging.
