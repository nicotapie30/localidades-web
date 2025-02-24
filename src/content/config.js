import { defineCollection, z } from "astro:content";

const guide = defineCollection({
  type: "data",
  schema: z.object({
    id: z.number(),
    title: z.string(),
    url: z.string(),
    method: z.string(),
    description: z.string(),
    example: z.string(),
    img: z.string(),
  }),
});

const error = defineCollection({
  type: "data",
  schema: z.object({
    id: z.number(),
    title: z.string(),
    cause: z.string(),
    solution: z.string(),
  }),
});

export const collections = { guide, error };
