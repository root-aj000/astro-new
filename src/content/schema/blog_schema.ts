import { z } from "astro:content";
export function BlogSchema(contentType: string, serviceName: string) {
  return z.object({
    blog_data: z
      .object({
        title: z.string().optional(),
        date: z.date(),
        author: z.string(),
        tags: z.array(z.string()).optional(),
        description: z.string().optional(),
        draft: z.boolean().default(false).optional(),
      })
      .transform((data) => ({
        ...data,
        contentType,
        serviceName,
      })),
  });
}

