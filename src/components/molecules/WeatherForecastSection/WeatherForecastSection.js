import React from "react";
import styled from "styled-components";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

const StyledWrapper = styled.section`
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    overflow: auto;
    white-space: nowrap;
    ::-webkit-scrollbar {
        width: 10px;
    }
     ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.bright};
        border-radius: 50px;
        padding: 10px
    }
     ::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: ${({ theme }) => theme.colors.accent};
        background: linear-gradient(254deg, ${({ theme }) => theme.colors.accent} 0%, rgba(38,38,38,1) 100%);
    }
`;

const WeatherForecastSection = ({date, forecast}) => {

    return (
    <StyledWrapper>
        {
            forecast.map((item, index) => (
                <WeatherForecast index={index+1} icon={item.weather[0].icon} description={item.weather[0].description} temp={`${item.temp.day.toFixed()} \u{2103}`} key={`${index}-${item.weather[0].id}`}/>
        ))
        }
    </StyledWrapper>
    
);}

export default WeatherForecastSection;