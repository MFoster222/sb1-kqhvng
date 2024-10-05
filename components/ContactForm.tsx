"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold mb-8 text-center neu-text-outline">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="neubrutalism neu-bg-yellow text-black placeholder-black"
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="neubrutalism neu-bg-blue text-black placeholder-black"
          />
        </div>
        <div className="mb-4">
          <Textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="neubrutalism neu-bg-pink text-black placeholder-black"
          />
        </div>
        <Button type="submit" className="w-full neubrutalism neu-bg-yellow text-black text-lg">Send Message</Button>
      </form>
    </section>
  );
}