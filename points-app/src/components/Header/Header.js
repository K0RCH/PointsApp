import { useContext } from 'react'
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import * as ROUTES from '../../constants/routes'
import {
    HeaderContainer,
    Container,
    NavBar,
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
import { AiOutlineTrophy, AiOutlineHome, AiOutlineLogout } from 'react-icons/ai'

const Header = () => {
    const { firebase } = useContext(FirebaseContext)
    const { user } = useContext(UserContext)

    return (
        <HeaderContainer>
            <Container>
                <NavContainer>
                    <NavLogo to = {ROUTES.DASHBOARD} aria-label='Points App'>Points</NavLogo>
                    <NavWrapper>
                        {user ? (
                            <>
                                <NavBar>
                                    <Link to={ ROUTES.DASHBOARD } aria-label='Dashboard' title='Home'>
                                        <NavIcon>
                                            <AiOutlineHome />
                                        </NavIcon>
                                    </Link>
                                    <Link to={ ROUTES.CHALLENGES } aria-label='Challenges' title='Challenges'>
                                        <NavIcon>
                                            <AiOutlineTrophy />
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
                                            <AiOutlineLogout />
                                        </NavIcon>
                                    </SignOutButton>
                                </NavBar>
                                <ProfileAvatar title='Profile'>
                                    <Link to={`/p/${user.displayName}`}>
                                        <ProfileImg
                                            src={`/images/avatars/${user.displayName}.jpg`}
                                            alt={`${user.displayName} profile`}
                                        />
                                    </Link>
                                </ProfileAvatar>
                            </>
                        ) : (
                            <>
                                <Link to={ ROUTES.LOGIN }>
                                    <NotUserButton type='button'>Log In</NotUserButton>
                                </Link>
                                <Link to={ ROUTES.SIGN_UP }>
                                    <NotUserButton type='button'>Sign Up</NotUserButton>
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