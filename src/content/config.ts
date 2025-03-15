import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      category: z.string(),
      tags: z.array(z.string()),
      cover: z
        .object({
          src: z.string(),
          alt: z.string(),
        })
        .optional(),
    }),
});

export const collection = { blog };
