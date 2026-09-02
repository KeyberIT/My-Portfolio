import { getDocumentBySlug, getAllDocuments } from "@/lib/markdown";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllDocuments("posts");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getDocumentBySlug("posts", resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1 w-full max-w-[800px] mx-auto px-4 md:px-10 lg:px-24 pt-32 pb-24">
      <header className="mb-10 text-center">
        <h1 className="text-lightest-slate text-4xl md:text-5xl font-bold mb-4">
          {post.frontmatter.title || "Untitled"}
        </h1>
        <p className="text-slate font-mono text-sm">
          {post.frontmatter.date || "No date"}
        </p>
      </header>
      <article 
        className="text-slate leading-relaxed [&>h2]:text-lightest-slate [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-lightest-slate [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:mb-6 [&>a]:text-green [&>a]:underline"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
      />
    </main>
  );
}
