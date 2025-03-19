import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      hide: z.boolean().default(false),
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      category: z.string(),
      tags: z.array(z.string()),
      cover: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

export const collections = { blog };
