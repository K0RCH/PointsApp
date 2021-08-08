import React from 'react'
import {
    FormSuccessContentRight,
    FormSuccessTitle,
    FormSuccessImg,
    FormSuccessText,
    FormSuccessLink
} from './FormElements'
import FormSuccessPicture from '../../images/formSuccessImg.png'
import * as ROUTES from '../../constants/routes'

const FormSuccess = () => {
    return (
        <FormSuccessContentRight>
            <FormSuccessImg src={FormSuccessPicture} alt='success image'></FormSuccessImg>
            <FormSuccessTitle>We have received your request!</FormSuccessTitle>
            <FormSuccessText>Now you can login to the created account <FormSuccessLink to={ROUTES.LOGIN}>here</FormSuccessLink>.</FormSuccessText>
        </FormSuccessContentRight>
    )
}

export default FormSuccess
