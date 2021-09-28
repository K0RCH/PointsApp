import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const HeaderContainer = styled.header`
    height: 4rem;
    background: #0A0019;
    z-index: 10;
    -webkit-box-shadow: 0px 12px 15px 7px rgba(0,0,0,0.15); 
    box-shadow: 0px 12px 15px 7px rgba(0,0,0,0.15);
    margin-bottom: 2rem;
    position: fixed;
    width: 100%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 100%;

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

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin-left: 5px;
`

export const LogoContainer = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    line-height: 4rem;
`

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 5px;
`

export const NavBar = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    padding-right: 2rem;

    &::after {
        content: '';
        position: absolute;
        right: 0;
        width: 1px;
        height: 2rem;
        background: rgba(255, 255, 255, 0.2);
    }
`

export const Link = styled(LinkR)``

export const SignOutButton = styled.button`
    padding: 0;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
`

export const NavIcon = styled.div`
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;
    transition: all 0.2s ease-in-out;
    margin-left: 30px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #d124ed;
        padding-top: 5px;
    }
`

export const ProfileAvatar = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const ProfileImg = styled.img`
    -webkit-box-shadow: 0px 0px 0px 2px rgb(0,0,0);
    -moz-box-shadow: 0px 0px 0px 2px rgb(0,0,0);
    box-shadow: 0px 0px 0px 2px rgb(0,0,0);
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    display: flex;
    margin-left: 30px;
    transition: all 0.2s ease-in-out;
    object-fit: cover;

    &:hover {
        -webkit-box-shadow: 0px 0px 0px 2px rgb(209, 36, 237);
        -moz-box-shadow: 0px 0px 0px 2px rgb(209, 36, 237);
        box-shadow: 0px 0px 0px 2px rgb(209, 36, 237);
        transition: all 0.2s ease-in-out;
        margin-top: 5px;
    }
`

export const NotUserButton = styled.button`
    border: none;
    border-radius: 50px;
    color: ${({signUp}) => ( signUp ? '#010606' : '#fff' )};
    padding: 10px 20px;
    background: ${({signUp}) => ( signUp ? 'none' : '#d124ed' )};
    -webkit-box-shadow: ${({signUp}) => ( signUp ? '0px 0px 0px 1px rgba(0,0,0,1)' : 'none' )};
    -moz-box-shadow: ${({signUp}) => ( signUp ? '0px 0px 0px 1px rgba(0,0,0,1)' : 'none' )};
    box-shadow: ${({signUp}) => ( signUp ? '0px 0px 0px 1px rgba(0,0,0,1)' : 'none' )};
    margin-left: 20px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    outline: none;

    &:hover {
        color: ${({signUp}) => ( signUp ? '#d124ed' : '#010606')};
        -webkit-box-shadow: ${({signUp}) => ( signUp ? '0px 0px 0px 1px rgb(209, 36, 237)' : '0px 0px 0px 1px rgba(211,211,211,1)' )};
        -moz-box-shadow: ${({signUp}) => ( signUp ? '0px 0px 0px 1px rgb(209, 36, 237)' : '0px 0px 0px 1px rgba(211,211,211,1)' )};
        box-shadow: ${({signUp}) => ( signUp ? '0px 0px 0px 1px rgb(209, 36, 237)' : '0px 0px 0px 1px rgba(211,211,211,1)' )};
        background: none;
        transition: all 0.2s ease-in-out;
    }
`