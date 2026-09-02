import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MarkdownDocument<T = Record<string, unknown>> {
  slug: string;
  frontmatter: T;
  contentHtml: string;
}

export async function getDocumentBySlug<T = Record<string, unknown>>(folder: string, slug: string): Promise<MarkdownDocument<T> | null> {
  try {
    const fullPath = path.join(contentDirectory, folder, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      frontmatter: matterResult.data as T,
      contentHtml,
    };
  } catch (e) {
    return null;
  }
}

export function getAllDocuments<T = Record<string, unknown>>(folder: string): Omit<MarkdownDocument<T>, 'contentHtml'>[] {
  try {
    const dirPath = path.join(contentDirectory, folder);
    if (!fs.existsSync(dirPath)) return [];
    
    const fileNames = fs.readdirSync(dirPath);
    
    const allDocs = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(dirPath, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          slug,
          frontmatter: matterResult.data as T,
        };
      });
      
    // Sort logic could be applied here if needed (e.g. by date)
    return allDocs;
  } catch (e) {
    return [];
  }
}
