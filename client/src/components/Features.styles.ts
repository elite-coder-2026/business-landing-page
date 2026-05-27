import styled from 'styled-components'

export const FeaturesSection = styled.section`
  width: 100%;
  padding: 104px 16px;
  color: #15181f;
`

export const Container = styled.div`
  width: min(100%, 1120px);
  margin: 0 auto;
`

export const Header = styled.div`
  display: grid;
  justify-items: center;
  max-width: 680px;
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
  box-shadow: 0 14px 34px rgba(21, 24, 31, 0.08);
`

export const Title = styled.h2`
  margin: 18px 0 0;
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 48px;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.article<{ $featured?: boolean }>`
  position: relative;
  min-height: 220px;
  overflow: hidden;
  padding: 24px;
  border: 1px solid
    ${({ $featured }) =>
      $featured ? 'rgba(21, 24, 31, 0.2)' : 'rgba(21, 24, 31, 0.1)'};
  border-radius: 8px;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, ${({ $featured }) => ($featured ? 0.92 : 0.78)}) 0%,
      rgba(255, 255, 255, 0.58) 100%
    );
  box-shadow: ${({ $featured }) =>
    $featured
      ? '0 28px 72px rgba(21, 24, 31, 0.14)'
      : '0 18px 46px rgba(21, 24, 31, 0.08)'};
`

export const Icon = styled.div`
  display: inline-grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(21, 24, 31, 0.12);
  border-radius: 8px;
  background: rgba(223, 232, 239, 0.48);
  color: #15181f;
  font-size: 1.1rem;
  font-weight: 900;
`

export const CardTitle = styled.h3`
  margin: 22px 0 0;
  color: #15181f;
  font-size: 1.16rem;
  font-weight: 840;
  line-height: 1.2;
  letter-spacing: 0;
`

export const CardCopy = styled.p`
  margin: 10px 0 0;
  color: #596171;
  font-size: 0.96rem;
  line-height: 1.6;
`

export const Metric = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid rgba(21, 24, 31, 0.08);
`

export const MetricValue = styled.strong`
  color: #10141b;
  font-size: 1.65rem;
  font-weight: 840;
  line-height: 1;
`

export const MetricLabel = styled.span`
  color: #596171;
  font-size: 0.88rem;
  font-weight: 700;
`
