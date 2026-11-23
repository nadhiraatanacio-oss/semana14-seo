import { personalInfo } from '@/lib/data';

export default function Footer() {
  const links = [
    { href: personalInfo.github, label: 'GitHub', external: true },
    { href: personalInfo.linkedin, label: 'LinkedIn', external: true },
    { href: `mailto:${personalInfo.email}`, label: 'Email', external: false },
  ];

  return (
    <footer className="bg-ink text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-white/70">
            © {new Date().getFullYear()} {personalInfo.name}. Hecho con{' '}
            <span className="inline-block text-rose">♥</span> en {personalInfo.location}.
          </p>
          <div className="flex gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-mint hover:text-mint"
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
