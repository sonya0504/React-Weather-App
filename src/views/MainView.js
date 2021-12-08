import React from "react";
import styled from "styled-components";
import { devices } from "theme/device";
import Heading from "components/atoms/Heading/Heading";
import Form from "components/molecules/Form/Form";

const StyledSection = styled.section`
    padding: 20px;

    @media ${devices.tablet} {
        width: 500px;
        margin: 100px auto 0;
    }
`;

const StyledHeading = styled(Heading)`
    margin-bottom: 50px;
    text-align: center;
`;

const StyledSpan = styled.span`
    color: ${({ theme }) => theme.colors.accent};
`;

const MainView = ({ time }) => {

    return (
    <StyledSection>
        <StyledHeading big>
            Enter the <StyledSpan>city</StyledSpan> where you want to check the <StyledSpan>weather</StyledSpan>
        </StyledHeading>
        <Form />
    </StyledSection>
);
    }

export default MainView;