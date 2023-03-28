import React from 'react'
import { Box, Grid, Text, Heading, VStack, Container } from '@chakra-ui/react'
import ChakraBox from 'components/ChakraBox'
import PayButton from 'components/PayButton'
import useCustomColorMode from '../../hooks/useCustomColorMode'

const Ghana = () => {
  const { bg, brand } = useCustomColorMode()

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading fontSize="2xl" marginTop={20} marginBottom={10}>
          Ghana
        </Heading>

        <VStack align="stretch">
          <ChakraBox animate={{ x: [-40, 0] }}>
            <Box dropShadow="2xl" bg={bg} padding={6} borderRadius={20}>
              <Text color={brand} fontWeight="bold">
                Mobile Money{' '}
              </Text>
              <Text fontWeight="bold" color="#fcb900">
                MTN
              </Text>

              <Text marginBottom={2} fontSize="2xl">
                059 304 0443
              </Text>

              <Text fontWeight="bold" color="blue.200">
                Other networks can now give to the number above
              </Text>

              <Text fontWeight="bold" color="#fcb900" fontSize="medium">
                Merchant ID
              </Text>
              <Text marginBottom={5} fontSize="medium">
                570372
              </Text>
              <Container padding={5}>
                <PayButton option="momo" />
              </Container>

              <Text fontWeight="bold">Bank Account</Text>
              <Text fontWeight="bold" color="red.500" fontSize="medium">
                Stanbic Bank
              </Text>
              <Text fontSize="medium">First Love Church</Text>
              <Text fontWeight="bold" color="red.500" fontSize="3xl">
                9040010841105
              </Text>
              <Text marginBottom={5} fontSize="medium">
                Achimota Main Branch
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

export default Ghana
