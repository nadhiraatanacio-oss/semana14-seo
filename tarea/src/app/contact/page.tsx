import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name} para proyectos web, colaboraciones o prácticas profesionales.`,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contacto - ${personalInfo.name}`,
    description: 'Escríbeme para proyectos web, colaboraciones o prácticas profesionales.',
  },
};

export default function ContactPage() {
  const channels = [
    { label: 'Correo', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: '@' },
    { label: 'LinkedIn', value: 'Ver perfil', href: personalInfo.linkedin, icon: 'in' },
    { label: 'GitHub', value: 'Ver repositorios', href: personalInfo.github, icon: '</>' },
  ];

  return (
    <div className="container mx-auto px-4">
      <section className="full-bleed bg-ink text-white">
        <div className="container mx-auto px-4 pt-16 pb-40">
          <div className="max-w-5xl mx-auto">
            <p className="font-display text-sm font-bold uppercase tracking-wide text-mint">Contacto</p>
            <h1 className="mt-3 font-serif text-5xl font-light md:text-6xl">
              Hablemos de tu <span className="font-display font-extrabold text-gold">proyecto</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              ¿Tienes una idea, una propuesta de trabajo o quieres colaborar? Déjame un
              mensaje y te responderé lo antes posible.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto -mt-28 mb-16 grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2 space-y-4">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 rounded-md bg-white p-5 shadow-lg transition hover:shadow-2xl"
            >
              <span
                aria-hidden
                className="shape-mint grid h-12 w-12 shrink-0 place-items-center rounded-full rounded-br-none font-display text-lg font-extrabold text-ink"
              >
                {channel.icon}
              </span>
              <span>
                <span className="block font-display text-lg font-bold text-ink">{channel.label}</span>
                <span className="block text-ink/70">{channel.value}</span>
              </span>
            </a>
          ))}
          <p className="pt-2 text-ink/70">Desde {personalInfo.location}</p>
        </div>

        <section
          aria-labelledby="form-title"
          className="md:col-span-3 rounded-md bg-white p-6 sm:p-8 shadow-2xl"
        >
          <h2 id="form-title" className="font-serif text-3xl font-light text-ink mb-6">
            Envíame un mensaje
          </h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
