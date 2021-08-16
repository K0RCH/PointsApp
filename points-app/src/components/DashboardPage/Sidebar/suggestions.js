import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import { getSuggestedProfiles } from '../../../services/firebase'
import SuggestedProfile from './suggested-profile'
import {
    SuggestionContainer,
    SuggestedUsers
} from '../DashboardElements'

const Suggestions = ({ userId, following, loggedInUserDocId }) => {
    const [profiles, setProfiles] = useState(null)

    useEffect(() => {
        async function suggestedProfiles() {
            const response = await getSuggestedProfiles(userId, following)
            setProfiles(response)
        }

        if (userId) {
            suggestedProfiles()
        }
    }, [userId])

    return !profiles ? (
        <SuggestionContainer>
                <Skeleton count={5} height={80} className='mt-5' />
        </SuggestionContainer>
    ) : profiles.length > 0 ? (
        <SuggestionContainer>
            <SuggestedUsers>
                {profiles.map((profile) => (
                    <SuggestedProfile
                        key={profile.docId}
                        profileDocId={profile.docId}
                        username={profile.username}
                        profileId={profile.userId}
                        profilePoints={profile.points}
                        userId={userId}
                        loggedInUserDocId={loggedInUserDocId}
                    />
                ))}
            </SuggestedUsers>
        </SuggestionContainer>
    ) : null
}

export default Suggestions

Suggestions.propTypes = {
    userId: PropTypes.string,
    following: PropTypes.array,
    loggedInUserDocId: PropTypes.string
}