import { Box, Grid, Center, Text, Heading } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import Globe from 'assets/flags/Globe'
import UKFlag from 'assets/flags/UKFlag'
import USAFLag from 'assets/flags/USAFlag'
import MenuCard from 'components/MenuCard'
import GhanaFlag from 'assets/flags/GhanaFlag'
import useCustomColorMode from '../hooks/useCustomColorMode'
import Ghana from './countries/Ghana'
import FLCGhana from './countries/Ghana-FLC'

const LandingPage = () => {
  const { brand } = useCustomColorMode()

  const location = useLocation()
  if (location.pathname === '/ghana') {
    return <Ghana />
  }

  if (location.pathname === '/flc-ghana') {
    return <FLCGhana />
  }

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading fontSize="3xl" textTransform="uppercase" marginTop={20}>
          Flow Offering
        </Heading>
        <Text marginBottom={10} color={brand}>
          Give a flow offering today!
        </Text>
        <Center>
          <Grid w="80%" templateColumns="repeat(1, 1fr)" gap={3}>
            <MenuCard icon={<Globe />} label="Online" link="/online" />
            <MenuCard icon={<GhanaFlag />} label="Ghana" link="/ghana" />
            <MenuCard icon={<UKFlag />} label="UK" link="/uk" />
            <MenuCard icon={<USAFLag />} label="USA" link="/usa" />
            <MenuCard icon={<Globe />} label="Other" link="/other-countries" />
          </Grid>
        </Center>
      </Grid>
      <Text color={brand} marginTop={50}>
        God Bless You As You Give!
      </Text>
    </Box>
  )
}

export default LandingPage
