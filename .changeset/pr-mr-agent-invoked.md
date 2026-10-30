---
"skills-site": minor
---

Rebuild `open-pr` and `open-mr` into agent-invoked `pr` and `mr`. The skills rename, the agent invokes them when a pull or merge request is opened or updated, and their bodies adopt shape-matched summaries, before/after evidence, and a merge-danger call. CLI choreography the agent already knows is dropped; the skills keep only what it could not derive, like the Jira ticket key and never a second pull request. Body shape adapted from the `pr` skill in mattpocock/skills, itself adapted from Dex Horthy and HumanLayer's `show-me` skill.
