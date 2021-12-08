import React from 'react';
import styled from "styled-components";
import Description from 'components/atoms/Description/Description';

const StyledWeatherForecastWrapper = styled.div`
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledDate = styled.p`
    white-space: initial;
    margin: 0 0 5px 0;
`;

const StyledImage = styled.img`
    width: 50px;
    height: 50px;
`;

const StyledDescription = styled(Description)`
    margin-bottom: 0;
`;

const WeatherForecast = () => (
    <StyledWeatherForecastWrapper>
        <StyledDate>12.12</StyledDate>
        <StyledImage src='http://openweathermap.org/img/wn/10d@2x.png' alt='Weather icon' />
        <StyledDescription>light rain</StyledDescription>
    </StyledWeatherForecastWrapper>
);

export default WeatherForecast;