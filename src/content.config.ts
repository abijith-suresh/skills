import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { directorySlugFromEntry } from './lib/skill-catalog';

const skillDefinitions = defineCollection({
  loader: glob({
    base: './skills',
    pattern: '*/SKILL.md',
    generateId: ({ entry }) => directorySlugFromEntry(entry),
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

const skillReadmes = defineCollection({
  loader: glob({
    base: './skills',
    pattern: '*/README.md',
    generateId: ({ entry }) => directorySlugFromEntry(entry),
  }),
});

export const collections = {
  skillDefinitions,
  skillReadmes,
};
