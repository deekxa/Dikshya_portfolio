import Image from 'next/image';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4" id="about">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
            About Me
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <ScrollAnimation>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Dikshya Khanal"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">Hello! I'm Dikshya Khanal</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate Frontend Developer with 1+ year of professional experience building 
                scalable e-commerce platforms, educational CMS systems, and interactive web applications. 
                I specialize in React, Next.js, TypeScript, and Tailwind CSS with expert-level knowledge 
                of advanced animations using Framer Motion and GSAP.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                My goal is to deliver production-grade solutions with strong focus on accessibility, 
                performance optimization, and seamless API integration. I'm committed to writing clean, 
                maintainable code and creating exceptional user experiences that make a difference.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new web technologies, contributing to 
                projects, and continuously learning to stay current with the latest frontend development 
                trends. I thrive in collaborative team environments and love solving complex problems.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
