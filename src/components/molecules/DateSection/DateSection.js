import React from 'react';
import AppContext from 'context';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Description from 'components/atoms/Description/Description';

const StyledWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledHeading = styled(Heading)`
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin: 0;
`;

const StyledDescription = styled(Description)`
    margin: 0;
    color: ${({ theme }) => theme.colors.accent}
`;


const DateSection = () => (
    <AppContext.Consumer>
        {(context) => (
            <StyledWrapper>
                <StyledHeading as='h1'>{context.clock}</StyledHeading>
                <StyledDescription>{context.day}</StyledDescription>
            </StyledWrapper>
        )}
    </AppContext.Consumer>
);

export default DateSection;