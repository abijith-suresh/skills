---
name: handoff
description: 'Use when the user says "handoff".'
metadata:
  summary: "Write a compact handoff for another agent or session."
---

# Handoff

Write a standalone handoff a fresh agent can continue from. If the user passed
arguments, tailor it to that focus.

## Write

Omit a heading when it has nothing to say.

```markdown
# Handoff: [Topic]

## State
[Phase and one-sentence status.]

## Load
- Branch: [name]
- PR or MR: [URL or none]
- Ticket: [key or none]
- Last failure: [command and error, or none]
- Do not redo: [work already done]

## Continue
- Decisions: [settled decision]
- Next: [concrete action]
- Skills: [existing collection skill and why; suggestion only, never required]
- Artifacts: [path or URL]
```

## Save

Save as `handoff-<topic-slug>.md` to the OS temp directory, using a new name if
it exists, and print the absolute path for the user to paste into the next
session. Temp files may be removed; say so when the handoff must outlive the
machine session.

Do not write to the workspace or duplicate content already in issues, commits,
or diffs; reference those by path or URL. Redact secrets and personal data.
