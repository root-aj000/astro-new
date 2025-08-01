import { z } from "astro:content";

export function CasesSchema() {
  return z
    .object({
      case_data: z.object({
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
}
