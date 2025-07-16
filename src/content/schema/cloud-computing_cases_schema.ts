// src/schemas/customMLBlog.ts
import { defineCollection, z } from 'astro:content';

export const CloudComputingCases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    contentType: z.literal('case-study'),
    serviceName:z.literal('cloud-computing'),
    date: z.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false).optional(),
  }),
});
