// Map /services/:slug → actual file name in Static_Index_Pages
export const SLUG_MAP = {
  "ai-chatbot": "ai_chatbot",
  "cloud-computing": "cloud-computing",
  "custom-ml": "custom-ml",
  "devops": "devop-s",
} as const;

// Map /services/:slug → blog collection name
export const BLOG_COLLECTION_MAP = {
  "ai-chatbot": "AichatbotBlog",
  "custom-ml": "CustomMLBlog",
  "devops": "DevopsBlog",
  "cloud-computing": "CloudComputingBlog",
} as const;

export const CASE_COLLECTION_MAP = {
  "ai-chatbot": "AichatbotCases",
  "custom-ml": "CustomMLCases",
  "devops": "DevopsCases",
  "cloud-computing": "CloudComputingCases",
} as const;

export type BlogCollectionName =
  typeof BLOG_COLLECTION_MAP[keyof typeof BLOG_COLLECTION_MAP];
export type CaseCollectionName =
  typeof CASE_COLLECTION_MAP[keyof typeof CASE_COLLECTION_MAP];


// Types
export type SlugName = keyof typeof SLUG_MAP;

