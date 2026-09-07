---
name: handoff
description: >-
  Write a loadable handoff for the next session.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Handoff

Write a standalone handoff so a fresh agent can continue. Save to the OS
temp directory, not the current workspace. Print the path. The user pastes
that path into the next session.

If the user passed arguments, treat them as a description of what the next
session will focus on and tailor the document accordingly.

## Steps

### 1. Gather context

Collect facts a new session cannot guess:

- Current branch
- Open PR or MR URL, if one exists
- Ticket key, if one exists
- Last command that failed, if one did
- What not to redo
- Decisions already made
- Implementation plan, if one exists
- Other artifacts worth pointing at

### 2. Write the handoff document

Use this structure. Omit a heading when it has nothing to say.

```markdown
# Handoff: [Topic]

## State
[What phase the work is in. Exploration, planning, implementation,
review, deployment. One sentence.]

## Load
- Branch: [name]
- PR or MR: [URL, or none]
- Ticket: [key, or none]
- Last failure: [command and error, or none]
- Do not redo: [work that is already done]

## Decisions made
- [Key decision 1]
- [Key decision 2]

## Next steps
1. [Concrete next action]
2. [Concrete next action]

## Suggested skills
- [skill-name]: [why this next session needs it]

## Artifacts
- [Path or URL]
```

Suggested skills are recommendations only. Name skills that exist in this
collection, never skills from outside it.

### 3. Save to temp directory

```bash
cat << 'EOF' > /tmp/handoff-<topic-slug>.md
[document content]
EOF
```

Print the path. Tell the user to paste it into the next session. `/tmp`
does not survive a reboot.

## Rules

- Save to the OS temp directory, not the workspace, not a project file
- Do not duplicate content already captured in issues, commits, or diffs.
  Reference those by path or URL.
- Redact secrets: API keys, passwords, personally identifiable information
- Suggested skills are recommendations. Never require a specific skill next
- Do not modify any files in the workspace
