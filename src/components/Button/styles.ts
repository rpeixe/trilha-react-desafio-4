import styled, { css } from 'styled-components';
import { ButtonContainerStyle } from './types';


export const ButtonContainer = styled("button")<ButtonContainerStyle>`
    width: 100%;
    height: 42px;
    border-radius: 21px;

    ${({disabled}) => disabled ? css`
        background-color: #AAA;
        color: #FFF;

        border: 1px solid #AAA;
    ` : css`
        background-color: #81259D;
        color: #FFF;

        border: 1px solid #81259D;

        &:hover {
            opacity: 0.6;
            cursor:pointer;
        }
    `}
`