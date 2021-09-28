import styled from 'styled-components'

export const AuthorContainer = styled.div`
    width: 100%;
    place-items: center;
    position: relative;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: #F3F4F6;
`

export const AuthorWrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 1280px) {
        grid-template-columns: 1fr;
    }
`

export const SectionTitle = styled.h2`
    color: #010606;
    font-size: 2rem;
    padding-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-align: center;
`

export const Separator = styled.div`
    content: '';
    height: 0.3rem;
    width: 4rem;
    background: #d124ed;
    margin: 0.25rem auto 3.75rem;
    border-radius: 4px;
`

export const SectionText = styled.p`
    color: #010606;
`

export const AuthorRight = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 0 5rem;
    text-align: center;
`

export const AuthorRightWrapper = styled.div`
    margin: 0 auto;

    @media screen and (min-width: 640px) {
        max-width: 320px;
    }
    
    @media screen and (min-width: 768px) {
        max-width: 384px;
    }
    
    @media screen and (min-width: 1280px) {
        max-width: 512px;
    }
`

export const AuthorLeft = styled.div`
    background: #764AA9;
    display: flex;
    flex-direction: column;
    place-items: center;
    height: 100vh;
`

export const AuthorLeftContent = styled.div`
    -webkit-box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.39);
    box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.39);
    
    & div {
        background: #0A0019;
        padding: 4rem 4rem 2.5rem 5rem;
        text-align: center;
    }
`

export const Shadow = styled.div`
    padding: 0 !important;
    margin: 0 auto;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        background: rgba(255, 255, 255, 0.15);
        left: 50%;
        transform: translateX(-50%);
        bottom: -20px;
        height: 7px;
        width: 50px;
        filter: blur(3px);
        --webkit-filter: blur(3px);
        opacity: 0;
        transition: all 0.6s ease;
    }

    &:hover .author-image {
        transform: translateY(-10px);
    }

    &:hover::after {
        opacity: 1;
    }
`

export const AuthorImageContainer = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    padding: 0 !important;
`

export const AuthorImg = styled.img`
    display: block;
    width: 200px;
    height: 200px;
    object-fit: cover;
`

export const AuthorName = styled.h3`
    font-size: 2rem;
    margin: 2.2rem 0 0.6rem 0;
    line-height: 1.2;
    padding-bottom: 1rem;
    border-bottom: 2px solid #d124ed;
    color: #fff;
`

export const AuthorJobName = styled.h4`
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 5px;
    margin-top: 1.2rem;
    color: #fff;
`

export const AuthorSocials = styled.ul`
    background: #fff;
    display: flex;
    justify-content: center;
    padding: 0.8rem 0;
`

export const AuthorSocialIcon = styled.li`
    list-style: none;
    background: #0A0019;
    color: #fff;
    width: 40px;
    height: 40px;
    margin: 0 0.5rem;
    border-radius: 50%;
    display: flex;
    place-items: center;
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #d124ed;
        border-radius: 50% 0 50% 50%;
    }
`

export const AuthorSocialLink = styled.a`
    text-decoration: none;
    color: #fff;
`