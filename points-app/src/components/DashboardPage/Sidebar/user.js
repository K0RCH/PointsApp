import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import {
    Link,
    ActiveUserContainer,
    ActiveUserImg,
    ImgContainer,
    NameContainer,
    Username,
    ActiveUserPoints
} from '../DashboardElements'

const User = ({ username, points }) => 
    !username ? (
        <Skeleton count={1} height={80} />
    ) : (
        <Link to={`/p/${username}`}>
            <ActiveUserContainer title='Check your profile'>
                <ImgContainer>
                    <ActiveUserImg
                        src={`/images/avatars/${username}.jpg`}
                        alt={`${username}`}
                    />  
                </ImgContainer>
                <NameContainer>
                    <Username>{username}</Username>
                    <ActiveUserPoints>{points} points</ActiveUserPoints>
                </NameContainer>
            </ActiveUserContainer>
        </Link>
    )

export default User

User.propTypes = {
    username: PropTypes.string.isRequired
}

User.whyDidYouRender = true