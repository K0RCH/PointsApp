import styled from 'styled-components'

export const ProfileContainer = styled.div`
    background: #F3F4F6;
    padding: 7rem 1rem 1rem;
    min-height: 100vh;
`

export const ProfileWrapper = styled.div`
    margin: 0 auto;
    max-width: 1024px;
`

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    justify-content: space-between;
    margin: 0 auto;
`

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;

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

export const HeaderImg = styled.img`
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
    object-fit: cover;
`

export const HeaderMain = styled.div`
    display: flex;
    place-items: center;
    flex-direction: column;
    grid-column: span 2 / span 2;
`

export const HeaderMainWrapper = styled.div`
    display: flex;
    align-items: center;
    
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

export const HeaderUsername = styled.p`
    margin-right: 1rem;
    font-weight: 600;
    color: #d124ed;
`