import {
  Card,
  CardCopy,
  CardTitle,
  Container,
  Description,
  Eyebrow,
  FeaturesSection,
  Grid,
  Header,
  Icon,
  Metric,
  MetricLabel,
  MetricValue,
  Title,
} from './Features.styles'

interface Feature {
  icon: string
  title: string
  description: string
  metric: {
    value: string
    label: string
  }
  featured?: boolean
}

interface FeaturesProps {
  eyebrow?: string
  title?: string
  description?: string
  features?: Feature[]
}

const defaultFeatures: Feature[] = [
  {
    icon: '01',
    title: 'Centralized planning',
    description:
      'Turn goals, initiatives, owners, and status updates into one shared operating plan your team can trust.',
    metric: {
      value: '3.8x',
      label: 'clearer visibility',
    },
    featured: true,
  },
  {
    icon: '02',
    title: 'Decision history',
    description:
      'Capture the why behind important calls so new context is easy to find and repeated debates stay resolved.',
    metric: {
      value: '18k',
      label: 'weekly decisions',
    },
  },
  {
    icon: '03',
    title: 'Team dashboards',
    description:
      'Give every team a focused view of work, blockers, progress, and impact without building one-off reports.',
    metric: {
      value: '42%',
      label: 'faster handoffs',
    },
  },
  {
    icon: '04',
    title: 'Workflow automation',
    description:
      'Automate reminders, approvals, and recurring updates so operational work keeps moving in the background.',
    metric: {
      value: '12h',
      label: 'saved weekly',
    },
  },
  {
    icon: '05',
    title: 'Live reporting',
    description:
      'Connect daily updates to executive reporting with clean summaries that stay current as work changes.',
    metric: {
      value: '91%',
      label: 'report accuracy',
    },
  },
  {
    icon: '06',
    title: 'Secure collaboration',
    description:
      'Keep sensitive plans protected with role-based access while still giving teams the context they need.',
    metric: {
      value: '24/7',
      label: 'access control',
    },
  },
]

export function Features({
  eyebrow = 'Features',
  title = 'Everything your operating team needs to stay aligned',
  description = 'Asme brings planning, reporting, decisions, and workflows into one calm workspace built for repeated daily use.',
  features = defaultFeatures,
}: FeaturesProps) {
  return (
    <FeaturesSection id="features">
      <Container>
        <Header>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Header>

        <Grid>
          {features.map((feature) => (
            <Card key={feature.title} $featured={feature.featured}>
              <Icon aria-hidden="true">{feature.icon}</Icon>
              <CardTitle>{feature.title}</CardTitle>
              <CardCopy>{feature.description}</CardCopy>
              <Metric>
                <MetricValue>{feature.metric.value}</MetricValue>
                <MetricLabel>{feature.metric.label}</MetricLabel>
              </Metric>
            </Card>
          ))}
        </Grid>
      </Container>
    </FeaturesSection>
  )
}
