import {
    ChallengeCompleted,
    ChallengeContainer,
    ChallengeDescription,
    ChallengeName,
    ChallengePoints,
    ChallengeWrapper
} from "./PostElements"

const Challenge = () => {
    return (
        <ChallengeContainer>
            <ChallengeCompleted>Completed!</ChallengeCompleted>
            <ChallengePoints>3</ChallengePoints>
            <ChallengeWrapper>
                <ChallengeName>Challenge Name</ChallengeName>
                <ChallengeDescription>Description contains less than 90 characters. It is short value downloaded from firebase.</ChallengeDescription>
            </ChallengeWrapper>
        </ChallengeContainer>
    )
}

export default Challenge
