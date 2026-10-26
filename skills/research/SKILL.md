---
name: research
description: 'Use when the user says "research".'
metadata:
  summary: "Resolve API and dependency questions from canonical source."
  featured: "true"
---

# Research

Answer a concrete dependency question with source evidence. Return the
relevant behavior, the revision inspected, and the locations that support
the answer. Change project code only when the request also authorizes
implementation.

## Choose the source and revision

Use the supplied repository or source URL. Otherwise identify the dependency
from the request, imports, manifest, and lockfile, then find its official
source. Ask only when unresolved source or version ambiguity would change
the answer.

Match the source to the version involved in the question. Prefer the reported
or deployed version, then the project's pinned dependency. Use the current
default branch for questions about current development, and record its
commit. For a comparison across releases, identify each revision separately.
Do not substitute latest source for an unavailable affected release.

## Prepare a stable reference

Keep reusable shallow clones outside the project. The default store is
`~/.research/<owner>/<repo>/`; use an equivalent persistent reference
directory if the host uses different paths. Stored repositories survive
sessions and are never deleted automatically.

For a named tag or branch, clone that revision directly:

```bash
git clone --depth 1 --branch <tag-or-branch> <repo-url> <store-path>
```

For an existing clean reference clone, fetch the chosen tag, branch, or
commit and check out the fetched revision:

```bash
git -C <store-path> fetch --depth 1 origin <ref>
git -C <store-path> checkout --detach FETCH_HEAD
git -C <store-path> rev-parse HEAD
```

Resolve release names to actual repository refs. Keep fetches shallow; deepen
only when the question requires history. Preserve local changes in an
existing clone by using another reference checkout. One owner prepares each
shared checkout, then leaves its revision fixed while workers read it. Use
separate checkouts for concurrent work on different revisions.

State the source and revision briefly, then proceed. If cloning or fetching
is unavailable, inspect versioned canonical source through available source
browsing or release artifacts. A failed refresh permits reading the existing
revision only for claims it can answer. Name the unavailable evidence and
leave claims about another revision unresolved.

## Investigate the question

Delegate substantive source investigation by default. If delegation is
unavailable, follow the same method directly and state that limitation.
Prefer a less costly capable worker, honoring the user's model preferences.
Keep source selection, interpretation, and the final answer with the parent.

Give each worker the question, chosen revision, relevant project context,
and a read-only assignment. Require file and symbol locations, the behavior
observed, and any limits on the conclusion. Point to material only when the
worker can access it; otherwise include the needed excerpts.

For a broad question, first locate exports, implementation paths, examples,
and tests that cover the behavior. Use that map to assign focused reads of
unresolved paths. Carry earlier findings forward. Investigate independent
questions in parallel; sequence questions that depend on an earlier answer.
A single lookup can stay direct when dispatch and reporting would cost more
than the lookup.

Run workers in the background when completion notifications are available.
Continue independent work. With notifications, when only worker results
remain, tell the user what is running and end the turn so completion brings
you back. Carry user
steering into active assignments. Without notifications, use an available
wait or join operation. If the host only offers status queries, check at
meaningful work boundaries, without rapid polling. If results remain pending
and the host cannot await completion, report the pending work and the
follow-up needed.

Reconcile worker findings against the chosen revision. Trace the relevant
entry point through the conditions that determine the result. Examples and
tests show exercised cases; distinguish those from behavior demonstrated
by the implementation and from promises in documentation. Resolve conflicts
with targeted reads rather than repeating the whole investigation.

## Return the result

Answer the question with source locations and the revision inspected.
Separate demonstrated behavior, inference, and unresolved claims. Stop
when the question is answered, or when missing source, access, or a user
decision prevents the next useful check. For a blocked answer, name that
check and what would enable it.

If implementation is also requested, apply the demonstrated API and
version-specific constraints to the requested change. Verify its behavior
and required repository checks before reporting completion. Source reading
alone does not prove that the resulting code works, and it does not authorize
commits, publication, or deployment.
