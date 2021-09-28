import styled from 'styled-components'

export const TermsOfUseContainer = styled.div`
    width: 100%;
    place-items: center;
    position: relative;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: ${({ dark }) => ( dark ? '#764AA0' : '#F3F4F6')};
    color: ${({ dark }) => ( dark ? '#fff' : '#010606')};

    & a {
        color: ${({ dark }) => ( dark ? '#fff' : '#010606')};
    }
`

export const TermsOfUseWrapper = styled.div`
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
    background: ${({ dark }) => ( dark ? '#6E36AB' : '#d124ed' )};
    margin: 0.25rem auto;
    border-radius: 4px;
`

export const SectionText = styled.p`
    text-align: left;
    margin: 1rem 0;
`

export const SectionSubtitle = styled.h3`
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-top: 3.5rem;
`