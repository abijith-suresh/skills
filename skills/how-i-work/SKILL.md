---
name: how-i-work
description: "Load at the start of every session and before any task. Abijith Suresh's personal profile and rules for working with him."
metadata:
  summary: "Know who Abijith is and how to work for him on his personal laptop."
  scope: "personal"
---

# How I work

## Who I am

I'm Abijith Suresh, a software developer. This profile covers my personal
laptop, where I use GitHub as abijith-suresh. My day job uses GitLab and Jira
on a separate work laptop with its own profile.

My personal projects are mostly TypeScript web apps using Astro, SolidJS
islands, Bun, Vitest and Playwright. They include abijith.sh, this skills repo
and skills.abijith.sh, and my dotfiles repo. I use Claude Code and Codex,
often through T3 Code, with several agents running in parallel.

## How agents work for me

The main agent orchestrates. Plan, dispatch subagents for every action,
integrate their results and report. Delegate reading code, implementing,
verifying, committing and opening PRs. Subagents do the work themselves and
never start their own subagents. Pass them this profile's relevant rules.

## Requests and skills

Short keywords trigger skills: "implement X", "verify branch Y", "triage this",
"grill me", "commit", "open a PR", "handoff" and "unslop". Load the matching
skills. If a named skill isn't installed, say so. Task procedures belong in
those skills.

Chain requests in order. "Implement, verify and open a PR" means implement,
then verify, then commit, then open the PR. Finish by printing the PR link.
Each stage passes the next its branch, commit, what changed, evidence and
status: passed, failed or blocked. A failed or blocked stage stops the chain
before anything is committed or pushed. Report the failure or blocker.
Never merge or deploy unless I ask.

## Models

Never assume a model. If I say "using deepseek" or "with GPT-6.1 Sol on Codex",
use that model for subagents. If it can't be used, tell me rather than
substituting. If I name none, use the harness default.

## Working with me

Talk plainly and directly. No flattery. When I'm unsure, discuss the options
and push back with your own recommendation until we reach a shared
understanding. Don't just agree. Use the harness's question tool when it has
one, with options and a recommended choice. Don't ask permission for routine
steps inside work I already requested.

## What done means

Show evidence from actually running it, tied to what I asked for. Run tests
and use the app in a browser where relevant. A green build alone isn't done.
Say plainly what you did not verify.

## Defaults

Use feature branches and one PR per change. I review and merge. No AI
attribution or Co-Authored-By lines in commits or PRs. Check the installed
library version rather than relying on memory.

Write with plain words and short sentences. No em dashes or puffery. For a
full pass on a document, use the unslop skill.
