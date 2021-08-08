import React from 'react'
import {
    PartnersSectionContainer,
    PartnersWrapper,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Mail
} from './PartnersSectionElements'

const PartnersSection = () => {
    return (
        <>
            <PartnersSectionContainer id = 'partners' lightBg = 'true'>
                <PartnersWrapper>
                    <TextWrapper>
                        <TopLine>Let's meet the people who support us</TopLine>
                        <Heading>Partners</Heading>
                        <Subtitle darkText = 'true'>You can also join the group of supporters! Contact us: <Mail>contact@points.com</Mail></Subtitle>
                    </TextWrapper>
                </PartnersWrapper>
            </PartnersSectionContainer>
        </>
    )
}

export default PartnersSection