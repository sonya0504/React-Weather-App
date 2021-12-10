import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Description from 'components/atoms/Description/Description';

const StyledWeatherForecastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    width: 80px;
    :first-of-type {
        margin-left: 70px;
    }
    :last-of-type {
        margin-right: 0;
    }
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
    margin: 0;
    width: 70px;
    text-align: center;
    word-wrap:break-word;
    white-space: normal;
`;

const nextDay = (index) => {
    
    const today = new Date();
    let nextDay = new Date();
    nextDay.setDate(today.getDate() + index);
    nextDay = `${nextDay.getDate()}.${nextDay.getMonth()+1}`;
    return nextDay;
}

const WeatherForecast = ({ index, icon, temp, description }) => (
    <StyledWeatherForecastWrapper>
        <StyledDate>{nextDay(index)}</StyledDate>
        <StyledImage src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='Weather icon' />
        <StyledDescription>{temp}</StyledDescription>
        <StyledDescription>{description}</StyledDescription>
    </StyledWeatherForecastWrapper>
);

WeatherForecast.propTypes = {
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default WeatherForecast;