import Button from '@/components/ui/Button';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <ScrollAnimation>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600">Dikshya Khanal</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-8">
            Frontend Developer | React & Next.js Specialist | UI/UX Expert
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto px-4">
            Passionate about building scalable e-commerce platforms, educational CMS systems, 
            and interactive web applications. Specialized in React, Next.js, TypeScript, and 
            Tailwind CSS with 1+ year of professional experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center px-4">
            <Button href="/projects">
              View My Work
            </Button>
            <Button href="/contact" variant="secondary">
              Get In Touch
            </Button>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
