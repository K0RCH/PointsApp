import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getUserByUsername } from '../services/firebase'
import * as ROUTES from '../constants/routes'
import {
    ProfileContainer,
    ProfileWrapper
} from '../components/ProfilePage/ProfileElements'
import Header from '../components/Header/Header'
import UserProfile from '../components/ProfilePage/UserProfile'

const Profile = () => {
    const { username } = useParams()
    const [user, setUser] = useState(null)
    const history = useHistory()

    useEffect(() => {
        async function checkUserExists() {
            const user = await getUserByUsername(username)
            if (user.length > 0) {
                setUser(user[0])
            } else {
                history.push(ROUTES.NOT_FOUND)
            }
        }

        checkUserExists()
    }, [username, history])

    useEffect(() => {
        document.title = `Points App | ${username} profile`
    }, [username])

    return user?.username ? (
        <>
            <Header />
            <ProfileContainer>
                <ProfileWrapper>
                    <UserProfile user={user} />
                </ProfileWrapper>
            </ProfileContainer>
        </>
    ) : null
}

export default Profile
