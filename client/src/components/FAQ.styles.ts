import styled from 'styled-components'

export const FAQSection = styled.section`
  width: 100%;
  padding: 104px 16px;
  color: #15181f;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 48px;
  width: min(100%, 1080px);
  margin: 0 auto;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 34px;
  }
`

export const Header = styled.div`
  align-self: start;
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

export const ContactCard = styled.div`
  margin-top: 28px;
  padding: 22px;
  border: 1px solid rgba(21, 24, 31, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: 0 18px 46px rgba(21, 24, 31, 0.08);
`

export const ContactLabel = styled.strong`
  display: block;
  color: #15181f;
  font-size: 0.98rem;
`

export const ContactText = styled.p`
  margin: 8px 0 0;
  color: #596171;
  font-size: 0.94rem;
  line-height: 1.55;
`

export const ContactLink = styled.a`
  display: inline-flex;
  margin-top: 16px;
  color: #15181f;
  font-weight: 800;
  text-underline-offset: 4px;
`

export const List = styled.div`
  display: grid;
  gap: 12px;
`

export const Item = styled.article`
  overflow: hidden;
  border: 1px solid rgba(21, 24, 31, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 18px 46px rgba(21, 24, 31, 0.08);
`

export const Question = styled.button`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 18px;
  width: 100%;
  padding: 20px 22px;
  border: 0;
  background: transparent;
  color: #15181f;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  font-weight: 820;
  line-height: 1.35;
`

export const ToggleIcon = styled.span<{ $open: boolean }>`
  position: relative;
  width: 18px;
  height: 18px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14px;
    height: 2px;
    border-radius: 999px;
    background: #15181f;
    transform: translate(-50%, -50%);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(${({ $open }) => ($open ? '0deg' : '90deg')});
    transition: transform 160ms ease;
  }
`

export const Answer = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'block' : 'none')};
  padding: 0 22px 22px;
  color: #596171;
  font-size: 0.96rem;
  line-height: 1.65;
`
