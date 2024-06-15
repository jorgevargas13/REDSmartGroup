import TextField from '@mui/material/TextField';
import { styled as Styled} from '@mui/system';
import styled from "styled-components";

export const InputR = Styled(TextField)`
  background-color: ${({theme}) => theme.body};
  color: ${({theme}) => theme.text};
  width: 100%;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  border: none;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
  margin-bottom: 1rem;
`

export const InputD = styled.input`
  &#JuegoDescubrirInput{
    display: inline-block;
    font-size: 50px;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid grey;
    margin-top: 40px;
    text-align: center;
    color: black;
    letter-spacing: 4PX;
  }
`