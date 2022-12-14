import { Card, Divider, Text } from "@nextui-org/react"
import { BoxIcon } from "../icons"
import { Box, Flex } from "../styles"


export const Features3 = () => {
  return (
    <>
        <Box css={{ px: '$6', pb: '$14' }}>
            <Flex
                direction='column'
                justify='center'
                align='center'
                css={{ pt: '$20'}}
            >
                <Text span css={{ color: '$blue600' }}>
                    Awesome Feature
                </Text>
                <Text h3>Your title here</Text>
                <Text span css={{ maxWidth: '800px', color: '$accents8', textAlign: 'center' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
                    nec
                </Text>
            </Flex>

            <Flex
                align='center'
                justify='center'
                wrap='wrap'
                css={{ gap: '1rem', pt: '$14' }}
            >
                <Card css={{ mw: '500px' }}>
                    <Card.Body>
                        <Flex css={{ gap: '0.5rem' }}>
                            <BoxIcon />
                            <Flex direction='column'>
                                <Text h5>Your title here</Text>
                                <Text span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Sed condimentum, nisl ut aliquam lacinia,
                                    nisl nisl aliquet nisl, nec
                                </Text>
                            </Flex>
                        </Flex>
                    </Card.Body>
                </Card>

                <Card css={{ mw: '500px' }}>
                    <Card.Body>
                        <Flex css={{ gap: '0.5rem' }}>
                            <BoxIcon />
                            <Flex direction='column'>
                                <Text h5>Your title here</Text>
                                <Text span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Sed condimentum, nisl ut aliquam lacinia,
                                    nisl nisl aliquet nisl, nec
                                </Text>
                            </Flex>
                        </Flex>
                    </Card.Body>
                </Card>

                <Card css={{ mw: '500px' }}>
                    <Card.Body>
                        <Flex css={{ gap: '0.5rem' }}>
                            <BoxIcon />
                            <Flex direction='column'>
                                <Text h5>Your title here</Text>
                                <Text span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Sed condimentum, nisl ut aliquam lacinia,
                                    nisl nisl aliquet nisl, nec
                                </Text>
                            </Flex>
                        </Flex>
                    </Card.Body>
                </Card>

                <Card css={{ mw: '500px' }}>
                    <Card.Body>
                        <Flex css={{ gap: '0.5rem' }}>
                            <BoxIcon />
                            <Flex direction='column'>
                                <Text h5>Your title here</Text>
                                <Text span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Sed condimentum, nisl ut aliquam lacinia,
                                    nisl nisl aliquet nisl, nec
                                </Text>
                            </Flex>
                        </Flex>
                    </Card.Body>
                </Card>
            </Flex>
        </Box>
        <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }} />
    </>
  )
}
