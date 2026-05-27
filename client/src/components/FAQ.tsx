import { useState } from 'react'
import {
  Answer,
  ContactCard,
  ContactLabel,
  ContactLink,
  ContactText,
  Container,
  Description,
  Eyebrow,
  FAQSection,
  Header,
  Item,
  List,
  Question,
  Title,
  ToggleIcon,
} from './FAQ.styles'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  eyebrow?: string
  title?: string
  description?: string
  items?: FAQItem[]
}

const defaultItems: FAQItem[] = [
  {
    question: 'Can we try Asme before choosing a paid plan?',
    answer:
      'Yes. Teams can start with a trial workspace, invite a small group, and test planning, dashboards, updates, and reporting before moving to a paid plan.',
  },
  {
    question: 'Can we change billing from monthly to yearly later?',
    answer:
      'Yes. Billing frequency can be changed from the workspace settings. Yearly billing applies the annual discount from the next billing cycle.',
  },
  {
    question: 'What happens if we exceed our team or workspace limits?',
    answer:
      'You will keep access to your workspace. We surface clear upgrade prompts before limits affect new team members, dashboards, or projects.',
  },
  {
    question: 'Can we cancel without losing our data immediately?',
    answer:
      'Yes. Canceled workspaces remain accessible until the end of the billing period, and exported reports, decisions, and project data can be downloaded.',
  },
  {
    question: 'Do you support enterprise setup and permissions?',
    answer:
      'Business teams can get help with role-based access, workspace structure, reporting workflows, and onboarding for larger organizations.',
  },
  {
    question: 'What support options are included?',
    answer:
      'Basic plans include community support, Pro includes priority support, and Business includes guided setup and direct support for operational workflows.',
  },
]

export function FAQ({
  eyebrow = 'FAQ',
  title = 'Questions before your team switches tools',
  description = 'The most common things teams ask about trials, billing, limits, cancellation, support, and enterprise setup.',
  items = defaultItems,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <FAQSection id="faq">
      <Container>
        <Header>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ContactCard>
            <ContactLabel>Need a specific answer?</ContactLabel>
            <ContactText>
              Talk with the team about your workflow, migration needs, or security
              requirements.
            </ContactText>
            <ContactLink href="#contact">Contact sales</ContactLink>
          </ContactCard>
        </Header>

        <List>
          {items.map((item, index) => {
            const open = openIndex === index
            const answerId = `faq-answer-${index}`

            return (
              <Item key={item.question}>
                <Question
                  type="button"
                  aria-expanded={open}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  {item.question}
                  <ToggleIcon $open={open} aria-hidden="true" />
                </Question>
                <Answer id={answerId} $open={open}>
                  {item.answer}
                </Answer>
              </Item>
            )
          })}
        </List>
      </Container>
    </FAQSection>
  )
}
