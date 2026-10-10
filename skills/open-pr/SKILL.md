---
name: open-pr
description: >-
  Create or update a pull or merge request for the current branch. Use when
  the user asks to open a PR or MR, prepare a branch for review, or refresh an
  existing request's title and description.
---

# Open PR

Prepare a branch for review on the repository's forge. PR and MR describe
the same workflow here. Follow the project's conventions for each.

## Establish the review

Read repository instructions and any review template. Identify the remote,
host, source branch, target branch, and authenticated account using available
tools. Prefer an existing connector or CLI; do not require a particular
provider. [Host examples](references/hosts.md) cover GitHub and GitLab.

Check for an existing open request by source repository, source branch,
and target branch. An authentication or network error is not evidence that
none exists. If multiple requests match, resolve the ambiguity before
updating one. Link the request to the current session if the environment
provides a registration tool.

Distinguish branch publication from a metadata-only request. If the user
asks only to rewrite an existing title or description, use the published
request's base/head diff. Do not commit, push, or include unpublished local
changes. Return an updated title/body from that published state.

Do not open from the target or protected branch. If the intended changes
are uncommitted, commit them only when that action is already authorized.
An installed `commit` can do this; otherwise follow the repository's
conventions directly. Leave unrelated changes alone. Do not stash or
commit them to satisfy a clean-tree preference.

If intended changes remain uncommitted and committing is not authorized,
return the prepared review content and explain what must be committed.
Do not publish a request that silently omits the requested work.

## Make the result reviewable

For branch publication, fetch the target and read the full change from the
merge base to the committed source tip. For stacked branches, compare
against the intended parent. Derive the title and description from this net
change, including any material risk or compatibility change.

Use repository title rules. Conventional commits suit squash-merged
projects; ticket-prefixed titles suit projects that require them. Ask for
a missing required ticket rather than inventing one.

Lead the description with the concrete problem and resulting behavior.
Add implementation detail only when it explains a tradeoff. Record
verification actually performed and any unresolved gap. Respect required
template fields. Preserve meaningful reviewer notes and update checked
boxes only from evidence. Do not fabricate issue links or test results.

For branch publication, run required repository checks on the intended
committed state. If checks cannot run, report the blocker; create a draft
only when allowed by the request and project. Do not label an unverified
branch ready.

For metadata-only updates, cite existing verification of the published
state. Do not imply that checks of a different local state verify it.

## Publish once

When publishing code is authorized, push the feature branch without force.
Skip pushing for metadata-only updates. Stop on a rejected push and inspect
the cause. Create or update the identified request using a structured body
argument or a temporary body file. Avoid shell interpolation of prose.

Keep an existing request's target, reviewers, and draft state unless the
task requires changing them. Add reviewers, assignees, labels, or automatic
closing links only when supported by the request or repository convention.
After an uncertain API result, query for the request before retrying.

Return the URL, whether it was created or updated, the target branch, and
verification gaps. This workflow does not merge, deploy, or monitor the
request. A missing authenticated forge tool blocks publication; still
return the prepared title and description.
