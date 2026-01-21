import { experience } from '@/data/experience';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

export default function Experience() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-900" id="experience">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
            Work Experience
          </h2>
        </ScrollAnimation>

        <div className="space-y-6 sm:space-y-8">
          {experience.map((job, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">{job.position}</h3>
                    <p className="text-sm sm:text-base text-blue-600 font-semibold">{job.company}</p>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    {job.period}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {job.description}
                </p>
                {job.achievements && (
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
