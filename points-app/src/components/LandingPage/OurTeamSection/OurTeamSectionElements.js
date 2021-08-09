import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const OurTeamSectionContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => ( lightBg ? '#f9f9f9' : '#010606' )};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const OurTeamWrapper = styled.div`
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

export const OurTeamRow = styled.div`
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

export const MemberCard = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    background: #fff;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    box-shadow: 10px 20px 40px rgba(255, 255, 255, 0.1);
    transition: 1s;

    &:hover {
        transform: translateX(50%);
    }

    &:hover .member-img {
        transform: rotateY(-180deg);
    }

    @media screen and (max-width: 768px) {
        width: 200px;
        height: 275px;
    }
`

export const MemberDetails = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MemberDetailsContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MemberName = styled.h2`
    text-align: center;
    font-weight: 700;
    line-height: 1em;
    color: #010606;
`

export const MemberRole = styled.span`
    text-align: center;
    color: #01bf71;
    font-size: 16px;
    font-weight: 700;
`

export const Socials = styled.div`
    position: relative;
    display: flex;
    margin-top: 10px;
`

export const SmLink = styled(LinkR)`
    display: inline-block;
    width: 35px;
    height: 35px;
    background: #010606;
    color: #fff;
    border-radius: 50%;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    margin: 5px;
    font-size: 18px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #01bf71;
        border-radius: 50% 0 50% 50%;
    }
`

export const MemberImg = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    transform-origin: left;
    transform-style: preserve-3d;
    background: #010606;
    transition: all 1s ease-in-out;
    box-shadow: 10px 20px 40px rgba(255, 255, 255, 0.1);
`

export const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform-style: preserve-3d;
    backface-visibility: hidden;

    &:nth-child(2) {
        transform: rotateY(180deg);
    }
`

export const MemberDescription = styled.p`
    color: #010606;
    text-align: center;
    padding: 20px 0;
    font-size: 16px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const SocialsTitle = styled.p`
    color: #010606;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    padding: 40px 0 10px;
`