import styled from "styled-components";

interface FormProps{
    onSubmit: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const InputWrapper = styled.form<FormProps>`
margin-top: 2rem;

display: flex;
column-gap: 0.5rem;
min-width: 60vw;

`;


export const Input = styled.input`
height: 3.5rem;
width: 100%;
font-size: 1.5rem;

padding: 0 1.5rem;
border-radius: 0.25rem;
border: none;



:focus{
    outline: 2px solid #7DE2D1;
}

::placeholder{
    color: #C3C3C3;
}
`;

export const Button = styled.button`
border: none;
background-color: #339989;
border-radius: 0.25rem;
padding: 0 2rem;

transition: 500ms;

cursor: pointer;

:hover{
    background-color: #1F6A5F;
    transition: 500ms;
}
`;