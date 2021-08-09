import React from 'react'
import {
    AboutSectionContainer,
    AboutWrapper,
    AboutRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Column2,
    ImgWrap,
    Img,
    DownloadIcon,
    AppName,
    DownloadLink
} from './AboutSectionElements'
import Picture1 from '../../../images/about-section.png'
import Picture2 from '../../../images/friends.png'
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa'
import { Separator } from '../../SeparatorElement'

const AboutSection = () => {
    return (
        <>
            <AboutSectionContainer id = 'about' lightBg = 'true'>
                <AboutWrapper>
                    <AboutRow imgStart = 'true'>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Let's start having fun</TopLine>
                                <Heading>Explore the app</Heading>
                                <Subtitle darkText = 'true'>Points is an application that allows you to experience unforgettable moments and enjoy your life better. Special challenges prepared by our creative team will give you many ideas on how you can spend unforgettable moments with a dose of competition between your friends.</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src = { Picture1 }/>
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                    <AboutRow>
                        <Column1>
                            <DownloadIcon>
                                <DownloadLink to = '#'>
                                    <FaGooglePlay />
                                    <AppName>GooglePlay</AppName>
                                </DownloadLink>
                            </DownloadIcon>
                        </Column1>
                        <Column2>
                            <DownloadIcon>
                                <DownloadLink to = '#'>
                                    <FaAppStoreIos />
                                    <AppName>AppStore</AppName>
                                </DownloadLink>
                            </DownloadIcon>
                        </Column2>
                    </AboutRow>
                    <Separator></Separator>
                    <AboutRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Let's collect some points</TopLine>
                                <Heading>What are Points?</Heading>
                                <Subtitle darkText = 'true'>Interesting tasks give you the opportunity to get to know the world better. Thanks to them, you can spend an amazing day individually or with friends.</Subtitle>
                                <Subtitle darkText = 'true'>Points introduce a dose of competition in everyday life. It makes you feel more motivated to do new things.</Subtitle>
                                <Subtitle darkText = 'true'>Together or separately, Points will keep you entertained.</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src = { Picture2 }/>
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutSectionContainer>
        </>
    )
}

export default AboutSection