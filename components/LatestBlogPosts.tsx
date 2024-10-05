import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

const posts = [
  { id: 1, title: 'Getting Started with Next.js', date: '2023-05-15', slug: 'getting-started-with-nextjs', color: 'neu-bg-yellow' },
  { id: 2, title: 'The Power of Tailwind CSS', date: '2023-06-02', slug: 'power-of-tailwind-css', color: 'neu-bg-blue' },
  { id: 3, title: 'Building Scalable APIs with Node.js', date: '2023-06-20', slug: 'building-scalable-apis-nodejs', color: 'neu-bg-pink' },
];

export default function LatestBlogPosts() {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold mb-8 text-center neu-text-outline">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="block">
            <Card className={`neubrutalism ${post.color} h-full`}>
              <CardHeader>
                <CardTitle className="text-2xl">{post.title}</CardTitle>
                <CardDescription className="text-black">{post.date}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}