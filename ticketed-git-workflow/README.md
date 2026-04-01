# Ticketed Git Workflow

Use ticket-based branch and commit conventions for work repos that expect names
like `feature/RE-1234` and commit messages like `feat(RE-1234): summary`.

## When to Use

- Your repo expects ticket IDs in branch names and commit messages.
- You want a work-focused git workflow separate from your personal-project
  commit habits.
- You want the agent to ask for the ticket when it is not clear, instead of
  guessing.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/ticketed-git-workflow
```

## Example Prompts

- "Use the ticketed-git-workflow skill and commit this for RE-1234."
- "Create a feature branch for AOP-456 and make an atomic commit."
- "Use the work git skill. Infer the ticket from my current branch and commit this."
- "Use the work git skill and commit this. I'm not on a ticketed branch yet."
- "There is no ticket for this cleanup, but use the work git workflow and make a normal branch."

## What It Produces

- A ticket-aware branch strategy when needed
- Atomic commits that match work-repo conventions
- A focused question for the ticket when the repo expects one but the context is weak
- Clear leftovers when the diff should be split further

## Works Well With

- `commit-atomically` as the generic baseline for clean commit boundaries.
- `tdd` and `refactor` when implementation happens in small safe slices.

## Notes

- This skill is for team or work repos with ticketed git conventions.
- It intentionally stays separate from `commit-atomically`, which remains the
  better fit for personal or repo-agnostic commit workflows.
- It prefers repo-specific rules first and falls back to sane defaults like
  `feature/<TICKET>` and `<type>(<TICKET>): <summary>`.
- Ticket IDs are treated as patterns like `[A-Z]+-\d+`, so it can handle
  prefixes such as `RE-`, `AOP-`, and `RI-`.
- It keeps branch setup and ticketed commits together because they are one
  coherent work-repo workflow; PR creation can live in a separate skill later.
