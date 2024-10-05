"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">DevPortfolio</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Button variant="ghost" asChild><Link href="/">Home</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/projects">Projects</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/skills">Skills</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/blog">Blog</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/contact">Contact</Link></Button></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><Button variant="ghost" asChild onClick={toggleMenu}><Link href="/">Home</Link></Button></li>
            <li><Button variant="ghost" asChild onClick={toggleMenu}><Link href="/projects">Projects</Link></Button></li>
            <li><Button variant="ghost" asChild onClick={toggleMenu}><Link href="/skills">Skills</Link></Button></li>
            <li><Button variant="ghost" asChild onClick={toggleMenu}><Link href="/blog">Blog</Link></Button></li>
            <li><Button variant="ghost" asChild onClick={toggleMenu}><Link href="/contact">Contact</Link></Button></li>
          </ul>
        </nav>
      )}
    </header>
  );
}