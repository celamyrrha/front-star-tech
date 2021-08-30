import styled from 'styled-components';

export const HomeContainer = styled.div `
widht: 100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-size: cover;
background-color:#288d9c;
color: #fff;
`;

export const Botao = styled.div`
width: 152vh;
margin-top: 20px;
text-align: center;
`;

export const Subtitulo = styled.h2`
  padding-top:10px;
  color: #e5e4e2;
  font-size: 25px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
export const FormInput = styled.input`
border: 1px solid #ddd;
height 2rem;
padding: 0 .5rem;
margin-bottom: 0.5rem;
border-radius: .25rem;

`;
export const FormSelect = styled.select`
border: 1px solid #fff;
`;
export const Red = styled.span`
color: red;
`;
export const ErrorSpan = styled.span`
  color: red;
  display: ${(props) => props.isError ? 'block' : 'none'};
`;