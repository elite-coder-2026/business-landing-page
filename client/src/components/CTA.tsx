import {
  Action,
  Actions,
  Content,
  CTASection,
  Description,
  Eyebrow,
  Panel,
  Proof,
  ProofItem,
  Title,
} from './CTA.styles'

interface CTAProps {
  eyebrow?: string
  title?: string
  description?: string
  primaryAction?: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
  proofPoints?: string[]
}

export function CTA({
  eyebrow = 'Ready when you are',
  title = 'Start building a calmer operating rhythm today',
  description = 'Bring planning, reporting, decisions, and team updates into one workspace your business can use every day.',
  primaryAction = {
    text: 'Get Started',
    href: '#start',
  },
  secondaryAction = {
    text: 'Book a Demo',
    href: '#contact',
  },
  proofPoints = ['No hidden fees', 'Cancel anytime', 'Guided setup available'],
}: CTAProps) {
  return (
    <CTASection id="contact">
      <Panel>
        <Content>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Proof>
            {proofPoints.map((point) => (
              <ProofItem key={point}>{point}</ProofItem>
            ))}
          </Proof>
        </Content>

        <Actions>
          <Action href={primaryAction.href}>{primaryAction.text}</Action>
          <Action href={secondaryAction.href} $variant="secondary">
            {secondaryAction.text}
          </Action>
        </Actions>
      </Panel>
    </CTASection>
  )
}
