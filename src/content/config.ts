// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      // REQUIRED METADATA
      title: z.string(),
      contentType: z.enum([
        'blog-post',
        'case-study',
        'whitepaper',
        'faq',
        'deployment-guide',
        'custom-page',
        'service-index'
      ]),
      serviceName: z.string(), // like 'custom-ml', 'ai-chatbot', etc.

      // OPTIONAL METADATA
      description: z.string().optional(),
      author: z.string().optional(),
      publishDate: z.date().optional(),
      tags: z.array(z.string()).optional(),
      category: z.string().optional(),

      // COMPONENT DATA (optional, as per your design system)
      hero: z.object({
        mh_line: z.string(),
        tg_line: z.string(),
        discription: z.string(),
        p_cta: z.string(),
        s_cta: z.string(),
        image: image().optional(),
        alt: z.string()
      }).optional(),

      feature_grid: z.object({
        title: z.string(),
        subtitle: z.string(),
        features: z.array(z.object({
          title: z.string(),
          description: z.string(),
          cta: z.string(),
          link: z.string(),
          icon: z.string()
        }))
      }).optional(),

      for_whom_block: z.object({
        title: z.string(),
        description: z.string(),
        p_cta: z.string(),
        items: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string()
        }))
      }).optional(),

      how_it_works: z.object({
        title: z.string(),
        subtitle: z.string(),
        image: image(),
        steps: z.array(z.object({
          title: z.string(),
          desc: z.string(),
          img: image(),
          caption: z.string()
        }))
      }).optional(),

      subscribe_form: z.object({
        title: z.string(),
        description: z.string(),
        placeholder: z.string(),
        buttonText: z.string()
      }).optional()
    })
});

export const collections = {
  services
};
