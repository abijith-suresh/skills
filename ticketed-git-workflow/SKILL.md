---
name: ticketed-git-workflow
description: Use ticket-based branch and commit conventions for work repos. Use when the user says "commit this for RE-1234", "create a feature branch for AOP-456", "use the work git skill", or when branch names and commit messages must include a ticket like RE-1234.
---

# Ticketed Git Workflow

Use this skill when a repository expects ticket-aware git history, not just clean
atomic commits.

## Goals

- Keep one intent per commit
- Follow the repo's ticket-based branch and commit conventions
- Infer the ticket when possible instead of asking unnecessary questions
- Leave behind a branch and commit history that teammates immediately recognize

## Workflow

1. Inspect the current git context.

   Review the current branch, staged and unstaged changes, recent commit style,
   and any repo docs or templates that reveal the team's conventions.

2. Determine the ticket and workflow intent.

   Prefer this order:

   - explicit ticket from the user
   - ticket parsed from the current branch
   - ticket inferred from repo context if reliable

   Treat ticket IDs as patterns like `[A-Z]+-\d+`, such as `RE-1234`,
   `AOP-456`, or `RI-78`.

3. Validate or create the branch.

   If the user needs a branch, follow the repo's convention first. If there is
   no stronger convention, default to patterns like:

   - `feature/<TICKET>`
   - `fix/<TICKET>`
   - `chore/<TICKET>`
   - `refactor/<TICKET>`

   Add a short slug only when the repo clearly expects it.

4. Split changes into one intent at a time.

   Use the same atomic-commit discipline as `commit-atomically`. Stop and split
   the work when the diff mixes unrelated reasons to change.

5. Write ticketed commit messages.

   Follow the repo's actual style first. If no stronger convention exists,
   default to:

   ```text
   <type>(<TICKET>): <imperative summary>
   ```

   Examples:

   - `feat(RE-1234): add onboarding summary for skill repos`
   - `fix(AOP-456): handle missing ticket slug in branch validation`
   - `refactor(RI-78): split git helpers by workflow intent`

6. Commit and report what remains.

   After committing, show whether there are leftover changes for another commit.
   Push or open a PR only if the user explicitly asks.

## Guardrails

- Do not guess a ticket if the inference is weak; ask one focused question
- Do not force a generic convention over a repo's documented team rules
- Do not hide mixed work behind one ticketed commit message
- Prefer explicit staging and clear leftovers over one broad commit
