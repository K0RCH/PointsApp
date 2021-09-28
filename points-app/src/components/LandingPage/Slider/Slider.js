import {
    SliderContainer,
    SliderImg,
    SliderImgContainer,
    SliderText,
    SliderTextWrapper,
    SliderTitle
} from "./SliderElements"

const Slider = () => {
    return (
        <SliderContainer id='home'>
            <SliderImgContainer>
                <SliderImg src='/images/slider/slider.jpg' title='https://www.teahub.io/viewwp/xTwwm_3840-x-1080/'/>
            </SliderImgContainer>
            <SliderTextWrapper>
                <SliderTitle>Points</SliderTitle>
                <SliderText>Enjoy life and reach for the moon with my app!</SliderText>
            </SliderTextWrapper>
        </SliderContainer>
    )
}

export default Slider
