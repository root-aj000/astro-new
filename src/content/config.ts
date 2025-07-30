import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { BlogSchema } from "./schema/blog_schema";
import { CasesSchema } from "./schema/cases_schema";
// import { servicePage } from "./schema/index_service_schema";
// import { listpage } from "./schema/list_schema";
import { indexSchema } from "./schema/index_schema";

// export const collections = {
//   AichatbotBlog: AichatbotBlog,
//   AichatbotCases: AichatbotCases,
//   CloudComputingBlog: CloudComputingBlog,
//   CloudComputingCases: CloudComputingCases,
//   CustomMLBlog: CustomMLBlog,
//   CustomMLCases: CustomMLCases,
//   DevopsBlog: DevopsBlog,
//   DevopsCases: DevopsCases,
//   servicePage : servicePage,
//   listpage: listpage,
// };

export const collections = {
  AichatbotBlog: defineCollection({
    loader: glob({
      base: "./src/content/services/ai-chatbot/blog/",
      pattern: "**/*.mdx",
    }),
    schema: BlogSchema("Blog_post", "ai-chatbot"),
  }),

  CloudComputingBlog: defineCollection({
    loader: glob({
      base: "./src/content/services/cloud-computing/blog/",
      pattern: "**/*.mdx",
    }),
    schema: BlogSchema("Blog_post", "cloud-computing"),
  }),

  CustomMLBlog: defineCollection({
    loader: glob({
      base: "./src/content/services/custom-ml/blog/",
      pattern: "**/*.mdx",
    }),
    schema: BlogSchema("Blog_post", "custom-ml"),
  }),

  DevopsBlog: defineCollection({
    loader: glob({
      base: "./src/content/services/devops/blog/",
      pattern: "**/*.mdx",
    }),
    schema: BlogSchema("Blog_post", "devops"),
  }),

  AichatbotCases: defineCollection({
    loader: glob({
      base: "./src/content/services/ai-chatbot/case-studies/",
      pattern: "**/*.mdx",
    }),
    schema: CasesSchema("Case_study", "ai-chatbot"),
  }),

  CloudComputingCases: defineCollection({
    loader: glob({
      base: "./src/content/services/cloud-computing/case-studies/",
      pattern: "**/*.mdx",
    }),
    schema: CasesSchema("Case_study", "cloud-computing"),
  }),

  CustomMLCases: defineCollection({
    loader: glob({
      base: "./src/content/services/custom-ml/case-studies/",
      pattern: "**/*.mdx",
    }),
    schema: CasesSchema("Case_study", "custom-ml"),
  }),

  DevopsCases: defineCollection({
    loader: glob({
      base: "./src/content/services/devops/case-studies/",
      pattern: "**/*.mdx",
    }),
    schema: CasesSchema("Case_study", "devops"),
  }),

  // indexSchema: defineCollection({
  //   loader: glob({ base: "./src/content/services/", pattern: "**/*.mdx" }),
  //   schema: indexSchema,
  // }),

  indexPage: defineCollection({
    loader: glob({
      base: "./src/content/Static_Index_Pages/",
      pattern: "**/*.mdx",
    }),
    schema: indexSchema,
  }),

  // listpage: defineCollection({
  //    loader: glob({ base: "./src/content/services/", pattern: "**/*.md" }),
  //   schema: listpage,
  // }),
};

// export const collections = {
//   AichatbotBlog: defineCollection({
//     type: 'content',
//     schema: aiChatbotBlogSchema,
//   }),
// };

// how to use it
//    import { getCollection } from 'astro:content';

//    const devopsBlogs = await getCollection('DevopsBlog');
