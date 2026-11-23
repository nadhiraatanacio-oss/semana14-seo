import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora los proyectos web de Alejandra Atanacio desarrollados con Next.js, React y Node.js.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Proyectos - Alejandra Atanacio',
    description: 'Proyectos web desarrollados con Next.js, React y Node.js',
  },
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4">
      <section className="full-bleed bg-ink text-white">
        <div className="container mx-auto px-4 py-16">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-mint">Portafolio</p>
          <h1 className="mt-3 font-serif text-5xl font-light md:text-6xl">
            Mis <span className="font-display font-extrabold text-gold">Proyectos</span>
          </h1>
          <p className="mt-4 text-lg text-white/75">
            Una colección de proyectos en los que he trabajado
          </p>
        </div>
      </section>

      <h2 className="sr-only">Lista de proyectos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-14">
        {projects.map((project, i) =>
          i < 3 ? (
            <div key={project.slug} className="">
              <ProjectCard project={project} />
            </div>
          ) : (
            <div key={project.slug}>
              <ProjectCard project={project} />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
