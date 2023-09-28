import React, { useEffect, useState } from 'react'
import { FormControl, FormLabel, Input, Container, Button, Checkbox } from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function Login() {

    const [checked, setChecked] = useState(false)
    const [value, setValue] = useState('')

    const handleChange = () => {
        setChecked(!checked);
        console.log("seçili mi değil mi?",checked);
    }; 

    const handleUsername = (e) => {
        setValue(e.target.value)
        if(checked == true){
            localStorage.setItem("unutma",e.target.value)
        }
    }

    useEffect( () => {
        if(checked == false){
            setValue(localStorage.getItem('unutma'))
        }else{
            setValue('')
        }
    }, [] )


    
    return (
        <>
            <Container maxWidth={'sm'} marginTop={50} centerContent>
                <form action="http://127.0.0.1:8000/api/v1/login" method='post'>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input type='text' name='username' onChange={handleUsername} value={value} required />
                        <FormLabel marginTop={2}>Password</FormLabel>
                        <Input type='password'  name='password'  required />
                        <FormLabel marginTop={2}>Beni Hatırla</FormLabel>
                        <Checkbox value={checked} onChange={handleChange} />
                        <Button width={'full'} type='submit' bg={'teal'} marginTop={3}>Submit</Button>
                    </FormControl>
                </form>
            </Container>
        </>
    )
}



