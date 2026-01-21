import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';

export const metadata = {
  title: 'About - Dikshya Khanal',
  description: 'Learn more about my background, skills, and experience as a Frontend Developer',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <About />
      <Skills />
    </main>
  );
}
