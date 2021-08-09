import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const AboutSectionContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => ( lightBg ? '#f9f9f9' : '#010606' )};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    min-height: 860px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 200px 24px 100px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 20px 24px 10px;
    }
`

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => ( imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => ( imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'` )};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
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

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const DownloadIcon = styled.div`
    font-size: 4rem;
    color: #fff;
    text-align: center;
    padding: 50px 0;
    margin: 10px;
    background: #01bf71;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: 10px;

    &:hover {
        background: #010606;
        transition: all 0.2s ease-in-out;
    }
`

export const AppName = styled.p`
    font-weight: 700;
    font-size: 2rem;
`

export const DownloadLink = styled(LinkR)`
    color: #fff;
    text-decoration: none;
`