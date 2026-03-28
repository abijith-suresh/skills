---
name: ticketed-git-workflow
description: Use ticket-based branch and commit conventions for work repositories that tie changes to issue keys or work items. Use whenever the user mentions a work repo, asks to commit for a ticket like RE-1234, wants a ticketed branch created, or needs branch names and commit messages to carry an issue ID. Prefer this instead of `commit-atomically` for employer or team repositories with ticket-aware git history.
---

# Ticketed Git Workflow

Use this skill when a repository expects ticket-aware git history, not just clean
atomic commits.

## Goals

- Keep one intent per commit
- Follow the repo's ticket-based branch and commit conventions
- Ask for the ticket when confidence is low instead of guessing
- Fall back cleanly when the user explicitly says the work has no ticket
- Leave behind a branch and commit history that teammates immediately recognize

## Workflow

1. Confirm that this is the right workflow.

   Use this skill for work or team repositories with ticket-aware conventions.
   If the repository is personal or does not expect ticket IDs, prefer
   `commit-atomically`.

2. Inspect the current git context.

   Review the current branch, staged and unstaged changes, recent commit style,
   and any repo docs or templates that reveal the team's conventions.

3. Determine the ticket and workflow intent.

   Prefer this order:

   - explicit ticket from the user
   - ticket parsed from the current branch
   - ticket inferred from repo context only if the evidence is strong

   Treat ticket IDs as patterns like `[A-Z]+-\d+`, such as `RE-1234`,
   `AOP-456`, or `RI-78`.

   If the user asks to commit or create a branch and there is no reliable
   ticket, ask one focused question instead of guessing. In work repos, the
   right question is usually "What ticket are you working on?"

   If the user explicitly says there is no ticket for this work, switch to a
   normal conventional branch and commit workflow instead of forcing a ticketed
   one.

4. Validate or create the branch conservatively.

   If the user needs a branch, follow the repo's convention first. If there is
   no stronger convention, default to patterns like:

   - `feature/<TICKET>`
   - `fix/<TICKET>`
   - `chore/<TICKET>`
   - `refactor/<TICKET>`

   Add a short slug only when the repo clearly expects it.

   Do not rename or create a branch just because a ticket exists. Prefer to do
   branch surgery only when the user asks for it or the current branch clearly
   blocks the requested workflow.

5. Split changes into one intent at a time.

   Use the same atomic-commit discipline as `commit-atomically`. Stop and split
   the work when the diff mixes unrelated reasons to change.

6. Write ticketed commit messages.

   Follow the repo's actual style first. If no stronger convention exists,
   default to:

   ```text
   <type>(<TICKET>): <imperative summary>
   ```

   Examples:

   - `feat(RE-1234): add onboarding summary for skill repos`
   - `fix(AOP-456): handle missing ticket slug in branch validation`
   - `refactor(RI-78): split git helpers by workflow intent`

   If the user explicitly confirmed there is no ticket, use the normal
   conventional commit style that fits the repo instead of inserting a fake
   ticket.

7. Commit and report what remains.

   After committing, show whether there are leftover changes for another commit.
   Push only if the user explicitly asks. PR creation and PR metadata belong in
   a separate workflow.

## Output

Return:

- whether a ticket was provided, inferred, or explicitly absent
- branch decision taken or recommended
- commit message style used
- leftovers or follow-up actions

## Guardrails

- Do not guess a ticket if the inference is weak; ask one focused question
- Do not force a generic convention over a repo's documented team rules
- Do not create a ticketed branch when the ticket is unknown
- Do not invent a placeholder ticket when the user says the work has none
- Do not hide mixed work behind one ticketed commit message
- Prefer explicit staging and clear leftovers over one broad commit
- Keep PR creation out of scope for this skill
