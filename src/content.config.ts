import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

import { directorySlugFromEntry } from "@/lib/skill-catalog";

const skillDefinitions = defineCollection({
  loader: glob({
    base: "./skills",
    pattern: "*/SKILL.md",
    generateId: ({ entry }) => directorySlugFromEntry(entry),
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    // Harness extension, not part of the Agent Skills spec. Cursor, Claude
    // Code, and Pi honor it; Codex uses agents/openai.yaml instead.
    "disable-model-invocation": z.boolean().optional(),
    // The spec reserves `metadata` for string-to-string pairs. Site flags
    // (`featured`) and OpenCode invocation (`opencode/autoinvoke`) live here.
    metadata: z.record(z.string(), z.string()).optional(),
  }),
});

export const collections = {
  skillDefinitions,
};
