// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'AX STUDIOS | Desarrollo y Comunidad Tech',
  description: 'Equipo de desarrollo innovador enfocado en tecnología avanzada y comunidades digitales. Unite a AX STUDIOS en Discord.',
  keywords: 'desarrollo, comunidad discord, bots, automatización, tecnología',
  openGraph: {
    title: 'AX STUDIOS | Desarrollo y Comunidad Tech',
    description: 'Equipo de desarrollo innovador enfocado en tecnología avanzada y comunidades digitales.',
    url: 'https://axstudios.vercel.app',
    siteName: 'AX STUDIOS',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AX STUDIOS | Desarrollo y Comunidad Tech',
    description: 'Equipo de desarrollo innovador enfocado en tecnología avanzada.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-black text-white`}>
        <Navbar />
        <main className="relative overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  )
}