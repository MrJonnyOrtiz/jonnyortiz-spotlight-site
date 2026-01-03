import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

function WorkflowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path
        d="M7 7h10M7 12h10M7 17h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5.5 4.5h13A2 2 0 0 1 20.5 6.5v11A2 2 0 0 1 18.5 19.5h-13A2 2 0 0 1 3.5 17.5v-11A2 2 0 0 1 5.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function PeopleGearIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path
        d="M9 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2.5 19.5c.7-3.2 3-5 5.5-5s4.8 1.8 5.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.5 10.5a3 3 0 1 0-3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.8 20a5.2 5.2 0 0 1 8.2-4.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18.2 14.2l.4 1.1a6 6 0 0 1 1.3.5l1-.6.9.9-.6 1a6 6 0 0 1 .5 1.3l1.1.4v1.2l-1.1.4a6 6 0 0 1-.5 1.3l.6 1-.9.9-1-.6a6 6 0 0 1-1.3.5l-.4 1.1h-1.2l-.4-1.1a6 6 0 0 1-1.3-.5l-1 .6-.9-.9.6-1a6 6 0 0 1-.5-1.3l-1.1-.4v-1.2l1.1-.4a6 6 0 0 1 .5-1.3l-.6-1 .9-.9 1 .6a6 6 0 0 1 1.3-.5l.4-1.1h1.2Z"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  )
}

function TruckFlowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path d="M3.5 7.5h11v8h-11v-8Z" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14.5 10.5h3.8l2.2 2.4v2.6h-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M18.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3.5 15.5h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PlugIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path
        d="M9 7V4M15 7V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 8.5h10v3a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5v-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 16.5V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const projects = [
  {
    name: 'Enterprise Platform Modernization',
    description:
      'Led a UX + process redesign during a core merchandising system modernization, removing friction in item/order creation and accelerating adoption across merchant teams.',
    link: { href: '/projects#workflow-redesign', label: 'Case study' },
    icon: WorkflowIcon,
  },
  {
    name: 'Cross-Functional Vendor Engine',
    description:
      'Designed a scalable enrollment framework bridging multiple departments. Eliminated silos to accelerate vendor time-to-market and reduced order submission time.',
    link: { href: '/projects#vendor-onboarding', label: 'Case study' },
    icon: PeopleGearIcon,
  },
  {
    name: 'Logistics Flow & Capacity Alignment',
    description:
      'Smoothed inbound delivery variability by aligning buyer behavior with warehouse capacity, instituting week-based scheduling + exception reporting, reducing bottlenecks and improving predictability for Distribution Center operations.',
    link: { href: '/projects#dc-flow', label: 'Case study' },
    icon: TruckFlowIcon,
  },
  {
    name: 'EDI Expansion & Trading Partner Enablement',
    description:
      'Expanded EDI adoption by standardizing partner onboarding and resolving data/process gaps, improving accuracy and throughput across the vendor-to-store value chain.',
    link: { href: '/projects#edi', label: 'Case study' },
    icon: PlugIcon,
  },
]

export const metadata = {
  title: 'Work',
  description:
    'A few examples of programs I’ve led—focused on execution, stakeholder alignment, and measurable operational outcomes.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Work"
      intro="A few examples of programs I’ve led focused on execution, stakeholder alignment, and measurable operational outcomes."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <project.icon className="h-6 w-6 text-zinc-400 dark:text-zinc-500" />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <Card.Cta>{project.link.label}</Card.Cta>
          </Card>
        ))}
      </ul>

      <div className="mt-16 space-y-16">
        <section
          id="workflow-redesign"
          className="scroll-mt-24 border-t border-zinc-100 pt-12 dark:border-zinc-700/40"
        >
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Enterprise Platform Modernization
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Led a UX + process redesign during a core merchandising system
            modernization, focused on reducing friction in item and order
            creation while improving adoption.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Problem
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                The new workflow introduced extra steps and unclear handoffs,
                slowing merchants down and increasing the risk of bad data
                entering downstream systems.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                What I did
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  Observed real work (time-and-motion + shadowing) to pinpoint
                  bottlenecks.
                </li>
                <li>
                  Translated pain points into clear requirements and UX guidance
                  for engineering.
                </li>
                <li>
                  Built a lightweight enablement plan (demos, guides, change
                  champions).
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Outcome
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  Faster merchant onboarding and fewer avoidable rework loops.
                </li>
                <li>Higher confidence in data quality at the source.</li>
                <li>
                  A scalable workflow that supported catalog growth without
                  adding overhead.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="vendor-onboarding"
          className="scroll-mt-24 border-t border-zinc-100 pt-12 dark:border-zinc-700/40"
        >
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Vendor Onboarding Transformation
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Consolidated requirements across Legal, Compliance, Finance,
            Operations, and IT and delivered a repeatable intake engine that
            improved speed and consistency.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Problem
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Onboarding relied on fragmented forms and manual follow-ups
                across teams, creating delays, duplicated work, and inconsistent
                approvals.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                What I did
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  Mapped end-to-end handoffs and aligned stakeholders on a
                  single intake flow.
                </li>
                <li>
                  Standardized requirements and created a shared “definition of
                  done.”
                </li>
                <li>
                  Partnered with IT to automate submission, routing, and status
                  visibility.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Outcome
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  Shorter onboarding cycles and fewer stalled vendor launches.
                </li>
                <li>
                  Clearer accountability across functions and fewer approval
                  surprises.
                </li>
                <li>
                  A repeatable engine that scaled vendor enablement without
                  added headcount.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="dc-flow"
          className="scroll-mt-24 border-t border-zinc-100 pt-12 dark:border-zinc-700/40"
        >
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Delivery Flow Stabilization
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Stabilized distribution center intake by aligning buyer behavior
            with warehouse capacity and introducing week-based scheduling plus
            exception reporting.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Problem
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Deliveries arrived in surges, overwhelming capacity during peaks
                and leaving the DC underutilized during other periods—creating
                bottlenecks and long dwell times.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                What I did
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  Analyzed delivery patterns to identify systemic drivers of
                  volatility.
                </li>
                <li>
                  Implemented week-level delivery commitments and decision
                  rules.
                </li>
                <li>
                  Created exception reporting to surface problems early and
                  course-correct.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Outcome
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  More predictable inbound volume and fewer avoidable
                  bottlenecks.
                </li>
                <li>
                  Improved cross-team trust through transparent rules and
                  visibility.
                </li>
                <li>
                  Better utilization of labor and equipment across the month.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="edi"
          className="scroll-mt-24 border-t border-zinc-100 pt-12 dark:border-zinc-700/40"
        >
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            EDI Expansion & Partner Enablement
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Expanded EDI adoption by standardizing partner onboarding and
            resolving data and process gaps that slowed throughput across the
            vendor-to-store value chain.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Problem
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Trading partner implementations were inconsistent, causing
                avoidable errors, manual intervention, and unreliable data
                exchange.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                What I did
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  Standardized onboarding steps, validation, and partner testing
                  criteria.
                </li>
                <li>
                  Worked cross-functionally to resolve root-cause data and
                  process gaps.
                </li>
                <li>
                  Established lightweight governance to keep integrations
                  healthy over time.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Outcome
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  More consistent implementations and fewer downstream
                  disruptions.
                </li>
                <li>
                  Higher accuracy and better throughput across partner
                  transactions.
                </li>
                <li>
                  A scalable pattern for onboarding and maintaining
                  integrations.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </SimpleLayout>
  )
}
