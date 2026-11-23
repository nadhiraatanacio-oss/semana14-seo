import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/projects"
        className="group mb-6 inline-flex items-center gap-2 font-semibold text-forest"
      >
        <span className="">←</span> Volver a Proyectos
      </Link>

      <article>
        <h1 className="font-serif text-5xl md:text-6xl font-light text-ink mb-6">
          {project.title}
        </h1>

        <div className="relative w-full h-96 mb-8 rounded-md overflow-hidden shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        <p className="text-lg text-ink/75 mb-8 max-w-3xl">
          {project.description}
        </p>

        <div className="mb-8">
          <h2 className="font-serif text-3xl font-light text-ink mb-4">Tecnologías Utilizadas</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={tech}
                className={`px-4 py-1.5 rounded text-sm font-semibold transition ${
 ['bg-forest text-white', 'bg-mint text-ink', 'bg-gold text-ink', 'bg-ink text-white'][i % 4]
 }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gold px-7 py-3 font-semibold text-ink transition hover:bg-mint"
            >
              Ver Demo ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-ink px-7 py-3 font-semibold text-white transition hover:bg-forest"
            >
              Ver Código ↗
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
