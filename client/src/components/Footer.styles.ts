import styled from 'styled-components'

export const FooterSection = styled.section`
  position: relative;
  width: 100%;
  padding: 96px 16px 40px;
  color: #15181f;
`

export const FooterContainer = styled.div`
  width: min(100%, 1080px);
  margin: 0 auto;
`

export const FooterGrid = styled.footer`
  display: grid;
  gap: 72px;
`

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 2fr) repeat(4, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

export const BrandColumn = styled.div`
  display: grid;
  align-content: start;
  gap: 16px;

  @media (max-width: 920px) {
    grid-column: 1 / -1;
  }
`

export const BrandLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  color: #15181f;
  text-decoration: none;
`

export const BrandMark = styled.span`
  width: 36px;
  height: 36px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  padding: 6px;
  border: 1px solid rgba(21, 24, 31, 0.12);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 14px 28px rgba(21, 24, 31, 0.08);

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

export const LogoImage = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`

export const BrandTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0;
`

export const Tagline = styled.p`
  max-width: 260px;
  margin: 0;
  color: #596171;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
`

export const MenuColumn = styled.nav`
  min-width: 0;
`

export const MenuTitle = styled.h3`
  margin: 0 0 16px;
  color: #15181f;
  font-size: 0.95rem;
  font-weight: 800;
`

export const MenuList = styled.ul`
  display: grid;
  gap: 13px;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const MenuLink = styled.a`
  color: #596171;
  font-size: 0.95rem;
  font-weight: 650;
  line-height: 1.35;
  text-decoration: none;
  transition: color 160ms ease;

  &:hover {
    color: #15181f;
  }
`

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 26px;
  border-top: 1px solid rgba(21, 24, 31, 0.12);
  color: #596171;
  font-size: 0.9rem;
  font-weight: 650;

  @media (max-width: 680px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const Copyright = styled.p`
  margin: 0;
`

export const BottomLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const BottomLink = styled.a`
  color: inherit;
  text-underline-offset: 4px;
  transition: color 160ms ease;

  &:hover {
    color: #15181f;
  }
`
