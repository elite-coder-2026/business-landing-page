import { useEffect, useState } from 'react'
import styled from 'styled-components'
import type { User } from './api/auth'
import { getCurrentUser, logout } from './api/auth'
import { FloatingHeader } from './components/FloatingHeader'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Workflow } from './components/Workflow'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { LoginModal } from './components/LoginModal'
import { RegisterModal } from './components/RegisterModal'

const Page = styled.main`
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  padding: 20px 16px 80px;
  color: #15181f;
  background:
    radial-gradient(circle at 18% 18%, rgba(80, 143, 255, 0.16), transparent 28%),
    radial-gradient(circle at 84% 12%, rgba(42, 189, 159, 0.16), transparent 24%),
    linear-gradient(180deg, #f7f9fc 0%, #ffffff 54%, #eef3f7 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image: radial-gradient(rgba(21, 24, 31, 0.18) 1px, transparent 1px);
    background-size: 14px 14px;
    mask-image: linear-gradient(to bottom, black, transparent 72%);
    pointer-events: none;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 1;
`

function App() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    let mounted = true

    getCurrentUser()
      .then((result) => {
        if (mounted) {
          setUser(result.user)
        }
      })
      .catch(() => {
        if (mounted) {
          setUser(null)
        }
      })

    return () => {
      mounted = false
    }
  }, [])

  const handleLogout = async () => {
    try {
      await logout()
    } finally {
      setUser(null)
    }
  }

  return (
    <Page>
      <Content>
        <FloatingHeader
          user={user}
          onLoginClick={() => setLoginOpen(true)}
          onRegisterClick={() => setRegisterOpen(true)}
          onLogoutClick={handleLogout}
        />

        <Hero />

        <Features />

        <Workflow />

        <Pricing />

        <Testimonials />

        <FAQ />

        <CTA />
        
        <Footer />
      </Content>
      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onAuthenticated={setUser}
        onRegisterClick={() => {
          setLoginOpen(false)
          setRegisterOpen(true)
        }}
      />
      <RegisterModal
        open={registerOpen}
        onClose={() => setRegisterOpen(false)}
        onAuthenticated={setUser}
        onLoginClick={() => {
          setRegisterOpen(false)
          setLoginOpen(true)
        }}
      />
    </Page>
  )
}

export default App
