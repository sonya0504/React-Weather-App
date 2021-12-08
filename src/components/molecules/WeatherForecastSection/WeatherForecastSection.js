import React from "react";
import styled from "styled-components";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

const StyledWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 0 auto;
    grid-gap: 10px;
    min-width: 60px;
`;



const WeatherForecastSection = () => (
    <StyledWrapper>
        <WeatherForecast />
        <WeatherForecast />
        <WeatherForecast />
        <WeatherForecast />
        <WeatherForecast />
    </StyledWrapper>
);

export default WeatherForecastSection;