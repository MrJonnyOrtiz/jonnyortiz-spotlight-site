import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

function SocialLink({ className, href, children, icon: Icon }) {
  if (!Icon) return null
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    "I'm Jonny Ortiz. I fix broken systems of work and solve the messy middle.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <div className="rounded-2xl border border-zinc-100 bg-white/50 p-6 shadow-sm ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur dark:border-zinc-700/40 dark:bg-zinc-800/30">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                What I’m known for
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Untangling bottlenecks
                  </strong>
                  <span className="text-zinc-600 dark:text-zinc-400"> — </span>
                  Turning cross-functional friction into a clear path forward.
                </li>
                <li>
                  <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Systems thinking
                  </strong>
                  <span className="text-zinc-600 dark:text-zinc-400"> — </span>
                  Modernizing workflows without breaking downstream
                  dependencies.
                </li>
                <li>
                  <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Delivery flow
                  </strong>
                  <span className="text-zinc-600 dark:text-zinc-400"> — </span>
                  Sequencing work into incremental releases that reduce risk.
                </li>
                <li>
                  <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Adoption + outcomes
                  </strong>
                  <span className="text-zinc-600 dark:text-zinc-400"> — </span>
                  Building alignment, metrics, and habits so change sticks.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I fix broken systems of work and solve the messy middle.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a New York-based Senior Program Manager with a track
              record of leading cross-functional programs that modernize
              operations, especially where legacy tech, misaligned incentives,
              or manual processes slow teams down.
            </p>

            <p>
              I thrive in the gray area: translating business reality into clear
              requirements, aligning stakeholders, sequencing delivery, and
              driving adoption so new capabilities actually stick. I&apos;ve led
              initiatives spanning workflow redesign, vendor onboarding
              automation, delivery flow stabilization, and scaled data
              integrations (EDI).
            </p>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              How I work
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <strong>Diagnose the friction:</strong> I don&apos;t guess. I
                use direct observation, time-and-motion studies, and data to
                find where work actually stalls, not just where people say it
                does.
              </li>
              <li>
                <strong>Architect for alignment:</strong> I clarify the "who
                does what" by defining decision rights and handoffs early,
                ensuring incentives drive the right behaviors across teams.
              </li>
              <li>
                <strong>De-risk through iteration:</strong> I ship in
                incremental "slices." This allows us to gather real-world
                feedback, adjust the system, and build momentum without the "big
                bang" failure risk.
              </li>
              <li>
                <strong>Lock in the gains:</strong> A process isn&apos;t fixed
                until it&apos;s adopted. I build the KPIs and feedback loops
                that ensure new systems of work become the permanent standard.
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/MrJonnyOrtiz"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/jonny-ortiz"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:mr.jonny.ortiz@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              mr.jonny.ortiz@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
