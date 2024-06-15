import { useContext} from "react";
import { GlobalContext } from "../../Global/Global";
import { Box, DivR, IconCerrar, ImgModulo } from "../../Componentes/UI";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { PreguntasT3_2 } from "../preguntasTrivia";
import { Tooltip } from "@mui/material";
import sub1 from '../../Imagenes/Tema3/Img/sub1.png';
import sub2 from '../../Imagenes/Tema3/Img/sub2.png';
import sub3 from '../../Imagenes/Tema3/Img/sub3.png';

const Tema3 = () => {
    const {setRuta, rutaTema3, setRutaTema3, setPreguntasAleatorias} = useContext(GlobalContext);
    const Continuar = (iden) => {
        setRuta(prevState => ({
            ...prevState,
            tema3: false
        }));
        if (iden === 'Tema1'){
            setRutaTema3(prevState => ({
                ...prevState,
                tema1: true
            }));
        }
        if (iden === 'Tema2'){
            setRutaTema3(prevState => ({
                ...prevState,
                tema2: true
            }));
        }
        if (iden === 'Tema3'){
            setRutaTema3(prevState => ({
                ...prevState,
                tema3: true
            }));
        }
    }
    const Volver = () => {
        setRuta(prevState => ({
            ...prevState,
            temas: true,
            tema3: false
        }));
    }
    return (
        <Box id="Temas" className="imagen">
            <Tooltip title={"Regresar"}>
                <IconCerrar id="cerrarPerfil" aria-label="Cerrar" onClick={Volver}><KeyboardReturnIcon fontSize="large"/></IconCerrar>
            </Tooltip>
            <DivR id={rutaTema3.tema1C ? 'DivTema-disabled' : 'DivTema'} onClick={() => {
                if (!rutaTema3.tema1C){
                    Continuar('Tema1');
                }
            }} aria-disabled>
                <ImgModulo src={sub1}/>
            </DivR>
            <DivR id={rutaTema3.tema2C ? 'DivTema-disabled' : 'DivTema'} onClick={() => {
                if (!rutaTema3.tema2C){
                    setPreguntasAleatorias(prevState => ({...prevState, modulo3: {...prevState.modulo3, SubTema2: PreguntasT3_2.sort(() => Math.random() - 0.5)},})); Continuar('Tema2');
                }
            }} aria-disabled>
                <ImgModulo src={sub2}/>
            </DivR>
            <DivR id={rutaTema3.tema3C ? 'DivTema-disabled' : 'DivTema'} onClick={() => {
                if (!rutaTema3.tema3C){
                    Continuar('Tema3');
                }
            }} aria-disabled>
                <ImgModulo src={sub3}/>
            </DivR>
        </Box>
    )
}

export default Tema3;