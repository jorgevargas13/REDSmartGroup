import { useContext} from "react";
import { GlobalContext } from "../../Global/Global";
import { Box, DivR, IconCerrar,ImgModulo } from "../../Componentes/UI";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Tooltip } from "@mui/material";
import Logo1 from '../../Imagenes/Modulo1/Img/modulo1.png';
import Logo2 from '../../Imagenes/Tema2/Img/modulo2.png';
import Logo3 from '../../Imagenes/Tema3/Img/modulo3.png';

const Temas = () => {
    const {setRuta} = useContext(GlobalContext);
    const Continuar = (iden) => {
        if (iden === 'Tema1'){
            setRuta(prevState => ({
                ...prevState,
                temas: false,
                tema1: true
            }));
        }
        if (iden === 'Tema2'){
            setRuta(prevState => ({
                ...prevState,
                temas: false,
                tema2: true
            }));
        }
        if (iden === 'Tema3'){
            setRuta(prevState => ({
                ...prevState,
                temas: false,
                tema3: true
            }));
        }
    }
    const Volver = () => {
        setRuta(prevState => ({
            ...prevState,
            programa: true,
            temas: false,
        }));
    }
    return (
        <Box id="Temas" className="imagen">
            <Tooltip title={"Regresar"}>
                <IconCerrar id="cerrarPerfil" aria-label="Cerrar" onClick={Volver}><KeyboardReturnIcon fontSize="large"/></IconCerrar>
            </Tooltip>
            <DivR id="DivTema" onClick={() => Continuar('Tema1')}>
                <ImgModulo src={Logo1}/>
            </DivR>
            <DivR id="DivTema" onClick={() => Continuar('Tema2')}>
                <ImgModulo src={Logo2}/>
            </DivR>
            <DivR id="DivTema" onClick={() => Continuar('Tema3')}>
                <ImgModulo src={Logo3}/>
            </DivR>
        </Box>
    )
}

export default Temas;