import styled from 'styled-components'

export const HeroSection = styled.section`
  position: relative;
  min-height: 760px;
  overflow: hidden;
  padding: 108px 16px 96px;
  color: #15181f;
`

export const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 1120px);
  margin: 0 auto;
  text-align: center;
`

export const Announcement = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  max-width: 100%;
  padding: 6px 12px;
  border: 1px solid rgba(21, 24, 31, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  color: #596171;
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.4;
  box-shadow: 0 14px 34px rgba(21, 24, 31, 0.08);
  backdrop-filter: blur(18px);
`

export const AnnouncementIcon = styled.span`
  width: 18px;
  height: 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3px;

  &::before,
  &::after,
  span::before,
  span::after {
    content: '';
    border: 1.5px solid #15181f;
    border-radius: 3px;
  }

  span {
    display: contents;
  }
`

export const AnnouncementLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #15181f;
  font-weight: 800;
  text-decoration: none;

  &::after {
    content: '->';
  }
`

export const TitleFrame = styled.div`
  position: relative;
  width: min(100%, 980px);
  margin: 36px auto 0;
  padding: clamp(32px, 6vw, 72px) clamp(18px, 4vw, 48px);
  border: 1px solid rgba(21, 24, 31, 0.16);
  background: rgba(255, 255, 255, 0.54);
  box-shadow: 0 28px 70px rgba(21, 24, 31, 0.08);
  mask-image: radial-gradient(820px 260px at center, white, transparent);
  backdrop-filter: blur(10px);
`

export const CornerMark = styled.span<{
  $horizontal: 'left' | 'right'
  $vertical: 'top' | 'bottom'
}>`
  position: absolute;
  ${({ $horizontal }) => `${$horizontal}: -18px;`}
  ${({ $vertical }) => `${$vertical}: -18px;`}
  width: 36px;
  height: 36px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: #1d8f72;
    border-radius: 999px;
  }

  &::before {
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    transform: translateY(-50%);
  }

  &::after {
    top: 0;
    left: 50%;
    width: 4px;
    height: 100%;
    transform: translateX(-50%);
  }
`

export const Title = styled.h1`
  margin: 0;
  color: #10141b;
  font-size: clamp(3.2rem, 9vw, 7.5rem);
  font-weight: 820;
  line-height: 0.95;
  letter-spacing: 0;
`

export const Availability = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin-top: 20px;
  color: #1d8f72;
  font-size: 0.78rem;
  font-weight: 800;
`

export const Pulse = styled.span`
  position: relative;
  width: 12px;
  height: 12px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 999px;
    background: #1dbf86;
  }

  &::before {
    animation: pulse 1.6s ease-out infinite;
    opacity: 0.55;
  }

  &::after {
    inset: 3px;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.8);
      opacity: 0.75;
    }

    100% {
      transform: scale(2.4);
      opacity: 0;
    }
  }
`

export const Intro = styled.h2`
  margin: 34px 0 0;
  color: #15181f;
  font-size: clamp(1.25rem, 2.4vw, 1.75rem);
  font-weight: 760;
  line-height: 1.25;
  letter-spacing: 0;
`

export const Highlight = styled.span`
  color: #1d8f72;
  font-weight: 850;
`

export const Description = styled.p`
  max-width: 720px;
  margin: 12px auto 0;
  color: #596171;
  font-size: clamp(0.98rem, 1.6vw, 1.1rem);
  line-height: 1.65;
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 34px;
`

export const Action = styled.a<{ $variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border: 1px solid
    ${({ $variant }) =>
      $variant === 'secondary' ? 'rgba(21, 24, 31, 0.12)' : '#15181f'};
  border-radius: 7px;
  background: ${({ $variant }) =>
    $variant === 'secondary' ? 'rgba(255, 255, 255, 0.78)' : '#15181f'};
  color: ${({ $variant }) => ($variant === 'secondary' ? '#15181f' : '#fff')};
  font-weight: 760;
  text-decoration: none;
  box-shadow: ${({ $variant }) =>
    $variant === 'secondary' ? 'none' : '0 18px 34px rgba(21, 24, 31, 0.18)'};
`
