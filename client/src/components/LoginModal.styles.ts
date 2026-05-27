import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(16, 20, 27, 0.42);
  backdrop-filter: blur(10px);
`

export const Dialog = styled.div`
  position: relative;
  width: min(100%, 440px);
  overflow: hidden;
  border: 1px solid rgba(21, 24, 31, 0.12);
  border-radius: 8px;
  background:
    radial-gradient(circle at 12% 10%, rgba(80, 143, 255, 0.16), transparent 30%),
    radial-gradient(circle at 92% 8%, rgba(42, 189, 159, 0.14), transparent 28%),
    rgba(255, 255, 255, 0.94);
  box-shadow: 0 34px 90px rgba(16, 20, 27, 0.28);
`

export const Header = styled.div`
  display: grid;
  gap: 8px;
  padding: 28px 28px 18px;
`

export const Title = styled.h2`
  margin: 0;
  color: #10141b;
  font-size: 1.7rem;
  font-weight: 840;
  line-height: 1.1;
  letter-spacing: 0;
`

export const Description = styled.p`
  margin: 0;
  color: #596171;
  font-size: 0.96rem;
  line-height: 1.55;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid rgba(21, 24, 31, 0.12);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.76);
  color: #15181f;
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
`

export const Body = styled.div`
  display: grid;
  gap: 18px;
  padding: 0 28px 28px;
`

export const ProviderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`

export const ProviderButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 44px;
  padding: 0 14px;
  border: 1px solid rgba(21, 24, 31, 0.12);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.82);
  color: #15181f;
  cursor: pointer;
  font-size: 0.94rem;
  font-weight: 800;
`

export const ProviderMark = styled.span<{ $brand: 'google' | 'facebook' }>`
  display: inline-grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: ${({ $brand }) => ($brand === 'google' ? '#fff' : '#1877f2')};
  color: ${({ $brand }) => ($brand === 'google' ? '#15181f' : '#fff')};
  border: 1px solid
    ${({ $brand }) => ($brand === 'google' ? 'rgba(21, 24, 31, 0.12)' : '#1877f2')};
  font-size: 0.82rem;
  font-weight: 900;
`

export const Divider = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  color: #596171;
  font-size: 0.82rem;
  font-weight: 750;

  &::before,
  &::after {
    content: '';
    height: 1px;
    background: rgba(21, 24, 31, 0.1);
  }
`

export const Form = styled.form`
  display: grid;
  gap: 14px;
`

export const Field = styled.label`
  display: grid;
  gap: 7px;
  color: #303846;
  font-size: 0.9rem;
  font-weight: 780;
`

export const Input = styled.input`
  width: 100%;
  min-height: 44px;
  padding: 0 12px;
  border: 1px solid rgba(21, 24, 31, 0.12);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.86);
  color: #15181f;
  outline: none;
  font: inherit;

  &:focus {
    border-color: rgba(21, 24, 31, 0.36);
    box-shadow: 0 0 0 4px rgba(21, 24, 31, 0.08);
  }
`

export const HelperRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: #596171;
  font-size: 0.86rem;
`

export const CheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
`

export const TextLink = styled.a`
  color: #15181f;
  font-weight: 800;
  text-underline-offset: 4px;
`

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border: 1px solid #15181f;
  border-radius: 7px;
  background: #15181f;
  color: #fff;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 800;
  box-shadow: 0 18px 34px rgba(21, 24, 31, 0.18);
`

export const FooterText = styled.p`
  margin: 0;
  color: #596171;
  font-size: 0.9rem;
  line-height: 1.5;
  text-align: center;
`
