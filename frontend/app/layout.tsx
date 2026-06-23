// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../lib/i18n/LanguageProvider';
import NavbarComponent from '../components/layouts/navbarComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Practice Hooks',
  description: 'Proyecto que incluye la arquitectura basica para reutilización en los aplicativos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className=''>
      <body className={inter.className}>
        <LanguageProvider>
          <NavbarComponent />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}