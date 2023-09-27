import React from 'react'
import { FormControl, FormLabel, Input, FormHelperText, Container } from '@chakra-ui/react'

export default function Login() {
    return (
        <>
            <Container maxWidth={'sm'} marginTop={50} centerContent>
                <FormControl >
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
            </Container>
        </>
    )
}



