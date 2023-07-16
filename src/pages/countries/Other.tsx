import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import ChakraBox from 'components/ChakraBox'
import PayButton from 'components/PayButton'
import useCustomColorMode from 'hooks/useCustomColorMode'

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
              <Text fontSize="2xl" fontWeight="bold">
                Online Giving
              </Text>
              <Text marginBottom={2}>Click a button below</Text>
              <PayButton option="paypal" />

              <Container padding={5}>
                <Text>To give using Card or Apple Pay click here!</Text>
                <PayButton option="momo" />
              </Container>

              {/* <Text color={brand} fontWeight="bold">
                SendWave/TapTap Send
              </Text>
              <Text fontSize="2xl" fontWeight="bold" marginBottom={5}>
                (+233) 59 304 0443
              </Text>
              <Text>OR</Text>
              <Text fontSize="2xl" fontWeight="bold" marginBottom={5}>
                (+233) 243 172 171
              </Text>
              <HStack marginBottom="10" justifyContent="space-around">
                <SendWaveLogo />
                <TapTapLogo />
              </HStack> */}
              <Text marginTop="20px" fontWeight="bold">
                Bank Account
              </Text>
              <Text fontWeight="bold" color="red.500" fontSize="medium">
                Absa Bank Ghana Ltd
              </Text>
              <Text fontSize="medium">The Flow Church</Text>
              <Text fontWeight="bold" color="red.500" fontSize="3xl">
                0871081972
              </Text>
              <Text fontSize="medium">SWIFT Code:</Text>
              <Text color="red.500" fontWeight="bold" fontSize="2xl">
                BARCGHAC
              </Text>
              <Text fontSize="medium">Sort Code:</Text>
              <Text color="red.500" fontWeight="bold" fontSize="2xl">
                030164
              </Text>
              <Text marginBottom={5} fontSize="medium">
                Kaneshie Branch
              </Text>
            </Box>
          </ChakraBox>
        </VStack>
      </Grid>
      <Text color={brand} marginTop={50}>
        God Bless You As You Give!
      </Text>
    </Box>
  )
}

export default Other
