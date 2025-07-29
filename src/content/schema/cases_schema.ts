import {z} from "astro:content"
export function CasesSchema(contentType : string, serviceName : string) {
  return z.object({
    case_data: z.object({
      title: z.string(),
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
    }))
  });
};
