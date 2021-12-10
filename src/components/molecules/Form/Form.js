import React from "react";
import { Navigate } from 'react-router-dom';
import styled from "styled-components";
import AppContext from "context";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";

const StyledForm = styled.form`
    width: 320px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`;

const Form = () => (

    <AppContext.Consumer>
        {(context) => (
            <StyledForm onSubmit={context.getWeather}>
                <Input placeholder='enter location' name='city' onChange={context.getCityName} />
                {context.redirect ? <Navigate to='/details'/> : null}
                <Button type='submit'>check</Button>
            </StyledForm>
        )}
    </AppContext.Consumer>
);

export default Form;