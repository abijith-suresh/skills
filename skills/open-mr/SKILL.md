---
name: open-mr
description: 'Use when the user says "open MR".'
metadata:
  summary: "Create or update the GitLab merge request for this branch."
---

# Open MR

Push the current branch, then create or update its GitLab merge request. This
uses GitLab and a Jira ticket key, which must lead the title. This skill does
not commit. If the work is uncommitted, stop and tell the user to run
`commit-work` first.

## Title and body

Use the ticket key from the branch or conversation. If neither has one, stop
and ask. Derive the description from the **net diff**, not the first commit.

`TICKET-123: Short description`

Do not use conventional-commit types in the title.

```markdown
## Summary
[Why this ticket needed code, and what is now true. Two or three sentences.
Do not write "this MR implements the ticket."]
```

Add a `## What changed` bullet list only when a bullet would name user-visible
behaviour, an API or data contract change, or a risk. Omit it when every
bullet would only name a file. Do not add a Testing checklist, a References or
Jira link section, or local paths. One concrete QA line under Summary is
allowed only when you will actually do that step.

Write the body to a temp file and pass it as the description. Do not
interpolate markdown through a quoted `--description`.

## Steps

1. Check the branch and CLI:
   ```bash
   git branch --show-current
   git symbolic-ref refs/remotes/origin/HEAD --short
   git status --porcelain
   glab auth status
   ```
   On the default branch, stop: "Cannot open an MR from the default branch.
   Switch to a feature branch first." If `git status --porcelain` prints
   anything, stop: "Uncommitted changes detected. Commit or stash them before
   opening an MR." If `glab` is missing: "glab CLI is required. Install it
   from https://gitlab.com/gitlab-org/cli#installation." If it is not
   authenticated: "glab CLI is not authenticated. Run glab auth login first."

2. Push, and do not pass `--push` to `glab mr create`:
   ```bash
   git push -u origin <branch-name>
   ```
   Stop with the exact error if the push fails.

3. Look for an existing MR, then read the full net diff:
   ```bash
   glab mr list --source-branch <branch-name> -F json
   git diff origin/<default-branch>..HEAD
   ```
   A non-empty array means the MR exists; note the `iid` and URL. Never create
   a second MR. Regenerate the title and description from the net diff.

4. Create with the first command if there is no MR; update with the second:
   ```bash
   glab mr create --title "<title>" --description-file <temp-body> --yes
   glab mr update <iid> --title "<title>" --description-file <temp-body> --yes
   ```
   Open ready, not draft. If `glab` rejects `--description-file` on update,
   pass the file contents with `--description`, never a hand-quoted body.

5. Print the URL and say whether you created or updated the MR.
