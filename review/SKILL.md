---
name: review
description: >-
  Review code changes and write a structured REVIEW.md. Two modes: standard
  (check documentation, clean code, logging, and tests against the diff) and
  story-aware (check whether the changes fully address a bug or story). Use
  after implementation: "review my changes", "do a code review", "review
  this branch", "review against the story".
---

# Review

Read the diff. Check it against the standards. Write the findings to REVIEW.md.

## Two modes

### Standard review

Triggered by: "review my changes", "do a code review", "review this branch"

Checks the diff against four axes: documentation, clean code, logging,
and tests.

### Story-aware review

Triggered by: "review against the story", "check if this covers the bug",
"does this branch handle everything for [story/bug]"

The user provides the story or bug description in the conversation. Checks
whether the changes fully address every aspect of that intent.

---

## Shared setup

### 1. Determine the base branch

Before diffing, detect the comparison base:

1. If an open PR exists for the current branch, use:

```bash
gh pr view --json baseRefName --jq .baseRefName
```

2. Otherwise detect the remote default branch with one of:

```bash
git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed 's@^refs/remotes/origin/@@'
git remote show origin | sed -n '/HEAD branch/s/.*: //p'
```

Call the result `<base>` and use it everywhere below:

```bash
git diff origin/<base>...HEAD
git log origin/<base>..HEAD --oneline
```

If you cannot determine the base branch automatically, ask the user
before reviewing.

---

## Standard review workflow

### 1. Get the diff

Use the detected base branch:

```bash
git diff origin/<base>...HEAD
git log origin/<base>..HEAD --oneline
```

Read every changed file in full, not just the diff lines. Diff lines show
what changed; the full file shows whether it fits.

### 2. Check documentation

For every public method, function, class, or interface that was added or
changed:

- Does it have a documentation comment? (Javadoc, JSDoc, docstring —
  whatever the language and project use)
- Does the comment describe *what it does and why*, not just restate
  the signature?

For non-obvious logic or business decisions embedded in the code:

- Is there an inline comment explaining the *why*?
- Would a new engineer reading this for the first time understand the
  intent without asking anyone?

The overriding principle is **self-documenting code**. Names, structure,
and clarity should carry most of the meaning. Comments fill in what the
code cannot say — never what it already says.

Flag:
- Public methods with no documentation comment
- Non-obvious logic or business decisions with no explanation
- Comments that restate what the code already makes clear (noise)

### 3. Check clean code

Scan for readability and simplicity issues:

**Early return:** Functions that could return early but don't. Deeply
nested conditionals where a guard clause would flatten the logic.

**Naming:** Variables, methods, and classes named without enough specificity
to be understood in isolation. Names that require the reader to hold
context — `data`, `result`, `temp`, `flag`. Names that misrepresent what
a thing does.

**Single responsibility:** Methods or classes doing more than one thing.
Functions where you need "and" to describe what they do.

**Complexity:** Logic more complex than the problem requires. Abstractions
that do not earn their weight. Clever code where clear code would serve.

**Dead code:** Commented-out code, unused variables, unused imports,
unreachable branches.

### 4. Check logging

For every meaningful operation — entry points, state changes, errors,
decisions with branching outcomes:

- Is there appropriate logging?
- Are log levels used correctly? (DEBUG for tracing, INFO for significant
  events, WARN for recoverable problems, ERROR for failures)
- Does the log message carry enough context to be useful in production?
  (relevant IDs, values — not just "error occurred")
- Is there logging that is excessive or that exposes sensitive data?

Flag: missing logging on error paths and significant state changes.
Flag: log messages without enough context to diagnose a problem in
production.

### 5. Check tests

- Does every new behavior have a corresponding test?
- Does every bug fix include a test that would have caught the bug?
- Do the tests verify behavior through public interfaces, not
  implementation details?
- Do the tests pass? Run them.
- Is coverage holding steady or improving?

Run the test suite using the project's test command. Check the README,
package.json, Makefile, pom.xml, or equivalent for the right command.

---

## Story-aware review workflow

### 1. Confirm the intent

Restate the story or bug in your own words and confirm with the user
before reviewing. If the description is ambiguous, ask one focused
clarifying question.

### 2. Get the diff

Use the same detected base branch:

```bash
git diff origin/<base>...HEAD
git log origin/<base>..HEAD --oneline
```

Read every changed file in full, not just the diff hunks.

### 3. Map intent to code

For each requirement, acceptance criterion, or aspect of the bug:

- Is there code that handles it?
- Is it handled correctly, or only partially?
- Are edge cases from the story accounted for?

Note what is covered, what is partially covered, and what is missing.

### 4. Run the tests

Run the test suite. Story-aware reviews pay special attention to whether
the tests reflect the story's requirements, not just that tests exist.

---

## Writing REVIEW.md

Write all findings to `REVIEW.md` in the project root. Use this structure:

```markdown
# Code Review — [branch name] — [YYYY-MM-DD]

## Mode
Standard | Story-aware: [brief story/bug description]

## Summary
[2–3 sentences: what changed, overall impression, whether it is
ready to merge or needs work]

## Findings

### Critical
Issues that must be resolved before merge — bugs, missing error handling,
security problems, broken tests.

- [ ] `path/to/file` — [description of the issue and what to fix]

### Important
Issues that significantly affect quality — missing documentation on public
methods, missing tests for new behavior, logging gaps on error paths,
clean code violations that meaningfully hurt readability.

- [ ] `path/to/file` — [description]

### Nitpick
Minor style or consistency issues. Optional to address.

- [ ] `path/to/file` — [description]

## Story Coverage
[Story-aware mode only]

- [x] [requirement or criterion] — covered in `path/to/file`
- [ ] [requirement or criterion] — not addressed
- [~] [requirement or criterion] — partially addressed in `path/to/file`

## Verdict
**Approved** | **Changes Required**

[One sentence: what needs to happen before this can merge, or why it
is ready as-is]
```

---

## After writing REVIEW.md

Tell the user:

> REVIEW.md is written. To work through the findings, start a new agent
> session, point it at REVIEW.md, and ask it to address the issues in
> order of severity. The checkboxes track progress as items are resolved.

Do not start fixing issues yourself. The review step and the fix step are
separate. A fresh session with REVIEW.md as input is more effective than
continuing from the review context.

## Rules

- Never skip running the tests — "tests probably pass" is not a review
- Never write REVIEW.md without reading the full changed files, not just
  the diff hunks
- For story-aware mode: always confirm your understanding of the story
  before reviewing
- Keep findings actionable: every item must tell the reader exactly what
  to fix, not just that something is wrong
- Checkboxes in REVIEW.md are intentional — they allow the fix session
  to track progress as items are addressed
