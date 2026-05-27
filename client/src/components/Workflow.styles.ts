import styled from 'styled-components'

export const WorkflowSection = styled.section`
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
  max-width: 690px;
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

export const Flow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: 56px;

  &::before {
    content: '';
    position: absolute;
    top: 44px;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(21, 24, 31, 0.16),
      rgba(21, 24, 31, 0.16),
      transparent
    );
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    &::before {
      top: 0;
      bottom: 0;
      left: 32px;
      right: auto;
      width: 1px;
      height: auto;
      background: linear-gradient(
        180deg,
        transparent,
        rgba(21, 24, 31, 0.16),
        rgba(21, 24, 31, 0.16),
        transparent
      );
    }
  }
`

export const Step = styled.article<{ $active?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 320px;
  padding: 24px;
  border: 1px solid
    ${({ $active }) => ($active ? 'rgba(21, 24, 31, 0.22)' : 'rgba(21, 24, 31, 0.1)')};
  border-radius: 8px;
  background: rgba(255, 255, 255, ${({ $active }) => ($active ? 0.9 : 0.76)});
  box-shadow: ${({ $active }) =>
    $active
      ? '0 28px 72px rgba(21, 24, 31, 0.14)'
      : '0 18px 46px rgba(21, 24, 31, 0.08)'};
`

export const Number = styled.div<{ $active?: boolean }>`
  position: relative;
  z-index: 1;
  display: inline-grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 1px solid ${({ $active }) => ($active ? '#15181f' : 'rgba(21, 24, 31, 0.12)')};
  border-radius: 999px;
  background: ${({ $active }) => ($active ? '#15181f' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : '#15181f')};
  font-size: 0.95rem;
  font-weight: 860;
`

export const StepTitle = styled.h3`
  margin: 28px 0 0;
  color: #15181f;
  font-size: 1.16rem;
  font-weight: 840;
  line-height: 1.2;
`

export const StepCopy = styled.p`
  margin: 10px 0 0;
  color: #596171;
  font-size: 0.96rem;
  line-height: 1.6;
`

export const DetailList = styled.ul`
  display: grid;
  gap: 10px;
  padding: 18px 0 0;
  margin: auto 0 0;
  list-style: none;
`

export const Detail = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: #303846;
  font-size: 0.9rem;
  font-weight: 650;
  line-height: 1.4;

  &::before {
    content: '';
    flex: 0 0 auto;
    width: 6px;
    height: 6px;
    margin-top: 7px;
    border-radius: 999px;
    background: #15181f;
  }
`

export const Summary = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const SummaryCard = styled.div`
  padding: 22px;
  border: 1px solid rgba(21, 24, 31, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: 0 18px 46px rgba(21, 24, 31, 0.08);
`

export const SummaryValue = styled.strong`
  display: block;
  color: #10141b;
  font-size: 1.85rem;
  font-weight: 840;
  line-height: 1;
`

export const SummaryLabel = styled.span`
  display: block;
  margin-top: 10px;
  color: #596171;
  font-size: 0.92rem;
  font-weight: 700;
  line-height: 1.45;
`
