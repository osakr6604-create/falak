import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Falak — Tools that move Egypt forward',
    short_name: 'Falak',
    description:
      'A growing suite of products built for Egyptian shop owners, job seekers, and workers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050A18',
    theme_color: '#7c3aed',
    lang: 'en',
    categories: ['business', 'productivity'],
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  }
}
