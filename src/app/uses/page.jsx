import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

const TOOLKIT_SECTIONS = [
  {
    title: 'Systems & process improvement',
    tools: [
      {
        title: 'Value Stream Mapping',
        description:
          'I map the end-to-end flow of information — from vendor intake to store shelf — to identify and eliminate non-value-added steps and systemic waste.',
      },
      {
        title: 'Theory of Constraints',
        description:
          'I focus on identifying the single bottleneck (the "slowest gear") that limits system throughput, ensuring optimizations deliver the highest possible ROI.',
      },
      {
        title: 'Poka-Yoke (Mistake Proofing)',
        description:
          'I design "data integrity at the source" by defining requirements for validation and UX flows that prevent errors from moving downstream.',
      },
    ],
  },
  {
    title: 'Program delivery',
    tools: [
      {
        title: 'Backlog, milestones, and sequencing',
        description:
          'I focus on clarity and flow: well-shaped work, clear acceptance criteria, and an honest critical path so teams can deliver incrementally without surprises.',
      },
      {
        title: 'Time-and-motion + direct observation',
        description:
          'My most important tool is observation. I use time-and-motion studies to find true bottlenecks before proposing process or system changes.',
      },
      {
        title: 'Decision log + lightweight documentation',
        description:
          'I keep teams aligned with concise docs: problem statement, scope, tradeoffs, decisions, and owners — so we don’t re-litigate topics.',
      },
    ],
  },
  {
    title: 'Governance, risk, & alignment',
    tools: [
      {
        title: 'Formal risk and dependency management',
        description:
          'I operate within formal risk and dependency frameworks, partnering with project and program managers to surface risks early, clarify ownership, and support timely escalation (RAID-style governance).',
      },
      {
        title: 'Decision rights and accountability',
        description:
          'I help clarify who decides, who executes, and who needs to be informed — reducing ambiguity, late-stage friction, and avoidable rework (RACI-informed).',
      },
      {
        title: 'Working sessions with pre-reads',
        description:
          'Short pre-reads and structured agendas to keep meetings decision-oriented and to move complex stakeholders to alignment faster.',
      },
      {
        title: 'Change enablement checklist',
        description:
          'Launch readiness: training, comms, support handoff, metrics, and a plan to drive adoption — especially for operational teams.',
      },
    ],
  },
  {
    title: 'Enterprise systems & data flow',
    tools: [
      {
        title: 'Retail core systems (item, order, and inventory lifecycles)',
        description:
          'I work in the “messy middle” where legacy logic meets modern workflows — helping translate operational reality into requirements that scale without breaking downstream systems.',
      },
      {
        title: 'EDI + partner enablement',
        description:
          'Standardizing data exchange across the value chain to reduce manual intervention, improve accuracy, and reduce the risk of expense offsets at scale.',
      },
      {
        title: 'Operational visibility',
        description:
          'Quick analysis and lightweight dashboards for intake tracking, anomaly detection, and reporting that drives action — not just metrics.',
      },
    ],
  },
  {
    title: 'Technical fluency',
    tools: [
      {
        title: 'Cloud fundamentals',
        description:
          "Through building and operating personal serverless SaaS products on AWS, I've developed practical cloud fluency that helps me collaborate credibly with engineers on reliability, cost, and security tradeoffs.",
      },
      {
        title: 'APIs & integrations (REST + event-driven basics)',
        description:
          'Helpful context when programs touch multiple systems — improves dependency planning, sequencing, and test strategy.',
      },
      {
        title: 'GitHub workflows',
        description:
          "I'm comfortable working within source control and CI/CD workflows (including GitHub Actions), which helps me understand delivery constraints and keep releases predictable.",
      },
    ],
  },
  {
    title: 'Communication',
    tools: [
      {
        title: 'Weekly status update',
        description:
          'A single-page update that answers: what changed, what’s blocked, what decisions are needed, and what’s next.',
      },
      {
        title: 'Decision-first narratives',
        description:
          'One-pagers and short decks that connect the “why” to the plan, the tradeoffs, and the ask — optimized for leadership decision-making.',
      },
      {
        title: 'Meeting notes with explicit decisions',
        description:
          'Every meeting ends with: decisions made, owners, deadlines, and the next checkpoint.',
      },
    ],
  },
]

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Toolkit',
  description:
    'Tools, templates, and systems I use to align stakeholders, manage risk, and ship measurable outcomes.',
}

export default function Toolkit() {
  return (
    <SimpleLayout
      title="Toolkit"
      intro="My experience spans environments with formal program governance, enterprise systems, and hands-on technical delivery. I focus on understanding how these systems operate and using them to drive alignment, manage risk, and deliver measurable outcomes — without over-indexing on any single tool."
    >
      <div className="space-y-20">
        {TOOLKIT_SECTIONS.map((section) => (
          <ToolsSection key={section.title} title={section.title}>
            {section.tools.map((tool) => (
              <Tool
                key={`${section.title}:${tool.title}`}
                title={tool.title}
                href={tool.href}
              >
                {tool.description}
              </Tool>
            ))}
          </ToolsSection>
        ))}
      </div>
    </SimpleLayout>
  )
}
