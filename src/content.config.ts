import { defineCollection } from "astro:content";

import { z } from "astro/zod";
import { glob } from "astro/loaders";

const researchCollection = defineCollection({
  loader: glob({
    base: "./src/assets/collections/research",
    pattern: "*.md",
  }),
  schema: () =>
    z.object({
      authors: z.string(),
      year: z.number(),
      title: z.string(),
      venue: z.string(),
      url: z.url(),
    }),
});

const humansCollection = defineCollection({
  loader: glob({ base: "./src/assets/collections/humans", pattern: "*.md" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      picture: image(),
      url: z.url(),
    }),
});

export const collections = {
  humans: humansCollection,
  research: researchCollection,
};
