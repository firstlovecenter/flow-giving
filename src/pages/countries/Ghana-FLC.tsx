import React from 'react'
import { Box, Grid, Text, Heading, VStack, Container } from '@chakra-ui/react'
import ChakraBox from 'components/ChakraBox'
import PayButton from 'components/PayButton'
import useCustomColorMode from '../../hooks/useCustomColorMode'

const FLCGhana = () => {
  const { bg, brand } = useCustomColorMode()

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading fontSize="2xl" marginTop={20} marginBottom={10}>
          First Love Ghana
        </Heading>

        <VStack align="stretch">
          <ChakraBox animate={{ x: [-40, 0] }}>
            <Box dropShadow="2xl" bg={bg} padding={6} borderRadius={20}>
              <Text color="blue.300" fontWeight="bold">
                Mobile Money{' '}
              </Text>
              <Text fontWeight="bold" color="#fcb900">
                MTN
              </Text>

              <Text marginBottom={2} fontSize="2xl">
                024 631 8494
              </Text>
              <Text fontWeight="bold" color="red">
                Vodafone Cash
              </Text>

              <Text marginBottom={2} fontSize="2xl">
                050 041 1795
              </Text>

              <Text as="span" fontWeight="bold" color="red.400">
                Airtel{' '}
              </Text>
              <Text as="span" fontWeight="bold" color="blue.400">
                Tigo
              </Text>

              <Text marginBottom={5} fontSize="2xl">
                027 111 5550
              </Text>

              <Container padding={5}>
                <PayButton option="momo-flc" />
              </Container>

              <Text fontWeight="bold">Bank Account</Text>
              <Text fontWeight="bold" color="blue.300" fontSize="medium">
                Stanbic Bank
              </Text>
              <Text fontSize="medium">First Love Church</Text>
              <Text fontWeight="bold" color="blue.300" fontSize="3xl">
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

export default FLCGhana
