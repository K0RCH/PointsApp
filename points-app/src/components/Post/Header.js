import PropTypes from 'prop-types'
import {
    HeaderContainer,
    HeaderImage,
    HeaderLink,
    HeaderWrapper,
    HeaderUsername
} from './PostElements'

const Header = ({ username }) => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderLink to={`/p/${username}`} title={`Check ${username} profile`}>
                    <HeaderImage
                        src={`/images/avatars/${username}.jpg`}
                        alt={`${username} profile`}
                    />
                    <HeaderUsername>{username}</HeaderUsername>
                </HeaderLink>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header

Header.propTypes = {
    username: PropTypes.string.isRequired
}