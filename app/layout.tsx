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

export const metadata: Metadata = {
  title: 'Falak — Tools that move Egypt forward',
  description:
    'A growing suite of products built for Egyptian shop owners, job seekers, and workers.',
  keywords: ['Egypt', 'SaaS', 'marketplace', 'CV builder', 'order management', 'Arabic'],
  openGraph: {
    title: 'Falak — Tools that move Egypt forward',
    description:
      'A growing suite of products built for Egyptian shop owners, job seekers, and workers.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${tajawal.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
