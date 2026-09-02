import { getAllDocuments } from "@/lib/markdown";

export async function generateStaticParams() {
  const posts = getAllDocuments("posts");
  const allTags = new Set<string>();
  
  posts.forEach(post => {
    if (post.frontmatter.tags) {
      post.frontmatter.tags.forEach((tag: string) => allTags.add(tag));
    }
  });

  return Array.from(allTags).map(tag => ({
    tag: tag.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const resolvedParams = await params;
  const posts = getAllDocuments("posts");
  
  const taggedPosts = posts.filter(post => {
    if (!post.frontmatter.tags) return false;
    const formattedTags = post.frontmatter.tags.map((t: string) => t.toLowerCase().replace(/\s+/g, '-'));
    return formattedTags.includes(resolvedParams.tag);
  });

  return (
    <main className="flex-1 w-full max-w-[1000px] mx-auto px-4 md:px-10 lg:px-24 pt-32 pb-24">
      <header className="mb-12">
        <h1 className="text-lightest-slate text-4xl md:text-5xl font-bold mb-4">
          Posts tagged with <span className="text-green">#{resolvedParams.tag}</span>
        </h1>
        <p className="text-slate font-mono text-sm">
          {taggedPosts.length} post{taggedPosts.length === 1 ? '' : 's'} found
        </p>
      </header>

      <ul className="space-y-6">
        {taggedPosts.map(post => (
          <li key={post.slug} className="bg-light-navy p-6 rounded hover:-translate-y-1 transition-transform">
            <h2 className="text-xl font-bold text-lightest-slate hover:text-green transition-colors">
              <a href={`/pensieve/${post.slug}`}>{post.frontmatter.title || post.slug}</a>
            </h2>
            <p className="text-slate font-mono text-xs mt-2">{post.frontmatter.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
