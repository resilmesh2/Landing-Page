// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { file } from 'astro/loaders';

// 3. Define your collection(s)
const entries = defineCollection({
  loader: file("src/data/entries.json"),
  schema: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string().optional(),
      icon: z.string().optional(),
      link: z.string().optional(),
  }))
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { entries };