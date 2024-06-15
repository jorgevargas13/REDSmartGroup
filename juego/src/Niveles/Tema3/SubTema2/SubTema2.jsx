import { useContext, useEffect, useState} from "react";
import { GlobalContext } from "../../../Global/Global";
import { Backdrops, Backdrops2, Box, Btn, DivR, IconCerrar, ImgTitulo } from "../../../Componentes/UI";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Explicacion1 from "../../../Imagenes/Tema3/Videos/submodulo2delmodulo3.mp4";
import Prueba from "../../../Imagenes/Modulo1/Img/PRUEBA.png";
import Instrucciones1 from "../../../Imagenes/Modulo1/Img/Instrucciones_4.png";
import Trivia from "../../Juegos/Trivia/Trivia";
import { Tooltip } from "@mui/material";

const SubTema2 = () => {
    const {setRuta, setRutaTema3, setPuntaje, preguntasAletorias, setTerminado} = useContext(GlobalContext);
    const [iden, setIden] = useState('Explicacion');
    const [activar, setActivar] = useState(false);
    const [activar2, setActivar2] = useState(false);
    const [comenzar, setComenzar] = useState(false);
    const [texto, setText] = useState("Comenzando en 3 segundos...");
    const [contador, setContador] = useState(3);
    useEffect(() => {
        let intervalo;
        if (activar2) {
            intervalo = setInterval(() => {
                setContador(contador => contador - 1);
            }, 1000);
        }
        return () => clearInterval(intervalo);
    }, [activar2]);
    useEffect(() => {
        if (contador === 0){
            setActivar2(false);
            setComenzar(true);
        }else if (contador > 1){
            setText(`Comenzando en ${contador} segundos...`)
        }else if (contador === 1){
            setText(`Comenzando en ${contador} segundo...`)
        }
    }, [contador]);
    const Volver = () => {
        setRuta(prevState => ({
            ...prevState,
            tema3: true
        }));
        setRutaTema3(prevState => ({
            ...prevState,
            tema2: false
        }));
    }
    const volver = () => {
        if (iden === 'Prueba'){
            setIden('Explicacion')
        }
        if (iden === 'Instrucciones'){
            setIden('Prueba')
        }
    }
    const Continuar = () => {
        if (iden === 'Explicacion'){
            setIden('Prueba')
        }
        if (iden === 'Prueba'){
            setIden('Instrucciones')
        }
        if (iden === 'Instrucciones'){
            setIden('JuegoSubTema3-2');
            setActivar2(true);
        }
    }
    const Completado = () =>{
        setRuta(prevState => ({
            ...prevState,
            tema3: true,
        }));
        setRutaTema3(prevState => ({
            ...prevState,
            tema2: false,
            tema2C: true
        }));
        setTerminado(prevState => ({
            ...prevState,
            modulo3: {
                ...prevState.modulo3,
                SubTema2: true
            },
        }));
    }
    const Terminado = (puntuaje, tiempo, tiempoText) => {
        setText(`¡Excelente trabajo! Has obtenido una puntuación de ${puntuaje} y te has tardado tan solo ${tiempoText} en completar el desafío.`)
        setIden('Continuar');
        setPuntaje(prevState => ({
            ...prevState,
            modulo3: {
                ...prevState.modulo3,
                SubTema2: {puntuajeTotal: puntuaje, tiempoTotal: tiempo}
            },
            puntuajeTotal: prevState.puntuajeTotal + puntuaje,
            tiempoTotal: prevState.tiempoTotal + tiempo,
            juegoTerminado: prevState.juegoTerminado + 1,
        }));
    }
    return (
        <>
            <Box id={iden} className="imagen">
                {iden !== "Continuar" && (
                    <Tooltip title={"Regresar"}>
                        <IconCerrar id="cerrarPerfil" aria-label="Cerrar" onClick={Volver}><KeyboardReturnIcon fontSize="large"/></IconCerrar>
                    </Tooltip>
                )}
                {iden === 'JuegoSubTema3-2' && (
                    <Tooltip title={"Instrucciones"}>
                        <IconCerrar id="instrucciones" aria-label="Cerrar" onClick={() => {setActivar(true);}}><TipsAndUpdatesIcon fontSize="large"/></IconCerrar>
                    </Tooltip>
                )}
                {iden !== "JuegoSubTema3-2" && iden !== "Continuar" && (
                    <>
                        <DivR className="imagen-Contenedor" id={iden}>
                            { iden === 'Explicacion' && (
                                <video controls style={{width: '100%', height: '100%'}} autoPlay  loop>
                                    <source src={Explicacion1} type="video/mp4"/>
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                            )}
                            { iden === 'Prueba' && (
                                <ImgTitulo src={Prueba}/>
                            )}
                            { iden === 'Instrucciones' && (
                                <ImgTitulo src={Instrucciones1}/>
                            )}
                        </DivR>
                        { (iden === 'Explicacion') ? (
                            <DivR style={{width: '100%'}}>
                                <Btn id="Login" variant="contained" onClick={Continuar}>{iden === 'Explicacion' ? 'Continuar' : iden === 'Instrucciones' ? 'Empezar' : 'Verificar '}</Btn>
                            </DivR>) 
                            : (
                            <DivR style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                <DivR style={{width: '45%'}}>
                                    <Btn id="Login" variant="contained" onClick={volver}>Volver</Btn>
                                </DivR>
                                <DivR style={{width: '45%'}}>
                                    <Btn id="Login" variant="contained" onClick={Continuar}>Continuar</Btn>
                                </DivR>
                            </DivR>
                        )}
                    </>
                )}
                {iden === "JuegoSubTema3-2" && (
                    <Trivia Terminado={Terminado} preguntas={preguntasAletorias.modulo3.SubTema2} comenzar={comenzar}/>
                )}
                {iden === "Continuar" && (
                    <>
                        <DivR style={{marginBottom: '1rem', alignItems: 'center'}}>
                            <h1 style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>{texto}</h1>
                        </DivR>
                        <DivR style={{width: '100%'}}>
                            <Btn id="Login" variant="contained" onClick={Completado}>Continuar</Btn>
                        </DivR>
                    </>
                )}
            </Box>
            {activar && (
                <Backdrops activar={activar} iden="Instrucciones" setActivar={setActivar} img={Instrucciones1}/>
            )}
            {activar2 && (
                <Backdrops2 activar={activar2} texto={texto}/>
            )}
        </>
    )
}

export default SubTema2;