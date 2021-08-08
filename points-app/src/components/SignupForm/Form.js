import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import { FormContainer, FormContentLeft, Icon, CloseBtn, CloseBtnLink } from './FormElements'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosCloseCircle as CloseIcon } from 'react-icons/io'

const Form = () => {
    const [ isSubmitted, setIsSubmitted ] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return (
        <FormContainer>
            <CloseBtn><CloseBtnLink to='/'><CloseIcon /></CloseBtnLink></CloseBtn>
            <FormContentLeft><Icon><FaUserCircle /></Icon></FormContentLeft>
            {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
        </FormContainer>
    )
}

export default Form
