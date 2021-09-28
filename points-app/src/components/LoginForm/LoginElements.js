import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const FormContainer = styled.div`
    margin: 100px auto;
    width: 500px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    border-radius: 10px;
    height: 800px;
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
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
    place-items: center;
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
    color: #d124ed;
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
    background: #d124ed;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        background: #af1ec7;
        transition: all 0.2s ease-in-out;
    }

    &:disabled {
        background: #dfdfdf;
        color: #010606;
        cursor: not-allowed;
    }
`

export const FormInputSignup = styled.p`
    font-size: 0.8rem;
    margin-top: 10px;
    color: #fff;
    width: 80%;
    text-align: center;
`

export const FormLink = styled(LinkR)`
    text-decoration: none;
    color: #d124ed;
    font-weight: 600;
    transition: all 0.2s ease-in-out;

    &:hover {
        text-decoration: underline;
        transition: all 0.2s ease-in-out;
    }
`

export const CloseBtn = styled.div`
    position: absolute;
    top: 3%;
    right: 2%;
    font-size: 2rem;
    z-index: 1;
    cursor: pointer;
`

export const CloseBtnLink = styled(LinkR)`
    text-decoration: none;
    color: #d124ed;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #af1ec7;
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