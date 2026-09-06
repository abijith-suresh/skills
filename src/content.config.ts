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
    // The Agent Skills spec reserves `metadata` for string-to-string pairs.
    // Site curation flags such as `featured` live here, never as new
    // top-level frontmatter keys that could break skill install tooling.
    metadata: z.record(z.string(), z.string()).optional(),
  }),
});

export const collections = {
  skillDefinitions,
};
