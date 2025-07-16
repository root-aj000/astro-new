import { z, defineCollection } from 'astro:content';
import { optional } from 'astro:schema';

export const listpage = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),


    list_header :z.object({
        title : z.string(),
        discription :z.string(),
  }).optional(),


    blog_data: z.object({
        title: z.string(),
        author: z.string(),
        date: z.string(),
        image: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()),
        category: z.string(),
        href: z.string(),
    }).optional(),







  }),
});