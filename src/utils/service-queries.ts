// src/utils/service-queries.ts
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

// Import the specific types from your schema if you want more granular type hints
// import type { ServiceIndexPageFrontmatter, BlogPostFrontmatter, CaseStudyFrontmatter } from '../schemas/service-content';

/**
 * Retrieves the main service index page for a given serviceName.
 * @param serviceName The name of the service (e.g., 'custom-ml').
 * @returns The CollectionEntry for the service index page, or undefined.
 */
export async function getServiceIndexPage(serviceName: string) {
  const entries = await getCollection('services', ({ data }) =>
    data.contentType === 'service-index' && data.serviceName === serviceName
  );
  // As 'service-index' pages should be unique per service, return the first one found.
  return entries[0];
}

/**
 * Retrieves all blog posts for a specific service.
 * @param serviceName The name of the service.
 * @returns An array of CollectionEntry objects for blog posts.
 */
export async function getServiceBlogPosts(serviceName: string) {
  return getCollection('services', ({ data }) =>
    data.contentType === 'service-blog-post' && data.serviceName === serviceName
  );
}

/**
 * Retrieves a single blog post for a service by its serviceName and slug.
 * The slug here refers to the file name part relative to the 'blog' folder (e.g., 'intro-to-x' for intro-to-x.md).
 * @param serviceName The name of the service.
 * @param slug The slug of the blog post (e.g., 'intro-to-x').
 * @returns The CollectionEntry for the blog post, or undefined.
 */
export async function getServiceBlogPostBySlug(serviceName: string, slug: string) {
  // Use id for more robust matching as slug can be normalized
  const entries = await getCollection('services', ({ data, id }) =>
    data.contentType === 'service-blog-post' &&
    data.serviceName === serviceName &&
    // Example: matches 'custom-ml/blog/intro-to-x.md' where slug is 'intro-to-x'
    id.endsWith(`${serviceName}/blog/${slug}.md`)
  );
  return entries[0];
}

/**
 * Retrieves all case studies for a specific service.
 * @param serviceName The name of the service.
 * @returns An array of CollectionEntry objects for case studies.
 */
export async function getServiceCaseStudies(serviceName: string) {
  return getCollection('services', ({ data }) =>
    data.contentType === 'service-case-study' && data.serviceName === serviceName
  );
}

/**
 * Retrieves a specific generic service page (like FAQ, blog-list, etc.).
 * @param serviceName The name of the service.
 * @param pageType The specific type of the generic page (e.g., 'service-faq').
 * @returns The CollectionEntry for the page, or undefined.
 */
export async function getGenericServicePage(serviceName: string, pageType: 'service-blog-list' | 'service-case-list' | 'service-faq' | 'service-custom-page' | 'service-deployment-guide' | 'service-whitepaper') {
    const pages = await getCollection('services', ({ data }) =>
        data.contentType === pageType && data.serviceName === serviceName
    );
    return pages[0];
}

// You can add more helper functions as needed
