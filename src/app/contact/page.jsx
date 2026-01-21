import Contact from '@/components/sections/Contact';

export const metadata = {
  title: 'Contact - Dikshya Khanal',
  description: 'Get in touch with me for frontend development opportunities and collaborations',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20">
      <Contact />
    </main>
  );
}
