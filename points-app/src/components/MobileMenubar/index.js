import React from 'react'
import {
    MobileMenubarContainer,
    Icon,
    CloseIcon,
    MenubarWrapper,
    MenubarMenu,
    MenubarLink,
    MenubarBtnWrap,
    MenubarBtnLink
} from './MobileMenubarElements'

const MobileMenubar = ({ isOpen, toggle }) => {
    return (
        <MobileMenubarContainer isOpen = { isOpen } onClick = { toggle }>
            <Icon onClick = { toggle }>
                <CloseIcon />
            </Icon>
            <MenubarWrapper>
                <MenubarMenu>
                    <MenubarLink to = "home" onClick = { toggle }>Home</MenubarLink>
                    <MenubarLink to = "about" onClick = { toggle }>About</MenubarLink>
                    <MenubarLink to = "our-team" onClick = { toggle }>Our team</MenubarLink>
                    <MenubarLink to = "partners" onClick = { toggle }>Partners</MenubarLink>
                </MenubarMenu>
                <MenubarBtnWrap>
                    <MenubarBtnLink to = "/signup">Sign In / Up</MenubarBtnLink>
                </MenubarBtnWrap>
            </MenubarWrapper>
        </MobileMenubarContainer>
    )
}

export default MobileMenubar
