import React, { useState } from 'react'
import Video from '../../../videos/welcome-page-video.mp4'
import { Button } from '../../ButtonElement'
import {
    WelcomeSectionContainer,
    WelcomeBg,
    VideoBg,
    WelcomeContent,
    WelcomeH1,
    WelcomeH3,
    WelcomeBtnWrapper,
    ArrowForward,
    ArrowRight
} from './WelcomeElements'

const WelcomeSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <WelcomeSectionContainer id="home">
            <WelcomeBg>
                <VideoBg autoPlay loop muted src = { Video } type = 'video/mp4' />
            </WelcomeBg>
            <WelcomeContent>
                <WelcomeH1>Points</WelcomeH1>
                <WelcomeH3>Enjoy life with our app!</WelcomeH3>
                <WelcomeBtnWrapper>
                    <Button to = "/signup" onMouseEnter = { onHover } onMouseLeave = { onHover } primary = 'true' dark = 'true' big = 'true' fontBig = 'true'>Get started { hover ? < ArrowForward /> : <ArrowRight /> }</Button>
                </WelcomeBtnWrapper>
            </WelcomeContent>
        </WelcomeSectionContainer>
    )
}

export default WelcomeSection
