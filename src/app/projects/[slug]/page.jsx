import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Dikshya Khanal`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/projects" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Projects
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags?.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {project.image && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-xl">{project.description}</p>
          {project.longDescription && <p>{project.longDescription}</p>}
        </div>

        <div className="flex gap-4 mb-12">
          {project.liveUrl && (
            <Button href={project.liveUrl} target="_blank">
              View Live Site
            </Button>
          )}
          {project.githubUrl && (
            <Button href={project.githubUrl} target="_blank" variant="secondary">
              View Code
            </Button>
          )}
        </div>

        {project.features && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
