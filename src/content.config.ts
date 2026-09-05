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
    // The Agent Skills spec reserves `metadata` for arbitrary client-defined
    // key-value pairs; site curation flags live here, never as new top-level
    // frontmatter keys that could break skill install tooling.
    metadata: z.looseObject({ featured: z.boolean().optional() }).optional(),
  }),
});

export const collections = {
  skillDefinitions,
};
