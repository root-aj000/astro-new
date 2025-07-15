// scripts/build-blog-index.ts
import fg from 'fast-glob';
import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

const SERVICE_DIR = 'src/content/services/';
const OUTPUT_DIR = 'public/JSON';

// 🧠 All service names and content types
const ServiceNames = ['custom-ml', 'chatbot', 'devops', 'cloud-computing'];
const ContentTypes = ['blog-post', 'case-study'];

type BlogPostData = {
  title: string;
  serviceName: string;
  contentType: string;
  publishDate?: string;
  author?: string;
  tags?: string[];
  slug: string;
  url: string;
};

async function buildBlogIndex() {
  const files = await fg(`${SERVICE_DIR}/**/*.md`);
  const allPosts: { file: string; data: any }[] = [];

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const { data } = matter(raw);
    allPosts.push({ file, data });
  }

  for (const serviceName of ServiceNames) {
    for (const contentType of ContentTypes) {
      const filteredPosts: BlogPostData[] = [];

      for (const post of allPosts) {
        const data = post.data;
        if (data.serviceName === serviceName && data.contentType === contentType) {
          const slug = path.basename(post.file, '.md');
          const url = post.file
            .replace('src/content/', '/')
            .replace(/\.md$/, '')
            .replace(/\/index$/, '');

          filteredPosts.push({
            title: data.title,
            serviceName: data.serviceName,
            contentType: data.contentType,
            publishDate: data.publishDate,
            author: data.author,
            tags: data.tags || [],
            slug,
            url,
          });
        }
      }

      const filename = `${serviceName}-${contentType}s.json`.replace(/\s+/g, '-');
      const outputPath = path.join(OUTPUT_DIR, filename);
      await fs.writeFile(outputPath, JSON.stringify(filteredPosts, null, 2), 'utf8');

      console.log(` Saved ${filteredPosts.length} → ${outputPath}`);
    }
  }
}

buildBlogIndex().catch(console.error);
