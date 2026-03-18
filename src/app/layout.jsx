import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import JsonLd from '@/components/JsonLd'
import Script from 'next/script'

import '@/styles/tailwind.css'

export const metadata = {
  metadataBase: new URL('https://jonnyortiz.com'),
  title: {
    template: '%s - Jonny Ortiz',
    default: 'Jonny Ortiz - Program Manager & Retail Consultant',
  },
  description:
    'I’m Jonny Ortiz, a Senior Program Manager & Retail Consultant based in New York City. I fix broken systems of work and solve the messy middle.',
  openGraph: {
    title: 'Jonny Ortiz - Program Manager & Retail Consultant',
    description:
      'Senior Program Manager & Retail Consultant. I fix broken systems of work and solve the messy middle.',
    url: 'https://jonnyortiz.com',
    siteName: 'Jonny Ortiz',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jonny Ortiz - Program Manager & Retail Consultant',
    description:
      'Senior Program Manager & Retail Consultant. I fix broken systems of work and solve the messy middle.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <JsonLd />
        <Script
          src="https://cdn.usefathom.com/script.js"
          data-site="NVKSJQFV"
          defer
          strategy="afterInteractive"
        />
      </head>
      <body
        className="flex h-full bg-zinc-50 dark:bg-black"
        suppressHydrationWarning
      >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
