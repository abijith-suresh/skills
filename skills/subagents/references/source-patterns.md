# Source patterns

Inspected primary sources on 2026-10-10. These are examples of the patterns,
not evidence that this skill improves every model. They are not dependencies.

- Cursor pstack's [orchestrate playbook](https://github.com/cursor/plugins/blob/ccb5507cec1546dc88135c1139c811e6c59115ba/pstack/skills/poteto-mode/playbooks/orchestrate.md)
  separates coordination from substantive work and bounds failed attempts.
  Its [context guidance](https://github.com/cursor/plugins/blob/ccb5507cec1546dc88135c1139c811e6c59115ba/pstack/skills/principle-guard-the-context-window/SKILL.md)
  keeps large payloads in workers. Its program-management machinery is beyond
  this skill's scope.
- Matt Pocock's [implement-spec](https://github.com/mattpocock/skills/blob/49dd158d1076134a641b33efb035946536778336/skills/engineering/implement-spec/SKILL.md)
  uses exploration before implementation, dependency-driven dispatch, and
  context pointers. Pointers here require verified recipient access.
- Superpowers' [parallel dispatch](https://github.com/obra/superpowers/blob/bb92a77741419a4ab5f06e711a283343f1ada0c3/skills/dispatching-parallel-agents/SKILL.md)
  distinguishes independent investigations from dependent or conflicting work.
  Its [subagent-driven development](https://github.com/obra/superpowers/blob/bb92a77741419a4ab5f06e711a283343f1ada0c3/skills/subagent-driven-development/SKILL.md)
  keeps implementation in workers and cycles through review, fixes, and
  re-review. Its ledger, scripts, model rules, and mandatory companion skills
  are not imported.
- Anthropic's [feature-dev](https://github.com/anthropics/claude-code/blob/2301018b1f61073c501a8e7a4813ef48c239163b/plugins/feature-dev/commands/feature-dev.md)
  explores different codebase aspects with parallel workers. It also asks the
  parent to read all identified files and presents intermediate findings.
  This skill follows the user's preference for a small parent context and
  one reconciled result instead.
- [Claude Code's subagent documentation](https://code.claude.com/docs/en/sub-agents#run-subagents-in-foreground-or-background)
  describes background execution and completion notifications. Its guidance
  also covers parallel research, sequential chains, and isolating verbose
  output. Background resumption must be checked in the actual environment.

The user supplied the broad-to-deep exploration and conversational
availability requirements. Model names, tool names, invocation policy,
mandatory worktrees, and automatic publication are deliberately absent.
