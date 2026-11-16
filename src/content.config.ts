import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

import { directorySlugFromEntry, isValidScope } from "@/lib/skill-catalog";

const skillDefinitions = defineCollection({
  loader: glob({
    base: "./skills",
    pattern: "*/SKILL.md",
    generateId: ({ entry }) => directorySlugFromEntry(entry),
  }),
  schema: z.object({
    name: z.string(),
    // The request keywords or situation that trigger the skill.
    description: z.string(),
    // The spec reserves `metadata` for string-to-string pairs. `summary` is
    // the human summary shown on the site, and `featured: "true"` controls
    // site curation. `scope` selects the personal and work laptop installs.
    metadata: z
      .record(z.string(), z.string())
      .refine(
        (metadata) => typeof metadata.summary === "string" && metadata.summary.length > 0,
        "metadata.summary is required"
      )
      .refine(
        (metadata) => isValidScope(metadata.scope),
        "metadata.scope must be a space-separated subset of personal and work"
      ),
  }),
});

export const collections = {
  skillDefinitions,
};
