import { Box, Grid, Text, Heading, VStack } from '@chakra-ui/react'
import ChakraBox from 'components/ChakraBox'
import PayButton from 'components/PayButton'
import useCustomColorMode from 'hooks/useCustomColorMode'

const USA = () => {
  const { bg, brand } = useCustomColorMode()

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading marginY={20}>United States of America</Heading>

        <VStack align="stretch">
          <ChakraBox animate={{ x: [-40, 0] }}>
            <Box dropShadow="2xl" bg={bg} padding={6} borderRadius={20}>
              <Text color={brand} fontWeight="bold" marginBottom={5}>
                Text to Give
              </Text>
              <Text fontWeight="bold">Flow Offering</Text>
              <Text marginBottom={5}>
                Text{' '}
                <Text as="b" color={brand}>
                  LCI (Amount) FLOW{' '}
                </Text>
                to{' '}
                <Text as="b" color={brand}>
                  45777
                </Text>
              </Text>
              <Text marginBottom={5}>OR</Text>
              <PayButton option="paypal" />
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

export default USA
