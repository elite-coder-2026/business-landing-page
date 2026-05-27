import { useEffect } from 'react'
import {
  Body,
  CheckboxLabel,
  CloseButton,
  Description,
  Dialog,
  Divider,
  Field,
  FooterText,
  Form,
  Header,
  HelperRow,
  Input,
  Overlay,
  ProviderButton,
  ProviderGrid,
  ProviderMark,
  SubmitButton,
  TextLink,
  Title,
} from './LoginModal.styles'

interface LoginModalProps {
  open?: boolean
  onClose?: () => void
  onRegisterClick?: () => void
}

const noop = () => {}

export function LoginModal({
  open = false,
  onClose = noop,
  onRegisterClick,
}: LoginModalProps) {
  useEffect(() => {
    if (!open) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, open])

  if (!open) {
    return null
  }

  return (
    <Overlay
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <Dialog role="dialog" aria-modal="true" aria-labelledby="login-title">
        <CloseButton type="button" aria-label="Close login modal" onClick={onClose}>
          ×
        </CloseButton>

        <Header>
          <Title id="login-title">Log in to Asme</Title>
          <Description>
            Continue with Google, Facebook, or your email and password.
          </Description>
        </Header>

        <Body>
          <ProviderGrid>
            <ProviderButton type="button">
              <ProviderMark $brand="google">G</ProviderMark>
              Google
            </ProviderButton>
            <ProviderButton type="button">
              <ProviderMark $brand="facebook">f</ProviderMark>
              Facebook
            </ProviderButton>
          </ProviderGrid>

          <Divider>or use email</Divider>

          <Form
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <Field>
              Email
              <Input type="email" name="email" autoComplete="email" required />
            </Field>

            <Field>
              Password
              <Input
                type="password"
                name="password"
                autoComplete="current-password"
                required
              />
            </Field>

            <HelperRow>
              <CheckboxLabel>
                <input type="checkbox" name="remember" />
                Remember me
              </CheckboxLabel>
              <TextLink href="#forgot-password">Forgot password?</TextLink>
            </HelperRow>

            <SubmitButton type="submit">Log In</SubmitButton>
          </Form>

          <FooterText>
            New to Asme?{' '}
            <TextLink
              href="#register"
              onClick={(event) => {
                if (!onRegisterClick) {
                  return
                }

                event.preventDefault()
                onRegisterClick()
              }}
            >
              Create an account
            </TextLink>
          </FooterText>
        </Body>
      </Dialog>
    </Overlay>
  )
}
