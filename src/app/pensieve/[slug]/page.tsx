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
        className="prose prose-slate prose-invert max-w-none prose-headings:text-lightest-slate prose-a:text-green hover:prose-a:text-green-tint prose-strong:text-lightest-slate"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
      />
    </main>
  );
}
