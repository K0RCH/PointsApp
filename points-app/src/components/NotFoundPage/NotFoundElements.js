import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const NotFoundContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`

export const NotFoundTitle = styled.h1`
    color: #010606;
    font-size: 10rem;
`

export const NotFoundSubTitle = styled.h3`
    color: #01bf71;
    text-transform: capitalize;
    font-size: 4rem;
    margin-bottom: 50px;
`

export const NotFoundText = styled.p`
    color: #010606;
`

export const NotFoundLink = styled(LinkR)`
    color: #01bf71;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        text-decoration: underline;
        transition: all 0.2s ease-in-out;
    }
`