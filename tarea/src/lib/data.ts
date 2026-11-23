import { Project } from '@/types';

const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

export const projects: Project[] = [
  {
    slug: 'medicita',
    title: 'MediCita',
    description:
      'Sistema de reserva de citas médicas con calendario por especialidad, recordatorios por correo y panel para recepción.',
    image: '/images/medicita.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth'],
    demoUrl: 'https://medicita-demo.vercel.app',
    githubUrl: 'https://github.com/tuusuario/medicita',
    featured: true,
  },
  {
    slug: 'stockflow',
    title: 'StockFlow',
    description:
      'Control de inventario para minimarkets: entradas, salidas, alertas de stock mínimo y reportes mensuales en PDF.',
    image: '/images/stockflow.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MySQL'],
    githubUrl: 'https://github.com/tuusuario/stockflow',
    featured: true,
  },
  {
    slug: 'fintra',
    title: 'Fintra',
    description:
      'Dashboard de finanzas personales que clasifica gastos, muestra tendencias del mes y ayuda a cumplir metas de ahorro.',
    image: '/images/fintra.jpg',
    technologies: ['Next.js', 'Recharts', 'Supabase', 'Tailwind'],
    demoUrl: 'https://fintra-demo.vercel.app',
    githubUrl: 'https://github.com/tuusuario/fintra',
    featured: true,
  },
  {
    slug: 'ecoruta',
    title: 'EcoRuta',
    description:
      'Mapa colaborativo de puntos de reciclaje con filtros por tipo de residuo y la ruta al punto más cercano.',
    image: '/images/ecoruta.jpg',
    technologies: ['React', 'Leaflet', 'MongoDB'],
    githubUrl: 'https://github.com/tuusuario/ecoruta',
    featured: false,
  },
];

export const personalInfo = {
  name: 'Alejandra Atanacio',
  title: 'Full Stack Developer',
  description:
    'Me encanta convertir ideas en aplicaciones web rápidas, bonitas y fáciles de usar.',
  location: 'Lima, Perú',
  email: 'tucorreo@ejemplo.com',
  github: 'https://github.com/tuusuario',
  linkedin: 'https://linkedin.com/in/tuusuario',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? productionUrl,
  avatar: '/images/avatar.jpg',
};
