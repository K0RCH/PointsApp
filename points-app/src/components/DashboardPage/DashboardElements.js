import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const DashboardContainer = styled.div`
    background: #F3F4F6;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1024px;
    min-height: 100vh;
`

export const SidebarContainer = styled.div`
    padding: 1rem 0;
    width: 20rem;
    height: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itemes: center;
    right: 0;
    background: #764AA9;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media screen and (max-width: 1600px) {
        display: none;
    }
`

export const Link = styled(LinkR)`
    text-decoration: none;
    color: #010606;
`

export const ActiveUserContainer = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
    padding: 10px;
    width: 20rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        border-left: 5px solid #fff;
        background: rgba(191,191,191, 0.25);
        padding-left: 15px;
        transition: all 0.2s ease-in-out;
    }
`

export const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NameContainer = styled.div`
    display: block;
    margin: auto 0;
    padding-left: 0.75rem;
`

export const ActiveUserImg = styled.img`
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    display: flex;
    margin: 0 0.75rem 0 1rem;
    -webkit-box-shadow: 0px 0px 0px 3px rgb(230, 230, 230);
    -moz-box-shadow: 0px 0px 0px 3px rgb(230, 230, 230);
    box-shadow: 0px 0px 0px 3px rgb(230, 230, 230);
    object-fit: cover;
`

export const Username = styled.p`
    font-weight: 600;
    color: #fff;
`

export const ActiveUserPoints = styled.p`
    color: #bfbfbf;
`

export const SuggestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
`

export const SuggestionContainerSkeleton = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    text-align: center;
`

export const SuggestedUsers = styled.div`
    margin-top: 1.5rem;
    display: grid;
    gap: 1.25rem;
`

export const SuggestedProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    width: 100%;
    transition: all 0.2s ease-in-out;
    position: relative;

    &:hover {
        border-left: 5px solid #fff;
        background: rgba(191,191,191, 0.25);
        padding-left: 15px;
        transition: all 0.2s ease-in-out;
    }
`

export const SuggestedProfileImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SuggestedProfileImg = styled.img`
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    display: flex;
    margin: 0 0.75rem 0 1rem;
    -webkit-box-shadow: 0px 0px 0px 3px rgb(230, 230, 230);
    -moz-box-shadow: 0px 0px 0px 3px rgb(230, 230, 230);
    box-shadow: 0px 0px 0px 3px rgb(230, 230, 230);
    object-fit: cover;
    outline: none;
`

export const SuggestedProfileLink = styled(LinkR)`
    text-decoration: none;
    color: #010606;
`

export const SuggestedProfileNameContainer = styled.div`

`

export const SuggestedProfileUsername = styled.p`
    font-weight: 600;
    color: #fff;
    width: 100%;
`

export const SuggestedProfilePoints = styled.p`
    color: #bfbfbf;
`

export const FollowButton = styled.button`
    position: absolute;
    right: 1rem;
    color: #fff;
    font-weight: 600;
    background: none;
    border: none;
    outline: none;
    float: right;
    z-index: 2;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        text-decoration: underline;
    }
`

export const SuggestionText = styled.p`
    color: #fff;
    margin: 1.25rem 1rem 0;
    font-weight: 600;
`

export const Separator = styled.div`
    content: '';
    height: 0.3rem;
    width: 2.5rem;
    background: #6E36AB;
    margin: 0.75rem 0 0 1rem;
    border-radius: 4px;
`

export const TimelineContainer = styled.div`
    grid-column: span 3 / span 3;
    padding: 7rem 1rem 1rem;
    position: relative;
    text-align: center;
    place-items: center;
`

export const TimelineText = styled.div`
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
`