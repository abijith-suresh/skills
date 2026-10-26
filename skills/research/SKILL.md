---
name: research
description: 'Use when the user says "research".'
metadata:
  summary: "Resolve API and dependency questions from canonical source."
  featured: "true"
---

# Research

Answer a concrete dependency question with source evidence: behavior, revision,
and supporting locations. Change project code only when the request also
authorizes implementation.

## Source and revision

Use the supplied repository or source URL. Otherwise identify the dependency
from the request, imports, manifest, and lockfile, then find its official
source. Ask only when source or version ambiguity would change the answer.

Prefer the reported or deployed version, then the project's pinned dependency.
Use the current default branch, recording its commit, only for current
development. For a cross-release comparison, identify each revision separately;
never substitute latest source for an unavailable affected release.

Keep reusable shallow clones outside the project under
`~/.research/<owner>/<repo>/` or an equivalent persistent path. Clone a tag or
branch with:
`git clone --depth 1 --branch <tag-or-branch> <repo-url> <store-path>`

For an existing clone, run `git -C <store-path> fetch --depth 1 origin <ref>`,
then `git -C <store-path> checkout --detach FETCH_HEAD`, and record
`git -C <store-path> rev-parse HEAD`. Resolve release names to actual refs and
keep fetches shallow. One owner fixes each shared checkout's revision while
workers read it; use separate checkouts for concurrent revisions. If cloning is
unavailable, read versioned canonical source or release artifacts and name the
evidence you could not reach.

## Investigate

Delegate substantive investigation by default; the parent keeps source
selection, interpretation, and the answer. If delegation is unavailable,
investigate directly and say so. Give each worker the question, revision,
context, and a read-only assignment requiring sources and limits.

For a broad question, map exports, implementation paths, examples, and tests
first, then assign focused reads. Parallelize independent questions and keep
single lookups direct.

## Return

Answer with source locations and the revision inspected. Separate demonstrated
behavior, inference, and unresolved claims. If blocked, name the check and what
would enable it.

If implementation is also requested, apply the demonstrated API and
version-specific constraints, then verify behavior and required checks. Reading
source does not prove the code works or authorize commits, publication, or
deployment.
