import BlogArchive from '@/components/BlogArchive';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 neu-text-outline">Blog Archive</h1>
      <BlogArchive />
    </div>
  );
}