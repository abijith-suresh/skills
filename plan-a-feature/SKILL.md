---
name: plan-a-feature
description: >-
  Use this skill when planning a new feature, project change, or idea before
  writing any code. Triggers on: "let's plan out X", "I want to add Y, help
  me think through it", "new project idea: Z", "help me think through this
  change", "I want to build X", or any request to explore and plan something
  before building it. Always use this skill at the start of a planning
  conversation — even if the user doesn't say "plan" explicitly, use it
  whenever they describe something new they want to make or change.
metadata:
  author: abijith-suresh
  version: "1.0"
---

# Plan a Feature

Inspired by the pi coding agent philosophy: plans are files, not modes.
Visible, editable, persistent across sessions, versionable with your code.

## Philosophy

No hidden orchestration. Explore the codebase openly, surface findings in
chat, grill the user until all decisions are resolved, then write a settled
PLAN.md. The user reads it, you iterate, they say when it's ready to build.

Do NOT modify any source files during planning. Read freely. Write only to
PLAN.md at the very end.

## Steps

### 1. Understand the goal

If the request is clear, skip straight to exploration. Ask one focused
question only if the intent is genuinely ambiguous. Do not ask a list of
questions upfront.

### 2. Explore the codebase

Read relevant files, grep for related symbols, trace dependencies. Present
findings in chat as you go so the user can follow along and course-correct.
Think out loud. Surface assumptions. Be explicit about what you read and
what you skipped.

### 3. Grill the user

After exploration, interview the user relentlessly until every decision is
resolved. Walk down each branch of the design tree one question at a time.

For each question:
- Ask only one question at a time
- Provide your recommended answer based on what you found in the codebase
- If the answer can be determined from the codebase, determine it yourself
  instead of asking

Keep going until there are no unresolved decisions. A plan with open
questions is not a plan.

### 4. Write PLAN.md

Only once the user is satisfied and all decisions are resolved, write
PLAN.md to the project root. Use the template at
references/PLAN_TEMPLATE.md.

### 5. Confirm

After writing, ask: "Ready to create issues from this, or do you want to
adjust anything first?"

## Gotchas

- Do NOT write PLAN.md until all decisions are resolved — the file is a
  settled plan, not a scratchpad
- Do NOT modify source files during planning
- Do NOT ask multiple questions at once — one at a time, always
- Do NOT present a plan in chat and then write it without confirmation