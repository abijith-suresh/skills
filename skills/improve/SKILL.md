---
name: improve
description: >-
  Audit the codebase for technical debt and fix issues incrementally. Use
  when asked to "improve the codebase", "health check", "address technical
  debt", or "audit the codebase".
---

# Improve

Step back. Look at the whole picture. Heal what has accumulated.

## Why this exists

Agentic development ships at inference speed. Features land fast, but the
codebase accumulates issues that no single PR review catches: patterns
that drift apart, abstractions that stopped making sense, test coverage
that thins out, dead code that nobody removes. No individual change looks
terrible in isolation — the problems are in the gaps and the accumulation.

This skill is for doing that work deliberately: not reviewing a PR, not
planning a feature, but auditing the whole codebase and deciding what to
heal before the accumulated debt starts breaking things.

## When to use

- Periodically, as regular codebase maintenance
- Before starting a major new feature or refactor
- When things feel fragile or understanding the codebase takes more
  effort than it should
- After a period of rapid agentic development

## Workflow

### 1. Get the lay of the land

Before forming any opinions, read the codebase broadly:

- read the entry points, main modules, and key interfaces
- trace how data flows through the system
- note the patterns: how things are named, organized, and layered

Do not focus on one file too early. Start with a whole-system picture,
then zoom in.

### 2. Survey for codebase health issues

Scan the codebase across these dimensions:

**Consistency**
- Are naming conventions applied uniformly, or have they drifted?
- Are similar problems solved in different ways in different areas?
- Do module boundaries still make sense, or has logic leaked across them?

**Dead weight**
- Unused variables, functions, classes, or imports
- Commented-out code that should have been removed
- Deprecated dependencies or APIs still in use
- Code left "for later" and never revisited

**Tests**
- Are critical paths tested?
- Are there behaviors that could break silently with no coverage?
- Are tests verifying behavior through useful public interfaces, or only
  implementation details?

**Abstractions**
- Are there abstractions that are over-engineered for what they do?
- Is there duplication that should be shared?
- Are interfaces clear, or do callers have to know too much?

**Naming and readability**
- Variables, functions, and classes named in ways that require too much context
- Long functions that do more than one thing
- Nesting that could be flattened with guard clauses or early returns

**Coupling**
- Modules that know too much about each other's internals
- Circular dependencies
- Logic that belongs in one layer but has spread into another

### 3. Run a lightweight architecture-health pass

Use this small shared vocabulary while reviewing architecture health:

- **Module** — anything with an interface and an implementation: a function,
  class, package, feature slice, or subsystem
- **Interface** — what callers or tests need to know to use a module
  correctly: inputs, outputs, invariants, errors, ordering, and configuration
- **Deep module** — a module that provides a lot of useful behavior behind
  a small, understandable interface
- **Shallow module** — a wrapper or pass-through whose interface is almost
  as complex as its implementation
- **Deletion test** — imagine deleting a module. If complexity disappears,
  it was probably shallow. If complexity spreads into callers, it was
  probably earning its keep
- **Locality** — related change, bugs, knowledge, and tests are concentrated
  in one place
- **Leverage** — callers and tests get more useful behavior per unit of
  interface they need to understand

Do not require `CONTEXT.md`, ADRs, domain docs, or any separate
architecture files. Use the codebase in front of you.

Ask these questions:

- Where does understanding one concept require jumping through many small modules?
- Which wrappers are pass-through abstractions that do not hide complexity?
- Where is logic extracted only for testability, but real behavior is still
  hard to test through a useful public interface?
- Which modules have interfaces nearly as complex as their implementation?
- Where would a deeper module improve locality and leverage?
- Where is coupling real and harmful versus simply necessary collaboration?

### 4. Prioritize

Assign each issue a severity:

**High** — likely to cause bugs, broken behavior, or unsafe changes soon.
Missing tests on critical paths, logic errors, or architecture that is
already creating defects.

**Medium** — hurts future development but nothing is obviously broken yet.
Inconsistent patterns, dead code, unclear names, poor module boundaries,
or shallow abstractions that slow the team down.

**Low** — minor polish. Small naming improvements, minor duplication, or
cosmetic inconsistencies.

### 5. Present findings in chat

Present the full findings in chat using this structure:

```markdown
# Codebase Health — [YYYY-MM-DD]

## Summary
[2–3 sentences: overall health assessment, main themes, and rough
remediation effort]

## Findings

### High
- [ ] [architecture] `path/to/file` — [description of issue and why it matters]

### Medium
- [ ] [tests] `path/to/file` — [description]

### Low
- [ ] [naming] `path/to/file` — [description]

## Recommended Order
[Short paragraph or numbered list explaining what to tackle first and why]
```

Architecture findings should appear naturally alongside the rest of the
audit. Use tags such as `[architecture]`, `[tests]`, `[dead-code]`, or
`[naming]` when they help the reader scan the list.

### 6. Ask whether to write IMPROVE.md

The findings are already in chat. IMPROVE.md is only needed when handing
off to another agent or returning to the task later. Ask:

> Should I write this to IMPROVE.md? Only needed if you plan to hand off to
> another agent.

If the user says yes, write the findings to `IMPROVE.md` in the project root.

### 7. Confirm before acting

After presenting (or writing), summarize the result and ask whether to
continue fixing:

> [N] findings: [X] high, [Y] medium, [Z] low. Ready to start working
> through them, or do you want to review and adjust priorities first?

Do not start fixing until the user confirms.

### 7. Heal incrementally if confirmed

Work through `IMPROVE.md` one issue at a time, in priority order:

- address one issue
- run relevant tests after each fix when possible
- mark the item done in `IMPROVE.md` (`- [x]`)
- commit each unrelated fix separately

If a fix would change observable behavior, stop and confirm that decision
with the user instead of folding it into a structural cleanup.

## Rules

- Never skip the broad survey — do not jump straight to known problems
- Never require `CONTEXT.md`, ADRs, or extra architecture docs to do the audit
- Never start fixing until `IMPROVE.md` is written and the user confirms
- Never batch unrelated fixes into one commit
- Always run relevant tests after each fix when possible
- Never write IMPROVE.md without asking first — display the findings in
  chat and only write the file if the user confirms
- Keep `IMPROVE.md` updated as you work — if it was written, it is the
  record of what was found and what was done
