// content/const.ts
export const BASE_PATH_BLOG = {
  AichatbotBlog: "/services/ai-chatbot/blog",
  CloudComputingBlog: "/services/cloud-computing/blog",
  CustomMLBlog: "/services/custom-ml/blog",
  DevopsBlog: "/services/devops/blog",
} as const;

export const BASE_PATH_CASES = {
  AichatbotCases: "/services/ai-chatbot/case-studies",
  CloudComputingCases: "/services/cloud-computing/case-studies",
  CustomMLCases: "/services/custom-ml/case-studies",
  DevopsCases: "/services/devops/case-studies",
} as const;

export const DEFAULT_META = {
  AichatbotBlog: { contentType: "blog-post", serviceName: "ai-chatbot" },
  CloudComputingBlog: { contentType: "blog-post", serviceName: "cloud-computing" },
  CustomMLBlog: { contentType: "blog-post", serviceName: "custom-ml" },
  DevopsBlog: { contentType: "blog-post", serviceName: "devops" },
  AichatbotCases: { contentType: "case-study", serviceName: "ai-chatbot" },
  CloudComputingCases: { contentType: "case-study", serviceName: "cloud-computing" },
  CustomMLCases: { contentType: "case-study", serviceName: "custom-ml" },
  DevopsCases: { contentType: "case-study", serviceName: "devops" },
} as const;
