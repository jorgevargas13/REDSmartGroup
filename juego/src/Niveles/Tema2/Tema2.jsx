import { useContext} from "react";
import { GlobalContext } from "../../Global/Global";
import { Box, DivR, IconCerrar, ImgModulo } from "../../Componentes/UI";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { PreguntasT2_1, PreguntasT2_2 } from "../preguntasTrivia";
import { Tooltip } from "@mui/material";
import sub1 from '../../Imagenes/Tema2/Img/sub1.png';
import sub2 from '../../Imagenes/Tema2/Img/sub2.png';
import sub3 from '../../Imagenes/Tema2/Img/sub3.png';

const Tema2 = () => {
    const {setRuta, rutaTema2, setRutaTema2, setPreguntasAleatorias} = useContext(GlobalContext);
    const mezcla = () => Math.random() - 0.5;
    const Continuar = (iden) => {
        setRuta(prevState => ({
            ...prevState,
            tema2: false
        }));
        if (iden === 'Tema1'){
            setRutaTema2(prevState => ({
                ...prevState,
                tema1: true
            }));
        }
        if (iden === 'Tema2'){
            setRutaTema2(prevState => ({
                ...prevState,
                tema2: true
            }));
        }
        if (iden === 'Tema3'){
            setRutaTema2(prevState => ({
                ...prevState,
                tema3: true
            }));
        }
    }
    const Volver = () => {
        setRuta(prevState => ({
            ...prevState,
            temas: true,
            tema2: false
        }));
    }
    return (
        <Box id="Temas" className="imagen">
            <Tooltip title={"Regresar"}>
                <IconCerrar id="cerrarPerfil" aria-label="Cerrar" onClick={Volver}><KeyboardReturnIcon fontSize="large"/></IconCerrar>
            </Tooltip>
            <DivR id={rutaTema2.tema1C ? 'DivTema-disabled' : 'DivTema'} onClick={() => {
                if (!rutaTema2.tema1C){
                    setPreguntasAleatorias(prevState => ({...prevState, modulo2: {...prevState.modulo2, SubTema1: PreguntasT2_1.sort(() => Math.random() - 0.5)},})); Continuar('Tema1');
                }
            }} aria-disabled>
                <ImgModulo src={sub1}/>
            </DivR>
            <DivR id={rutaTema2.tema2C ? 'DivTema-disabled' : 'DivTema'} onClick={() => {
                if (!rutaTema2.tema2C){
                    setPreguntasAleatorias(prevState => ( {...prevState, modulo2: { SubTema2: [PreguntasT2_2.rows1.slice().sort(mezcla), PreguntasT2_2.rows2.slice().sort(mezcla), PreguntasT2_2.rows3.slice().sort(mezcla), PreguntasT2_2.rows4.slice().sort(mezcla)].sort(mezcla)},})); Continuar('Tema2');
                }
            }} aria-disabled>
                <ImgModulo src={sub2}/>
            </DivR>
            <DivR id={rutaTema2.tema3C ? 'DivTema-disabled' : 'DivTema'} onClick={() => {
                if (!rutaTema2.tema3C){
                    Continuar('Tema3');
                }
            }} aria-disabled>
                <ImgModulo src={sub3}/>
            </DivR>
        </Box>
    )
}

export default Tema2;