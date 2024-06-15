import { useContext, useState } from "react";
import { GlobalContext } from "../../Global/Global";
import { Box, Btn, DivR } from "../../Componentes/UI";
import Objetivo from "../../Imagenes/Objetivo.mp4";
import Concepto from "../../Imagenes/Concepto.png";
import Presentacion from "../../Imagenes/presentacion.png";

const Programa = () => {
    const {setRuta} = useContext(GlobalContext);
    const [iden, setIden] = useState('Presentacion');
    const Continuar = () => {
        if (iden === 'Presentacion'){
            setIden('Concepto')
        }
        if (iden === 'Concepto'){
            setIden('Objetivo')
        }
        if (iden === 'Objetivo'){
            setRuta(prevState => ({
                ...prevState,
                programa: false,
                temas: true,
            }));
        }
    }
    const Volver = () => {
        if (iden === 'Concepto'){
            setIden('Presentacion')
        }
        if (iden === 'Objetivo'){
            setIden('Concepto')
        }
        const videoElement = document.querySelector('video');
                videoElement.playbackRate = 0.5;
    }
    return (
        <Box id={iden} className="imagen">
            {iden === 'Presentacion' && (
                <>
                    <p style={{color: 'black'}}><h1>Proyecto</h1></p>
                    <img style={{width: '600px', height: '450px'}} src={Concepto}/>
                    <DivR style={{width: '100%'}}>
                        <Btn id="Login" variant="contained" onClick={Continuar}>Continuar</Btn>
                    </DivR>
                </>
            )}
            {iden === 'Concepto' && (
                <>
                    <p style={{color: 'black'}}><h1>Participantes</h1></p>
                    <img style={{width: '600px', height: '450px'}} src={Presentacion}/>
                    <DivR style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <DivR style={{width: '48%'}}>
                            <Btn id="Login" variant="contained" onClick={Volver}>Volver</Btn>
                        </DivR>
                        <DivR style={{width: '48%'}}>
                            <Btn id="Login" variant="contained" onClick={Continuar}>Continuar</Btn>
                        </DivR>
                    </DivR>
                </>
            )}
            {iden === 'Objetivo' && (
                <>
                
                    <video controls style={{width: '100%'}} autoPlay  loop>
                            <source src={Objetivo} type="video/mp4"/>
                            Tu navegador no soporta la reproducción de videos.
                    </video>
                    <DivR style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <DivR style={{width: '48%'}}>
                            <Btn id="Login" variant="contained" onClick={Volver}>Volver</Btn>
                        </DivR>
                        <DivR style={{width: '48%'}}>
                            <Btn id="Login" variant="contained" onClick={Continuar}>Continuar</Btn>
                        </DivR>
                    </DivR>
                </>
            )}
        </Box>
    )
}

export default Programa;