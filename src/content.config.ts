import { defineCollection } from "astro:content";

import { z } from "astro/zod";
import { glob } from "astro/loaders";


const publicationsCollection = defineCollection({
    loader: glob({ base: "./src/assets/publications", pattern: "*.md" }),
    schema: () => z.object({
        authors: z.string(),
        year: z.number(),
        title: z.string(),
        venue: z.string(),
        url: z.url(),
    }),
});

const peopleCollection = defineCollection({
    loader: glob({ base: "./src/assets/people", pattern: "*.md" }),
    schema: ({ image }) => z.object({
        name: z.string(),
        picture: image(),
        url: z.url(),
    }),
});

console.log(publicationsCollection)

export const collections = {
    people: peopleCollection,
    publications: publicationsCollection
};