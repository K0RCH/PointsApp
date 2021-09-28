import styled from 'styled-components'

export const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #764AA9;
    overflow: hidden;
    position: relative;
`

export const Loader = styled.div`
    height: 100px;
    width: 100px;
    border: 15px solid rgba(191,191,191, 0.1);
    border-top-color: #d124ed;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: spin 1.5s infinite linear;

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
`