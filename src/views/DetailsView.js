import React from "react";
import styled from "styled-components";
import { devices } from "theme/device";
import Header from "components/molecules/Header/Header";
import DateSection from "components/molecules/DateSection/DateSection";
import WeatherDetailsSection from "components/organisms/WeatherDetailsSection/WeatherDetailsSection";
import WeatherForecastSection from "components/molecules/WeatherForecastSection/WeatherForecastSection";

const StyledMain = styled.main`
    width: 300px;
    height: 90vh;
    position: relative;
    margin: 10px;
    display: grid;
    grid-template-rows: 15% 50% 20% 15%;

    @media ${devices.tablet} {
    height: 80vh;
    width: 500px;
    border: 1px solid ${({ theme }) => theme.colors.bright};
    margin: auto;
    }
`;

const DetailsView = ({ clock, day }) => (
    <StyledMain>
        <Header 
            cityName='Toronto'
            mainDescription='Sunny'
            imgSrc='http://openweathermap.org/img/wn/10d@2x.png'
            imgAlt='image'
        />
        <WeatherDetailsSection 
            windSpeed={9}
            humidity={50}
            temp={23}
            tempMax={10}
            tempMin={3}
            feelsLike={5}
            sunset='16:00'
            sunrise='7:00'
            pressure={1050}
            description='light rain'
        />
        <WeatherForecastSection />
        <DateSection clock={clock} day={day} />
    </StyledMain>
);

export default DetailsView;