import styled from 'styled-components'

export const CTASection = styled.section`
  width: 100%;
  padding: 72px 16px 104px;
  color: #15181f;
`

export const Panel = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 32px;
  width: min(100%, 1080px);
  margin: 0 auto;
  padding: clamp(28px, 5vw, 52px);
  border: 1px solid rgba(21, 24, 31, 0.12);
  border-radius: 8px;
  background:
    radial-gradient(circle at 12% 18%, rgba(80, 143, 255, 0.16), transparent 34%),
    radial-gradient(circle at 88% 22%, rgba(42, 189, 159, 0.14), transparent 30%),
    rgba(255, 255, 255, 0.82);
  box-shadow: 0 28px 76px rgba(21, 24, 31, 0.14);

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`

export const Content = styled.div`
  max-width: 660px;
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
  font-size: clamp(2rem, 5vw, 3.8rem);
  font-weight: 840;
  line-height: 1.02;
  letter-spacing: 0;
`

export const Description = styled.p`
  max-width: 600px;
  margin: 16px 0 0;
  color: #596171;
  font-size: 1rem;
  line-height: 1.65;
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 12px;

  @media (max-width: 780px) {
    justify-content: flex-start;
  }
`

export const Action = styled.a<{ $variant?: 'secondary' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border: 1px solid #15181f;
  border-radius: 7px;
  background: ${({ $variant }) => ($variant === 'secondary' ? 'rgba(255, 255, 255, 0.72)' : '#15181f')};
  color: ${({ $variant }) => ($variant === 'secondary' ? '#15181f' : '#fff')};
  font-size: 0.95rem;
  font-weight: 800;
  text-decoration: none;
  box-shadow: ${({ $variant }) =>
    $variant === 'secondary' ? 'none' : '0 18px 34px rgba(21, 24, 31, 0.18)'};
`

export const Proof = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
`

export const ProofItem = styled.span`
  color: #303846;
  font-size: 0.9rem;
  font-weight: 750;

  &::before {
    content: '✓';
    margin-right: 7px;
    color: #15181f;
    font-weight: 900;
  }
`
