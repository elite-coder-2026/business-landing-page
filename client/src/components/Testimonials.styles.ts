import styled, { keyframes } from 'styled-components'

const scrollTestimonials = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-50%);
  }
`

export const TestimonialsSection = styled.section`
  position: relative;
  padding: 104px 16px;
  color: #15181f;
  background: rgba(255, 255, 255, 0.42);
`

export const Container = styled.div`
  width: min(100%, 1120px);
  margin: 0 auto;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
`

export const Eyebrow = styled.div`
  width: fit-content;
  padding: 6px 13px;
  border: 1px solid rgba(21, 24, 31, 0.12);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.72);
  color: #596171;
  font-size: 0.86rem;
  font-weight: 800;
`

export const Title = styled.h2`
  margin: 18px 0 0;
  color: #10141b;
  font-size: clamp(2rem, 5vw, 3.6rem);
  line-height: 1.02;
  font-weight: 840;
  letter-spacing: 0;
`

export const Description = styled.p`
  margin: 18px 0 0;
  color: #596171;
  font-size: 1rem;
  line-height: 1.65;
`

export const Columns = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  max-height: 740px;
  margin-top: 48px;
  overflow: hidden;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 22%,
    black 78%,
    transparent
  );
`

export const Column = styled.div<{ $visibility?: 'tablet' | 'desktop' }>`
  width: min(100%, 340px);

  ${({ $visibility }) =>
    $visibility === 'tablet' &&
    `
      @media (max-width: 760px) {
        display: none;
      }
    `}

  ${({ $visibility }) =>
    $visibility === 'desktop' &&
    `
      @media (max-width: 1024px) {
        display: none;
      }
    `}
`

export const ColumnTrack = styled.div<{ $duration: number }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 24px;
  animation: ${scrollTestimonials} ${({ $duration }) => $duration}s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`

export const Card = styled.article`
  width: 100%;
  padding: 28px;
  border: 1px solid rgba(21, 24, 31, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 22px 54px rgba(21, 24, 31, 0.09);
`

export const Quote = styled.p`
  margin: 0;
  color: #303846;
  font-size: 0.98rem;
  line-height: 1.65;
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 22px;
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  object-fit: cover;
  background: #dfe8ef;
`

export const AvatarFallback = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: #dfe8ef;
  color: #15181f;
  font-size: 0.82rem;
  font-weight: 800;
`

export const AuthorText = styled.div`
  display: grid;
  gap: 2px;
`

export const Name = styled.strong`
  color: #15181f;
  font-size: 0.95rem;
  line-height: 1.25;
`

export const Role = styled.span`
  color: #596171;
  font-size: 0.9rem;
  line-height: 1.25;
`
