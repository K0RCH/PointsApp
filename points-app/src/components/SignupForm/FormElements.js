import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const FormContainer = styled.div`
    margin: 100px auto;
    width: 1000px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    border-radius: 10px;
    height: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr; 

    @media screen and (max-width: 1200px) {
        width: 500px;
        grid-template-columns: 1fr;
    }
`

export const CloseBtn = styled.div`
    position: absolute;
    top: 3%;
    right: 3%;
    font-size: 2rem;
    z-index: 1;
    cursor: pointer;
`

export const CloseBtnLink = styled(LinkR)`
    text-decoration: none;
    color: #01BF71;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: #04ff96;
        transition: all 0.2s ease-in-out;
    }
`

export const FormContentLeft = styled.div`
    background: linear-gradient(90deg, rgb(1, 191, 113) 0%, rgb(4, 255, 150) 100%);
    border-radius: 10px 0 0 10px;
    position: relative;

    @media screen and (max-width: 1200px) {
        display: none;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 10rem;
`

export const FormContentRight = styled.div`
    text-align: center;
    border-radius: 0 10px 10px 0;
    position: relative;
    background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
`

export const Form = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 1rem;
    width: 80%;
    margin-bottom: 3rem;
    color: #fff;
    text-align: center;
`

export const FormInputs = styled.div`
    margin-bottom: 0.5rem;
    width: 80%;
`

export const FormLabel = styled.label`
    display: inline-block;
    font-size: 0.8rem;
    margin-bottom: 6px;
    color: #fff;
`

export const FormInput = styled.input`
    display: block;
    padding-left: 10px;
    outline: none;
    border-radius: 2px;
    height: 40px;
    width: 100%;
    border: none;
    color: #01BF71;
    font-weight: 600;

    &::placeholder {
        color: #595959;
        font-size: 12px;
    }
`

export const FormInputBtn = styled.button`
    width: 80%;
    height: 50px;
    margin-top: 10px;
    border-radius: 2px;
    background: #01BF71;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        background: #04ff96;
        color: #010606;
        transition: all 0.2s ease-in-out;
    }
`

export const FormInputLogin = styled.span`
    font-size: 0.8rem;
    margin-top: 10px;
    color: #fff;
    width: 80%;
    text-align: center;
`

export const FormLink = styled(LinkR)`
    text-decoration: none;
    color: #01BF71;
    font-weight: 600;
    transition: all 0.2s ease-in-out;

    &:hover {
        text-decoration: underline;
        transition: all 0.2s ease-in-out;
    }
`

export const Error = styled.p`
    color: #d90429;
    padding: 5px;
    width: 100%;
    border-left: 5px solid #d90429;
    background: #ff8e9d;
    margin: 10px 0;
    font-size: 12px;
`

export const FormSuccessContentRight = styled.div`
    text-align: center;
    border-radius: 0 10px 10px 0;
    position: relative;
    margin: auto;
`

export const FormSuccessTitle = styled.h1`
    font-size: 1.5rem;
    width: 80%;
    color: #01BF71;
    text-align: center;
    margin: 20px auto;
`

export const FormSuccessImg = styled.img`

`

export const FormSuccessText = styled.p`
    font-size: 0.8rem;
    margin-top: 10px;
    color: #010606;
    text-align: center;
`

export const FormSuccessLink = styled(LinkR)`
    text-decoration: none;
    color: #01BF71;
    font-weight: 600;
    transition: all 0.2s ease-in-out;

    &:hover {
        text-decoration: underline;
        transition: all 0.2s ease-in-out;
    }
`