import styled from 'styled-components'

export const TableSection = styled.section`
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
  max-width: 660px;
  margin: 0 auto 34px;
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
  margin-top: 26px;
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
`

export const TableWrap = styled.div`
  overflow: hidden;
  border: 1px solid rgba(21, 24, 31, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 24px 70px rgba(21, 24, 31, 0.1);

  @media (max-width: 840px) {
    display: none;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`

export const HeadCell = styled.th<{ $highlighted?: boolean }>`
  position: relative;
  padding: 24px 22px;
  border-bottom: 1px solid rgba(21, 24, 31, 0.1);
  border-left: 1px solid rgba(21, 24, 31, 0.08);
  background: rgba(223, 232, 239, ${({ $highlighted }) => ($highlighted ? 0.62 : 0.32)});
  text-align: left;
  vertical-align: top;

  &:first-child {
    border-left: 0;
    background: rgba(255, 255, 255, 0.44);
  }
`

export const PlanBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 0 8px;
  margin-bottom: 10px;
  border: 1px solid rgba(21, 24, 31, 0.12);
  border-radius: 5px;
  background: #15181f;
  color: #fff;
  font-size: 0.74rem;
  font-weight: 800;
`

export const PlanName = styled.div`
  color: #15181f;
  font-size: 1.1rem;
  font-weight: 840;
`

export const PlanInfo = styled.div`
  margin-top: 6px;
  color: #596171;
  font-size: 0.9rem;
  font-weight: 600;
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
  font-size: 2rem;
  font-weight: 840;
  line-height: 1;
`

export const Period = styled.span`
  color: #596171;
  font-size: 0.92rem;
  font-weight: 650;
`

export const RowHeader = styled.th`
  width: 28%;
  padding: 18px 22px;
  border-top: 1px solid rgba(21, 24, 31, 0.08);
  color: #303846;
  font-size: 0.94rem;
  font-weight: 760;
  text-align: left;
`

export const Cell = styled.td<{ $highlighted?: boolean }>`
  padding: 18px 22px;
  border-top: 1px solid rgba(21, 24, 31, 0.08);
  border-left: 1px solid rgba(21, 24, 31, 0.08);
  background: rgba(255, 255, 255, ${({ $highlighted }) => ($highlighted ? 0.42 : 0)});
  color: #596171;
  font-size: 0.94rem;
  font-weight: 650;
  line-height: 1.45;
`

export const Included = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  background: #15181f;
  color: #fff;
  font-size: 0.76rem;
  font-weight: 900;
`

export const ActionRow = styled.tr`
  th,
  td {
    padding-top: 22px;
    padding-bottom: 22px;
  }
`

export const Button = styled.a<{ $highlighted?: boolean }>`
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
  font-size: 0.94rem;
  font-weight: 800;
  text-decoration: none;

  &:hover {
    background: #15181f;
    color: #fff;
  }
`

export const MobilePlans = styled.div`
  display: none;
  gap: 16px;

  @media (max-width: 840px) {
    display: grid;
  }
`

export const MobilePlan = styled.article<{ $highlighted?: boolean }>`
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

export const MobilePlanHeader = styled.div<{ $highlighted?: boolean }>`
  padding: 22px;
  border-bottom: 1px solid rgba(21, 24, 31, 0.1);
  background: rgba(223, 232, 239, ${({ $highlighted }) => ($highlighted ? 0.58 : 0.32)});
`

export const MobileFeatureList = styled.dl`
  display: grid;
  gap: 0;
  margin: 0;
`

export const MobileFeature = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 16px;
  padding: 16px 22px;
  border-top: 1px solid rgba(21, 24, 31, 0.08);
`

export const MobileFeatureName = styled.dt`
  color: #303846;
  font-weight: 760;
`

export const MobileFeatureValue = styled.dd`
  margin: 0;
  color: #596171;
  font-weight: 650;
  text-align: right;
`

export const MobileFooter = styled.div`
  padding: 14px;
  border-top: 1px solid rgba(21, 24, 31, 0.1);
`
