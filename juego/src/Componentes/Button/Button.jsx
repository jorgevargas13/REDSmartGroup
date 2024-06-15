import { Button} from "@mui/material";
import { styled } from '@mui/system';
import { IconButton } from "@mui/material";
import { colorFormulario } from "../UI/Variables";

export const BtnN = styled(Button)`
  width: 115px;
  height: 115px; 
  margin-bottom: 0.5rem; 
  margin-right: 0.5rem; 
  color: white; 
  font-weight: bold; 
  font-size: 15px;
  &:hover{
    cursor: pointer;
  }
  &#desactivado{
    background-color: grey;
  }
`

export const Btn = styled(Button)`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
  &.desactivar{
    background-color: grey;
  }
  &#Login{
    width: 100%;
  }
  &#Juego1{
    color: black;
    &:hover{
      border: 2px solid ${colorFormulario};
      background-color: transparent;
    }
  }
  &.Juego1-borde{
    border: 2px solid ${colorFormulario};
    background-color: transparent;
  }
  &.Juego1-borde-bien{
    border: 2px solid green;
    background-color: transparent;
  }
  &.Juego1-borde-mal{
    border: 2px solid red;
    background-color: transparent;
  }
`

export const IconCerrar = styled(IconButton)`
  background-color: transparent; 
  color: black;
  font-size: 2.4rem;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  &#instrucciones{
    right: 0;
    left: 10px;
  }
`