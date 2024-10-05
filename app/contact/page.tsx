import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 neu-text-outline">Contact Me</h1>
      <ContactForm />
    </div>
  );
}