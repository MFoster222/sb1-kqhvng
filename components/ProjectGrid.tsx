import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const projects = [
  { id: 1, title: 'E-commerce Platform', description: 'A full-featured online store built with Next.js and Stripe' },
  { id: 2, title: 'Task Management App', description: 'A productivity tool created with React and Firebase' },
  { id: 3, title: 'Weather Dashboard', description: 'Real-time weather information using OpenWeatherMap API' },
  { id: 4, title: 'Portfolio Website', description: 'A responsive portfolio site built with Gatsby and GraphQL' },
  { id: 5, title: 'Recipe Finder', description: 'A web app that helps users discover new recipes using an external API' },
  { id: 6, title: 'Chat Application', description: 'Real-time chat app built with Socket.io and Express' },
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Card key={project.id} className="neubrutalism hover:translate-x-1 hover:translate-y-1 transition-transform">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}