import Projects from '@/components/sections/Projects';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Projects - Dikshya Khanal',
  description: 'Browse my portfolio of web development projects including e-commerce, CMS, and POS systems',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">My Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Here are some of my recent works and side projects
        </p>
        <Projects />
      </div>
    </main>
  );
}
