import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { getSuggestedProfiles } from '../../../services/firebase'
import SuggestedProfile from './suggested-profile'
import {
    SuggestionContainer,
    SuggestionContainerSkeleton,
    SuggestedUsers,
    SuggestionText,
    Separator
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
    }, [userId, following])

    return !profiles ? (
        <SuggestionContainerSkeleton>
                <SkeletonTheme color="rgba(191,191,191, 0.25)" highlightColor="rgba(191,191,191, 0.26)">
                    <Skeleton count={1} height={500} width={`90%`} className='mt-5' />
                </SkeletonTheme>
        </SuggestionContainerSkeleton>
    ) : profiles.length > 0 ? (
        <SuggestionContainer>
            <SuggestionText>Suggestions for you:</SuggestionText>
            <Separator></Separator>
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