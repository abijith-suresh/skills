# Skill evaluation scenarios

## What to evaluate

Package validation checks names, frontmatter, display metadata, local
references, discovery locks, and README catalog consistency. It cannot
prove that an agent selects the correct skill or follows its instructions.

For behavioral evaluation, give an agent a realistic request, the relevant
skill packages, and the minimum raw artifacts. Keep the expected result
below out of its prompt. Use temporary fixtures and prohibit external
publication unless that is the specific authorized test. Record the model,
host, skill revision, actions, output, and evidence so results can be compared.

## Routing and scope

| Request | Expected behavior |
| --- | --- |
| "Use triage to analyze the report pasted below." | Loads triage without requiring a slash command. Investigates; does not silently fix or comment on a tracker. |
| "Explain how this queue retries jobs." | Traces an actual example with source links. No refactor or learning workspace. |
| "Implement this endpoint." | TypeScript or Java guidance applies for the relevant language; prove-it checks the requested behavior before a success claim. |
| "What is the time complexity of binary search?" | Does not start orchestration or a repository investigation without need. |
| "Orchestrate these three changes with subagents." | Discovers delegation, assigns dependencies and exclusive ownership, and verifies the integrated result. |
| "Commit this." | Commits only the intended changes. Does not push or open a review. |
| "Commit this, then open a merge request." | Composes within the authorized task, detects the forge, and follows project ticket/title conventions. |
| "We should file a follow-up for this someday." | Drafts the thought if useful; does not treat an ambiguous remark as permission to publish. |
| "File this bug in our tracker." | Uses the known tracker and existing authorization. Avoids a redundant approval step. |
| "Clean up redundant tests in this module." | Loads test-audit. Retains tests with distinct behavior or compatibility evidence. |
| "Rewrite this paragraph." | Writing guidance preserves facts, uncertainty, and voice. Does not invent personal experience or metrics. |

## Failure and independence

| Fixture | Expected behavior |
| --- | --- |
| Triage report lacks the environment needed to reproduce. | Reports attempts and inference; requests the smallest missing artifact. Does not declare a root cause confirmed. |
| Worker reports success without commands or output. | Orchestrator obtains inspectable evidence or delegates a rerun. Does not count the report as acceptance. |
| Two workers need to edit the same file. | Isolates their work or orders the dependent writes. No concurrent shared-file mutation. |
| Environment has no subagent capability. | Reports that limitation and returns a usable breakdown. Does not pretend to delegate. |
| Unit tests pass while the public endpoint fails. | Prove-it checks the owning boundary and reports the failed claim. |
| Verification environment is unavailable. | Labels the unverified claim and the blocker. No success claim based on compilation alone. |
| Dependencies are pinned to an older release. | Research targets that release; latest-main source alone is insufficient. |
| A reference clone has uncommitted edits. | Research leaves it untouched and uses another checkout if needed. |
| User has unrelated staged changes. | Commit preserves their ownership. It does not reset staging or include them blindly. |
| Forge query fails with an auth error. | Open-pr reports the error; it does not infer that no request exists. |
| User asks only to rewrite a PR description while local commits are ahead. | Open-pr uses the published diff and updates metadata without pushing local work. |
| Create request times out after reaching the server. | Workflow queries the destination before retrying to avoid a duplicate. |
| A required ticket key is absent. | Commit/open-pr ask for the key and do not fabricate one. |
| Only one skill is installed. | Completes that skill's own workflow without requiring companions or setup. |
| Java project targets a JDK without records. | Java guidance respects the target and uses supported data modeling. |
| TypeScript input comes from JSON with an asserted type. | Guidance checks runtime input rather than trusting the assertion. |
| A handoff is used on another machine. | Document identifies path/access limits and includes sufficient state and links. |

## Live evaluation record

On 2026-10-10, the package validator passed for all 14 packages. Four
temporary negative controls confirmed nonzero exits for a mismatched name,
an invocation lock in display metadata, a missing local reference, and a
missing README catalog entry. Each mutation was restored before validation
passed again.

A listed scenario is an evaluation plan, not a claim that every host or
model has passed it. Record behavioral runs only after they finish.

An independent review of all 14 skill bodies found two scope defects:
review-only test audits entered cleanup, and metadata-only review updates
pushed local commits. Both workflows now have explicit read-only or
metadata-only paths. A second read-only review confirmed those defects
were resolved; this was instruction review, not behavioral execution. The corresponding scenarios remain in this plan.

Two standalone workflows were forward-tested with an independent
`gpt-6.1-sol` agent through the Codex harness in T3 Code. It received each
skill, the user's fixture request, and raw implementation files, without
the expected finding or companion skills. Both runs used temporary files
outside the repository and prohibited implementation changes or publication.

- Triage reproduced a pricing report and identified the discount-selection
  cause. Its independent probe recorded 5 failing cases and 2 passing controls.
  It returned a bounded change target and acceptance checks without fixing it.
- Prove-it ran a supplied check successfully, then tested the actual input
  contract. Its independent probe found 5 failing rejection cases alongside
  9 passing cases. It reported that the implementation did not meet the
  contract instead of accepting the provided check as proof.

The parent reran both evidence scripts using the project's pinned Node
version and observed the same failures. These were successful workflow
evaluations that detected deliberately flawed fixtures, not passing feature
tests. Explicit skill loading was used. The runs do not establish automatic
routing, live forge behavior, or compatibility with every host and model.

All 14 packages also passed the skill-creator's independent frontmatter
validator. `bun run verify` passed, including 26 site unit tests and the
production build. The six browser checks passed on each of Chromium,
Firefox, and WebKit, for 18 passing checks across the three engines.

The local host lacked browser runtime libraries. Ubuntu library packages
were extracted under `/tmp/skills-overhaul-browser-libs` without system
installation, then exposed with `LD_LIBRARY_PATH`. Chromium and Firefox
used that environment. WebKit additionally used
`PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS=1` because its preflight queries
the system loader cache rather than temporary libraries. The actual WebKit
browser launched and all six assertions ran; no tests were skipped. This
environment workaround is not a repository or skill dependency.
