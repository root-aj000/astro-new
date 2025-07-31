import { z } from "astro:content";

export function BlogSchema(defaultContentType: string, defaultServiceName: string) {
  return z
    .object({
      blog_data: z.object({
        title: z.string().optional(),
        date: z.coerce.date(),
        author: z.string(),
        tags: z.array(z.string()).optional(),
        description: z.string().optional(),
        draft: z.boolean().default(false).optional(),
        contentType: z.string().optional(),
        serviceName: z.string().optional(),
      }),
    })
    .transform((entry) => ({
      blog_data: {
        ...entry.blog_data,
        contentType: entry.blog_data.contentType ?? defaultContentType,
        serviceName: entry.blog_data.serviceName ?? defaultServiceName,
      },
    }));
}
