import { useState } from 'react'
import {
  ActionRow,
  Amount,
  Button,
  Cell,
  Container,
  Description,
  Eyebrow,
  HeadCell,
  Header,
  Included,
  MobileFeature,
  MobileFeatureList,
  MobileFeatureName,
  MobileFeatureValue,
  MobileFooter,
  MobilePlan,
  MobilePlanHeader,
  MobilePlans,
  Period,
  PlanBadge,
  PlanInfo,
  PlanName,
  Price,
  RowHeader,
  Table,
  TableSection,
  TableWrap,
  Title,
  Toggle,
  ToggleButton,
} from './PricingTable.styles'

type Frequency = 'monthly' | 'yearly'
type FeatureValue = boolean | string

interface PricingTablePlan {
  name: string
  info: string
  highlighted?: boolean
  price: {
    monthly: number
    yearly: number
  }
  button: {
    text: string
    href: string
  }
  features: Record<string, FeatureValue>
}

interface PricingTableProps {
  eyebrow?: string
  heading?: string
  description?: string
  plans?: PricingTablePlan[]
}

const frequencies: Frequency[] = ['monthly', 'yearly']

const defaultPlans: PricingTablePlan[] = [
  {
    name: 'Basic',
    info: 'For lean teams starting out',
    price: {
      monthly: 7,
      yearly: 74,
    },
    button: {
      text: 'Start Trial',
      href: '#start',
    },
    features: {
      Workspaces: '3',
      'Team members': '5',
      Dashboards: '3',
      'Decision history': '30 days',
      Automations: 'Basic',
      'Priority support': false,
      'Custom reporting': false,
    },
  },
  {
    name: 'Pro',
    info: 'For growing businesses',
    highlighted: true,
    price: {
      monthly: 17.99,
      yearly: 190,
    },
    button: {
      text: 'Get Started',
      href: '#start',
    },
    features: {
      Workspaces: '25',
      'Team members': '50',
      Dashboards: 'Unlimited',
      'Decision history': '1 year',
      Automations: 'Advanced',
      'Priority support': true,
      'Custom reporting': true,
    },
  },
  {
    name: 'Business',
    info: 'For larger organizations',
    price: {
      monthly: 69.99,
      yearly: 528,
    },
    button: {
      text: 'Contact Team',
      href: '#contact',
    },
    features: {
      Workspaces: 'Unlimited',
      'Team members': 'Unlimited',
      Dashboards: 'Unlimited',
      'Decision history': 'Unlimited',
      Automations: 'Custom',
      'Priority support': true,
      'Custom reporting': true,
    },
  },
]

function formatPrice(price: number) {
  return Number.isInteger(price) ? price.toString() : price.toFixed(2)
}

function renderFeatureValue(value: FeatureValue) {
  if (typeof value === 'boolean') {
    return value ? <Included aria-label="Included">✓</Included> : '—'
  }

  return value
}

export function PricingTable({
  eyebrow = 'Compare plans',
  heading = 'Pricing that matches how your team grows',
  description = 'Choose a clear plan now, then scale into deeper reporting, automation, and support when your operations need it.',
  plans = defaultPlans,
}: PricingTableProps) {
  const [frequency, setFrequency] = useState<Frequency>('monthly')
  const featureNames = Object.keys(plans[0]?.features ?? {})
  const period = frequency === 'monthly' ? 'month' : 'year'

  return (
    <TableSection id="pricing-table">
      <Container>
        <Header>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title>{heading}</Title>
          <Description>{description}</Description>
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
        </Header>

        <TableWrap>
          <Table>
            <thead>
              <tr>
                <HeadCell scope="col">Features</HeadCell>
                {plans.map((plan) => (
                  <HeadCell
                    key={plan.name}
                    scope="col"
                    $highlighted={plan.highlighted}
                  >
                    {plan.highlighted && <PlanBadge>Popular</PlanBadge>}
                    <PlanName>{plan.name}</PlanName>
                    <PlanInfo>{plan.info}</PlanInfo>
                    <Price>
                      <Amount>${formatPrice(plan.price[frequency])}</Amount>
                      <Period>/{period}</Period>
                    </Price>
                  </HeadCell>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureNames.map((featureName) => (
                <tr key={featureName}>
                  <RowHeader scope="row">{featureName}</RowHeader>
                  {plans.map((plan) => (
                    <Cell key={`${plan.name}-${featureName}`} $highlighted={plan.highlighted}>
                      {renderFeatureValue(plan.features[featureName])}
                    </Cell>
                  ))}
                </tr>
              ))}
              <ActionRow>
                <RowHeader scope="row">Start</RowHeader>
                {plans.map((plan) => (
                  <Cell key={`${plan.name}-action`} $highlighted={plan.highlighted}>
                    <Button href={plan.button.href} $highlighted={plan.highlighted}>
                      {plan.button.text}
                    </Button>
                  </Cell>
                ))}
              </ActionRow>
            </tbody>
          </Table>
        </TableWrap>

        <MobilePlans>
          {plans.map((plan) => (
            <MobilePlan key={plan.name} $highlighted={plan.highlighted}>
              <MobilePlanHeader $highlighted={plan.highlighted}>
                {plan.highlighted && <PlanBadge>Popular</PlanBadge>}
                <PlanName>{plan.name}</PlanName>
                <PlanInfo>{plan.info}</PlanInfo>
                <Price>
                  <Amount>${formatPrice(plan.price[frequency])}</Amount>
                  <Period>/{period}</Period>
                </Price>
              </MobilePlanHeader>
              <MobileFeatureList>
                {featureNames.map((featureName) => (
                  <MobileFeature key={`${plan.name}-${featureName}`}>
                    <MobileFeatureName>{featureName}</MobileFeatureName>
                    <MobileFeatureValue>
                      {renderFeatureValue(plan.features[featureName])}
                    </MobileFeatureValue>
                  </MobileFeature>
                ))}
              </MobileFeatureList>
              <MobileFooter>
                <Button href={plan.button.href} $highlighted={plan.highlighted}>
                  {plan.button.text}
                </Button>
              </MobileFooter>
            </MobilePlan>
          ))}
        </MobilePlans>
      </Container>
    </TableSection>
  )
}
