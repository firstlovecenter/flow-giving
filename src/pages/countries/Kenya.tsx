import { Box, Grid, Text, Heading, VStack } from '@chakra-ui/react'
import ChakraBox from 'components/ChakraBox'
import useCustomColorMode from 'hooks/useCustomColorMode'

const Kenya = () => {
  const { bg, brand } = useCustomColorMode()

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading marginY={20}>Kenya</Heading>

        <VStack align="stretch">
          <ChakraBox animate={{ x: [-40, 0] }}>
            <Box dropShadow="2xl" bg={bg} padding={6} borderRadius={20}>
              <Text fontSize="2xl" fontWeight="bold">
                Kenya
              </Text>

              <Text marginTop="20px" fontWeight="bold">
                Mpesa Paybill Number
              </Text>
              <Text
                fontWeight="bold"
                color="red.500"
                fontSize="2xl"
                marginTop={4}
              >
                4113107
              </Text>
              <Text fontSize="medium">Account - Offering Description</Text>

              <Text marginTop="20px" fontWeight="bold">
                Outside Kenya
              </Text>
              <Text fontSize="medium">Phone Number</Text>
              <Text
                fontWeight="bold"
                color="red.500"
                fontSize="2xl"
                marginTop={4}
              >
                +254799 80 20 74
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

export default Kenya
