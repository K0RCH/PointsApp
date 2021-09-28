import PropTypes from 'prop-types'
import { formatDistance } from 'date-fns'
import {
    DateCreated,
    HeaderContainer,
    HeaderImage,
    HeaderLink,
    HeaderWrapper,
    HeaderUsername
} from './PostElements'

const Header = ({ posted, username }) => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderLink to={`/p/${username}`} title={`Check ${username} profile`}>
                    <HeaderImage
                        src={`/images/avatars/${username}.jpg`}
                        alt={`${username} profile`}
                    />
                    <HeaderUsername>{username}</HeaderUsername>
                    <DateCreated>{formatDistance(posted, new Date())} ago</DateCreated>
                </HeaderLink>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header

Header.propTypes = {
    username: PropTypes.string.isRequired
}