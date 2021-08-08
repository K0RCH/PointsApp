import React, { useEffect } from 'react'
import {
    NotFoundContainer,
    NotFoundTitle,
    NotFoundSubTitle,
    NotFoundText,
    NotFoundLink
} from '../components/NotFoundPage/NotFoundElements'
import * as ROUTES from '../constants/routes'

const NotFoundPage = () => {
    useEffect(() => {
        document.title = 'Points App | Err: 404 Not Found'
    }, [])
    return (
        <NotFoundContainer>
            <NotFoundTitle>404</NotFoundTitle>
            <NotFoundSubTitle>Page not found</NotFoundSubTitle>
            <NotFoundText>The Page you are looking for doesn't exists or an error occurred.<br />Go back, or head over to <NotFoundLink to={ROUTES.HOME}>points-app.com</NotFoundLink> to choose a new direction.</NotFoundText>
        </NotFoundContainer>
    )
}

export default NotFoundPage
