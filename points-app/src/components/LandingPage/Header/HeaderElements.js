import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const HeaderContainer = styled.div`
    height: 4rem;
    background: #fff;
    z-index: 10;
    -webkit-box-shadow: 0px 12px 15px 7px rgba(0,0,0,0.09); 
    box-shadow: 0px 12px 15px 7px rgba(0,0,0,0.09);
    margin-bottom: 2rem;
    position: fixed;
    width: 100%;
    padding: 0 1rem;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const HeaderWrapper = styled.div`
    margin: 0 auto;
    justify-content: space-between;
    display: flex;
    height: 100%;
    padding: 15px 0;

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

export const HeaderLogoContainer = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-right: 2.5rem;
    border-right: 1px solid #e6e6e6;
    line-height: 4rem;

    @media screen and (max-width: 768px) {
        border: none;
        padding: 0;
    }
`

export const HeaderLogo = styled(LinkR)`
    color: #010606;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
`

export const HeaderNavContainer = styled.div`
    display: flex;
    line-height: 4rem;
    margin-top: -15px;
`

export const HeaderNavWrapper = styled.nav`
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const HeaderNavElement = styled(LinkS)`
    color: #010606;
    transition: all 0.2s ease-in-out;
    margin: 0 1rem;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #d124ed;
        padding-top: 5px;
    }
`

export const HeaderMobileNavWrapper = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const HeaderMobileMenuBar = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background: #fff;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    display: none;

    & span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
`

export const HeaderMobileNavElement = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #010606;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #d124ed;
    }
`

export const CloseIcon = styled(FaTimes)`
    font-size: 1.5rem;
    position: absolute;
    right: 2rem;
    top: 2rem;
    color: #010606;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #d124ed;
    }
`

export const HeaderSocialsContainer = styled.div`
    display: flex;
    padding-left: 1rem;
    border-left: 1px solid #e6e6e6;
    line-height: 4rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const HeaderSocials = styled.a`
    margin-top: -15px;
`

export const Icon = styled.div`
    font-size: 1.25rem;
    text-decoration: none;
    color: #010606;
    transition: all 0.2s ease-in-out;
    margin-left: 1.25rem;
    line-height: 4rem;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #d124ed;
        padding-top: 5px;
    }
`