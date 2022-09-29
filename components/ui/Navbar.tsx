import { Navbar as NextUiNavbar, Text } from '@nextui-org/react';
import { AcmeLogo } from './AcmeLogo';


export const Navbar = () => {
  return (
    <NextUiNavbar
      variant='sticky'
      isBordered
      css={{
        overflow: 'hidden',
        '& .nextui-navbar-container': {
          background: '$background',
          borderBottom: 'none'
        }
      }}
    >
      <NextUiNavbar.Brand>
        <AcmeLogo />
        <Text b color='inherit'>
          ACME
        </Text>
        <NextUiNavbar.Content
          hideIn='sm'
          css={{
            pl: '25rem'
          }}
        >
          <NextUiNavbar.Link isActive href='#'>
            Features
          </NextUiNavbar.Link>
          <NextUiNavbar.Link href='#'>
            Customers
          </NextUiNavbar.Link>
          <NextUiNavbar.Link href='#'>
            Pricing
          </NextUiNavbar.Link>
          <NextUiNavbar.Link href='#'>
            Company
          </NextUiNavbar.Link>
        </NextUiNavbar.Content>
      </NextUiNavbar.Brand>
    </NextUiNavbar>
  )
}