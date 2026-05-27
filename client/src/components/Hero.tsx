import { useEffect, useRef } from 'react'
import {
  Action,
  Actions,
  Announcement,
  AnnouncementIcon,
  AnnouncementLink,
  Availability,
  Canvas,
  CornerMark,
  Description,
  HeroContent,
  HeroSection,
  Highlight,
  Intro,
  Pulse,
  Title,
  TitleFrame,
} from './Hero.styles'

interface HeroProps {
  announcement?: string
  announcementLink?: {
    text: string
    url: string
  }
  title?: string
  availability?: string
  intro?: string
  highlightedName?: string
  description?: string
  primaryAction?: {
    text: string
    url: string
  }
  secondaryAction?: {
    text: string
    url: string
  }
}

interface TrailNode {
  x: number
  y: number
  vx: number
  vy: number
}

interface PointerPosition {
  x: number
  y: number
}

const trailConfig = {
  friction: 0.5,
  trails: 70,
  size: 44,
  dampening: 0.025,
  tension: 0.99,
}

function createTrailLine(position: PointerPosition, spring: number) {
  const nodes = Array.from({ length: trailConfig.size }, () => ({
    x: position.x,
    y: position.y,
    vx: 0,
    vy: 0,
  }))

  return {
    spring: spring + 0.1 * Math.random() - 0.05,
    friction: trailConfig.friction + 0.01 * Math.random() - 0.005,
    nodes,
  }
}

function updateTrailLine(
  line: ReturnType<typeof createTrailLine>,
  position: PointerPosition,
) {
  let spring = line.spring
  const first = line.nodes[0]

  first.vx += (position.x - first.x) * spring
  first.vy += (position.y - first.y) * spring

  for (let index = 0; index < line.nodes.length; index += 1) {
    const node = line.nodes[index]

    if (index > 0) {
      const previous = line.nodes[index - 1]
      node.vx += (previous.x - node.x) * spring
      node.vy += (previous.y - node.y) * spring
      node.vx += previous.vx * trailConfig.dampening
      node.vy += previous.vy * trailConfig.dampening
    }

    node.vx *= line.friction
    node.vy *= line.friction
    node.x += node.vx
    node.y += node.vy
    spring *= trailConfig.tension
  }
}

function drawTrailLine(
  context: CanvasRenderingContext2D,
  nodes: TrailNode[],
) {
  let x = nodes[0].x
  let y = nodes[0].y

  context.beginPath()
  context.moveTo(x, y)

  for (let index = 1; index < nodes.length - 2; index += 1) {
    const current = nodes[index]
    const next = nodes[index + 1]
    x = 0.5 * (current.x + next.x)
    y = 0.5 * (current.y + next.y)
    context.quadraticCurveTo(current.x, current.y, x, y)
  }

  const current = nodes[nodes.length - 2]
  const next = nodes[nodes.length - 1]
  context.quadraticCurveTo(current.x, current.y, next.x, next.y)
  context.stroke()
  context.closePath()
}

function useCanvasTrail(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return undefined
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return undefined
    }

    let huePhase = Math.random() * 2 * Math.PI
    let animationFrame = 0
    let active = false
    const rectPosition = { x: 0, y: 0 }
    const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let lines = Array.from({ length: trailConfig.trails }, (_, index) =>
      createTrailLine(position, 0.45 + (index / trailConfig.trails) * 0.025),
    )

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const scale = window.devicePixelRatio || 1
      rectPosition.x = rect.left
      rectPosition.y = rect.top
      canvas.width = rect.width * scale
      canvas.height = rect.height * scale
      context.setTransform(scale, 0, 0, scale, 0, 0)
    }

    const updatePosition = (clientX: number, clientY: number) => {
      position.x = clientX - rectPosition.x
      position.y = clientY - rectPosition.y
      active = true
    }

    const handleMouseMove = (event: MouseEvent) => {
      updatePosition(event.clientX, event.clientY)
    }

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0]

      if (touch) {
        updatePosition(touch.clientX, touch.clientY)
      }
    }

    const render = () => {
      if (active) {
        context.globalCompositeOperation = 'source-over'
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.globalCompositeOperation = 'lighter'
        huePhase += 0.0015
        context.strokeStyle = `hsla(${Math.round(
          285 + Math.sin(huePhase) * 85,
        )}, 100%, 50%, 0.035)`
        context.lineWidth = 10

        lines.forEach((line) => {
          updateTrailLine(line, position)
          drawTrailLine(context, line.nodes)
        })

      }

      animationFrame = window.requestAnimationFrame(render)
    }

    resizeCanvas()
    lines = Array.from({ length: trailConfig.trails }, (_, index) =>
      createTrailLine(position, 0.45 + (index / trailConfig.trails) * 0.025),
    )
    render()

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchstart', handleTouchMove, { passive: true })

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchstart', handleTouchMove)
    }
  }, [canvasRef])
}

export function Hero({
  announcement = 'Introducing Asme.',
  announcementLink = {
    text: 'Explore',
    url: '#features',
  },
  title = 'Your complete platform for the business.',
  availability = 'Available Now',
  intro = "Welcome to the operating layer for modern teams. We're",
  highlightedName = 'Asme',
  description = 'Plan work, track decisions, and keep every team moving with a workspace built for daily business operations.',
  primaryAction = {
    text: 'Start Project',
    url: '#start',
  },
  secondaryAction = {
    text: 'Book a call',
    url: '#contact',
  },
}: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useCanvasTrail(canvasRef)

  return (
    <HeroSection id="home">
      <Canvas ref={canvasRef} aria-hidden="true" />
      <HeroContent>
        <Announcement>
          <AnnouncementIcon aria-hidden="true">
            <span />
          </AnnouncementIcon>
          {announcement}
          <AnnouncementLink href={announcementLink.url}>
            {announcementLink.text}
          </AnnouncementLink>
        </Announcement>

        <TitleFrame>
          <CornerMark $horizontal="left" $vertical="top" aria-hidden="true" />
          <CornerMark $horizontal="left" $vertical="bottom" aria-hidden="true" />
          <CornerMark $horizontal="right" $vertical="top" aria-hidden="true" />
          <CornerMark $horizontal="right" $vertical="bottom" aria-hidden="true" />
          <Title>{title}</Title>
          <Availability>
            <Pulse aria-hidden="true" />
            {availability}
          </Availability>
        </TitleFrame>

        <Intro>
          {intro} <Highlight>{highlightedName}</Highlight>
        </Intro>
        <Description>{description}</Description>
        <Actions>
          <Action href={primaryAction.url}>{primaryAction.text}</Action>
          <Action href={secondaryAction.url} $variant="secondary">
            {secondaryAction.text}
          </Action>
        </Actions>
      </HeroContent>
    </HeroSection>
  )
}
