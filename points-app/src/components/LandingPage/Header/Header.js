import * as ROUTES from '../../../constants/routes'
import {
    HeaderContainer,
    HeaderLogo,
    HeaderLogoContainer,
    HeaderNavWrapper,
    HeaderNavContainer,
    HeaderSocials,
    HeaderSocialsContainer,
    HeaderWrapper,
    Icon,
    HeaderNavElement,
    HeaderMobileNavWrapper,
    HeaderMobileMenuBar,
    HeaderMobileNavElement,
    CloseIcon
} from "./HeaderElements"
import { RiFacebookFill, RiLinkedinFill, RiInstagramFill, RiGithubFill } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
    const toggle = () => {
        var bar = document.getElementById('mobile-bar')
        if (bar.style.display === 'block') {
            bar.style.display = 'none'
        } else {
            bar.style.display = 'block'
        }
    }
    
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderLogoContainer>
                    <HeaderLogo title='Go back to app!' to={ROUTES.DASHBOARD}>Points</HeaderLogo>
                </HeaderLogoContainer>
                <HeaderNavContainer>
                    <HeaderNavWrapper>
                        <HeaderNavElement to='home'>Home</HeaderNavElement>
                        <HeaderNavElement to='about'>About</HeaderNavElement>
                        <HeaderNavElement to='author'>Author</HeaderNavElement>
                        <HeaderNavElement to='partners'>Partners</HeaderNavElement>
                    </HeaderNavWrapper>
                    <HeaderMobileNavWrapper>
                        <Icon onClick={toggle}>
                            <GiHamburgerMenu title='Menu' />
                        </Icon>
                        <HeaderMobileMenuBar id='mobile-bar'>
                            <CloseIcon onClick={toggle} />
                            <span>
                                <HeaderMobileNavElement to='home' onClick={toggle}>Home</HeaderMobileNavElement>
                                <HeaderMobileNavElement to='about' onClick={toggle}>About</HeaderMobileNavElement>
                                <HeaderMobileNavElement to='author' onClick={toggle}>Author</HeaderMobileNavElement>
                                <HeaderMobileNavElement to='partners' onClick={toggle}>Partners</HeaderMobileNavElement>
                            </span>
                        </HeaderMobileMenuBar>
                    </HeaderMobileNavWrapper>
                </HeaderNavContainer>
                <HeaderSocialsContainer>
                    <HeaderSocials title='Facebook' href='https://www.facebook.com/TheKuroch/' target='_blank'>
                        <Icon>
                            <RiFacebookFill />
                        </Icon>
                    </HeaderSocials>
                    <HeaderSocials title='LinkedIn' href='https://www.linkedin.com/in/dawid-kurowski/' target='_blank'>
                        <Icon>
                            <RiLinkedinFill />
                        </Icon>
                    </HeaderSocials>
                    <HeaderSocials title='Instagram' href='https://www.instagram.com/d_kurovsky/' target='_blank'>
                        <Icon>
                            <RiInstagramFill />
                        </Icon>
                    </HeaderSocials>
                    <HeaderSocials title='GitHub' href='https://github.com/K0RCH' target='_blank'>
                        <Icon>
                            <RiGithubFill />
                        </Icon>
                    </HeaderSocials>
                </HeaderSocialsContainer>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header
