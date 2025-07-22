import { z, defineCollection } from "astro:content";
export const servicePage = z.object({
  title: z.string(),

  // for hero 1
  hero: z
    .object({
      mh_line: z.string(),
      tg_line: z.string(),
      discription: z.string(),
      p_cta: z.string(),
      s_cta: z.string(),
      image: z.string(),
      alt: z.string(),
    })
    .optional(),

  // for hero 2
  hero_2: z
    .object({
      mh_line: z.string(),
      tg_line: z.string(),
      discription: z.string(),
      p_cta: z.string(),
      s_cta: z.string(),
      image: z.string(),
      alt: z.string(),
    })
    .optional(),

  // for hero 3
  hero_3: z
    .object({
      mh_line: z.string(),
      tg_line: z.string(),
      discription: z.string(),
      p_cta: z.string(),
      s_cta: z.string(),
      image: z.string(),
      alt: z.string(),
    })
    .optional(),

  // for hero 4
  hero_4: z
    .object({
      mh_line: z.string(),
      tg_line: z.string(),
      discription: z.string(),
      p_cta: z.string(),
      s_cta: z.string(),
      image: z.string(),
      alt: z.string(),
    })
    .optional(),

  // logo cloud
  logo_cloud: z
    .object({
      title: z.string(),
      logos: z.array(z.string()),
    })
    .optional(),

  // How it Works
  Howitworks: z
    .object({
      title: z.string(),
      subtitle: z.string(),
      image: z.string(),
      steps: z.array(
        z.object({
          title: z.string(),
          desc: z.string(),
          image: z.string(),
          caption: z.string(),
        })
      ),
    })
    .optional(),

  // for Whom section
  forwhom: z
    .object({
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
    })
    .optional(),

  // feature grid
  grid: z
    .object({
      title: z.string(),
      subtitle: z.string(),
      features: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          cta: z.string(),
          link: z.string().url(),
          icon: z.string(),
        })
      ),
    })
    .optional(),

  // stats
  stats: z
    .object({
      heading: z.string(),
      description: z.string(),
      items: z.array(
        z.object({
          value: z.string(),
          label: z.string(),
        })
      ),
    })
    .optional(),

  // subscribe form
  subscribe: z
    .object({
      title: z.string(),
      description: z.string(),
      placeholder: z.string(),
      buttonText: z.string(),
    })
    .optional(),

  contentType: z.enum(["services", "index"]),

  serviceName: z.enum(["custom-ml", "ai-chatbot", "devops", "cloud-computing"]),

  // feature left right
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
  }),
});

