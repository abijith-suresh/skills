# GitLab Workflow (Work)

## Ticket number

A ticket number is required for the MR title. Look for it in:
- The branch name (e.g., `feature/PROJ-214-add-login`)
- The conversation context

If no ticket number is found, ask for it before continuing.

---

## Title format

```
TICKET-123: Short description
```

Examples:
- `PROJ-214: Add investigation workflow`
- `PROJ-214: Fix target branch detection`

---

## MR body template

```markdown
## Summary
[What changed and why. 2–3 concise sentences.]

## Changes
- [Specific action taken]
- [Specific action taken]

## Testing
- [ ] [Specific verification step]
- [ ] [Edge case or regression check]

## Notes
[Risks, follow-ups, rollout notes, or reviewer context. Omit this section if there is nothing useful to say.]
```

### Rules

- Derive the Testing checklist from the real changes, not a generic template
- Each Changes bullet describes an action, not just a file name
- Omit `Notes` if there is nothing useful to say
- No References section — the ticket is already in the title

---

## Push and create

Git push options do not support newlines in values, so the description cannot be passed via push options. Use the two-step approach below.

### Step 1 — Detect the target branch

Run:

```bash
git log --oneline --decorate --simplify-by-decoration HEAD
```

Find the most recent branch point in the output that is not the current branch — that is the target. Use it as `merge_request.target`.

If the user specifies a target branch explicitly, use that instead.

### Step 2 — Push and create the MR with title only

```bash
git push \
  -o merge_request.create \
  -o "merge_request.title=TICKET-123: <title>" \
  -o "merge_request.target=<detected-or-specified-target>" \
  -o merge_request.remove_source_branch \
  origin <branch-name>
```

### Step 2 — Print the body for manual paste

After the push succeeds, print the full formatted MR body to the terminal and tell the user:

> MR created. Paste the description below into the GitLab MR description field:

Then output the completed body, ready to copy.

---

## Report

Print the MR URL from the push output. Remind the user to paste the description into the MR.
