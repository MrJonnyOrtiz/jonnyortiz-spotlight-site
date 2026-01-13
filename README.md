# Jonny Ortiz Portfolio

Personal portfolio website built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com), based on the Spotlight template from [Tailwind Plus](https://tailwindcss.com/plus).

## Prerequisites

- Node.js v16 or higher
- AWS CLI

## Getting started

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```
NEXT_PUBLIC_SITE_URL=https://jonnyortiz.com
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Static Export Modifications

This portfolio has been modified from the original Spotlight template for static deployment:

- **Static export enabled** - `output: 'export'` in next.config.mjs
- **Image optimization disabled** - For S3/CloudFront compatibility
- **Client-side components** - Added `'use client'` directives where needed
- **Articles system disabled** - Moved to `_disabled/` folder
- **Analytics integration** - Client-side Fathom tracking

These changes enable deployment to AWS S3 as a fully static site with CDN caching.

## Development

The site uses Next.js static export for deployment to AWS S3/CloudFront. Edit this template by modifying the files in the `/src` folder. Key files:

`/src/app/` - App Router pages and layouts

`/src/components/` - Reusable React components

`/src/images/` - Static images and assets

`/public/` - Public assets (resume PDF, etc.)

## Project Status

Status: ✅ Live & Maintained
Launch Date: January 5, 2025
Current Version: Production-ready personal portfolio

Features:

✅ Responsive design with dark/light theme

✅ Project showcase with case studies

✅ About page with professional background

✅ Toolkit/skills documentation

✅ Contact integration with analytics

✅ Resume download functionality

✅ AWS S3/CloudFront deployment

Maintenance: Active - Regular content updates and improvements as needed.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Tech Stack

- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Next.js](https://nextjs.org/docs) - React framework with static export
- [Headless UI](https://headlessui.dev) - Unstyled accessible UI components
- [MDX](https://mdxjs.com) - Markdown with JSX components

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).
