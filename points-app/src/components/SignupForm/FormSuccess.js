import React from 'react'
import {
    FormSuccessContentRight,
    FormSuccessTitle,
    FormSuccessText,
    FormSuccessLink
} from './FormElements'
import * as ROUTES from '../../constants/routes'

const FormSuccess = () => {
    return (
        <FormSuccessContentRight>
            <FormSuccessTitle>We have received your request!</FormSuccessTitle>
            <FormSuccessText>Now you can login to the created account <FormSuccessLink to={ROUTES.LOGIN}>here</FormSuccessLink>.</FormSuccessText>
        </FormSuccessContentRight>
    )
}

export default FormSuccess
