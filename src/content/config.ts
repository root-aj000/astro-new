import { defineCollection, z } from 'astro:content';

const serviceCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    // Required core frontmatter
    title: z.string(),
    contentType: z.enum(['service-index', 'blog-post', 'case-study', 'static-page']),
    
    // Optional metadata
    description: z.string().optional(),
    publishDate: z.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    serviceName: z.string().optional(),

    // Hero blocks
    hero: z.object({
      mh_line: z.string(),
      tg_line: z.string(),
      discription: z.string(),
      p_cta: z.string(),
      s_cta: z.string(),
      image: image().optional(),
      alt: z.string(),
    }).optional(),

    hero_2: z.any().optional(), // Placeholder: You can define strong types later
    hero_3: z.any().optional(),
    hero_4: z.any().optional(),

    // Logo cloud
    logo_cloud: z.object({
      title: z.string(),
      logos: z.array(image()),
    }).optional(),

    // How it works section
    how_it_works: z.object({
      title: z.string(),
      subtitle: z.string(),
      image: image(),
      steps: z.array(z.object({
        title: z.string(),
        desc: z.string(),
        img: image(),
        caption: z.string(),
      })),
    }).optional(),

    // For whom block
    for_whom_block: z.object({
      title: z.string(),
      description: z.string(),
      p_cta: z.string(),
      items: z.array(z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(), // Inline SVG or path
      })),
    }).optional(),

    list_header: z.object({
      title: z.string(),
      discription: z.string(),
    }).optional(),

    feature_grid: z.object({
      title: z.string(),
      subtitle: z.string(),
      features: z.array(z.object({
        title: z.string(),
        description: z.string(),
        cta: z.string(),
        link: z.string(),
        icon: z.string(),
      })),
    }).optional(),

    stats_block: z.object({
      heading: z.string(),
      description: z.string(),
      items: z.array(z.object({
        value: z.string(),
        label: z.string(),
      })),
    }).optional(),

    subscribe_form: z.object({
      title: z.string(),
      description: z.string(),
      placeholder: z.string(),
      buttonText: z.string(),
    }).optional(),
  }),
});

export const collections = {
  services: serviceCollection,
};










// await getCollection('custom-ml-blog')
// await getEntryBySlug('services', 'custom-ml/index')
