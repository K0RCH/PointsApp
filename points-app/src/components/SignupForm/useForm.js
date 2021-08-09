import { useState, useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import FirebaseContext from '../../context/firebase'
import {
    doesUsernameExist
} from '../../services/firebase'
import * as ROUTES from '../../constants/routes'

const useForm = (callback, validateForm) => {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [ values, setValues ] = useState({
        username: '',
        email: '',
        password: '',
        passwordRepeated: ''
    })
    const [ errors, setErrors ] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = event => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSignup = async (event) => {
        event.preventDefault()

        setErrors(validateForm(values))
        setIsSubmitting(true)

        const usernameExists = await doesUsernameExist(values.username)
        if (!usernameExists.length) {
            try {
                const createdUserResult = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(values.email, values.password)

                //  authentication
                await createdUserResult.user.updateProfile({
                    displayName: values.username
                })

                //  firebase user collection (create a document)
                await firebase.firestore().collection('users').add({
                    userId: createdUserResult.user.uid,
                    username: values.username.toLowerCase(),
                    emailAddress: values.email.toLowerCase(),
                    following: [],
                    dateCreated: Date.now()
                })

                history.push(ROUTES.DASHBOARD)
            } catch (error) {
                values.username = ''
                values.email = ''
                values.password = ''
                values.passwordRepeated = ''
                setErrors(error.message)
            }
        } else {
            errors.global = 'That username is already taken, please try another one.'
        }
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    }, [callback, errors, isSubmitting])

    return { handleChange, values, handleSignup, errors }
}

export default useForm