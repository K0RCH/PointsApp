import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const AboutContainer = styled.div`
    width: 100%;
    place-items: center;
    padding: 2rem 2rem 6rem;
    position: relative;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: #0A0019;
    min-height: 100vh;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#764AA9, #492495);
        clip-path: circle(40% at right 110%);
    }

    @media screen and (max-width: 1280px) {
        &::before {
            display: none;
        }
    }
`

export const AboutWrapper = styled.div`
    margin: 0 auto;
    padding: 8rem 0 0;
    text-align: center;
    
    @media screen and (min-width: 640px) {
        max-width: 640px;
    }
    
    @media screen and (min-width: 768px) {
        max-width: 768px;
    }
    
    @media screen and (min-width: 1280px) {
        max-width: 1024px;
    }
`

export const SectionTitle = styled.h2`
    color: #fff;
    font-size: 2rem;
    padding-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
`

export const SectionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media screen and (max-width: 1280px) {
        grid-template-columns: 1fr;
    }
`

export const Card = styled.div`
    position: relative;
    border-radius: 1rem;
    width: 17.1rem;
    height: 26.7rem;
    align-self: center;
    justify-self: center;
    -webkit-box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    display: flex;
    place-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);

    &:hover .content {
        transform: translateY(0);
        opacity: 1;
    }
`

export const CardTextWrapper = styled.div`
    padding: 1.25rem;
    transition: 0.5s;
    transform: translateY(100px);
    opacity: 0;
`

export const CardNumber = styled.p`
    position: absolute;
    top: -4.5rem;
    right: 1.25rem;
    font-size: 8em;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.05);
`

export const CardHeader = styled.h3`
    font-size: 1.8em;
    color: #fff;
    z-index: 1;
`

export const CardText = styled.p`
    color: #fff;
    margin-top: 0.25rem;
`

export const CardLink = styled(LinkR)`
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    background: #fff;
    color: #010606;
    border-radius: 1rem;
    text-decoration: none;
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0 ,0.2);
    -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    font-weight: 500;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #d124ed;
        color: #fff
    }
`

export const Separator = styled.div`
    content: '';
    height: 0.3rem;
    width: 4rem;
    background: #d124ed;
    margin: 0.25rem auto 3.75rem;
    border-radius: 4px;
`

export const SectionText = styled.p`
    color: #fff;
    margin-bottom: 4rem;
`