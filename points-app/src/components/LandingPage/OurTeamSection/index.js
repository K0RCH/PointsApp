import React from 'react'
import {
    OurTeamSectionContainer,
    OurTeamWrapper,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    MemberCard,
    MemberImg,
    MemberDetails,
    MemberDetailsContent,
    MemberName,
    MemberRole,
    Socials,
    SmLink,
    Img,
    MemberDescription,
    SocialsTitle
} from './OurTeamSectionElements'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import Image from '../../../images/david.jpg'
import Image2 from '../../../images/david2.jpg'

const OurTeamSection = () => {
    return (
        <>
            <OurTeamSectionContainer id = 'our-team'>
                <OurTeamWrapper>
                    <TextWrapper>
                        <TopLine>Let's meet our creators</TopLine>
                        <Heading lightText = 'true'>Our team</Heading>
                        <Subtitle>Our team, although small, can do it.</Subtitle>
                    </TextWrapper>
                    <MemberCard>
                        <MemberImg className = 'member-img'>
                            <Img src = { Image  } />
                            <Img src = { Image2  } />
                        </MemberImg>
                        <MemberDetails>
                            <MemberDetailsContent>
                                <MemberName>David Kurovsky</MemberName>
                                <MemberRole>JS Developer</MemberRole>
                                <MemberDescription>I am a student at Warsaw University of Technology. I would like to develop my skills in creating web and mobile applications.</MemberDescription>
                                <SocialsTitle>More about me:</SocialsTitle>
                                <Socials>
                                    <SmLink to = '#'><FaFacebookSquare /></SmLink>
                                    <SmLink to = '#'><FaLinkedin /></SmLink>
                                    <SmLink to = '#'><AiFillInstagram /></SmLink>
                                    <SmLink to = '#'><AiFillGithub /></SmLink>
                                </Socials>
                            </MemberDetailsContent>
                        </MemberDetails>
                    </MemberCard>
                </OurTeamWrapper>
            </OurTeamSectionContainer>
        </>
    )
}

export default OurTeamSection