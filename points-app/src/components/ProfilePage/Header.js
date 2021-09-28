import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import useUser from '../../hooks/use-user'
import { isUserFollowingProfile } from '../../services/firebase'
import {
    HeaderContainer,
    HeaderImg,
    HeaderMain,
    HeaderMainWrapper,
    HeaderUsername,
    HeaderWrapper
} from './ProfileElements'

const Header = ({
    photosCount,
    followerCount,
    setFollowerCount,
    profile: {
        docId: profileDocId,
        userId: profileUserId,
        username,
        fullName,
        following = []
    }
}) => {
    const {user} = useUser()
    const [isFollowingProfile, setIsFollowingProfile] = useState(false)
    
    useEffect(() => {
        const isLoggedInUserFollowingProfile = async () => {
            const isFollowing = await isUserFollowingProfile(user.username, profileUserId)
            setIsFollowingProfile(isFollowing)
        }

        if (user.username && profileUserId) {
            isLoggedInUserFollowingProfile()
        }
    }, [user.username, profileUserId])

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderImg
                    alt={`${username} profile picture`}
                    src={`/images/avatars/${username}.jpg`}
                />
                <HeaderMain>
                    <HeaderMainWrapper>
                        <HeaderUsername>{username}</HeaderUsername>
                    </HeaderMainWrapper>
                </HeaderMain>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header

Header.propTypes = {
    photosCount: PropTypes.number.isRequired,
    followerCount: PropTypes.number.isRequired,
    setFollowerCount: PropTypes.func.isRequired,
    profile: PropTypes.shape({
        docId: PropTypes.string,
        userId: PropTypes.string,
        fullName: PropTypes.string,
        username: PropTypes.string,
        following: PropTypes.array
    }).isRequired
}