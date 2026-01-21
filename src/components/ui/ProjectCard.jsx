import Image from 'next/image';
import Link from 'next/link';
import Badge from './Badge';

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        {project.image && (
          <div className="relative w-full h-40 sm:h-48">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 flex-1">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags?.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
