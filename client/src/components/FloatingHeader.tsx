import { type MouseEvent, useState } from 'react'
import type { User } from '../api/auth'
import {
  Actions,
  Brand,
  BrandMark,
  BrandName,
  Button,
  DesktopLinks,
  HeaderShell,
  MenuButton,
  MenuIcon,
  MobileActions,
  MobileLink,
  MobilePanel,
  Nav,
  NavLink,
  SecondaryButton,
} from './FloatingHeader.styles'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
]

interface FloatingHeaderProps {
  user?: User | null
  onLoginClick?: () => void
  onRegisterClick?: () => void
  onLogoutClick?: () => void
}

export function FloatingHeader({
  user,
  onLoginClick,
  onRegisterClick,
  onLogoutClick,
}: FloatingHeaderProps) {
  const [open, setOpen] = useState(false)
  const handleLoginClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onLoginClick) {
      return
    }

    event.preventDefault()
    setOpen(false)
    onLoginClick()
  }
  const handleRegisterClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onRegisterClick) {
      return
    }

    event.preventDefault()
    setOpen(false)
    onRegisterClick()
  }
  const handleLogoutClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onLogoutClick) {
      return
    }

    event.preventDefault()
    setOpen(false)
    onLogoutClick()
  }

  return (
    <HeaderShell>
      <Nav aria-label="Primary navigation">
        <Brand href="#">
          <BrandMark aria-hidden="true">
            <span />
          </BrandMark>
          <BrandName>Asme</BrandName>
        </Brand>

        <DesktopLinks>
          {links.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </DesktopLinks>

        <Actions>
          {user ? (
            <>
              <SecondaryButton href="#account">{user.name}</SecondaryButton>
              <Button href="#logout" onClick={handleLogoutClick}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button href="#login" onClick={handleLoginClick}>
                Login
              </Button>
              <SecondaryButton href="#register" onClick={handleRegisterClick}>
                Register
              </SecondaryButton>
            </>
          )}
          <MenuButton
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            <MenuIcon />
          </MenuButton>
        </Actions>
      </Nav>

      <MobilePanel $open={open}>
        {links.map((link) => (
          <MobileLink key={link.label} href={link.href}>
            {link.label}
          </MobileLink>
        ))}
        <MobileActions>
          {user ? (
            <>
              <SecondaryButton href="#account">{user.name}</SecondaryButton>
              <Button href="#logout" onClick={handleLogoutClick}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <SecondaryButton href="#login" onClick={handleLoginClick}>
                Sign In
              </SecondaryButton>
              <Button href="#register" onClick={handleRegisterClick}>
                Get Started
              </Button>
            </>
          )}
        </MobileActions>
      </MobilePanel>
    </HeaderShell>
  )
}
