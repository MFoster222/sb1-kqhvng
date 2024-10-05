import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

const projects = [
  { id: 1, title: 'E-commerce Platform', description: 'A full-featured online store built with Next.js and Stripe', color: 'neu-bg-yellow' },
  { id: 2, title: 'Task Management App', description: 'A productivity tool created with React and Firebase', color: 'neu-bg-blue' },
  { id: 3, title: 'Weather Dashboard', description: 'Real-time weather information using OpenWeatherMap API', color: 'neu-bg-pink' },
];

export default function FeaturedProjects() {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold mb-8 text-center neu-text-outline">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={`/projects#${project.id}`} key={project.id} className="block">
            <Card className={`neubrutalism ${project.color} h-full`}>
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-black">{project.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}