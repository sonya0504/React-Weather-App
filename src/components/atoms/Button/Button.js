import styled from 'styled-components';

const Button = styled.button `
    padding: 0;
    background-color: ${({ theme }) => theme.colors.accent};
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 50px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.s};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.bright};
    display: block;
`;

export default Button;