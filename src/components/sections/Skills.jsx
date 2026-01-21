import { skills } from '@/data/skills';
import Badge from '@/components/ui/Badge';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

export default function Skills() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-900" id="skills">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
            Skills & Technologies
          </h2>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skills.map((category, index) => (
            <ScrollAnimation key={category.category} delay={index * 100}>
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
