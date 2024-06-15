import { Card} from "@mui/material";
import { styled as Styled } from '@mui/system';
import styled from "styled-components"; 
import backgroundLogin from '../../Imagenes/backgroundLogin.png';
import contenidoFondo_1 from '../../Imagenes/FONDOTODO.png';

export const Box = Styled(Card)` 
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 40%;
    height: 95vh;
    border-radius: 20px;
    padding: 2rem;
    align-items: center;
    transition: width .2s ease, height .2s ease;
    &#Continuar{
        width: 60%;
        height: 60vh;
    }
    &.imagen{
        background: transparent;
        border: 2px solid rgba(0, 0, 0, .5);
        backdrop-filter: blur(100px);
        box-shadow: 0 0 30px rgba(0, 0, 0, .5);
    }
    &.backdrop{
        background-color: white
    }
    &#Login{
        width: 30%;
        height: 75vh;
    }
    &#Contenido{
        height: 75vh;
    }
    &#Temas{
        width: 80%;
        height: 75vh;
        flex-direction: row;
        background: white;
    }
    &#Objetivo{
        width: 50%;
        height: 90vh;
    }
    &#Explicacion{
        width: 55%;
    }
    &#Instrucciones{
        width: 55%;
    }
    &#Prueba{
        height: 55vh;
    }
    &#JuegoSubTema1-1, &#JuegoSubTema1-2, &#JuegoSubTema1-3, 
    &#JuegoSubTema2-1, &#JuegoSubTema2, &#JuegoSubTema2-3,
    &#JuegoSubTema3-1, &#JuegoSubTema3-2, &#JuegoSubTema3-3{
        width: 85%;
        flex-direction: row;
        align-items: flex-start;
    }
    &#Record{
        width: 65%;
        height: 60vh;
        justify-content: center;
        gap: 1.5rem
    }
    &#Record-tabla{
        width: 85%;
        height: 95vh;
        justify-content: center;
        gap: 0.5rem;
        overflow: auto;
    }
`

export const DivR = styled.div`
    &#record-button{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
    }
    &#DivTema-disabled{
        width: 28%;
        background-color: grey;
    }
    &#DivTema{
        width: 28%;
        box-shadow: 3px 3px 10px grey;
        transition: 0.3s ease-in-out;
    }
    &#DivTema:hover{
        cursor: pointer;
        transform: scale(1.2);
        background-color: #fff;
    }
    &.Figura-contenedor{
        width: 200px;
        height: 200px;
        border: 2px solid red;
    }
    &.Figura-imagen{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-items: center;
        text-align: center;
    }
    &.ContenedorImagen-Img{
        width: 200px;
        height: 200px;
    }
    &.ContenedorImagen{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 8rem;
        justify-items: center;
    }
    &.imagen-Contenedor{
        width: 100%; 
        justify-content: center; 
        justify-items: center;
    }
    &#Explicacion{
        height: 90%;
    }
    &.imgContenedor{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transition: background-image 0.5s ease;
    }
    &#Contenedor-Login{
        background-image: url(${backgroundLogin});
    }
    &#Contenedor-contenido, &#record{
        background-image: url(${contenidoFondo_1});
    }
`

export const DivD = styled.div`
    &#JuegoDescubrir{
        &.contenedor{
            margin-top: 40px;
        }
        &.ContenedorTrivia{
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-evenly;
        }
        &.contenedorPreguntas{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
        &.letra{
            display: inline-block;
            max-width: 100px;
            max-height: 100px;
            border-radius: 10px;
            width: 100%;
            color: #000;
            box-shadow: 3px 3px 10px grey;
            font-size: 50px;
            margin: 0.3rem;
            text-align: center;
            font-weight: 800;
            line-height: 80px;
        }
        &.myProgress{
            width: 300px;
            margin: auto;
            background:#1cff03;
            border: 2px solid grey;
            border-radius: 5px;
            margin-top: 50px;
        }
        &.acertadas{
            width: 300px;
            margin: auto;
            margin-top: 30px;
            color: black;
            font-size: 50px;
            font-weight: bold;
            text-align: center;
        }
        &.acertadasTrivia{
            width: 300px;
            margin: 0 auto;
            color: black;
            font-size: 50px;
            font-weight: bold;
            text-align: center;
        }
    }
    &#myBar{
        width: 1%;
        height: 30px;
        background-color:#176aff;
    }
    &.contenedorText{
        text-align: center;
    }
    &.respuesta{
        flex: 0 0 24%;
        display: inline-block;
        min-height: 150px;
        border-radius: 10px;
        width: 100%;
        color: #000;
        box-shadow: 3px 3px 10px grey;
        margin: 0.3rem;
        text-align: center;
        align-content: center;
        font-weight: 800;
        padding: 0.5rem;
        transition: 0.3s ease-in-out;
    }
    &.respuesta:hover{
        cursor: pointer;
        transform: scale(1.2);
        background-color: #fff;
    }
    &.Terminado{
        background-color: red;
        color: white;
    }
    &.Terminado:hover{
        cursor: default;
        transform: none;
        background-color: red;
    }
    &.Correcta{
        background-color: green !important;
        color: white;
    }
    &.Correcta:hover{
        cursor: default;
        transform: none;
        background-color: green !important;
    }
`