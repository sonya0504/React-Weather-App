import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Description from "../Description/Description";


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const StyledImage = styled.img`
    width:  ${({ theme }) => theme.fontSize.s};;
    height:  ${({ theme }) => theme.fontSize.s};;
    display: block;
    margin-right: 10px;
`;

const StyledDesccription = styled(Description)`
    font-size: ${({ theme }) => theme.fontSize.s};
`;

const WeatherComponent = ({ image, value }) => {
    
    return (
    <StyledWrapper>
        <StyledImage src={image} alt={value} />
        <>
            <StyledDesccription>{value}</StyledDesccription>
        </>
    </StyledWrapper>
    );
}

WeatherComponent.propTypes = {
    image: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default WeatherComponent;