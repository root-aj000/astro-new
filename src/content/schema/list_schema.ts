import { z, defineCollection } from 'astro:content';

export const listpage =  z.object({
    title: z.string(),
    list_header :z.object({
        title : z.string(),
        description :z.string(),
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
  });