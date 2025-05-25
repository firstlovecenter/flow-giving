import React from 'react'
import { Box, Grid, Text, Heading, VStack, Container } from '@chakra-ui/react'
import ChakraBox from 'components/ChakraBox'
import PayButton from 'components/PayButton'
import useCustomColorMode from '../../hooks/useCustomColorMode'

const Nigeria = () => {
  const { bg, brand } = useCustomColorMode()

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading fontSize="2xl" marginTop={20} marginBottom={10}>
          Nigeria
        </Heading>

        <VStack align="stretch">
          <ChakraBox animate={{ x: [-40, 0] }}>
            <Box dropShadow="2xl" bg={bg} padding={6} borderRadius={20}>
              <Text color={brand} fontWeight="bold">
                Bank Account
              </Text>
              <Text fontWeight="bold" color="green.500" fontSize="medium">
                ECOBANK
              </Text>
              <Text fontSize="medium">Everything by Prayer Church</Text>
              <Text fontWeight="bold" color="green.500" fontSize="3xl">
                2120034823
              </Text>
              <Text marginBottom={5} fontSize="medium">
                Naira Account
              </Text>
              <Container padding={5}>
                <PayButton option="bank" />
              </Container>
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

export default Nigeria
