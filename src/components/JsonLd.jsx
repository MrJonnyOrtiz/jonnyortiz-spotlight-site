export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jonny Ortiz',
    url: 'https://jonnyortiz.com',
    jobTitle: 'Senior Program Manager & Retail Consultant',
    worksFor: { '@type': 'Organization', name: 'Cloud Realm LLC' },
    sameAs: [
      'https://www.linkedin.com/in/jonny-ortiz',
      'https://github.com/MrJonnyOrtiz',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
