// src/schemas/customMLBlog.ts
import { defineCollection, z } from 'astro:content';

export const AichatbotBlog = defineCollection({
  type: 'content',
  schema: z.object({
    blog_data: z.object({
    title: z.string(),
    contentType: z.literal('blog-post'),
    serviceName:z.literal('ai-chatbot'),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false).optional(),
    })
  }),
});
