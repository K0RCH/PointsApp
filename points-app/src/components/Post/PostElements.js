import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const PostContainer = styled.div`
    width: 920px;
    margin: 0 auto;
    display: flex;
    background: #764AA0;
    margin-bottom: 4rem;
    -webkit-box-shadow: 0px 12px 15px 7px rgba(0,0,0,0.04);
    -moz-box-shadow: 0px 12px 15px 7px rgba(0,0,0,0.04);
    box-shadow: 0px 12px 15px 7px rgba(0,0,0,0.04);
    border-radius: 0.75rem;
    border: 1px solid #e6e6e6;

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const PostWrapper = styled.div`
    width: 100%;
`

export const HeaderContainer = styled.div`
    display: flex;
    padding: 3rem 1rem 1px;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderLink = styled(LinkR)`
    display: flex;
    align-items: center;
    text-decoration: none;
    flex-direction: column;
    margin: 0 auto;
`

export const HeaderImage = styled.img`
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    display: flex;
    margin: 0 0.75rem;
    object-fit: cover;
    outline: none;

    @media screen and (max-width: 960px) {
        width: 3rem;
        height: 3rem;
    }

    @media screen and (max-width: 670px) {
        width: 2rem;
        height: 2rem;
    }
`

export const HeaderUsername = styled.p`
    font-weight: 600;
    color: #fff;

    @media screen and (max-width: 960px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 670px) {
        font-size: 0.8rem;
    }
`

export const ChallengeContainer = styled.div`
    border: 3px solid #d124ed;
    -webkit-box-shadow: 0px 0px 15px 7px rgba(209, 36, 237, 0.9);
    -moz-box-shadow: 0px 0px 15px 7px rgba(209, 36, 237, 0.9);
    box-shadow: 0px 0px 15px 7px rgba(209, 36, 237, 0.9);
    width: 90%;
    margin: 2rem auto;
    border-radius: 1rem;
    background: #6E36AB;
    position: relative;

    @media screen and (max-width: 960px) {
        margin: 1rem auto;
    }
`

export const ChallengeWrapper = styled.div`
    padding: 2.5rem 1rem 1.5rem;
    -webkit-box-shadow: inset 0px 0px 15px 7px rgba(209, 36, 237, 0.9);
    -moz-box-shadow: inset 0px 0px 15px 7px rgba(209, 36, 237, 0.9);
    box-shadow: inset 0px 0px 15px 7px rgba(209, 36, 237, 0.9);
`

export const ChallengeName = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    color: #fff;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 960px) {
        font-size: 1.4rem;
    }

    @media screen and (max-width: 670px) {
        font-size: 1.3rem;
    }
`

export const ChallengeDescription = styled.p`
    color: #bfbfbf;
    text-align: center;

    @media screen and (max-width: 960px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 670px) {
        font-size: 0.8rem;
    }
`

export const ChallengeCompleted = styled.p`
    color: #fff;
    font-size: 0.75rem;
    font-weight: 600;
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    background: #d124ed;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;

    @media screen and (max-width: 960px) {
        font-size: 0.65rem;
    }

    @media screen and (max-width: 670px) {
        font-size: 0.55rem;
    }
`

export const ChallengePoints = styled.p`
    color: #fff;
    font-size: 0.75rem;
    font-weight: 600;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    background: #d124ed;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;

    @media screen and (max-width: 960px) {
        font-size: 0.65rem;
    }

    @media screen and (max-width: 670px) {
        font-size: 0.55rem;
    }

    ::before {
        content: '+';
        position: absolute;
        left: -1rem;
        top: -2px;
        color: #d124ed;
        font-size: 1.25rem;

        @media screen and (max-width: 960px) {
            font-size: 1.15rem;
            top: -1px;
            left: -0.75rem;
        }

        @media screen and (max-width: 670px) {
            font-size: 1.05rem;
        }
    }

    ::after {
        content: ' points';
    }
`

export const PostedImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.75rem 0  0 0.75rem;
`

export const ActionBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 4rem;

    @media screen and (max-width: 960px) {
        padding: 0.25rem 1rem;
    }
