import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const FooterSectionContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => ( lightBg ? '#f9f9f9' : '#010606' )};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const Copyright = styled.div`
    color: #fff;
    width: 100%;
    padding: 20px 0;
    text-align: center;
`

export const Span = styled.span`
    padding: 0 10px;
`

export const Scroll = styled(LinkS)`
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #01bf71;
        text-decoration: underline;
    }
`

export const FooterWrapper = styled.div`
    background: #121212;
    padding: 70px 0;
    line-height: 1.5;
`

export const FooterContainer = styled.div`
    max-width: 1170px;
    margin: auto;
`

export const FooterRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const FooterCol = styled.div`
    width: 25%;
    padding: 0 15px;

    @media screen and (max-width: 768px) {
        width: 50%;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 486px) {
        width: 100%;
    }
`

export const ColTitle = styled.h4`
    font-size: 18px;
    color: #fff;
    text-transform: capitalize;
    margin-bottom: 40px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -12px;
        background: #01bf71;
        height: 4px;
        box-sizing: border-box;
        width: 50px;
    }
`

export const ColList = styled.ul`
    list-style: none;
`

export const ListElement = styled.li`
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`

export const SmLinks = styled.div`
    
`

export const ListLink = styled(LinkR)`
    font-size: 16px;
    text-transform: capitalize;
    text-decoration: none;
    color: #bbb;
    font-weight: 300;
    display: block;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #fff;
        padding-left: 10px;
    }
`

export const SmLink = styled(LinkR)`
    display: inline-block;
    color: #fff;
    background: #010606;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 40px;
    text-decoration: none;
    margin: 5px 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #01bf71;
        border-radius: 50% 0 50% 50%;
    }
`

export const Icon = styled.p`
    display: inline-block;
    font-size: 20px;
    margin-top: 2px;
`

export const Newsletter = styled.div`
    color: #fff;
    background: ${({ lightBg }) => ( lightBg ? '#f9f9f9' : '#1a1a1a' )};
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    padding: 150px 0 100px;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 48px;
`

export const Heading = styled.h1`
    margin-bottom: 64px;
    font-size: 48px;
    line-height: 1.1%;
    font-weight: 600;
    color: ${({ lightText }) => ( lightText ? '#f7f8fa' : '#010606' )};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => ( darkText ? '#010606' : '#fff' )};

    @media screen and (max-width: 768px) {
        margin: 0 auto;
    }
`

export const Input = styled.input`
    border: 3px solid #01bf71;
    padding: 20px 30px;
    outline: none;
    color: #01bf71;
    border-radius: 50px;
    min-width: 400px;
    margin-top: 40px;
    font-weight: 700;
`

export const NewsletterBtn = styled.button`
    border-radius: 50px;
    padding: 20px 30px;
    color: #fff;
    background: #01bf71;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    margin: 0 auto;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const Form = styled.form``

export const NewsletterBtnIcon = styled.div`
    padding-right: 10px;
    margin-top: 2px;
`