import {z} from "astro:content"
export function BlogSchema(contentType, serviceName) {
  return z.object({
    blog_data: z.object({
      title: z.string().optional(),
      contentType: z.literal(contentType).default(contentType).optional(),
      serviceName: z.literal(serviceName).default(serviceName).optional(),
      date: z.date(),
      author: z.string(),
      tags: z.array(z.string()).optional(),
      description: z.string().optional(),
      draft: z.boolean().default(false).optional(),
    }),
  });
};
