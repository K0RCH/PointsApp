import * as ROUTES from '../../../constants/routes'
import {
    ColList,
    Copyright,
    CopyrightLink,
    FirstFooterBtn,
    FirstFooterBtnLink,
    FirstFooterContainer,
    FooterCol,
    FooterContainer,
    FooterTextWrapper,
    ListElement,
    ListLink,
    MainSeparator,
    SecondFooterContainer,
    SecondFooterGrid,
    SecondSectionTitle,
    SectionText,
    SectionTitle,
    Separator,
    SocialMediaIcon,
    SocialMediaLink,
    SocialMediaLinks,
    ThirdFooterContainer
} from './FooterElements'
import { RiFacebookFill, RiLinkedinFill, RiInstagramFill, RiGithubFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FirstFooterContainer>
                    <FooterTextWrapper>
                        <SectionTitle>Haven't made up your mind yet?</SectionTitle>
                        <MainSeparator></MainSeparator>
                        <SectionText>This is mega super weird. If we were not able to convince you, click the button below and check it yourself. You will see for yourself that it is worth using our application. Join our wonderful community right now. You will not regret!</SectionText>
                        <FirstFooterBtnLink to={ROUTES.DASHBOARD}>
                            <FirstFooterBtn type='button'>
                                Join Our Community!
                            </FirstFooterBtn>
                        </FirstFooterBtnLink>
                    </FooterTextWrapper>
                </FirstFooterContainer>
                <SecondFooterContainer>
                    <FooterTextWrapper>
                        <SecondFooterGrid>
                            <FooterCol>
                                <SecondSectionTitle>Company</SecondSectionTitle>
                                <Separator></Separator>
                                <ColList>
                                    <ListElement><ListLink to='#'>Join our team</ListLink></ListElement>
                                    <ListElement><ListLink to='#'>Contact us</ListLink></ListElement>
                                </ColList>
                            </FooterCol>
                            <FooterCol>
                                <SecondSectionTitle>Get help</SecondSectionTitle>
                                <Separator></Separator>
                                <ColList>
                                    <ListElement><ListLink to='#'>FAQ</ListLink></ListElement>
                                    <ListElement><ListLink to='#'>Help center</ListLink></ListElement>
                                </ColList>
                            </FooterCol>
                            <FooterCol>
                                <SecondSectionTitle>Links</SecondSectionTitle>
                                <Separator></Separator>
                                <ColList>
                                    <ListElement><ListLink to={ROUTES.TOS}>Terms of use</ListLink></ListElement>
                                    <ListElement><ListLink to={ROUTES.PRIVACY_POLICY}>Privacy policy</ListLink></ListElement>
                                </ColList>
                            </FooterCol>
                            <FooterCol>
                                <SecondSectionTitle>Follow me</SecondSectionTitle>
                                <Separator></Separator>
                                <SocialMediaLinks>
                                    <SocialMediaLink title='Facebook' href='https://www.facebook.com/TheKuroch/' target='_blank'>
                                        <SocialMediaIcon>
                                            <RiFacebookFill />
                                        </SocialMediaIcon>
                                    </SocialMediaLink>
                                    <SocialMediaLink title='LinkedIn' href='https://www.linkedin.com/in/dawid-kurowski/' target='_blank'>
                                        <SocialMediaIcon>
                                            <RiLinkedinFill />
                                        </SocialMediaIcon>
                                    </SocialMediaLink>
                                    <SocialMediaLink title='Instagram' href='https://www.instagram.com/d_kurovsky/' target='_blank'>
                                        <SocialMediaIcon>
                                            <RiInstagramFill />
                                        </SocialMediaIcon>
                                    </SocialMediaLink>
                                    <SocialMediaLink title='GitHub' href='https://github.com/K0RCH' target='_blank'>
                                        <SocialMediaIcon>
                                            <RiGithubFill />
                                        </SocialMediaIcon>
                                    </SocialMediaLink>
                                </SocialMediaLinks>
                            </FooterCol>
                        </SecondFooterGrid>
                    </FooterTextWrapper>
                </SecondFooterContainer>
            </FooterContainer>
            <ThirdFooterContainer>
                <Copyright>
                    <span><CopyrightLink to={ROUTES.DASHBOARD}>Points App</CopyrightLink></span>
                    <span>&copy;</span>
                    <span>{ new Date().getFullYear() }</span>
                    <span>|</span>
                    <span>Dawid Kurowski</span>
                </Copyright>
            </ThirdFooterContainer>
        </>
    )
}

export default Footer
