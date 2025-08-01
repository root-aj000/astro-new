import type { CollectionEntry } from "astro:content";
import {
  BASE_PATH_BLOG,
  BASE_PATH_CASES,
  DEFAULT_META,
} from "../content/const.ts";

// Unified type for all possible collections
type BlogOrCaseEntry =
  | CollectionEntry<"AichatbotBlog">
  | CollectionEntry<"CloudComputingBlog">
  | CollectionEntry<"CustomMLBlog">
  | CollectionEntry<"DevopsBlog">
  | CollectionEntry<"AichatbotCases">
  | CollectionEntry<"CloudComputingCases">
  | CollectionEntry<"CustomMLCases">
  | CollectionEntry<"DevopsCases">;

export function enrichEntry(post: BlogOrCaseEntry) {
  const meta = DEFAULT_META[post.collection as keyof typeof DEFAULT_META];

  if (!meta)
    throw new Error(`Missing metadata for collection: ${post.collection}`);

  const data =
    "blog_data" in post.data
      ? post.data.blog_data
      : "case_data" in post.data
      ? post.data.case_data
      : undefined;

  if (!data) throw new Error(`Missing blog_data or case_data in ${post.id}`);

  const basePath =
    BASE_PATH_BLOG[post.collection as keyof typeof BASE_PATH_BLOG] ??
    BASE_PATH_CASES[post.collection as keyof typeof BASE_PATH_CASES] ??
    "";

  return {
    ...data,
    href: `${basePath}/${post.id}`,
    contentType: data.contentType ?? meta.contentType,
    serviceName: data.serviceName ?? meta.serviceName,
  };
}
