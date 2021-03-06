import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { devices } from 'theme/device';
import Description from 'components/atoms/Description/Description';
import Heading from 'components/atoms/Heading/Heading';
import WeatherComponent from 'components/atoms/WeatherComponent/WeatherComponent';
import feelsLikeIcon from 'assets/icons/feelsLike.svg';
import humidityIcon from 'assets/icons/humidity.svg';
import pressureIcon from 'assets/icons/pressure.svg';
import tempMaxIcon from 'assets/icons/tempMax.svg';
import tempMinIcon from 'assets/icons/tempMin.svg';
import windSpeedIcon from 'assets/icons/windSpeed.svg';

const StyledWrapper = styled.section`
    display: grid;
    grid-template-rows: 60% 40%;
`;

const StyledInformationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    :last-of-type {
        justify-content: space-around;
    }
`;

const StyledMainConditions = styled.div`
     margin-right: 10px;

    @media ${devices.tablet} {
        margin-right: 30px;
    }
`;

const StyledHeading = styled(Heading)`
    font-size: 70px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin: 0;

    @media ${devices.tablet} {
        font-size: 100px;
    }
`;

const WeatherDetailsSection = ({ 
    description,
    feelsLike, 
    humidity,
    temp,  
    tempMax, 
    tempMin, 
    pressure, 
    windSpeed, 
}) => {

    const weatherConditions = {
        humidity: {
            icon: humidityIcon,
            value: `humidity ${humidity}%`,
        },
        feelsLike: {
            icon: feelsLikeIcon,
            value: `perceptible ${feelsLike}\u{2103}`,
        },
        pressure: {
            icon: pressureIcon,
            value: `pressure ${pressure}hPa`,
        },
        tempMax: {
            icon: tempMaxIcon,
            value: `max ${tempMax}\u{2103}`,
        },
        tempMin: {
            icon: tempMinIcon,
            value: `min. ${tempMin}\u{2103}`
        },
        windSpeed: {
            icon: windSpeedIcon,
            value: `wind ${windSpeed}m/s`,
        }
    }

        return (
            <StyledWrapper>
                <StyledInformationWrapper>
                    <StyledMainConditions>
                        <StyledHeading>{temp}&deg;C</StyledHeading>
                        <Description>{description}</Description>
                    </StyledMainConditions>
                    <div>
                        <WeatherComponent image={weatherConditions.tempMax.icon} value={weatherConditions.tempMax.value} />
                        <WeatherComponent image={weatherConditions.tempMin.icon} value={weatherConditions.tempMin.value} />
                        <WeatherComponent image={weatherConditions.feelsLike.icon} value={weatherConditions.feelsLike.value} />
                    </div>
                </StyledInformationWrapper>
                <StyledInformationWrapper>
                    <WeatherComponent image={weatherConditions.windSpeed.icon} value={weatherConditions.windSpeed.value} />
                    <WeatherComponent image={weatherConditions.pressure.icon} value={weatherConditions.pressure.value} />
                </StyledInformationWrapper>
        </StyledWrapper>
        );
} 

WeatherDetailsSection.propTypes = {
    description: PropTypes.string.isRequired,
    feelsLike: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    temp: PropTypes.string.isRequired,
    tempMax: PropTypes.string.isRequired,
    tempMin: PropTypes.string.isRequired,
    windSpeed: PropTypes.number.isRequired,
}

export default WeatherDetailsSection;