import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { personalInfo } from '@/lib/data';

const dmSans = localFont({
  src: './fonts/DMSans.woff2',
  weight: '400 700',
  display: 'swap',
  variable: '--font-dm-sans',
});

const fraunces = localFont({
  src: './fonts/Fraunces.woff2',
  weight: '300 800',
  display: 'swap',
  variable: '--font-fraunces',
});

const bricolage = localFont({
  src: './fonts/Bricolage.woff2',
  weight: '400 800',
  display: 'swap',
  variable: '--font-bricolage',
});

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.description,
  keywords: [
    'desarrolladora web',
    'full stack',
    'next.js',
    'react',
    'typescript',
    'portafolio',
    'Perú',
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: personalInfo.siteUrl,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    siteName: personalInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    creator: '@tuusuario',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${bricolage.variable} ${fraunces.variable}`}>
      <body className="flex flex-col min-h-screen antialiased">
        <Header />
        <main className="grow overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
