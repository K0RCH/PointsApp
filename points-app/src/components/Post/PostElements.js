import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const PostContainer = styled.div`
    width: 460px;
    margin: 0 auto;
    border-radius: 0.25rem;
    grid-column: span 4 / span 4;
    background: #fff;
    border: 1px solid #e6e6e6;
    margin-bottom: 4rem;
    -webkit-box-shadow: 0px 12px 15px 7px rgba(0,0,0,0.01);
    -moz-box-shadow: 0px 12px 15px 7px rgba(0,0,0,0.01);
    box-shadow: 0px 12px 15px 7px rgba(0,0,0,0.01);
`

export const HeaderContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #e6e6e6;
    height: 1rem;
    padding: 2rem 1rem;
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderLink = styled(LinkR)`
    display: flex;
    align-items: center;
    text-decoration: none;
`

export const HeaderImage = styled.img`
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    margin: 0 0.75rem;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(1, 6, 6);
    -moz-box-shadow: 0px 0px 0px 2px rgba(11, 6, 6);
    box-shadow: 0px 0px 0px 2px rgba(1, 6, 6);
    object-fit: cover;
    outline: none;
`

export const HeaderUsername = styled.p`
    font-weight: 600;
    color: #010606;
`

export const PostedImage = styled.img`
    width: 100%;
`

export const ActionBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 4rem;
`

export const ActionIcon = styled.div`
    display: flex;
    color: #010606;
    font-size: 1.5rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    outline: none;
    user-select: none;
    margin-right: 1rem;

    & .icon:hover {
        color: #01BF71;
        transition: all 0.2s ease-in-out;
    }

    & .toggled-icon {
        color: #01BF71;
    }

    & .toggled-icon:hover {
        color: #04ff96;
    }
`

export const TextWrapper = styled.div`
    padding: 0 1rem 0.25rem;
    text-align: left;
`

export const NumberOfLikes = styled.p`
    font-weight: 600;
    color: #010606;
`

export const FooterContainer = styled.div`
    display: flex;
    padding-bottom: 1rem ;
`

export const FooterUsername = styled(LinkR)`
    font-weight: 600;
    color: #010606;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #01BF71;
        transition: all 0.2s ease-in-out;
    }
`

export const FooterDescription = styled.span`
    color: #010606;
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

    &:hover {
        color: #01BF71;
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
    border-left: 3px solid #e6e6e6;
    padding-left: 5px;
    transition: all 0.2s ease-in-out;
    display: flex;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgba(191,191,191, 0.25);
        border-left: 3px solid #01BF71;
    }
`

export const CommentatorLink = styled(LinkR)`
    text-decoration: none;
    color: #010606;
    margin-right: 0.25rem;
    font-weight: 600;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #01BF71;
        transition: all 0.2s ease-in-out;
    }
`

export const CommentText = styled.p`
    color: #010606;
`

export const DateCreated = styled.p`
    color: #bfbfbf;
    font-size: 0.75rem;
    text-align: left;
    padding: 1rem;
`

export const CommentInputContainer = styled.div`
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    padding: 1rem;
`

export const CommentForm = styled.form`
    display: flex;
    justify-content: space-between;
`

export const CommentInput = styled.input`
    color: #010606;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 2px solid #bfbfbf;
    padding-bottom: 0.25rem;
    margin-right: 1.25rem;

    &::placeholder {
        color: #bfbfbf
    }

    &:focus {
        border-bottom: 2px solid #01BF71;
    }
`

export const PostButton = styled.button`
    padding: 0.25rem 0.5rem;
    font-weight: 600;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    color: #01BF71;

    &:disabled {
        color: #bfbfbf;
        cursor: not-allowed;
    }
`