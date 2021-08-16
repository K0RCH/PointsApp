import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    justify-content: space-between;
    margin: 6rem auto 0;
    max-width: 1024px;
`

export const SidebarContainer = styled.div`
    padding: 1rem;
    width: 20rem;
    position: fixed;
    right: 2%;

    @media screen and (max-width: 850px) {
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
    width: 100%;
    transition: all 0.2s ease-in-out;

    &:hover {
        border-left: 5px solid #01BF71;
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
    margin-right: 0.75rem;
    -webkit-box-shadow: 0px 0px 0px 3px rgba(1, 191, 113);
    -moz-box-shadow: 0px 0px 0px 3px rgba(1, 191, 113);
    box-shadow: 0px 0px 0px 3px rgba(1, 191, 113);
    object-fit: cover;
`

export const Username = styled.p`
    font-weight: 600;
    color: #01BF71;
`

export const ActiveUserPoints = styled.p`
    color: #bfbfbf;
`

export const SuggestionContainer = styled.div`
    border-top: 1px solid #e6e6e6;
    display: flex;
    flex-direction: column;
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
        border-left: 5px solid #010606;
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
    margin-right: 0.75rem;
    -webkit-box-shadow: 0px 0px 0px 3px rgba(1, 6, 6);
    -moz-box-shadow: 0px 0px 0px 3px rgba(11, 6, 6);
    box-shadow: 0px 0px 0px 3px rgba(1, 6, 6);
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
    color: #010606;
    width: 100%;
`

export const SuggestedProfilePoints = styled.p`
    color: #bfbfbf;
`

export const FollowButton = styled.button`
    position: absolute;
    right: 10px;
    color: #01BF71;
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
    color: #01BF71;
    margin-top: 1.25rem;
`

export const TimelineContainer = styled.div`
    grid-column: span 2 / span 2;
    padding: 1rem;
    position: relative;
    text-align: center;

    @media screen and (max-width: 850px) {
        grid-column: span 3 / span 3;
        align-items: center;
        justify-content: center;
    }
`

export const TimelineText = styled.div`
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
`