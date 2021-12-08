import styled from "styled-components";
import markerIcon from 'assets/icons/marker.svg';

const Input = styled.input `
    padding: 15px 30px;
    font-size: ${({theme}) => theme.fontSize.s};
    font-weight: ${({theme}) => theme.fontWeight.regular};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: 50px;
    padding: 10px 20px 10px 40px;
    font-size: ${({ theme }) => theme.fontSize.s};
    background-image: url(${markerIcon});
    background-size: 15px;
    background-position: 15px 50%;
    background-repeat: no-repeat;
    height: 50px;
    width: 100%;
    display: block;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.bright};

    ::placeholder {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${({theme}) => theme.colors.grey300}
    }

    :focus {
        border: 1px solid ${({ theme }) => theme.colors.accent};
        outline: none;
    }

`;

export default Input;