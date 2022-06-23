import React from 'react'
import { Box, Grid, Text, Heading, VStack } from '@chakra-ui/react'
import ChakraBox from 'components/ChakraBox'
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
              <Text fontWeight="bold" color="#fcb900" fontSize="medium">
                Merchant ID
              </Text>
              <Text marginBottom={5} fontSize="medium">
                5703723
              </Text>

              <Text fontWeight="bold">Bank Account</Text>
              <Text fontWeight="bold" color="red.500" fontSize="medium">
                Zenith Bank
              </Text>
              <Text fontSize="medium">First Love Church</Text>
              <Text fontWeight="bold" color="red.500" fontSize="3xl">
                6010922100
              </Text>
              <Text marginBottom={5} fontSize="medium">
                North Industrial Area Branch
              </Text>
            </Box>
          </ChakraBox>
        </VStack>
      </Grid>
      <Text marginTop={150}>God Bless You As You Give!</Text>
    </Box>
  )
}

export default Ghana
