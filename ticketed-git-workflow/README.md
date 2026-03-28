# Ticketed Git Workflow

Use ticket-based branch and commit conventions for work repos that expect names
like `feature/RE-1234` and commit messages like `feat(RE-1234): summary`.

## When to Use

- Your repo expects ticket IDs in branch names and commit messages.
- You want a work-focused overlay on top of atomic commit hygiene.
- You want the agent to infer the ticket from the prompt or current branch when
  possible.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/ticketed-git-workflow
```

## Install the Full Collection

```bash
npx skills@latest add abijith-suresh/skills
```

## Example Prompts

- "Use the ticketed-git-workflow skill and commit this for RE-1234."
- "Create a feature branch for AOP-456 and make an atomic commit."
- "Use the work git skill. Infer the ticket from my current branch and commit this."

## What It Produces

- A ticket-aware branch strategy when needed
- Atomic commits that match work-repo conventions
- Clear leftovers when the diff should be split further

## Works Well With

- `commit-atomically` as the generic baseline for clean commit boundaries.
- `tdd` and `refactor` when implementation happens in small safe slices.

## Notes

- This skill is for team or work repos with ticketed git conventions.
- It prefers repo-specific rules first and falls back to sane defaults like
  `feature/<TICKET>` and `<type>(<TICKET>): <summary>`.
- Ticket IDs are treated as patterns like `[A-Z]+-\d+`, so it can handle
  prefixes such as `RE-`, `AOP-`, and `RI-`.
