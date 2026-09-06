---
name: handoff
description: >-
  Compacts the current conversation into a handoff document for another agent
  or session.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Handoff

Write a standalone handoff document summarising the current conversation
so a fresh agent can continue the work. Save to the OS temp directory —
not the current workspace.

## Steps

### 1. Gather context

Identify what the conversation has produced so far:

- Decisions summary (from grill-me, user discussion, or a design doc)
- Implementation plan (if one was generated)
- Any other artifacts (specs, issue references, commit summaries, diffs)

### 2. Write the handoff document

Use this structure:

```markdown
# Handoff: [Topic]

## State
[What phase the work is in — exploration, planning, implementation,
review, deployment. One sentence.]

## Decisions Made
- [Key decision 1]
- [Key decision 2]

## Next Steps
1. [Concrete next action]
2. [Concrete next action]

## Suggested Skills
- [Skill name] — [why, e.g. "to produce an implementation plan"]
- [Skill name] — [why]

## Artifacts
- [Path or URL to relevant files, plans, specs, issues]
```

### 3. Save to temp directory

Write the document to a file in the OS temp directory:

```bash
cat << 'EOF' > /tmp/handoff-<topic-slug>.md
[document content]
EOF
```

Print the path on completion so the user knows where to find it.

## Rules

- Save to the OS temp directory — not the workspace, not a project file
- Do not duplicate content already captured in other artifacts (PLAN.md,
  issues, commits, diffs). Reference them by path or URL instead.
- Redact sensitive information: API keys, passwords, personally
  identifiable information.
- Suggested skills are recommendations — never require a specific skill
  to be used next.
- Do not modify any files in the workspace.
