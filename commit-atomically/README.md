# Commit Atomically

Keep your git history small, reviewable, and honest by splitting mixed work into
commits with one clear intent each.

## When to Use

- You have local changes and want help committing them cleanly.
- A diff mixes feature work, fixes, refactors, or formatting.
- You want a conventional commit message that matches the staged diff.
- You are in a personal project or any repo without ticket-based git rules.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/commit-atomically
```

## Example Prompts

- "Use the commit-atomically skill and commit this cleanly."
- "Split these changes into atomic commits."
- "Use commit-atomically and write the right conventional commit message."
- "This is my side project. Split this diff into clean commits and stop if any part is not ready yet."

## What It Produces

- A cleaner staging strategy
- One or more commit messages that match the actual diff
- A clear stop-and-explain outcome when the changes are not ready to commit yet
- A clear explanation of what should remain uncommitted, if anything

## Works Well With

- `tdd` when implementation happened in small slices.
- `refactor` after a behavior-preserving cleanup.
- `ticketed-git-workflow` when the repo also expects branch and commit ticket
  conventions.

## Notes

- This skill stays repo-agnostic on purpose.
- It stays out of branch creation on purpose so it can stay focused on staging,
  commit boundaries, and message quality.
- If a repo has extra branch or ticket conventions, use
  `ticketed-git-workflow` instead of overloading this skill.
