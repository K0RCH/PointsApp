import { useContext } from 'react'
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import * as ROUTES from '../../constants/routes'
import {
    HeaderContainer,
    Container,
    NavContainer,
    NavLogo,
    NavWrapper,
    Link,
    SignOutButton,
    NavIcon,
    ProfileAvatar,
    ProfileImg,
    NotUserButton
} from './HeaderElements'
import { GoSignOut } from 'react-icons/go'
import { AiFillHome } from 'react-icons/ai'
import { storageRef } from '../../lib/firebase'

const Header = () => {
    const { firebase } = useContext(FirebaseContext)
    const { user } = useContext(UserContext)

    //  Get the profile picture
    if (user) {
        const userName = user.displayName
        const profilePictureURL = storageRef.child(`avatars/${userName.toLowerCase()}.jpg`)
        const defaultProfilePictureURL = storageRef.child(`avatars/defaultProfilePicture.jpg`)
        
        if (profilePictureURL) {
            profilePictureURL.getDownloadURL()
                .then((url) => {
                    document.getElementById('profile-avatar').setAttribute('src', url)
                })
                .catch((error) => {

                })
        } else {
            defaultProfilePictureURL.getDownloadURL()
                .then((url) => {
                    document.getElementById('profile-avatar').setAttribute('src', url)
                })
                .catch((error) => {

                })
        }
        }
    //

    return (
        <HeaderContainer>
            <Container>
                <NavContainer>
                    <NavLogo to = {ROUTES.DASHBOARD} aria-label='Points App'>Points</NavLogo>
                    <NavWrapper>
                        {user ? (
                            <>
                                <Link to={ ROUTES.DASHBOARD } aria-label='Dashboard' title='Home'>
                                    <NavIcon>
                                        <AiFillHome />
                                    </NavIcon>
                                </Link>
                                <SignOutButton
                                    type='button'
                                    title='Sign Out'
                                    onClick={() => firebase.auth().signOut()}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            firebase.auth().signOut()
                                        }
                                    }}
                                >
                                    <NavIcon>
                                        <GoSignOut />
                                    </NavIcon>
                                </SignOutButton>
                                <ProfileAvatar title='Profile'>
                                    <Link to={`/p/${user.displayName}`}>
                                        <ProfileImg id='profile-avatar' alt={`${user.displayName} profile`} />
                                    </Link>
                                </ProfileAvatar>
                            </>
                        ) : (
                            <>
                                <Link to={ ROUTES.LOGIN }>
                                    <NotUserButton type='button'>Log In</NotUserButton>
                                </Link>
                                <Link to={ ROUTES.SIGN_UP }>
                                    <NotUserButton signUp='true' type='button'>Sign Up</NotUserButton>
                                </Link>
                            </>
                        ) 
                        }
                    </NavWrapper>
                </NavContainer>
            </Container>
        </HeaderContainer>
    )
}

export default Header