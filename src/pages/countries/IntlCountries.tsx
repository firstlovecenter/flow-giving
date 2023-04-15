import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import ChakraBox from 'components/ChakraBox'
import useCustomColorMode from 'hooks/useCustomColorMode'

const IntlCountries = () => {
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
                Australia
              </Text>

              <Text marginTop="20px" fontWeight="bold">
                Bank Account
              </Text>
              <Text fontSize="medium">First Love Church</Text>
              <Text fontWeight="bold" fontSize="medium" marginTop={4}>
                SBSB: 082-356
              </Text>
              <Text fontSize="medium" marginTop={2}>
                Bank Account
              </Text>

              <Text fontWeight="bold" color="red.500" fontSize="3xl">
                91-834-8297
              </Text>
              <Text fontSize="medium">SWIFT Code:</Text>
              <Text color="red.500" fontWeight="bold" fontSize="2xl">
                NATAAU3302S
              </Text>
            </Box>
          </ChakraBox>
          <ChakraBox animate={{ x: [-40, 0] }}>
            <Box dropShadow="2xl" bg={bg} padding={6} borderRadius={20}>
              <Text fontSize="2xl" fontWeight="bold">
                Switzerland
              </Text>

              <Text marginTop="20px" fontWeight="bold">
                Bank Account
              </Text>
              <Text fontSize="medium">First Love Church (Switzerland)</Text>
              <Text
                fontWeight="bold"
                color="red.500"
                fontSize="2xl"
                marginTop={4}
              >
                IBAN: CH290023123116890240W
              </Text>
              <Text marginTop={2}>Birgistrasse 7</Text>
              <Text marginTop={2}>8304 Wallisellen</Text>
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

export default IntlCountries
