import styled from 'styled-components'

export const SliderContainer = styled.div`
    width: 100%;
    place-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const SliderImgContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const SliderImg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const SliderTextWrapper = styled.div`
    margin: 0 auto;
    text-align: center;
    height: 100%;
    padding: 4rem 0 0;
    z-index: 4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -25%);

    @media screen and (min-width: 640px) {
        max-width: 640px;
    }
    
    @media screen and (min-width: 768px) {
        max-width: 768px;
    }
    
    @media screen and (min-width: 1280px) {
        max-width: 1024px;
    }
`

export const SliderTitle = styled.h1`
    font-size: 10rem;
    font-weight: 600;
    color: #fff;
    cursor: default;

    @media screen and (max-width: 1200px) {
        font-size: 8rem;
    }
`

export const SliderText = styled.p`
    font-size: 1.5rem;
    color: #fff;
    cursor: default;

    @media screen and (max-width: 1200px) {
        font-size: 1.1rem;
    }
`