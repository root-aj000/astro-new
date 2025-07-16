import { z } from 'astro:content';

export const blogPostSchema = z.object({
  contentType: z.literal('blog-post'),
  title: z.string(),
  author: z.string(),
  date: z.date(),
  serviceName: z.string(),
  tags: z.array(z.string()).optional(),
  description: z.string().optional(),
});