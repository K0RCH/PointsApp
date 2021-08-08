import React, { useEffect } from 'react'
import Form from '../components/SignupForm/Form'

const SignupPage = () => {
    useEffect(() => {
        document.title = 'Points App | SignUp'
    }, [])
    
    return (
        <Form />
    )
}

export default SignupPage
