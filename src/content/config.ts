import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    date: z.string(),
    readTime: z.string(),
    featured: z.boolean().optional(),
    coverImage: z.string().optional(),
    lang: z.string(),
  }),
});

export const collections = {
  blog,
};