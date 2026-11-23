import { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const skills = [
    'JavaScript/TypeScript',
    'React & Next.js',
    'Node.js & Express',
    'PostgreSQL & MongoDB',
    'Tailwind CSS',
    'Git & GitHub',
    'Figma',
    'Vercel',
  ];

  return (
    <div className="container mx-auto px-4">
      <section className="full-bleed bg-ink text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-serif text-5xl font-light md:text-6xl mb-12">
              Sobre <span className="font-display font-extrabold text-gold">Mí</span>
            </h1>

            <div className="grid md:grid-cols-3 gap-10 items-center">
              <div className="md:col-span-1">
                <div className="relative mx-auto aspect-square w-full max-w-xs">
                  <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-gold" />
                  <div className="relative h-full w-full overflow-hidden rounded-[2rem] border-4 border-mint">
                    <Image
                      src={personalInfo.avatar}
                      alt={`Foto de perfil de ${personalInfo.name}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <h2 className="font-display text-3xl font-bold text-mint mb-4">
                  ¡Hola! Soy {personalInfo.name}
                </h2>
                <div className="text-lg text-white/80 space-y-4">
                  <p>
                    Soy desarrolladora full stack y me apasiona crear experiencias web
                    que se sientan rápidas y agradables de usar. Me gusta entender el
                    problema antes de escribir la primera línea de código.
                  </p>
                  <p>
                    Trabajo con React y Next.js en el frontend, Node.js en el backend y
                    bases de datos SQL y NoSQL, cuidando siempre el rendimiento, la
                    accesibilidad y el SEO.
                  </p>
                  <p>
                    Cuando no estoy programando, me gusta diseñar interfaces, aprender
                    tecnologías nuevas y compartir lo que aprendo con otros estudiantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section con lazy loading implícito */}
      <section className="full-bleed bg-forest text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div>
              <h2 className="text-center font-serif text-4xl font-light md:text-5xl mb-12">Habilidades Técnicas</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill}>
                  <div className="group h-full rounded-md bg-cream p-5 text-center shadow-lg transition hover:bg-gold">
                    <span aria-hidden className="shape-mint mx-auto mb-3 block h-8 w-8 rounded-full rounded-br-none" />
                    <p className="font-semibold text-ink">{skill}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
