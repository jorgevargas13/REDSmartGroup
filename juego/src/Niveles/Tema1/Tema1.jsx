import { useContext} from "react";
import { GlobalContext } from "../../Global/Global";
import { Box, DivR, IconCerrar, ImgModulo } from "../../Componentes/UI";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { PreguntasT1_3 } from "../preguntasTrivia";
import { Tooltip } from "@mui/material";
import sub1 from '../../Imagenes/Modulo1/Img/sub1.png';
import sub2 from '../../Imagenes/Modulo1/Img/sub2.png';
import sub3 from '../../Imagenes/Modulo1/Img/sub3.png';

const Tema1 = () => {
    const {setRuta, rutaTema1, setRutaTema1, setPreguntasAleatorias} = useContext(GlobalContext);
    const mezcla = () => Math.random() - 0.5;
    const Continuar = (iden) => {
        setRuta(prevState => ({
            ...prevState,
            tema1: false
        }));
        if (iden === 'Tema1'){
            setRutaTema1(prevState => ({
                ...prevState,
                tema1: true
            }));
        }
        if (iden === 'Tema2'){
            setRutaTema1(prevState => ({
                ...prevState,
                tema2: true
            }));
        }
        if (iden === 'Tema3'){
            setRutaTema1(prevState => ({
                ...prevState,
                tema3: true
            }));
        }
    }
    const Volver = () => {
        setRuta(prevState => ({
            ...prevState,
            temas: true,
            tema1: false
        }));
    }
    return (
        <Box id="Temas" className="imagen">
            <Tooltip title={"Regresar"}>
                <IconCerrar id="cerrarPerfil" aria-label="Cerrar" onClick={Volver}><KeyboardReturnIcon fontSize="large"/></IconCerrar>
            </Tooltip>
            <DivR id={rutaTema1.tema1C ? 'DivTema-disabled' : 'DivTema'} onClick={() => {
                if (!rutaTema1.tema1C){
                    Continuar('Tema1');
                }
            }} aria-disabled>
                <ImgModulo src={sub1}/>
            </DivR>
            <DivR id={rutaTema1.tema2C ? 'DivTema-disabled' : 'DivTema'} onClick={() => {
                if (!rutaTema1.tema2C){
                    Continuar('Tema2');
                }
            }} aria-disabled>
                <ImgModulo src={sub2}/>
            </DivR>
            <DivR id={rutaTema1.tema3C ? 'DivTema-disabled' : 'DivTema'} onClick={() => {
                if (!rutaTema1.tema3C){
                    Continuar('Tema3');
                    setPreguntasAleatorias(prevState => ( {...prevState, modulo1: { SubTema3: [PreguntasT1_3.rows1.slice().sort(mezcla), PreguntasT1_3.rows2.slice().sort(mezcla), PreguntasT1_3.rows3.slice().sort(mezcla), PreguntasT1_3.rows4.slice().sort(mezcla)].sort(mezcla)},})); Continuar('Tema3');
                }
            }} aria-disabled>
                <ImgModulo src={sub3}/>
            </DivR>
        </Box>
    )
}

export default Tema1;