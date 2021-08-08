import React from 'react'
import useForm from './useForm'
import validateForm from './validateForm'
import * as ROUTES from '../../constants/routes'
import {
    FormContentRight,
    Form,
    Title,
    FormInputs,
    FormLabel,
    FormInput,
    FormInputBtn,
    FormInputLogin,
    FormLink,
    Error
} from './FormElements'

const FormSignup = ({submitForm}) => {
    const { handleChange, values, handleSignup, errors } = useForm(submitForm, validateForm)

    return (
            <FormContentRight>
                <Form onSubmit={handleSignup}>
                    <Title>Get started with us today! Create your account by filing out the information below.</Title>
                    {errors.global && <Error>{errors.global}</Error>}
                    <FormInputs>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <FormInput aria-label='Enter your username' type='text' name='username' placeholder='Enter your username' id='username' value={values.username} onChange={handleChange} />
                        {errors.username && <Error>{errors.username}</Error>}
                    </FormInputs>
                    <FormInputs>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormInput aria-label='Enter your email' type='email' name='email' placeholder='Enter your email' id='email' value={values.email} onChange={handleChange} />
                        {errors.email && <Error>{errors.email}</Error>}
                    </FormInputs>
                    <FormInputs>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput aria-label='Enter your password' type='password' name='password' placeholder='Enter your password' id='password' value={values.password} onChange={handleChange} />
                        {errors.password && <Error>{errors.password}</Error>}
                    </FormInputs>
                    <FormInputs>
                        <FormLabel htmlFor='password-repeated'>Confirm Password</FormLabel>
                        <FormInput aria-label='Confirm your password' type='password' name='passwordRepeated' placeholder='Repeat your password' id='password-repeated' value={values.passwordRepeated} onChange={handleChange} />
                        {errors.passwordRepeated && <Error>{errors.passwordRepeated}</Error>}
                    </FormInputs>
                    <FormInputBtn type='submit'>Sing up</FormInputBtn>
                    <FormInputLogin>Already have an account? Login <FormLink to={ROUTES.LOGIN}>here</FormLink>.</FormInputLogin>
                </Form>
            </FormContentRight>
    )
}

export default FormSignup
