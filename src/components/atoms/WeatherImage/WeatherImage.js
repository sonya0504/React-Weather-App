import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
    width: 50px;
    height: 50px;
`;

const WeatherImage = ({ imgSrc, imgAlt }) => (
    <StyledImage src={imgSrc} alt={imgAlt}></StyledImage>
);

export default WeatherImage;