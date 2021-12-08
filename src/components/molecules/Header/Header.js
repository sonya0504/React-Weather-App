import React from "react";
import styled from "styled-components";
import { devices } from "theme/device";
import WeatherImage from "components/atoms/WeatherImage/WeatherImage";
import Heading from "components/atoms/Heading/Heading";
import Description from "components/atoms/Description/Description";
import markerIcon from 'assets/icons/marker.svg';

const StyledCityName = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;
    padding-bottom: 30px;
    background-color: ${({ theme }) => theme.colors.dark};
    `;

const StyledImageWrapper = styled.div`
    margin-right: 20px;
    margin-left: 20px;
`;

const StyledWeatherImage = styled(WeatherImage)`
    display: block;
`;

const StyledDescription = styled(Description)`
    margin-top: 0;
    margin-bottom: 0;
`;

const StyledHeading = styled(Heading)`
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 0;
    margin-top: 0;

    @media ${devices.tablet} {
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }
`;

const Header = ({ cityName, mainDescription, imgSrc, imgAlt }) => (
    <StyledCityName> 
    <StyledImageWrapper>
        <StyledWeatherImage imgSrc={imgSrc} imgAlt={imgAlt} />
        <StyledDescription>{mainDescription}</StyledDescription>
    </StyledImageWrapper>
    <StyledHeading>{cityName}</StyledHeading>
    <StyledImageWrapper>
        <StyledWeatherImage imgSrc={markerIcon} imgAlt='change city' />
    </StyledImageWrapper>
    </StyledCityName>
);

export default Header;