import styled, { css } from 'styled-components'

const buttonStyles = css`
    padding: 8px 15px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: 0.2s ease;
`

export const ButtonRed = styled.button`
    ${buttonStyles};

    background-color: #ff0000;
    color: #fff;

    &:hover {
        box-shadow: 0px 10px 50px rgba(255, 0, 0, 0.5);
    }
`

export const ButtonWhite = styled.button`
    ${buttonStyles};

    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`