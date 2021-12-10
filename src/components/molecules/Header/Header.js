import React from "react";
import styled from "styled-components";
import { devices } from "theme/device";
import WeatherImage from "components/atoms/WeatherImage/WeatherImage";
import Heading from "components/atoms/Heading/Heading";
import Description from "components/atoms/Description/Description";
import Button from "components/atoms/Button/Button";
import markerIcon from 'assets/icons/marker.svg';
import backIcon from 'assets/icons/back.svg';

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

const StyledButton = styled(Button)`
background-color: transparent;
    background-image: url(${backIcon});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    border-radius: 5px;
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

const Header = ({ cityName, mainDescription, imgSrc, imgAlt, goBack }) => (
    <StyledCityName> 
        <StyledButton />
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