`

export const ActionIcon = styled.div`
    display: flex;
    color: #fff;
    border-radius: 50%;
    padding: 0.5rem;
    font-size: 2.5rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    outline: none;
    user-select: none;
    margin-right: 1rem;

    & .icon {
        border-radius: 50%;
        padding: 0.5rem;
        background: #6E36AB;
        -webkit-box-shadow: 0px 0px 15px 4px rgba(255, 255, 255, 0.4);
        -moz-box-shadow: 0px 0px 15px 4px rgba(255, 255, 255, 0.4);
        box-shadow: 0px 0px 15px 4px rgba(255, 255, 255, 0.4);
        border: 2px solid #fff;
    }

    & .icon:hover {
        transition: all 0.2s ease-in-out;
        color: #d124ed;
        background: #6E36AB;
        -webkit-box-shadow: 0px 0px 15px 4px rgba(209, 36, 237, 0.9);
        -moz-box-shadow: 0px 0px 15px 4px rgba(209, 36, 237, 0.9);
        box-shadow: 0px 0px 15px 4px rgba(209, 36, 237, 0.9);
        border: 2px solid #d124ed;
    }

    & .toggled-icon {
        color: #d124ed;
        -webkit-box-shadow: 0px 0px 15px 4px rgba(209, 36, 237, 0.9);
        -moz-box-shadow: 0px 0px 15px 4px rgba(209, 36, 237, 0.9);
        box-shadow: 0px 0px 15px 4px rgba(209, 36, 237, 0.9);
        border: 2px solid #d124ed;
    }

    & .toggled-icon:hover {
        color: #bfbfbf;
        -webkit-box-shadow: 0px 0px 15px 4px rgba(191, 191, 191, 0.4);
        -moz-box-shadow: 0px 0px 15px 4px rgba(191, 191, 191, 0.4);
        box-shadow: 0px 0px 15px 4px rgba(191, 191, 191, 0.4);
        border: 2px solid #bfbfbf;
    }
`

export const TextWrapper = styled.div`
    padding: 1rem 1rem 0;
    text-align: left;
`

export const NumberOfLikes = styled.p`
    font-weight: 600;
    color: #fff;

    @media screen and (max-width: 960px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 670px) {
        font-size: 0.8rem;
    }
`

export const FooterContainer = styled.div`
    display: flex;
    padding-bottom: 1rem;
`

export const FooterUsername = styled(LinkR)`
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 960px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 670px) {
        font-size: 0.8rem;
    }

    &:hover {
        opacity: 0.8;
        transition: all 0.2s ease-in-out;
    }
`

export const FooterDescription = styled.span`
    color: #fff;

    @media screen and (max-width: 960px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 670px) {
        font-size: 0.8rem;
    }
`

export const CommentsContainer = styled.div`
    text-align: left;
    padding: 0 1rem 1rem;
`

export const ManyCommentsText = styled.p`
    color: #bfbfbf;
    margin-bottom: 1rem;
    cursor: pointer;
    display: flex;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 960px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 670px) {
        font-size: 0.8rem;
    }

    &:hover {
        color: #fff;
        transition: all 0.2s ease-in-out;
    }
`

export const Icon = styled.div`
    line-height: 1.55rem;
    font-size: 0.75rem;
    margin-left: 0.25rem;
`

export const FewCommentsText = styled.p`
    margin-bottom: 0.5rem;
    border-left: 3px solid #fff;
    padding-left: 5px;
    transition: all 0.2s ease-in-out;
    display: flex;

    @media screen and (max-width: 960px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 670px) {
        font-size: 0.8rem;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgba(191,191,191, 0.25);
        border-left: 3px solid #d124ed;
    }
`

export const CommentatorLink = styled(LinkR)`
    text-decoration: none;
    color: #fff;
    margin-right: 0.5rem;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
`

export const CommentText = styled.p`
    color: #fff;
`

export const DateCreated = styled.p`
    color: #bfbfbf;
    font-size: 0.75rem;
    margin-top: 0.25rem;

    @media screen and (max-width: 960px) {
        font-size: 0.65rem;
    }

    @media screen and (max-width: 670px) {
        font-size: 0.55rem;
    }
`

export const CommentInputContainer = styled.div`
    padding: 1rem;
`

export const CommentForm = styled.form`
    display: flex;
    justify-content: space-between;
`

export const CommentInput = styled.input`
    color: #fff;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 2px solid #bfbfbf;
    padding-bottom: 0.25rem;
    margin-right: 1.25rem;
    background: none;

    @media screen and (max-width: 960px) {
        font-size: 0.75rem;
    }

    @media screen and (max-width: 670px) {
        font-size: 0.65rem;
    }

    &::placeholder {
        color: #fff;
    }

    &:focus {
        border-bottom: 2px solid #d124ed;
    }
`

export const PostButton = styled.button`
    padding: 0.25rem 0.5rem;
    font-weight: 600;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    color: #fff;

    @media screen and (max-width: 960px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 670px) {
        font-size: 0.8rem;
    }

    &:disabled {
        color: #bfbfbf;
        cursor: not-allowed;
    }
`