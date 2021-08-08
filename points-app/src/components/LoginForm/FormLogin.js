import React from 'react'
import useForm from './useForm'
import * as ROUTES from '../../constants/routes'
import {
    FormContainer,
    Form,
    Title,
    FormInputs,
    FormLabel,
    FormInput,
    FormInputBtn,
    FormInputSignup,
    FormLink,
    CloseBtn,
    CloseBtnLink,
    Error
} from './LoginElements.js'
import { IoIosCloseCircle as CloseIcon } from 'react-icons/io'

const FormLogin = () => {
    const { handleLogin, error, setEmailAddress, setPassword, isInvalid } = useForm()

    return (
        <FormContainer>
            <Form onSubmit={handleLogin} method='POST'>
                <CloseBtn><CloseBtnLink to='/'><CloseIcon /></CloseBtnLink></CloseBtn>
                <Title>Enter the exciting world of adventure! Just login and join your friends.</Title>
                {error.message && <Error>{error.message}</Error>}
                <FormInputs>
                    <FormLabel htmlFor='username'>Email</FormLabel>
                    <FormInput aria-label='Enter your email' type='email' name='email' placeholder='Enter your email' onChange={({ target }) => setEmailAddress(target.value)} />
                    {error.email && <Error>{error.email}</Error>}
                </FormInputs>
                <FormInputs>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <FormInput aria-label='Enter your password' type='password' name='password' placeholder='Enter your password' onChange={({ target }) => setPassword(target.value)} />
                    {error.password && <Error>{error.password}</Error>}
                </FormInputs>
                <FormInputBtn disabled={isInvalid} type='submit'>Login</FormInputBtn>
                <FormInputSignup>Already have an account? Signup <FormLink to={ROUTES.SIGN_UP}>here</FormLink>.</FormInputSignup>
            </Form>
        </FormContainer>
    )
}

export default FormLogin
