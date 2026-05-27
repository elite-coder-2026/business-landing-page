import { useState } from 'react'
import {
  Amount,
  Badge,
  Badges,
  Card,
  CardButton,
  CardFooter,
  CardHeader,
  Cards,
  Check,
  Description,
  Feature,
  Features,
  FeatureText,
  Header,
  Period,
  PlanInfo,
  PlanName,
  Price,
  PricingSection,
  Title,
  Toggle,
  ToggleButton,
  Trail,
  TrailWrap,
} from './Pricing.styles'

type Frequency = 'monthly' | 'yearly'

interface FeatureItem {
  text: string
  tooltip?: string
}

export interface Plan {
  name: string
  info: string
  price: {
    monthly: number
    yearly: number
  }
  features: FeatureItem[]
  btn: {
    text: string
    href: string
  }
  highlighted?: boolean
}

interface PricingProps {
  plans?: Plan[]
  heading?: string
  description?: string
}

const frequencies: Frequency[] = ['monthly', 'yearly']

const defaultPlans: Plan[] = [
  {
    name: 'Basic',
    info: 'For most individuals',
    price: {
      monthly: 7,
      yearly: Math.round(7 * 12 * (1 - 0.12)),
    },
    features: [
      { text: 'Up to 3 workspaces' },
      { text: 'Up to 3 team dashboards' },
      { text: 'Up to 3 projects stored' },
      {
        text: 'Markdown support',
        tooltip: 'Export notes, plans, and reports in Markdown format.',
      },
      {
        text: 'Community support',
        tooltip: 'Get answers from the Asme community.',
      },
      {
        text: 'AI powered suggestions',
        tooltip: 'Get up to 100 AI powered workflow suggestions.',
      },
    ],
    btn: {
      text: 'Start Your Free Trial',
      href: '#start',
    },
  },
  {
    highlighted: true,
    name: 'Pro',
    info: 'For small businesses',
    price: {
      monthly: 17.99,
      yearly: Math.round(17.99 * 12 * (1 - 0.12)),
    },
    features: [
      { text: 'Up to 500 projects' },
      { text: 'Up to 500 team updates' },
      { text: 'Up to 500 reports stored' },
      {
        text: 'Unlimited Markdown support',
        tooltip: 'Export all operational content in Markdown format.',
      },
      { text: 'SEO optimization tools' },
      { text: 'Priority support', tooltip: 'Get 24/7 chat support.' },
      {
        text: 'AI powered suggestions',
        tooltip: 'Get up to 500 AI powered workflow suggestions.',
      },
    ],
    btn: {
      text: 'Get started',
      href: '#start',
    },
  },
  {
    name: 'Business',
    info: 'For large organizations',
    price: {
      monthly: 69.99,
      yearly: Math.round(49.99 * 12 * (1 - 0.12)),
    },
    features: [
      { text: 'Unlimited projects' },
      { text: 'Unlimited team updates' },
      { text: 'Unlimited reports stored' },
      { text: 'Unlimited Markdown support' },
      {
        text: 'Advanced optimization tools',
        tooltip: 'Advanced planning, reporting, and growth optimization tools.',
      },
      { text: 'Priority support', tooltip: 'Get 24/7 chat support.' },
      {
        text: 'AI powered suggestions',
        tooltip: 'Get custom AI powered workflow recommendations.',
      },
    ],
    btn: {
      text: 'Contact team',
      href: '#contact',
    },
  },
]

function formatPrice(price: number) {
  return Number.isInteger(price) ? price.toString() : price.toFixed(2)
}

function getDiscount(plan: Plan) {
  return Math.round(
    ((plan.price.monthly * 12 - plan.price.yearly) / plan.price.monthly / 12) *
      100,
  )
}

function PricingCard({
  plan,
  frequency,
}: {
  plan: Plan
  frequency: Frequency
}) {
  const period = frequency === 'monthly' ? 'month' : 'year'
  const discount = getDiscount(plan)

  return (
    <Card $highlighted={plan.highlighted}>
      {plan.highlighted && (
        <TrailWrap aria-hidden="true">
          <Trail />
        </TrailWrap>
      )}
      <CardHeader $highlighted={plan.highlighted}>
        <Badges>
          {plan.highlighted && <Badge>★ Popular</Badge>}
          {frequency === 'yearly' && <Badge $primary>{discount}% off</Badge>}
        </Badges>
        <PlanName>{plan.name}</PlanName>
        <PlanInfo>{plan.info}</PlanInfo>
        <Price>
          <Amount>${formatPrice(plan.price[frequency])}</Amount>
          <Period>/{period}</Period>
        </Price>
      </CardHeader>

      <Features $highlighted={plan.highlighted}>
        {plan.features.map((feature) => (
          <Feature key={feature.text}>
            <Check aria-hidden="true">✓</Check>
            <FeatureText
              $hasTooltip={Boolean(feature.tooltip)}
              title={feature.tooltip}
            >
              {feature.text}
            </FeatureText>
          </Feature>
        ))}
      </Features>

      <CardFooter $highlighted={plan.highlighted}>
        <CardButton href={plan.btn.href} $highlighted={plan.highlighted}>
          {plan.btn.text}
        </CardButton>
      </CardFooter>
    </Card>
  )
}

export function Pricing({
  plans = defaultPlans,
  heading = 'Plans that Scale with You',
  description = "Whether you're just starting out or growing fast, our flexible pricing has you covered with no hidden costs.",
}: PricingProps) {
  const [frequency, setFrequency] = useState<Frequency>('monthly')

  return (
    <PricingSection id="pricing">
      <Header>
        <Title>{heading}</Title>
        <Description>{description}</Description>
      </Header>

      <Toggle aria-label="Billing frequency">
        {frequencies.map((item) => (
          <ToggleButton
            key={item}
            type="button"
            $active={frequency === item}
            aria-pressed={frequency === item}
            onClick={() => setFrequency(item)}
          >
            {item}
          </ToggleButton>
        ))}
      </Toggle>

      <Cards>
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} frequency={frequency} />
        ))}
      </Cards>
    </PricingSection>
  )
}
