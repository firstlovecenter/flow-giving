import React from 'react'
import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import ChakraBox from 'components/ChakraBox'
import useCustomColorMode from 'hooks/useCustomColorMode'
import SendWaveLogo from 'assets/images/SendWaveLogo'
import TapTapLogo from 'assets/images/taptap-logo.webp'

const Other = () => {
  const { brand, bg } = useCustomColorMode()

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading fontSize="2xl" marginTop={20} marginBottom={10}>
          International Giving Methods
        </Heading>

        <VStack align="stretch">
          <ChakraBox animate={{ x: [-40, 0] }}>
            <Box dropShadow="2xl" bg={bg} padding={6} borderRadius={20}>
              <Text color={brand} fontWeight="bold">
                SendWave/TapTap Send
              </Text>
              <Text fontSize="2xl" fontWeight="bold" marginBottom={5}>
                (+233) 59 304 0443
              </Text>
              <HStack justifyContent="space-around">
                <SendWaveLogo />
                <Image src={TapTapLogo} height={10} />
              </HStack>
            </Box>
          </ChakraBox>
        </VStack>
      </Grid>
      <Text marginTop={150}>God Bless You As You Give!</Text>
    </Box>
  )
}

export default Other
