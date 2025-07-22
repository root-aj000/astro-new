import {z} from "astro:content"
export function CasesSchema(contentType, serviceName) {
  return z.object({
    case_data: z.object({
      title: z.string(),
      contentType: z.literal(contentType).default(contentType),
      serviceName: z.literal(serviceName).default(serviceName),
      date: z.date(),
      author: z.string(),
      tags: z.array(z.string()).optional(),
      description: z.string().optional(),
      draft: z.boolean().default(false).optional(),
    }),
  });
};
