---
name: plan-to-issues
description: >-
  Use this skill when the user has an approved PLAN.md and wants to create
  GitHub issues from it. Triggers on: "create issues from the plan", "turn
  this into issues", "file this as issues", "let's track this in GitHub",
  or any request to convert a settled plan into GitHub issues. Always use
  after plan-a-feature produces a PLAN.md and the user is ready to build.
compatibility: Requires gh CLI authenticated to the repo
metadata:
  author: abijith-suresh
  version: "0.1.0"
---

# Plan to GitHub Issues

Converts a settled PLAN.md into a structured GitHub issue hierarchy: one
parent tracking issue with a checklist linking to child issues, one child
issue per step. No labels. No milestones. No projects.

## Structure

- **Parent issue**: Titled after the Goal. Body contains a task list of
  child issues that auto-updates as children close.
- **Child issues**: One per step in PLAN.md. Each has a "Parent: #N" line
  at the top linking back to the parent.

This gives you a clean issues list where the parent shows progress (2/5
checked) and every child is navigable back to context.

## Steps

### 1. Read PLAN.md

Read PLAN.md from the project root. If it doesn't exist, tell the user to
run the plan-a-feature skill first.

Confirm the goal and steps with the user before creating anything:
"I'm going to create 1 parent issue and N child issues. Parent: '[Goal]'.
Children: [list step titles]. Shall I go ahead?"

### 2. Create child issues first

Create one issue per step using `gh issue create`. Use the step text as
the title. Body format:

```
Parent: #[will be filled after parent creation]

[Step description from PLAN.md — expand with any relevant context from
the plan's Approach section if it helps clarify the task]
```

Note each created issue number.

### 3. Create the parent issue

Title: the Goal from PLAN.md. Body format:

```
## [Goal]

[Approach section from PLAN.md]

## Steps

- [ ] #[child issue number] — [step title]
- [ ] #[child issue number] — [step title]
...
```

Note the parent issue number.

### 4. Update child issues with parent link

Edit each child issue body to replace "Parent: #[will be filled...]" with
the actual parent issue number using `gh issue edit`.

### 5. Report

Print the parent issue URL and confirm all children were created. Done.

## Commands

```bash
# Create an issue
gh issue create --title "title" --body "body"

# Edit an issue body
gh issue edit [number] --body "new body"

# View issue number from creation output
# gh issue create prints the URL; parse the number from it
```

## Gotchas

- Create children BEFORE the parent so you have their numbers for the
  parent checklist
- The `- [ ] #N` syntax in the parent body auto-links and auto-checks when
  child issues close — do not use plain text, use the issue reference
- Do NOT add labels, milestones, or assignees unless the user explicitly
  asks
- If gh CLI is not authenticated, tell the user to run `gh auth login` first