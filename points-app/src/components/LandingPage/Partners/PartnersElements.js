import styled from 'styled-components'

export const PartnersContainer = styled.div`
    width: 100%;
    place-items: center;
    position: relative;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: #0A0019;
`

export const PartnersTextWrapper = styled.div`
    margin: 0 auto;
    padding: 8rem 2rem 6rem;
    text-align: center;
    
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

export const SectionTitle = styled.h2`
    color: #fff;
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
    color: #fff;
    text-align: center;
`