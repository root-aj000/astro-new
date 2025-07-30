import { z } from "astro:content";

export function BlogSchema(defaultContentType: string, defaultServiceName: string) {
  return z.object({
    blog_data: z
      .object({
        title: z.string().optional(),
        date: z.coerce.date(), // Supports string dates
        author: z.string(),
        tags: z.array(z.string()).optional(),
        description: z.string().optional(),
        draft: z.boolean().default(false).optional(),
        contentType: z.string().optional(), // still optional
        serviceName: z.string().optional(),
      })
      .transform((data) => ({
        ...data,
        contentType: data.contentType ?? defaultContentType,
        serviceName: data.serviceName ?? defaultServiceName,
      })),
  });
}