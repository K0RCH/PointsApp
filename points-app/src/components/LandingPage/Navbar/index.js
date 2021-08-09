import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'
import * as ROUTES from '../../../constants/routes'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to={ ROUTES.HOME }>Points</NavLogo>
                    <MobileIcon onClick = { toggle }>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to = "home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = "about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = "our-team">Our team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = "partners">Partners</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to={ ROUTES.SIGN_UP }>Sign In / Up</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar