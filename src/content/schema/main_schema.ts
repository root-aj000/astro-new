// src/schemas/service-page.ts (or rename to src/schemas/service-content.ts)
import { z, defineCollection } from 'astro:content';

const heroSchema = z.object({
  mh_line: z.string(),
  tg_line: z.string(),
  discription: z.string(),
  p_cta: z.string(),
  s_cta: z.string(),
  image: z.string(),
  alt: z.string(),
});

const logoCloudSchema = z.object({
  title: z.string(),
  logos: z.array(z.string()),
});

const howItWorksSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  image: z.string(),
  steps: z.array(z.object({
    title: z.string(),
    desc: z.string(),
    img: z.string(),
    caption: z.string(),
  }))
});

const forWhomSchema = z.object({
  title: z.string(),
  description: z.string(),
  p_cta: z.string(),
  items: z.array(z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
  }))
});

const featureGridSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  features: z.array(z.object({
    title: z.string(),
    description: z.string(),
    cta: z.string(),
    link: z.string().url(),
    icon: z.string(),
  })),
});

const statsSchema = z.object({
  heading: z.string(),
  description: z.string(),
  items: z.array(z.object({
    value: z.string(),
    label: z.string(),
  })),
});

const subscribeSchema = z.object({
  title: z.string(),
  description: z.string(),
  placeholder: z.string(),
  buttonText: z.string(),
});

// --- Specific Schemas for different content types ---

const serviceIndexPageSchema = z.object({
  title: z.string(),
  hero: heroSchema.optional(),
  hero_2: heroSchema.optional(),
  hero_3: heroSchema.optional(),
  hero_4: heroSchema.optional(),
  logo_cloud: logoCloudSchema.optional(),
  Howitworks: howItWorksSchema.optional(),
  forwhom: forWhomSchema.optional(),
  grid: featureGridSchema.optional(),
  stats: statsSchema.optional(),
  subscribe: subscribeSchema.optional(),
  contentType: z.literal('service-index'), // Specific content type for main service pages
  serviceName: z.enum([
    'custom-ml',
    'ai-chatbot',
    'devops',
    'cloud-computing',
  ]),
});

const blogPostSchema = z.object({
  title: z.string(),
  date: z.string().transform((str) => new Date(str)),
  author: z.string().optional(),
  description: z.string(),
  image: z.string().optional(),
  alt: z.string().optional(),
  contentType: z.literal('service-blog-post'), // Specific content type for blog posts
  serviceName: z.enum([
    'custom-ml',
    'ai-chatbot',
    'devops',
    'cloud-computing',
  ]),
});

const caseStudySchema = z.object({
  title: z.string(),
  client: z.string().optional(),
  industry: z.string().optional(),
  problem: z.string(),
  solution: z.string(),
  results: z.string(),
  image: z.string().optional(),
  alt: z.string().optional(),
  contentType: z.literal('service-case-study'), // Specific content type for case studies
  serviceName: z.enum([
    'custom-ml',
    'ai-chatbot',
    'devops',
    'cloud-computing',
  ]),
});

const genericServiceContentSchema = z.object({
  title: z.string(),
  description: z.string().optional(), // Or more structured content
  contentType: z.enum([
    'service-blog-list',
    'service-case-list',
    'service-faq',
    'service-custom-page',
    'service-deployment-guide',
    'service-whitepaper',
  ]),
  serviceName: z.enum([
    'custom-ml',
    'ai-chatbot',
    'devops',
    'cloud-computing',
  ]),
  // Add other fields relevant to these generic content types (e.g., sections, questions, etc.)
  // For FAQ, you might want:
  // faqs: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
});


export const serviceContent = defineCollection({
  type: 'content',
  schema: z.discriminatedUnion('contentType', [
    serviceIndexPageSchema,
    blogPostSchema,
    caseStudySchema,
    genericServiceContentSchema, // For all other service-related content types
  ]),
});
