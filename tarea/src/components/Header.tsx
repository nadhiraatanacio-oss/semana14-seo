'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalInfo } from '@/lib/data';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/about', label: 'Sobre Mí' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="shape-mint bg-[length:200%_100%] py-1.5 text-center text-xs font-semibold text-ink sm:text-sm">
        Abierta a prácticas y proyectos freelance · {personalInfo.location}
      </div>
      <nav className="bg-ink/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-4">
          <Link href="/" className="group flex items-center gap-2 font-display text-xl font-extrabold text-white sm:text-2xl">
            <span className="shape-mint inline-block h-6 w-6 rounded-full rounded-br-none" />
            <span className="sm:hidden">{personalInfo.name.split(' ')[0]}</span>
            <span className="hidden sm:inline">{personalInfo.name}</span>
          </Link>
          <ul className="flex items-center gap-3 whitespace-nowrap text-sm sm:gap-7 sm:text-base">
            {links.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <li key={link.href} className={link.href === '/' ? 'hidden sm:block' : undefined}>
                  <Link
                    href={link.href}
                    className={`group relative inline-block py-2 font-medium transition-colors ${
 active ? 'text-white' : 'text-white/70 hover:text-white'
 }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-rose ${
 active ? 'w-full' : 'w-0'
 }`}
                    />
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-gold px-3 py-2 font-semibold text-ink transition hover:bg-white sm:px-4"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
