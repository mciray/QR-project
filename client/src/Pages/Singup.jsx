import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Container, Button } from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function Singup() {

    const [value, setValue] = useState()
    const [valueConfirm, setValueConfirm] = useState()

    const handleControl = (event) => {
        setValue(event.target.value)
        console.log(value);
    }

    const handleControlConfirm = (event) => {
        setValueConfirm(event.target.value)
        console.log(valueConfirm);
    }

    const handleCheck = (e) => {
        if (value != valueConfirm) {
            e.preventDefault();
        } else {
            setValue('')
            setValueConfirm('')
        }
    }

    return (
        <>
            <Container maxWidth={'sm'} marginTop={50} centerContent>
                <form action="http://127.0.0.1:8000/api/v1/createuser" method='post'>
                    <FormControl onSubmit={handleCheck}>
                        <FormLabel>Username</FormLabel>
                        <Input type='text' name='username' required />
                        <FormLabel marginTop={2}>Email address</FormLabel>
                        <Input type='email' name='email' required />
                        <FormLabel marginTop={2}>Password</FormLabel>
                        <Input type='password' onChange={handleControl} name='password' value={value} required />
                        <FormLabel marginTop={2}>Password Confirm</FormLabel>
                        <Input type='password' onChange={handleControlConfirm} name='password-confirm' value={valueConfirm} required />
                        <Button type='submit' bg={'teal'} marginTop={2}>Submit</Button>
                    </FormControl>
                </form>
            </Container>
        </>
    )
}



