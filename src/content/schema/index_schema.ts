import { z } from 'astro/zod';

export const indexSchema = z.object({
  indexpro: z.object({
    hero: z.object({
      mh_line: z.string(),
      tg_line: z.string(),
      discription: z.string(),
      p_cta: z.string(),
      s_cta: z.string(),
      image: z.string(),
      alt: z.string(),
    }).optional(),
    cloud_data: z.object({
      title: z.string(),
      logos: z.array(z.string()),
    }).optional(),
    hero_2: z.object({
      mh_line: z.string(),
      tg_line: z.string(),
      discription: z.string(),
      p_cta: z.string(),
      s_cta: z.string(),
      image: z.string(),
      alt: z.string(),
    }).optional(),
    hero_3: z.object({
      mh_line: z.string(),
      tg_line: z.string(),
      discription: z.string(),
      p_cta: z.string(),
      s_cta: z.string(),
      image: z.string(),
      alt: z.string(),
    }).optional(),
    hero_4: z.object({
      mh_line: z.string(),
      tg_line: z.string(),
      discription: z.string(),
      p_cta: z.string(),
      s_cta: z.string(),
      image: z.string(),
      alt: z.string(),
    }).optional(),
    howitworks: z.object({
      title: z.string(),
      subtitle: z.string(),
      image: z.string(),
      steps: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          svg: z.string(),
        })
      ),
    }).optional(),
    forwhom: z.object({
      title: z.string(),
      description: z.string(),
      p_cta: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
        })
      ),
    }).optional(),
    list_header: z.object({
      title: z.string(),
      discription: z.string(),
    }).optional(),
    grid: z.object({
      title: z.string(),
      subtitle: z.string(),
      features: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          cta: z.string(),
          link: z.string(),
          icon: z.string(),
        })
      ),
    }).optional(),
    stats: z.object({
      heading: z.string(),
      description: z.string(),
      items: z.array(
        z.object({
          value: z.string(),
          label: z.string(),
        })
      ),
    }).optional(),
    subscribe: z.object({
      title: z.string(),
      description: z.string(),
      placeholder: z.string(),
      buttonText: z.string(),
    }).optional(),
    // blog_data: z.object({
    //   title: z.string(),
    //   author: z.string(),
    //   contentType: z.string().optional(),
    //   serviceName: z.string().optional(),
    //   date: z.string(),
    //   image: z.string(),
    //   excerpt: z.string(),
    //   tags: z.array(z.string()),
    //   category: z.string(),
    //   href: z.string(),
    // }).optional(),
    // Home_header_blog: z.object({
    //   title: z.string(),
    //   subtitle: z.string(),
    // }).optional(),
    Home_header_cases: z.object({
      title: z.string(),
      subtitle: z.string(),
    }).optional(),
    featurelr: z.object({
      title: z.string(),
      subtitle: z.string(),
      image: z.string(),
      LeftItems: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
        })
      ),
      RightItems: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
        })
      ),
    }).optional(),
  }),
});
