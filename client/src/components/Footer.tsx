import {
  BottomLink,
  BottomLinks,
  BrandColumn,
  BrandLink,
  BrandMark,
  BrandTitle,
  Copyright,
  FooterBottom,
  FooterContainer,
  FooterGrid,
  FooterSection,
  FooterTop,
  LogoImage,
  MenuColumn,
  MenuLink,
  MenuList,
  MenuTitle,
  Tagline,
} from './Footer.styles'

interface MenuItem {
  title: string
  links: {
    text: string
    url: string
  }[]
}

interface FooterProps {
  logo?: {
    url: string
    src?: string
    alt: string
    title: string
  }
  tagline?: string
  menuItems?: MenuItem[]
  copyright?: string
  bottomLinks?: {
    text: string
    url: string
  }[]
}

const defaultMenuItems: MenuItem[] = [
  {
    title: 'Product',
    links: [
      { text: 'Overview', url: '#features' },
      { text: 'Pricing', url: '#pricing' },
      { text: 'Marketplace', url: '#' },
      { text: 'Features', url: '#features' },
      { text: 'Integrations', url: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About', url: '#about' },
      { text: 'Team', url: '#' },
      { text: 'Blog', url: '#' },
      { text: 'Careers', url: '#' },
      { text: 'Contact', url: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { text: 'Help', url: '#' },
      { text: 'Sales', url: '#' },
      { text: 'Advertise', url: '#' },
    ],
  },
  {
    title: 'Social',
    links: [
      { text: 'Twitter', url: '#' },
      { text: 'Instagram', url: '#' },
      { text: 'LinkedIn', url: '#' },
    ],
  },
]

const defaultBottomLinks = [
  { text: 'Terms and Conditions', url: '#' },
  { text: 'Privacy Policy', url: '#' },
]

export function Footer({
  logo = {
    alt: 'Asme',
    title: 'Asme',
    url: '#',
  },
  tagline = 'Business operations made simpler.',
  menuItems = defaultMenuItems,
  copyright = '© 2026 Asme. All rights reserved.',
  bottomLinks = defaultBottomLinks,
}: FooterProps) {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterGrid>
          <FooterTop>
            <BrandColumn>
              <BrandLink href={logo.url} aria-label={logo.alt}>
                {logo.src ? (
                  <LogoImage src={logo.src} alt={logo.alt} title={logo.title} />
                ) : (
                  <BrandMark aria-hidden="true">
                    <span />
                  </BrandMark>
                )}
                <BrandTitle>{logo.title}</BrandTitle>
              </BrandLink>
              <Tagline>{tagline}</Tagline>
            </BrandColumn>

            {menuItems.map((section) => (
              <MenuColumn key={section.title} aria-label={`${section.title} links`}>
                <MenuTitle>{section.title}</MenuTitle>
                <MenuList>
                  {section.links.map((link) => (
                    <li key={`${section.title}-${link.text}`}>
                      <MenuLink href={link.url}>{link.text}</MenuLink>
                    </li>
                  ))}
                </MenuList>
              </MenuColumn>
            ))}
          </FooterTop>

          <FooterBottom>
            <Copyright>{copyright}</Copyright>
            <BottomLinks>
              {bottomLinks.map((link) => (
                <li key={link.text}>
                  <BottomLink href={link.url}>{link.text}</BottomLink>
                </li>
              ))}
            </BottomLinks>
          </FooterBottom>
        </FooterGrid>
      </FooterContainer>
    </FooterSection>
  )
}
