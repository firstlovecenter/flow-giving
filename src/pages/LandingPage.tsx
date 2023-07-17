import { Box, Grid, Center, Text, Heading } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import Globe from 'assets/flags/Globe'
import MenuCardSmall from 'components/MenuCardSmall'
import UKFlag from 'assets/flags/UKFlag'
import USAFLag from 'assets/flags/USAFlag'
import MenuCard from 'components/MenuCard'
import AustraliaFlag from 'assets/flags/AustraliaFlag'
import GhanaFlag from 'assets/flags/GhanaFlag'
import KenyaFlag from 'assets/flags/KenyaFlag'
import SwitzerlandFlag from 'assets/flags/SwitzerlandFlag'
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
          <Grid w="100%" templateColumns="repeat(2, 1fr)" gap={3}>
            <MenuCardSmall
              icon={<GhanaFlag width="40" height="40" />}
              label="Ghana"
              link="/ghana"
            />
            <MenuCardSmall
              icon={<KenyaFlag width="40" height="40" />}
              label="Kenya"
              link="/kenya"
            />
            <MenuCardSmall
              icon={<UKFlag width="40" height="40" />}
              label="UK"
              link="/uk"
            />
            <MenuCardSmall
              icon={<USAFLag width="40" height="40" />}
              label="USA"
              link="/usa"
            />
            <MenuCardSmall
              icon={<SwitzerlandFlag width="40" height="40" />}
              label="Switzerland"
              link="/switzerland"
            />
            <MenuCardSmall
              icon={<AustraliaFlag width="40" height="40" />}
              label="Australia"
              link="/australia"
            />
          </Grid>
        </Center>
        <Center marginY={4}>
          <Grid w="100%" templateColumns="repeat(1, 1fr)" gap={3}>
            <MenuCard icon={<Globe />} label="All Others" link="/online" />
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
