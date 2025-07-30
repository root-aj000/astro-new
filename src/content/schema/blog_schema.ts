import { z } from "astro:content";
export function BlogSchema(contentType, serviceName) {
  return z.object({
    blog_data: z
      .object({
        title: z.string().optional(),
        date: z.date(),
        author: z.string(),
        contentType: z.string().optional(),
        serviceName: z.string().optional(),
        tags: z.array(z.string()).optional(),
        description: z.string().optional(),
        draft: z.boolean().default(false).optional(),
      }).optional(),
      // .transform((data) => ({
      //   ...data,
      //   contentType,
      //   serviceName,
      // })),
  });
}

