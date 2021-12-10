import React from "react";
import AppContext from "context";
import styled from "styled-components";
import { devices } from "theme/device";
import Header from "components/molecules/Header/Header";
import DateSection from "components/molecules/DateSection/DateSection";
import WeatherDetailsSection from "components/organisms/WeatherDetailsSection/WeatherDetailsSection";
import WeatherForecastSection from "components/molecules/WeatherForecastSection/WeatherForecastSection";
import Button from "components/atoms/Button/Button";

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

const StyledButton = styled(Button)`
    width: 50%;
    margin: 0 auto;
`;

const DetailsView = ({ clock, day }) => (
    <AppContext.Consumer>
        {(context) => {
            const weather = context.weatherData;

            return(
            <StyledMain>
            <Header 
                cityName={context.city}
                mainDescription={weather.weather[0].main}
                imgSrc={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                imgAlt={weather.weather[0].main}
                
            />
            <WeatherDetailsSection 
                windSpeed={weather.wind.speed}
                humidity={weather.main.humidity}
                temp={weather.main.temp.toFixed()}
                tempMax={weather.main.temp_max.toFixed()}
                tempMin={weather.main.temp_min.toFixed()}
                feelsLike={weather.main.feels_like.toFixed()}
                pressure={weather.main.pressure}
                description={weather.weather[0].description}
            />
            {!context.showForecast && <StyledButton onClick={context.getForecastWeather}>check forecast</StyledButton>}
            {context.showForecast && <WeatherForecastSection forecast={context.forecastWeatherData.daily}/>}
            <DateSection clock={clock} day={day} />
        </StyledMain>
        )}}
    </AppContext.Consumer>
    
);

export default DetailsView;