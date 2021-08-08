import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import FirebaseContext from '../../context/firebase'
import * as ROUTES from '../../constants/routes'

const useForm = () => {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')
    const isInvalid = password === '' || emailAddress === ''

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password)
            history.push(ROUTES.DASHBOARD)
        } catch (error) {
            setEmailAddress('')
            setPassword('')
            setError(error.message)
        }
    }

    useEffect(() => {
        document.title = 'Points App | Login'
    }, [])

    return { handleLogin, error, setEmailAddress, setPassword, isInvalid }
}

export default useForm
