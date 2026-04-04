---
name: auto-commit
description: Create small, conventional commits with one clear intent each for personal projects and repository-agnostic workflows. Use whenever the user wants help staging, splitting, and committing local changes cleanly, especially when a diff mixes multiple reasons to change. Prefer `ticketed-git-workflow` instead for work repositories that require ticket-aware branch or commit conventions.
---

# Auto Commit (formerly commit-atomically)

Use this skill when the goal is a clean, reviewable git history instead of one
large mixed commit.

## Goals

- Keep one intent per commit
- Match the staged diff to the commit message
- Use conventional commit messages consistently
- Strongly prefer honest splits when a diff mixes multiple intents
- Leave the working tree easier to review than before

## Workflow

1. Confirm that this is the right workflow.

   Use this skill for personal projects or repositories that do not require
   ticket-based workflow rules. If the repo expects issue IDs in branches or
   commit messages, prefer `ticketed-git-workflow`.

2. Inspect the current git state.

   Review:

   - tracked and untracked changes
   - staged and unstaged diffs
   - recent commit message style

3. Decide whether the changes are truly one commit.

   Stop and propose a split if the diff mixes things like:

   - feature work and refactoring
   - bug fixes and formatting
   - generated files and hand-written code
   - unrelated modules with different reasons to change

   When in doubt, split by default. A slightly smaller commit is usually easier
   to review and safer to undo than a broad one.

4. Stage one intent at a time.

   Prefer explicit file paths. If one file contains multiple intents, separate
   the changes as cleanly as possible before committing.

5. Check whether anything is ready to commit.

   If the changes are still exploratory, partially broken, or missing the
   minimum validation needed to stand on their own, explain why and stop instead
   of forcing a premature commit.

6. Write the conventional commit message.

   Format:

   ```text
   <type>(<optional-scope>): <imperative summary>
   ```

   Recommended types:

   - `feat`
   - `fix`
   - `refactor`
   - `docs`
   - `test`
   - `chore`
   - `ci`
   - `build`
   - `perf`

7. Verify the message fits the staged diff.

   The commit should be explainable in one sentence. If the message needs "and"
   to describe multiple unrelated intents, split the commit.

8. Commit and report what remains.

   After committing, show whether there are leftover changes that should become
   another commit.

## Output

Return:

- the proposed commit split
- the staged intent being committed now
- the commit message used or recommended
- any reasons to stop without committing
- leftover changes that should remain for later

## Message Rules

- Use imperative mood
- Keep the summary concise
- Omit the scope if it does not help
- Add a body only when the why is not obvious
- Prefer accuracy over cleverness

## Guardrails

- Do not add branch-creation or ticket workflow logic here
- Do not push or open a PR as part of this skill unless the user asks for it
- Do not hide mixed work behind a broad message
- Prefer multiple small commits over one overloaded commit
- Call out risky or destructive git actions before taking them
