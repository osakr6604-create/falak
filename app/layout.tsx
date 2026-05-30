import type { Metadata } from 'next'
import { Inter, Tajawal } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
})

const APP_URL = 'https://falakeg.com'

const DESCRIPTION =
  'Falak builds practical software for Egypt — Waslny (WhatsApp order management for shops), CV Architect (Arabic & English CVs for Gulf jobs), and TYT (a local task marketplace).'

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: 'Falak — Tools that move Egypt forward',
    template: '%s · Falak',
  },
  description: DESCRIPTION,
  applicationName: 'Falak',
  keywords: [
    'Falak',
    'فلك',
    'Egypt SaaS',
    'Waslny',
    'CV Architect',
    'TYT',
    'marketplace Egypt',
    'order management',
    'Arabic CV',
  ],
  authors: [{ name: 'Falak' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Falak',
    title: 'Falak — Tools that move Egypt forward',
    description: DESCRIPTION,
    url: APP_URL,
    locale: 'en_US',
    alternateLocale: 'ar_EG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Falak — Tools that move Egypt forward',
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Falak',
  alternateName: 'فلك',
  url: APP_URL,
  description: DESCRIPTION,
  email: 'contact@falakeg.com',
  areaServed: 'EG',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${tajawal.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
