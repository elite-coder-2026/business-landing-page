import {
  Container,
  Description,
  Detail,
  DetailList,
  Eyebrow,
  Flow,
  Header,
  Number,
  Step,
  StepCopy,
  StepTitle,
  Summary,
  SummaryCard,
  SummaryLabel,
  SummaryValue,
  Title,
  WorkflowSection,
} from './Workflow.styles'

interface WorkflowStep {
  title: string
  description: string
  details: string[]
  active?: boolean
}

interface WorkflowMetric {
  value: string
  label: string
}

interface WorkflowProps {
  eyebrow?: string
  title?: string
  description?: string
  steps?: WorkflowStep[]
  metrics?: WorkflowMetric[]
}

const defaultSteps: WorkflowStep[] = [
  {
    title: 'Plan the work',
    description:
      'Turn business goals into shared initiatives with owners, timelines, and measurable outcomes.',
    details: ['Company priorities', 'Team ownership', 'Milestone tracking'],
  },
  {
    title: 'Coordinate execution',
    description:
      'Keep teams aligned with recurring updates, handoff notes, and clear blocker visibility.',
    details: ['Status rituals', 'Cross-team handoffs', 'Blocked work alerts'],
    active: true,
  },
  {
    title: 'Report progress',
    description:
      'Roll daily work into live dashboards and executive summaries without chasing manual updates.',
    details: ['Live dashboards', 'Weekly summaries', 'Outcome reporting'],
  },
  {
    title: 'Decide faster',
    description:
      'Preserve context, decisions, and next steps so teams can move without relitigating the same issues.',
    details: ['Decision logs', 'Context history', 'Action follow-up'],
  },
]

const defaultMetrics: WorkflowMetric[] = [
  {
    value: '4',
    label: 'core operating stages connected',
  },
  {
    value: '12h',
    label: 'saved each week on status gathering',
  },
  {
    value: '91%',
    label: 'of decisions remain easy to trace',
  },
]

export function Workflow({
  eyebrow = 'Workflow',
  title = 'From plan to decision, every handoff stays connected',
  description = 'Asme gives your team a repeatable operating rhythm, so planning, coordination, reporting, and decisions happen in one place.',
  steps = defaultSteps,
  metrics = defaultMetrics,
}: WorkflowProps) {
  return (
    <WorkflowSection id="workflow">
      <Container>
        <Header>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Header>

        <Flow>
          {steps.map((step, index) => (
            <Step key={step.title} $active={step.active}>
              <Number $active={step.active}>{String(index + 1).padStart(2, '0')}</Number>
              <StepTitle>{step.title}</StepTitle>
              <StepCopy>{step.description}</StepCopy>
              <DetailList>
                {step.details.map((detail) => (
                  <Detail key={detail}>{detail}</Detail>
                ))}
              </DetailList>
            </Step>
          ))}
        </Flow>

        <Summary>
          {metrics.map((metric) => (
            <SummaryCard key={metric.label}>
              <SummaryValue>{metric.value}</SummaryValue>
              <SummaryLabel>{metric.label}</SummaryLabel>
            </SummaryCard>
          ))}
        </Summary>
      </Container>
    </WorkflowSection>
  )
}
