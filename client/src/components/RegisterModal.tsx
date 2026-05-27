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
  Input,
  Overlay,
  ProviderButton,
  ProviderGrid,
  ProviderMark,
  SubmitButton,
  TextLink,
  Title,
} from './LoginModal.styles'

interface RegisterModalProps {
  open?: boolean
  onClose?: () => void
  onLoginClick?: () => void
}

const noop = () => {}

export function RegisterModal({
  open = false,
  onClose = noop,
  onLoginClick,
}: RegisterModalProps) {
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
      <Dialog role="dialog" aria-modal="true" aria-labelledby="register-title">
        <CloseButton type="button" aria-label="Close register modal" onClick={onClose}>
          ×
        </CloseButton>

        <Header>
          <Title id="register-title">Create your Asme account</Title>
          <Description>
            Start with Google, Facebook, or use your work email and password.
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

          <Divider>or register with email</Divider>

          <Form
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <Field>
              Full name
              <Input type="text" name="name" autoComplete="name" required />
            </Field>

            <Field>
              Email
              <Input type="email" name="email" autoComplete="email" required />
            </Field>

            <Field>
              Password
              <Input
                type="password"
                name="password"
                autoComplete="new-password"
                minLength={8}
                required
              />
            </Field>

            <Field>
              Confirm password
              <Input
                type="password"
                name="confirmPassword"
                autoComplete="new-password"
                minLength={8}
                required
              />
            </Field>

            <CheckboxLabel>
              <input type="checkbox" name="terms" required />
              I agree to the terms and privacy policy
            </CheckboxLabel>

            <SubmitButton type="submit">Create Account</SubmitButton>
          </Form>

          <FooterText>
            Already have an account?{' '}
            <TextLink
              href="#login"
              onClick={(event) => {
                if (!onLoginClick) {
                  return
                }

                event.preventDefault()
                onLoginClick()
              }}
            >
              Log in
            </TextLink>
          </FooterText>
        </Body>
      </Dialog>
    </Overlay>
  )
}
