import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
    height: 100vh;
    display: flex;
`;

const MainTemplate = ({ title, children }) => (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
        <>
            <StyledWrapper>
                { title && <Heading big as='h1'>{title}</Heading>}
                {children}
            </StyledWrapper>
        </>
    </ThemeProvider></>
);

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string,
}

MainTemplate.defaultProps = {
    title: null,
}


export default MainTemplate;