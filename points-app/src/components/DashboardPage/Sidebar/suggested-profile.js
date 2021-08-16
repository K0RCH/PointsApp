import { useState } from 'react'
import PropTypes from 'prop-types'
import { updateLoggedInUserFollowing, updateFollowedUserFollowers } from '../../../services/firebase'
import {
    SuggestedProfileContainer,
    SuggestedProfileImgContainer,
    SuggestedProfileImg,
    SuggestedProfileLink,
    SuggestedProfileNameContainer,
    SuggestedProfileUsername,
    SuggestedProfilePoints,
    FollowButton
} from '../DashboardElements'

const SuggestedProfile = ({ 
    profileDocId,
    username,
    profileId,
    profilePoints,
    userId,
    loggedInUserDocId
}) => {
    const [followed, setFollowed] = useState(false)

    async function handleFollowUser() {
        setFollowed(true)

        await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false)

        await updateFollowedUserFollowers(profileDocId, userId, false)
    }

    return !followed ? (
        <SuggestedProfileLink>
            <SuggestedProfileContainer title={`Check ${username} profile`}>
                <SuggestedProfileImgContainer>
                    <SuggestedProfileImg
                        className='suggested-profile-avatar'
                        src={`/images/avatars/${username}.jpg`}
                        alt={`${username} profile`}
                    />
                </SuggestedProfileImgContainer>
                <SuggestedProfileNameContainer>
                    <SuggestedProfileUsername>
                        {username}
                        <FollowButton
                            title={`Follow ${username}`}
                            type='button'
                            onClick={handleFollowUser}
                        >
                            + Follow
                        </FollowButton>
                    </SuggestedProfileUsername>
                    <SuggestedProfilePoints>{profilePoints} points</SuggestedProfilePoints>
                </SuggestedProfileNameContainer>
            </SuggestedProfileContainer>
        </SuggestedProfileLink>
    ) : null
}

export default SuggestedProfile

SuggestedProfile.propTypes = {
    profileDocId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    loggedInUserDocId: PropTypes.string.isRequired
}