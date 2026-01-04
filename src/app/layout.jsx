import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import Script from 'next/script'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Jonny Ortiz',
    default: 'Jonny Ortiz - Program Manager',
  },
  description:
    'I’m Jonny Ortiz, a Senior Program Manager based in New York City. I fix broken systems of work and solve the messy middle.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <Script
          src="https://cdn.usefathom.com/script.js"
          data-site="NVKSJQFV"
          defer
          strategy="afterInteractive"
        />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
