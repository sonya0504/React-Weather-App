import styled from "styled-components";

const Description = styled.p `
    font-size: ${({theme}) => theme.fontSize.s};
    font-weight: ${({theme}) => theme.fontWeight.regular};
`;

export default Description;