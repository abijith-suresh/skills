---
name: cut-a-branch
description: Create a new branch from the latest origin/main (or configured main branch), suggest safe branch names, and provide the exact git commands to run. Use this skill when you are ready to start implementing a finalized plan.
---

# Cut a Branch

Create a clean feature branch based on the latest main branch.

## Goals

- Ensure work starts from the freshest main
- Produce a policy-compliant branch name
- Provide exact git commands (dry-run) and run them only with explicit confirmation

## Workflow

1. Identify the main branch (origin/main, origin/master, or configured default).
2. Suggest 2–3 branch name variants using ticket ID (if provided) and a short description.
3. Show the commands to fetch origin and create the branch from latest remote main:

   git fetch origin
   git checkout -b <branch> origin/<main>

4. If the user requests execution, run the commands after checking for uncommitted changes.

## Output

- canonical_branch: one recommended branch name
- alternatives: 1–2 alternative names
- commands: the exact git commands to run (string array)
- status: dry-run or executed + any warnings

## Guardrails

- If working tree has uncommitted changes, warn and refuse to run unless the user explicitly allows staging or stashing.
- Never push by default after branch creation.
- Do not create branches directly on protected refs without explicit confirmation.
- Require explicit confirmation or an "execute" flag to run side-effecting commands.

