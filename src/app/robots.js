export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/impact/'],
      },
    ],
    sitemap: 'https://jonnyortiz.com/sitemap.xml',
  }
}
