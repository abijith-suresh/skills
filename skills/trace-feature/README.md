# trace-feature

Trace how a specific feature or code path works in the current repo, from entry point to side effects.

## What This Skill Covers

- **Code path tracing** — follows a single feature or flow through the repo from entry to side effects
- **Read-only by default** — does not edit files, run tests, or install packages without permission
- **Evidence-based findings** — cites real symbols, file paths, and the test surface that covers the path
- **Non-obvious callouts** — flags feature flags, swallowed errors, retry logic, and behavior/impl drift

## Install

```bash
npx skills add abijith-suresh/skills --skill trace-feature
```

## Use

- "how does checkout work"
- "trace the path for invoice generation"
- "walk me through feature X"
- "what happens when a user clicks submit"

## How it works

1. **Anchor** — pin down which feature or path is meant.
2. **Entry points** — find the seams that trigger the feature.
3. **Shallow trace** — sample one representative flow per entry point, with enough detail to know what's at each layer. The user can then ask to go deep on a specific path.
4. **Test surface** — surface the tests that cover the path.
5. **Call out** — flag the non-obvious: flags, swallowed errors, retry logic, drift between intent and behavior.
6. **Summarize** — produce a structured chat summary.
