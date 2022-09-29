import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Box } from '../styles';

interface Props {
    children?: ReactNode | ReactNode[]
    title?: string
}

export const HomePageLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
          <title>{ title || 'Landing Page' }</title>
          <meta name='author' content='Juan Carlos Guzmán' />
          <meta name='description' content={ title } />
          <meta name='keywords' content={ title } />
      </Head>

      <Box css={{ maxW: '100%', background: '$background' }}>
        { children }
      </Box>
    </>
  )
}