---
name: improve
description: >-
  Holistic codebase health audit for codebases developed with fast agentic
  iteration. Surfaces accumulated technical debt across the whole codebase,
  produces a prioritized IMPROVE.md, and heals issues incrementally. Use
  periodically or before major new work: "improve the codebase", "health
  check the codebase", "let's address technical debt", "audit the codebase".
---

# Improve

Step back. Look at the whole picture. Heal what has accumulated.

## Why this exists

Agentic development ships at inference speed. Features land fast, but the
codebase accumulates issues that no single PR review catches: patterns that
drifted apart, abstractions that stopped making sense, test coverage that
thinned out, dead code that nobody removed. No individual change looks
wrong — the problems are in the gaps and the accumulation.

This skill is for doing that work deliberately: not reviewing a PR, not
planning a feature, but auditing the whole codebase and healing it before
the accumulated debt starts breaking things.

## When to use

- Periodically, as regular codebase maintenance
- Before starting a major new feature or refactor
- When things feel fragile or when understanding the codebase takes more
  effort than it should
- After a period of rapid agentic development

## Workflow

### 1. Get the lay of the land

Before forming any opinions, read the codebase broadly:

- Read the entry points, main modules, and key interfaces
- Trace how data flows through the system
- Note the patterns: how things are named, how they are organized,
  what conventions appear consistently

Do not focus on any single file. The goal at this stage is a
whole-system picture, not a detailed audit of one area.

### 2. Survey for health issues

Scan every module and surface issues across these dimensions:

**Consistency**
- Are naming conventions applied uniformly, or have they drifted?
- Are similar problems solved in different ways in different parts
  of the codebase?
- Do module boundaries make sense, or has logic leaked across them?

**Dead weight**
- Unused variables, functions, classes, imports
- Commented-out code that was never removed
- Deprecated dependencies or APIs still in use
- Code that was left "for later" and never revisited

**Test coverage**
- Are critical paths tested?
- Are there behaviors that have no test and would break silently?
- Are there tests that test implementation rather than behavior
  (and would break on refactor even when nothing is wrong)?

**Abstractions**
- Are there abstractions that are over-engineered for what they do?
- Is there logic repeated in three places that should be shared?
- Are interfaces clear? Can you understand what a module does from
  its public surface alone?

**Naming and readability**
- Variables, functions, and classes named in ways that require
  context to understand
- Long functions that do more than one thing
- Nesting that could be flattened with early returns or guard clauses

**Coupling**
- Modules that know too much about each other's internals
- Circular dependencies
- Logic that belongs in one layer but has spread into another

### 3. Prioritize

Assign each issue a severity:

**High** — Likely to cause bugs, data problems, or broken behavior.
Missing tests on critical paths, logic errors, leaky abstractions
causing incorrect behavior. Address first.

**Medium** — Hurts future development but nothing is broken yet.
Inconsistent patterns, dead code, unclear names, poor module boundaries.

**Low** — Minor polish. Small naming improvements, minor duplication,
cosmetic inconsistencies.

### 4. Write IMPROVE.md

Write findings to `IMPROVE.md` in the project root:

```markdown
# Codebase Health — [YYYY-MM-DD]

## Summary
[2–3 sentences: overall health assessment, main themes in what was
found, rough estimate of remediation effort]

## Findings

### High
- [ ] [module/file] — [description of issue and why it matters]

### Medium
- [ ] [module/file] — [description]

### Low
- [ ] [module/file] — [description]

## Recommended Order
[Short paragraph or numbered list: which issues to tackle first and
why — usually high-severity first, but sometimes a medium-severity
foundation issue should come before a high-severity symptom]
```

### 5. Confirm before acting

After writing IMPROVE.md, present the summary to the user:

> IMPROVE.md is written with [N] findings: [X] high, [Y] medium, [Z] low.
> Ready to start working through them, or do you want to review and
> adjust priorities first?

Do not start fixing until the user confirms.

### 6. Heal incrementally

Work through IMPROVE.md one issue at a time, in priority order:

- Address one issue
- Run the test suite to confirm nothing broke
- Mark the item done in IMPROVE.md (`- [x]`)
- Commit the change (use the `commit` skill)

Never batch multiple unrelated fixes into one commit. Each fix is its
own commit with a clear reason to change.

## Rules

- Never skip the broad survey — do not jump straight to known problems
- Never batch fixes — one issue, one commit
- Never modify behavior while healing structure; if a fix requires
  changing observable behavior, stop and flag it to the user as a
  separate decision
- Always run the test suite after each fix before moving to the next
- Keep IMPROVE.md updated as you work — it is the record of what
  was found and what was done
