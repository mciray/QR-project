import React from 'react'
import { Button, useColorMode, Box, Heading, ButtonGroup, Input, Show} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function NavbarComp() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={5} bg={['gray.700']} shadow={'lg'}>
        <Box p={2}>
          <Heading size={['xs', 'md']} noOfLines={0}><Link to='/'>Restorant Logo</Link></Heading>
        </Box>
        <Show above='md'>
          <Box w={350}>
            <Input placeholder='Search' size='md' name='search' />
          </Box>
        </Show>
        <Box p={2}>
          <ButtonGroup gap={['0','1']} size={['xs','md']}>
            <Button colorScheme='teal'><Link to='singup'>Kayıt Ol</Link></Button>
            <Button colorScheme='teal'><Link to='login'>Giriş Yap</Link></Button>
            <Button colorScheme='teal' onClick={toggleColorMode}>
              {colorMode === "dark" ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  )
}
