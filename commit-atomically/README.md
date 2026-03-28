# Commit Atomically

Keep your git history small, reviewable, and honest by splitting mixed work into
commits with one clear intent each.

## When to Use

- You have local changes and want help committing them cleanly.
- A diff mixes feature work, fixes, refactors, or formatting.
- You want a conventional commit message that matches the staged diff.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/commit-atomically
```

## Install the Full Collection

```bash
npx skills@latest add abijith-suresh/skills
```

## Example Prompts

- "Use the commit-atomically skill and commit this cleanly."
- "Split these changes into atomic commits."
- "Use commit-atomically and write the right conventional commit message."

## What It Produces

- A cleaner staging strategy
- One or more commit messages that match the actual diff
- A clear explanation of what should remain uncommitted, if anything

## Works Well With

- `tdd` when implementation happened in small slices.
- `refactor` after a behavior-preserving cleanup.
- `ticketed-git-workflow` when the repo also expects branch and commit ticket
  conventions.

## Notes

- This skill stays repo-agnostic on purpose.
- If a repo has extra branch or ticket conventions, use
  `ticketed-git-workflow` instead of overloading this skill.
