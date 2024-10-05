import { notFound } from 'next/navigation';
import { getBlogPost } from '@/lib/blog';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 neu-text-outline">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      <div className="prose max-w-none neubrutalism p-6" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}