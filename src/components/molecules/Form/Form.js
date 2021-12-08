import React from "react";
import styled from "styled-components";
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
    <StyledForm>
        <Input placeholder='enter location' />
        <Button>check</Button>
    </StyledForm>
);

export default Form;