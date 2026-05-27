import {
  Author,
  AuthorText,
  Avatar,
  AvatarFallback,
  Card,
  Column,
  Columns,
  ColumnTrack,
  Container,
  Description,
  Eyebrow,
  Header,
  Name,
  Quote,
  Role,
  TestimonialsSection,
  Title,
} from './Testimonials.styles'

export interface Testimonial {
  text: string
  image?: string
  name: string
  role: string
}

interface TestimonialsColumnProps {
  testimonials: Testimonial[]
  duration?: number
  visibility?: 'tablet' | 'desktop'
}

interface TestimonialsProps {
  eyebrow?: string
  title?: string
  description?: string
  testimonials?: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
  {
    text: 'This platform revolutionized our operations, streamlining finance and inventory. The cloud-based workspace keeps us productive, even remotely.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Briana Patton',
    role: 'Operations Manager',
  },
  {
    text: 'Implementation was smooth and quick. The customizable, user-friendly interface made team training effortless.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Bilal Ahmed',
    role: 'IT Manager',
  },
  {
    text: 'The support team is exceptional, guiding us through setup and providing ongoing assistance that keeps our teams moving.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Saman Malik',
    role: 'Customer Support Lead',
  },
  {
    text: 'The seamless integration enhanced our business operations and efficiency. Highly recommend it for the intuitive interface.',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: 'Omar Raza',
    role: 'CEO',
  },
  {
    text: 'Its robust features and quick support have transformed our workflow, making us significantly more efficient.',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: 'Zainab Hussain',
    role: 'Project Manager',
  },
  {
    text: 'The smooth rollout exceeded expectations. It streamlined our processes and improved overall business performance.',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: 'Aliza Khan',
    role: 'Business Analyst',
  },
  {
    text: 'Our business functions improved with a user-friendly design and clear feedback from every customer-facing team.',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    name: 'Farhan Siddiqui',
    role: 'Marketing Director',
  },
  {
    text: 'They delivered a solution that exceeded expectations, understood our needs, and improved the way we operate.',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: 'Sana Sheikh',
    role: 'Sales Manager',
  },
  {
    text: 'Using this workspace, our online presence and conversions improved significantly, boosting business performance.',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    name: 'Hassan Ali',
    role: 'E-commerce Manager',
  },
]

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function TestimonialsColumn({
  testimonials,
  duration = 15,
  visibility,
}: TestimonialsColumnProps) {
  const loopedTestimonials = [...testimonials, ...testimonials]

  return (
    <Column $visibility={visibility}>
      <ColumnTrack $duration={duration}>
        {loopedTestimonials.map((testimonial, index) => (
          <Card key={`${testimonial.name}-${index}`}>
            <Quote>{testimonial.text}</Quote>
            <Author>
              {testimonial.image ? (
                <Avatar src={testimonial.image} alt={testimonial.name} />
              ) : (
                <AvatarFallback aria-hidden="true">
                  {getInitials(testimonial.name)}
                </AvatarFallback>
              )}
              <AuthorText>
                <Name>{testimonial.name}</Name>
                <Role>{testimonial.role}</Role>
              </AuthorText>
            </Author>
          </Card>
        ))}
      </ColumnTrack>
    </Column>
  )
}

export function Testimonials({
  eyebrow = 'Testimonials',
  title = 'What our users say',
  description = 'See what our customers have to say about us.',
  testimonials = defaultTestimonials,
}: TestimonialsProps) {
  const firstColumn = testimonials.slice(0, 3)
  const secondColumn = testimonials.slice(3, 6)
  const thirdColumn = testimonials.slice(6, 9)

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <Header>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Header>

        <Columns>
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={19}
            visibility="tablet"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={17}
            visibility="desktop"
          />
        </Columns>
      </Container>
    </TestimonialsSection>
  )
}
