import React, { useState } from 'react'
import { Button, useColorMode, Box, Spacer, Flex, Heading, ButtonGroup } from '@chakra-ui/react'


export default function NavbarComp() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
          <Heading size='md'>Chakra App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme='teal'>Sign Up</Button>
          <Button colorScheme='teal'>Log in</Button>
          <Button colorScheme='teal' onClick={toggleColorMode}>
            {colorMode == "dark" ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>}
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  )
}
