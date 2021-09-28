import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const FooterContainer = styled.div`
    width: 100%;
    place-items: center;
    position: relative;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 100vh;

    @media screen and (max-width: 1280px) {
        grid-template-columns: 1fr;
    }
`

export const FirstFooterContainer = styled.div`
    background: #F3F4F6;
    height: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
`

export const FooterTextWrapper = styled.div`
    margin: 0 auto;
    padding: 8rem 2rem 6rem;
    text-align: center;
    
    @media screen and (min-width: 640px) {
        max-width: 640px;
    }
    
    @media screen and (min-width: 768px) {
        max-width: 768px;
    }
    
    @media screen and (min-width: 1280px) {
        max-width: 512px;
    }
`

export const SectionTitle = styled.h2`
    color: #010606;
    font-size: 2rem;
    padding-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-align: center;
`

export const MainSeparator = styled.div`
    content: '';
    height: 0.3rem;
    width: 4rem;
    background: #d124ed;
    margin: 0.25rem auto 3.75rem;
    border-radius: 4px;
`

export const Separator = styled.div`
    content: '';
    height: 0.3rem;
    width: 2.5rem;
    background: #6E36AB;
    margin: 0.25rem 0 1.5rem;
    border-radius: 4px;
`

export const SectionText = styled.p`
    color: #010606;
    text-align: center;
`

export const FirstFooterBtn = styled.button`
    cursor: pointer;
    margin-top: 4rem;
    padding: 1rem 2rem;
    color: #fff;
    background: #d124ed;
    outline: none;
    border: none;
    border-radius: 2rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #764AA9;
    }
`

export const FirstFooterBtnLink = styled(LinkR)`

`

export const SecondFooterContainer = styled.div`
    background: #764AA9;
    height: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
`

export const SecondFooterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6rem;
`

export const SecondSectionTitle = styled.h3`
    color: #fff;
    font-size: 1.5rem;
    padding-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-align: left;
`

export const FooterCol = styled.div`
    padding: 2rem 0;
    text-align: left;
`

export const ColList = styled.ul`
    list-style: none;
`

export const ListElement = styled.li`
    &:not(:last-child) {
        margin-bottom: 0.25rem;
    }
`

export const ListLink = styled(LinkR)`
    text-decoration: none;
    color: rgba(255, 255, 255, 0.3);
    text-transform: capitalize;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #fff;
        margin-left: 0.5rem;
    }
`

export const SocialMediaLinks = styled.div`

`

export const SocialMediaLink = styled.a`
    display: inline-block;
    color: #fff;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    height: 30px;
    width: 30px;
    text-align: center;
    line-height: 30px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:not(:last-child) {
        margin-right: 10px;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #0A0019;
        border-radius: 50% 0 50% 50%;
    }
`

export const SocialMediaIcon = styled.div`
    display: inline-block;
    font-size: 1rem;
    margin-top: 2px;
`

export const ThirdFooterContainer = styled.div`
    background: #0A0019;
    text-align: center;
    padding: 1rem 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const Copyright = styled.p`
    color: #fff;

    & span {
        margin: 0 0.5rem;
    }
`

export const CopyrightLink = styled(LinkR)`
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #fff;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        text-decoration: underline;
    }
`