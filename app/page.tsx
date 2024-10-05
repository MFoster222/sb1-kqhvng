import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { ArrowRight } from 'lucide-react';
import FeaturedProjects from '@/components/FeaturedProjects';
import LatestBlogPosts from '@/components/LatestBlogPosts';

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold mb-6 neu-text-outline">Web Developer Portfolio</h1>
        <p className="text-xl mb-8 neu-bg-yellow inline-block px-4 py-2 neubrutalism">Crafting beautiful and functional web experiences</p>
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
          alt="Developer"
          width={200}
          height={200}
          className="rounded-full mb-8 neubrutalism"
        />
        <Button asChild className="neubrutalism neu-bg-blue text-black text-lg">
          <Link href="/projects">View Projects <ArrowRight className="ml-2" /></Link>
        </Button>
      </section>

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Latest Blog Posts Section */}
      <LatestBlogPosts />

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}