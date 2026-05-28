import styled from 'styled-components'

export const HeaderShell = styled.header`
  position: sticky;
  top: 20px;
  z-index: 50;
  width: min(100% - 32px, 760px);
  margin: 0 auto;
  border: 1px solid rgba(19, 24, 32, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.84);
  box-shadow: 0 18px 48px rgba(19, 24, 32, 0.1);
  backdrop-filter: blur(18px);

  @media (max-width: 520px) {
    top: 12px;
    width: min(100% - 16px, 760px);
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 6px;
`

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 36px;
  padding: 6px 10px;
  border-radius: 6px;
  color: #15181f;
  text-decoration: none;
  transition: background 160ms ease;

  &:hover {
    background: rgba(20, 27, 38, 0.06);
  }
`

export const BrandMark = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
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

export const BrandName = styled.span`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0;
`

export const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 760px) {
    display: none;
  }
`

export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 0 12px;
  border-radius: 6px;
  color: #4d5563;
  font-size: 0.92rem;
  font-weight: 650;
  text-decoration: none;
  transition:
    background 160ms ease,
    color 160ms ease;

  &:hover {
    background: rgba(20, 27, 38, 0.06);
    color: #15181f;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 520px) {
    > a {
      display: none;
    }
  }
`

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 0 14px;
  border: 1px solid #15181f;
  border-radius: 6px;
  background: #15181f;
  color: #fff;
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 10px 24px rgba(21, 24, 31, 0.14);
`

export const MenuButton = styled.button`
  display: none;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(19, 24, 32, 0.14);
  border-radius: 6px;
  background: #fff;
  color: #15181f;
  cursor: pointer;

  @media (max-width: 760px) {
    display: inline-flex;
  }
`

export const MenuIcon = styled.span`
  position: relative;
  width: 16px;
  height: 12px;

  &,
  &::before,
  &::after {
    border-top: 2px solid currentColor;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 16px;
  }

  &::before {
    top: 4px;
  }

  &::after {
    top: 10px;
  }
`

export const MobilePanel = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 760px) {
    display: ${({ $open }) => ($open ? 'grid' : 'none')};
    gap: 8px;
    padding: 8px 6px 10px;
    border-top: 1px solid rgba(19, 24, 32, 0.08);
  }
`

export const MobileLink = styled(NavLink)`
  justify-content: flex-start;
  width: 100%;
`

export const MobileActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 4px;
`

export const SecondaryButton = styled(Button)`
  border-color: rgba(19, 24, 32, 0.14);
  background: #fff;
  color: #15181f;
  box-shadow: none;
`
