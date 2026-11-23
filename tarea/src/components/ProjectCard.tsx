import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col bg-cream rounded-md overflow-hidden shadow-lg transition hover:shadow-2xl"
    >
      <div className="relative h-52 overflow-hidden">
        {/* Imágenes con lazy loading */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex grow flex-col p-6">
        <h3 className="font-serif text-3xl font-light text-ink mb-2">
          {project.title}
        </h3>
        <p className="text-ink/70 mb-5 line-clamp-2">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs font-semibold bg-forest/10 text-forest px-3 py-1 rounded">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs font-semibold bg-gold/40 text-ink px-3 py-1 rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
