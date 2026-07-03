---
name: plan
description: >-
  Presents a concrete implementation plan in chat based on a decisions
  summary. Use only when the user explicitly invokes the plan skill. Does
  not explore the codebase or ask clarifying questions. Do not trigger from
  ordinary planning requests.
---

# Plan

## What this skill does
Reads a decisions summary from the conversation and produces a concrete,
human-readable implementation plan in chat. Does not re-explore the
codebase — the decisions summary is the sole source of truth. Does not
ask clarifying questions — assumes decisions are already made. Writes
to a file only if explicitly asked.

## Steps

### 1. Read the decisions summary
Find a decisions summary earlier in the conversation or in a project
document. Look for it in:
- A decisions summary written in chat (e.g., by grill-me or the user)
- A handoff document (e.g., `/tmp/handoff-*.md`)
- An existing project file with explicit decisions (e.g., `IMPROVE.md`
  from the improve skill, a design doc, or a spec)
- A conversation artifact (e.g., PRD, issue, or user-written notes)

Use the decisions summary as the sole source of truth for what to build
and how. Do not re-derive decisions from scratch.

### 2. Present the plan in chat
Write the plan directly in chat using this structure:

```
# Plan: [Feature Name]

## Goal
[One sentence: what this achieves and why.]

## Steps
1. [Concrete step — name the file(s) to touch, the function or component
   involved, and what changes. Not line-by-line, but specific enough that
   a capable agent can act without ambiguity.]
2. ...

## Testing Notes
[Exact flows to verify, specific edge cases to check, and commands to run
— all derived from what actually changed in the steps above. No generic
advice, no boilerplate.]
```

### 3. Ask whether to save to PLAN.md
After presenting the plan in chat, ask:
> Should I save this to `PLAN.md`? Useful if you plan to run to-issues
> or continue in a new session.

Write to `PLAN.md` in the project root only if the user says yes.
If the user says no, or does not answer, do not write it.

### 4. Confirm
End with: "Ready to start implementing, or anything to adjust?"

## Rules
- No codebase exploration — the decisions summary is the sole source of truth
- No clarifying questions — the decisions summary is assumed to be complete.
  If any decision is ambiguous, flag it in the plan and ask the user to
  resolve it
- Steps must name the files and components to be touched, not just
  describe actions at a high level
- Testing notes must be specific and derived from this plan — never generic
- Never write PLAN.md without asking first — chat is always the default
- Never run without a decisions summary present in the conversation or
  a project document. The summary can come from any source — grill-me,
  a user-written summary, a handoff document (`/tmp/handoff-*.md`), an
  `IMPROVE.md`, a design doc, a spec, or any other structured artifact
