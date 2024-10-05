import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-6xl font-bold mb-4">Hi, I'm John Doe</h1>
      <p className="text-2xl mb-8">Full-stack Web Developer</p>
      <Button asChild className="neubrutalism text-lg px-8 py-4">
        <Link href="/projects">View My Work</Link>
      </Button>
    </section>
  );
}