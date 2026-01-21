import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

export default function Projects() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4" id="projects">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12">
            Here are some of my recent works
          </p>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.slug} delay={index * 100}>
              <ProjectCard project={project} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
