export const dynamic = 'force-static'

export default function sitemap() {
  const baseUrl = 'https://jonnyortiz.com'

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/uses`, lastModified: new Date(), priority: 0.5 },
  ]
}
