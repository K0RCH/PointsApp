import React from 'react'
import {
    FooterSectionContainer,
    Copyright,
    Span,
    FooterWrapper,
    FooterContainer,
    FooterRow,
    FooterCol,
    ColTitle,
    ColList,
    ListElement,
    ListLink,
    Icon,
    SmLinks,
    SmLink,
    Scroll,
    Newsletter,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Input,
    NewsletterBtn,
    Form,
    NewsletterBtnIcon
} from './FooterSectionElements'
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'

const FooterSection = () => {
    let year = new Date().getFullYear()
    
    return (
        <>
            <FooterSectionContainer id = 'Footer'>
                <Newsletter>
                    <TextWrapper>
                        <TopLine>Get notifications about new features</TopLine>
                        <Heading lightText = 'true'>Newsletter</Heading>
                        <Subtitle>By joining the group of the Newsletter Team, you will receive e-mails from us in which we will provide you with information about new features that we have introduced and about those that we intend to introduce.</Subtitle>
                        <Form>
                            <TextWrapper>
                                <Input placeholder = 'your@email.com' type = 'email' id = 'email'></Input>
                            </TextWrapper>
                            <NewsletterBtn typeof = 'submit'><NewsletterBtnIcon><IoIosSend /></NewsletterBtnIcon>Submit</NewsletterBtn>
                        </Form>
                    </TextWrapper>
                </Newsletter>
                <FooterWrapper>
                    <FooterContainer>
                        <FooterRow>
                            <FooterCol>
                                <ColTitle>Company</ColTitle>
                                <ColList>
                                    <ListElement><ListLink to = '#'>Join our team</ListLink></ListElement>
                                    <ListElement><ListLink to = '#'>Contact us</ListLink></ListElement>
                                </ColList>
                            </FooterCol>
                            <FooterCol>
                                <ColTitle>Get help</ColTitle>
                                <ColList>
                                    <ListElement><ListLink to = '#'>FAQ</ListLink></ListElement>
                                    <ListElement><ListLink to = '#'>Help center</ListLink></ListElement>
                                </ColList>
                            </FooterCol>
                            <FooterCol>
                                <ColTitle>Useful links</ColTitle>
                                <ColList>
                                    <ListElement><ListLink to = '#'>Terms of use</ListLink></ListElement>
                                    <ListElement><ListLink to = '#'>Privacy policy</ListLink></ListElement>
                                </ColList>
                            </FooterCol>
                            <FooterCol>
                                <ColTitle>Follow us</ColTitle>
                                <SmLinks>
                                    <SmLink to = '#'><Icon><FaFacebookSquare /></Icon></SmLink>
                                    <SmLink to = '#'><Icon><FaInstagram /></Icon></SmLink>
                                    <SmLink to = '#'><Icon><FaLinkedinIn /></Icon></SmLink>
                                    <SmLink to = '#'><Icon><FaGooglePlusG /></Icon></SmLink>
                                </SmLinks>
                            </FooterCol>
                        </FooterRow>
                    </FooterContainer>
                </FooterWrapper>
                <Copyright><Scroll to = 'home'>Points App</Scroll> <Span>&copy;</Span> { year } <Span>|</Span> <Scroll to = 'our-team'>David Kurovsky</Scroll></Copyright>
            </FooterSectionContainer>
        </>
    )
}

export default FooterSection