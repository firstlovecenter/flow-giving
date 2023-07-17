import { Box, Center, Flex, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useCustomColorMode from 'hooks/useCustomColorMode'
import ChakraBox from './ChakraBox'

const MenuCardSmall = ({
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
          paddingY={5}
          paddingX={3}
          borderRadius={20}
        >
          <Flex>
            {icon}
            <Center>
              <Text size="sm" marginLeft={3} fontWeight="bold">
                {label}
              </Text>
            </Center>
          </Flex>
        </Box>
      </ChakraBox>
    </GridItem>
  )
}

export default MenuCardSmall
