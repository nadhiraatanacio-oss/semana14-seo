import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const stack = ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Prisma', 'Figma', 'Git'];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: personalInfo.siteUrl,
    sameAs: [personalInfo.github, personalInfo.linkedin],
  };

  return (
    <div className="container mx-auto px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="full-bleed bg-ink text-white bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:22px_22px]">
        <div className="container mx-auto grid items-center gap-14 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wide text-mint">
              {personalInfo.title}
            </p>
            <h1 className="mt-5 font-serif text-5xl font-light leading-[1.1] md:text-6xl">
              Hola, soy{' '}
              <span className="font-display font-extrabold text-gold">{personalInfo.name}</span>
            </h1>
            <p className="mt-5 font-display text-2xl font-semibold text-white min-h-[2.25rem]">
              {personalInfo.title}
            </p>
            <p className="mt-5 max-w-lg text-lg text-white/75">
              {personalInfo.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-lg bg-gold px-7 py-3 font-semibold text-ink transition hover:bg-white"
              >
                Ver Proyectos
              </Link>
              <Link
                href="/about"
                className="rounded-lg border border-white/30 px-7 py-3 font-semibold text-white transition hover:border-mint hover:text-mint"
              >
                Sobre Mí
              </Link>
            </div>
          </div>

          <div className="relative order-first mx-auto aspect-square w-full max-w-[16rem] sm:max-w-xs md:order-none md:max-w-sm">
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-gold" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border-4 border-mint">
              <Image
                src={personalInfo.avatar}
                alt={`Foto de perfil de ${personalInfo.name}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 70vw, 384px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <div className="full-bleed overflow-hidden bg-mint py-3">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-1 px-4">
          {stack.map((tech) => (
            <li key={tech} className="font-display text-lg font-bold text-ink">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Featured Projects */}
      <section className="full-bleed bg-forest text-white">
        <div className="container mx-auto px-4 py-20">
          <div>
            <h2 className="mx-auto max-w-2xl text-center font-serif text-4xl font-light leading-tight md:text-5xl">
              Proyectos Destacados
            </h2>
            <p className="mx-auto mt-4 mb-14 max-w-xl text-center text-white/75">
              Algunas aplicaciones que diseñé y desarrollé, desde la idea hasta el despliegue.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 lg:items-center">
            {featuredProjects.map((project, i) => (
              <div key={project.slug} className={i === 1 ? ' ' : ''}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
