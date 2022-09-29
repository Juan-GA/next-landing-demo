import { Divider, Text } from "@nextui-org/react";
import { Box, Flex } from "../styles";


export const Hero = () => {
  return (
    <>
        <Flex
            css={{
                gap: '$3',
                px: '$6',
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                '@sm': {
                    flexDirection: 'row',
                    mt: '$20',
                },

            }}
            justify={'center'}
        >
            <Box
                css={{
                    pt: '$13',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '$5'
                }}
            >
                <Box css={{
                    maxWidth: '600px'
                }}>
                    <Text
                        h1
                        css={{ display: 'inline' }}
                    >
                        Description of{' '}
                    </Text>
                    <Text
                        h1
                        css={{ display: 'inline' }}
                    >
                        your{' '}
                    </Text>
                    <Text
                        h1
                        css={{ display: 'inline' }}
                        color='primary'
                    >
                        business
                    </Text>
                </Box>

                <Text
                    css={{
                        color: '$accents8',
                        maxWidth: '400px'
                    }}
                    size='$lg'
                    span
                >
                    Do duis aliqua minim sint quis elit pariatur enim ad anim consequat officia excepteur.
                    Ut dolore commodo deserunt incididunt magna labore. Anim occaecat sit proident aute id eu consectetur.
                </Text>
            </Box>

            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  }
               }}
            >
               <img src="mock.png" alt="mock.png"/>
            </Box>
        </Flex>
        <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$10' }}/>
    </>
  )
}
