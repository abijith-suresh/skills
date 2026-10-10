# Skill collection design

## The decision

Keep a small set of workflows that compose within the user's task. Make
every skill discoverable from natural language and independently usable.
The collection is a set of tools for the user's process, rather than a
process the user must adopt before work can start.

Discovery and authorization are separate. A description helps the agent
choose a workflow; the request and project policy determine which actions
it may take. Removing invocation locks must not turn analysis into a fix,
issue capture into unsolicited publication, or committing into pushing.

Automatic loading depends on the host and model. This collection makes
discovery possible through clear descriptions and unlocked metadata, but
does not promise deterministic selection on every agent platform.

## Workflow contracts

Each skill defines the facts it needs, the result it produces, the checks
that justify that result, and what happens when those checks cannot run.
Use the smallest workflow that gives the requested outcome.

Companions are optional. A skill may load an installed companion or provide
it to a delegated worker when the authorized task needs its discipline.
The caller owns the scope and the result. Do not recurse through skills,
require setup skills, install dependencies on the user's behalf, or invoke
another workflow just because its name appears in a document.

Model and platform choices belong to the environment. The canonical body
describes capabilities and decisions. Optional host command examples live
in references. Display metadata is an adapter and is never required to
understand or run a workflow.

## Existing collection audit

| Previous workflow | Decision | Reason |
| --- | --- | --- |
| `commit` and `commit-work` | Merge into `commit`. | Ticket scope changes a convention, not the commit workflow. Preserve intent splitting and staged-change ownership. |
| `open-pr` and `open-mr` | Merge into `open-pr`. | Both publish a branch for review. Host adapters and project title rules account for the differences. |
| `create-issue` | Rework. | Capture one issue on the configured tracker. Reuse explicit publication authorization; draft unsolicited follow-ups first. |
| `grill-me` | Keep and shorten. | Resolve consequential human decisions, answer discoverable facts from evidence, and stop before interviewing becomes busywork. |
| `handoff` | Rework. | Record verified current state and next steps. Support a requested destination or an inline handoff when a shared filesystem is absent. |
| `research` | Rework. | Research the installed version, allow an answer-only result, and avoid hard resets of user-owned reference clones. |
| `test-audit` | Keep its evidence standard. | Existing removal criteria distinguish redundant coverage from valuable compatibility and behavior checks. Improve discovery. |
| `unslop` | Replace with `writing`. | Clear writing should shape the first draft as well as remove patterns from an existing one. Preserve meaning and voice. |

The result has 14 skills. Consolidation removes three old directories and
adds seven requested workflows, including the replacement for `unslop`.
Do not keep compatibility skills that repeat the new content. Migrate
installed copies explicitly and redirect old website URLs.

## New workflow boundaries

| Skill | Input | Result | Important stopping condition |
| --- | --- | --- | --- |
| `orchestration` | A task requiring delegated work. | Integrated result with acceptance evidence. | Missing delegation capability or unresolved worker failures. |
| `triage` | A report and available artifacts. | Confirmed diagnosis or labeled inference and next action. | Missing reproduction access must stay visible; no unsolicited fix. |
| `explain` | A question and implementation. | A concrete behavior trace with source links. | Runtime and design-motivation uncertainty must be labeled. |
| `prove-it` | A behavioral claim and changed artifact. | Repeatable checks and actual results. | Missing checks or a failed acceptance case prevents a success claim. |
| `java` | A scoped Java change and local toolchain. | Implementation or review with explicit ownership and contracts. | Unsupported language features, unavailable dependencies, or failed checks. |
| `typescript` | A scoped TS/TSX change and local runtime. | Implementation or review with sound types and checked boundaries. | Types cannot substitute for runtime validation or asynchronous evidence. |
| `writing` | Facts, intended message, audience or context. | Clear prose preserving meaning and voice. | Missing facts must not become invented claims. |

## What the reference collections contributed

Reviewed on 2026-10-10. These are design influences, not runtime dependencies.
The workflows here are written for this collection.

[pstack](https://github.com/cursor/plugins/tree/main/pstack) uses an
orchestrating mode, delegated roles, and reusable verification principles.
Its [mode](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/SKILL.md)
and [swarm](https://github.com/cursor/plugins/blob/main/pstack/skills/swarm/SKILL.md)
make ownership, worker briefs, and acceptance visible. Adopted that
accountability and the emphasis on checking the real artifact from
[prove it works](https://github.com/cursor/plugins/blob/main/pstack/skills/principle-prove-it-works/SKILL.md).
Did not adopt its named models, Cursor rules, custom agent types, broad
cross-skill requirements, or expansive default authorization.

[Matt Pocock's collection](https://github.com/mattpocock/skills) separates
task workflows from reusable engineering disciplines. Its
[spec implementation](https://github.com/mattpocock/skills/blob/main/skills/engineering/implement-spec/SKILL.md)
treats tickets as a dependency graph and separates implementation from
integration. Its
[diagnosis workflow](https://github.com/mattpocock/skills/blob/main/skills/engineering/diagnosing-bugs/SKILL.md)
emphasizes a feedback loop that can detect the reported failure. Adopted
those ideas. Did not adopt mandatory tracker setup, fixed labels, required
companion skills, or slash-only workflow entry.

Neither collection's platform-specific invocation settings decide this
collection's policy. Natural-language discovery is an explicit requirement
here.

## How the work fits together

For a reported bug, triage establishes the evidence. If a fix is authorized,
the agent applies the relevant language guidance and verifies the original
scenario with `prove-it`. `commit` and `open-pr` follow only when delivery
was requested or required by project policy. Writing guidance applies to
the explanation and review description.

For a larger task, orchestration owns the task graph and delegates those
same workflows. It checks the combined artifact after integration. A
worker's successful local check cannot prove that the combined result works.

For an unfamiliar subsystem, explanation can finish the task without
implementation. Research resolves a specific uncertain dependency or API;
it need not create code as its output.

## Keep the collection small

Add a workflow after a repeated failure demonstrates the need. Add language
or reference detail only when it changes a decision. Merge variants that
differ only in a convention. Retire unused skills after reviewing real usage,
not by targeting a count.

Do not add a universal implementation router, mandatory review panel, tracker
state machine, or verification framework without evidence that it earns
its maintenance and context cost. Start with this set and evaluate where
agents still make the wrong decision.
