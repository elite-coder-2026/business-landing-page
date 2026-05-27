import styled, { keyframes } from 'styled-components'

const borderTrail = keyframes`
  0% {
    offset-distance: 0%;
  }

  100% {
    offset-distance: 100%;
  }
`

export const PricingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 104px 16px;
  color: #15181f;
`

export const Header = styled.div`
  max-width: 620px;
  text-align: center;
`

export const Title = styled.h2`
  margin: 0;
  color: #10141b;
  font-size: clamp(2rem, 5vw, 3.6rem);
  font-weight: 840;
  line-height: 1.02;
  letter-spacing: 0;
`

export const Description = styled.p`
  margin: 16px 0 0;
  color: #596171;
  font-size: 1rem;
  line-height: 1.65;
`

export const Toggle = styled.div`
  display: inline-flex;
  gap: 4px;
  margin-top: 28px;
  padding: 4px;
  border: 1px solid rgba(21, 24, 31, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 14px 34px rgba(21, 24, 31, 0.08);
`

export const ToggleButton = styled.button<{ $active: boolean }>`
  min-height: 34px;
  padding: 0 16px;
  border: 0;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? '#15181f' : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : '#596171')};
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 760;
  text-transform: capitalize;
  transition:
    background 180ms ease,
    color 180ms ease;
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  width: min(100%, 980px);
  margin-top: 34px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    max-width: 420px;
  }
`

export const Card = styled.article<{ $highlighted?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
  border: 1px solid
    ${({ $highlighted }) =>
      $highlighted ? 'rgba(21, 24, 31, 0.24)' : 'rgba(21, 24, 31, 0.1)'};
  border-radius: 8px;
  background: rgba(255, 255, 255, ${({ $highlighted }) => ($highlighted ? 0.92 : 0.78)});
  box-shadow: ${({ $highlighted }) =>
    $highlighted
      ? '0 28px 72px rgba(21, 24, 31, 0.16)'
      : '0 18px 46px rgba(21, 24, 31, 0.08)'};
`

export const TrailWrap = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  mask:
    linear-gradient(transparent, transparent) padding-box,
    linear-gradient(#000, #000) border-box;
  mask-composite: intersect;
  border: 1px solid transparent;
`

export const Trail = styled.span`
  position: absolute;
  width: 90px;
  aspect-ratio: 1;
  background: #15181f;
  box-shadow:
    0 0 60px 30px rgba(255, 255, 255, 0.5),
    0 0 100px 60px rgba(21, 24, 31, 0.34),
    0 0 140px 90px rgba(21, 24, 31, 0.22);
  offset-path: rect(0 auto auto 0 round 90px);
  animation: ${borderTrail} 5s linear infinite;
`

export const CardHeader = styled.div<{ $highlighted?: boolean }>`
  position: relative;
  padding: 22px;
  border-bottom: 1px solid rgba(21, 24, 31, 0.1);
  background: rgba(223, 232, 239, ${({ $highlighted }) => ($highlighted ? 0.55 : 0.32)});
`

export const Badges = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: flex-end;
`

export const Badge = styled.span<{ $primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-height: 22px;
  padding: 0 8px;
  border: 1px solid rgba(21, 24, 31, 0.12);
  border-radius: 5px;
  background: ${({ $primary }) => ($primary ? '#15181f' : '#fff')};
  color: ${({ $primary }) => ($primary ? '#fff' : '#15181f')};
  font-size: 0.74rem;
  font-weight: 800;
`

export const PlanName = styled.h3`
  margin: 0;
  padding-right: 92px;
  color: #15181f;
  font-size: 1.12rem;
  font-weight: 800;
`

export const PlanInfo = styled.p`
  margin: 6px 0 0;
  color: #596171;
  font-size: 0.92rem;
  line-height: 1.45;
`

export const Price = styled.div`
  display: flex;
  align-items: end;
  gap: 4px;
  margin-top: 14px;
`

export const Amount = styled.span`
  color: #10141b;
  font-size: 2.1rem;
  font-weight: 840;
  line-height: 1;
`

export const Period = styled.span`
  color: #596171;
  font-size: 0.95rem;
  line-height: 1.35;
`

export const Features = styled.div<{ $highlighted?: boolean }>`
  display: grid;
  gap: 15px;
  padding: 24px 22px;
  color: #596171;
  background: rgba(255, 255, 255, ${({ $highlighted }) => ($highlighted ? 0.36 : 0)});
`

export const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;
  font-size: 0.93rem;
  line-height: 1.45;
`

export const Check = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 17px;
  height: 17px;
  margin-top: 2px;
  border-radius: 999px;
  background: #15181f;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 900;
`

export const FeatureText = styled.span<{ $hasTooltip?: boolean }>`
  border-bottom: ${({ $hasTooltip }) =>
    $hasTooltip ? '1px dashed rgba(89, 97, 113, 0.72)' : '0'};
  cursor: ${({ $hasTooltip }) => ($hasTooltip ? 'help' : 'default')};
`

export const CardFooter = styled.div<{ $highlighted?: boolean }>`
  margin-top: auto;
  padding: 14px;
  border-top: 1px solid rgba(21, 24, 31, 0.1);
  background: rgba(223, 232, 239, ${({ $highlighted }) => ($highlighted ? 0.55 : 0.2)});
`

export const CardButton = styled.a<{ $highlighted?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 42px;
  padding: 0 14px;
  border: 1px solid #15181f;
  border-radius: 7px;
  background: ${({ $highlighted }) => ($highlighted ? '#15181f' : 'transparent')};
  color: ${({ $highlighted }) => ($highlighted ? '#fff' : '#15181f')};
  font-size: 0.95rem;
  font-weight: 800;
  text-decoration: none;
  transition:
    background 160ms ease,
    color 160ms ease;

  &:hover {
    background: #15181f;
    color: #fff;
  }
`
