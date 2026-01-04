import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

// import { getAllArticles } from '@/lib/articles'
// import { formatDate } from '@/lib/formatDate'

// Contact information constants
const CONTACT_INFO = {
  email: 'mr.jonny.ortiz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jonny-ortiz',
  github: 'https://github.com/MrJonnyOrtiz',
}

// Current year for resume
const CURRENT_YEAR = new Date().getFullYear().toString()

const highlights = [
  {
    title: 'Enterprise platform modernization',
    description:
      'Redesigned item and order creation workflows to reduce friction, improve data integrity at the source, and drive adoption during a core system modernization.',
    href: '/projects#workflow-redesign',
  },
  {
    title: 'Vendor onboarding transformation',
    description:
      'Aligned Legal, Compliance, Finance, Ops, and IT into a repeatable intake engine reducing delays and creating scalable enablement.',
    href: '/projects#vendor-onboarding',
  },
  {
    title: 'Delivery flow stabilization',
    description:
      'Smoothed inbound volume by aligning buying behavior with DC capacity through week-based scheduling and exception reporting.',
    href: '/projects#dc-flow',
  },
]

const tiles = [
  { label: 'Ops modernization', sub: 'Workflow redesign + adoption' },
  { label: 'Cross-functional intake', sub: 'Vendor onboarding engine' },
  { label: 'Flow stabilization', sub: 'Capacity + predictability' },
  { label: 'EDI enablement', sub: 'Partner onboarding + governance' },
  { label: 'Technical fluency', sub: 'AWS + CI/CD context' },
]

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

// function Article({ article }) {
//   return (
//     <Card as="article">
//       <Card.Title href={`/articles/${article.slug}`}>
//         {article.title}
//       </Card.Title>
//       <Card.Eyebrow as="time" dateTime={article.date} decorate>
//         {formatDate(article.date)}
//       </Card.Eyebrow>
//       <Card.Description>{article.description}</Card.Description>
//       <Card.Cta>Read article</Card.Cta>
//     </Card>
//   )
// }

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

// function Newsletter() {
//   return (
//     <form
//       action="/thank-you"
//       className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
//     >
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <MailIcon className="h-6 w-6 flex-none" />
//         <span className="ml-3">Stay up to date</span>
//       </h2>
//       <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//         Get notified when I publish something new, and unsubscribe at any time.
//       </p>
//       <div className="mt-6 flex items-center">
//         <span className="flex min-w-0 flex-auto p-px">
//           <input
//             type="email"
//             placeholder="Email address"
//             aria-label="Email address"
//             required
//             className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
//           />
//         </span>
//         <Button type="submit" className="ml-4 flex-none">
//           Join
//         </Button>
//       </div>
//     </form>
//   )
// }

function Contact() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 lg:p-8 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Contact</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        The best way to reach me is via email or LinkedIn.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <Button
          href={`mailto:${CONTACT_INFO.email}`}
          variant="secondary"
          className="max-w-full"
        >
          Email me
        </Button>
        <Button
          href={CONTACT_INFO.linkedin}
          variant="secondary"
          className="max-w-full"
        >
          Connect on LinkedIn
        </Button>
      </div>
    </div>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start?.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start?.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end?.label
  let endDate = typeof role.end === 'string' ? role.end : role.end?.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
          {role.initials}
        </span>
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  const resume = [
    {
      company: 'Cloud Realm LLC',
      title: 'Founder / Fractional CIO / Consultant',
      start: '2021',
      initials: 'CR',
      end: { label: 'Present', dateTime: CURRENT_YEAR },
    },
    {
      company: 'State College of Florida (SCF)',
      title: 'AWS Cloud Computing & Cybersecurity Instructor (Adjunct)',
      initials: 'SCF',
      start: '2022',
      end: '2025',
    },
    {
      company: 'Bealls, Inc.',
      title: 'DVP, Merchandise Process & Analytics (Enterprise Programs)',
      initials: 'BI',
      start: '2005',
      end: '2020',
    },
    {
      company: "Reebok Int'l Ltd.",
      title: 'Program Manager, EDI',
      initials: 'RIL',
      start: '2001',
      end: '2005',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role) => (
          <Role key={`${role.initials}-${role.start}`} role={role} />
        ))}
      </ol>
      <Button
        href="/JOResume.pdf"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Highlight({ title, description, href }) {
  return (
    <Card as="article">
      <Card.Title href={href}>{title}</Card.Title>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>View details</Card.Cta>
    </Card>
  )
}

function FocusTiles() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className="rounded-2xl border border-zinc-100 bg-white/50 p-5 shadow-sm ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur dark:border-zinc-700/40 dark:bg-zinc-800/30"
          >
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {tile.label}
            </div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {tile.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  // let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Jonny Ortiz, Senior Program Manager driving digital
            modernization and cross-functional delivery.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I lead complex initiatives across technical and business teams,
            turning stalled, high-friction processes into scalable systems with
            measurable outcomes.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <strong>Operational Scale:</strong> Modernized core merchandising
              workflows for multi-category catalogs, replacing manual handoffs
              with a streamlined UX that ensured data integrity at the source.
            </li>
            <li>
              <strong>Cross-Functional Velocity:</strong> Designed a unified
              onboarding framework that bridged historically siloed departments,
              removing bottlenecks for new vendor enrollment to accelerate
              time-to-market and reduce order submission time.
            </li>
            <li>
              <strong>Supply Chain Stability:</strong> Stabilized distribution
              center intake by aligning buyer behavior with warehouse capacity,
              smoothing out the "bullwhip effect" in the delivery flow.
            </li>
          </ul>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/MrJonnyOrtiz"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/jonny-ortiz"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <FocusTiles />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <div className="space-y-6">
              <h2 className="text-sm font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-100">
                Strategic Impact
              </h2>
              <div className="space-y-8">
                {highlights.map((item) => (
                  <Highlight
                    key={item.href}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Contact />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
