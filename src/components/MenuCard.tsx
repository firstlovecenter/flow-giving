import { Box, Flex, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useCustomColorMode from 'hooks/useCustomColorMode'
import ChakraBox from './ChakraBox'

const MenuCard = ({
  label,
  icon,
  link,
}: {
  icon: JSX.Element
  label: string
  link: string
}) => {
  const navigate = useNavigate()
  const { bg } = useCustomColorMode()

  return (
    <GridItem>
      <ChakraBox animate={{ x: [-20, 0] }}>
        <Box
          onClick={() => {
            navigate(link)
          }}
          boxShadow="sm"
          bg={bg}
          height="100%"
          width="100%"
          paddingY={4}
          paddingX={12}
          borderRadius={20}
        >
          <Flex>
            {icon}

            <Text marginTop={5} marginLeft={5} fontWeight="bold">
              {label}
            </Text>
          </Flex>
        </Box>
      </ChakraBox>
    </GridItem>
  )
}

export default MenuCard
