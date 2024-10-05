import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';

export default function BlogArchive() {
  const posts = getAllBlogPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <Link href={`/blog/${post.slug}`} key={post.slug}>
          <Card className={`neubrutalism hover:translate-x-1 hover:translate-y-1 transition-transform ${index % 3 === 0 ? 'neu-bg-yellow' : index % 3 === 1 ? 'neu-bg-blue' : 'neu-bg-pink'}`}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription className="text-black">{post.date}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}