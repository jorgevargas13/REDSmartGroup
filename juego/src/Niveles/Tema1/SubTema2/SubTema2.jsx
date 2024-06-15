import { useContext, useEffect, useState} from "react";
import { GlobalContext } from "../../../Global/Global";
import { Backdrops, Backdrops2, Box, Btn, DivR, IconCerrar, ImgTitulo } from "../../../Componentes/UI";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Explicacion1 from "../../../Imagenes/Modulo1/Videos/Explicacion_2.mp4";
import Prueba from "../../../Imagenes/Modulo1/Img/PRUEBA.png";
import Instrucciones1 from "../../../Imagenes/Modulo1/Img/Instrucciones_2.png";
import img1 from "../../../Imagenes/Modulo1/Img/img1.jpg";
import img2 from "../../../Imagenes/Modulo1/Img/img2.png";
import img3 from "../../../Imagenes/Modulo1/Img/img3.webp";
import JuegoArrastrarSoltar from "../../Juegos/JuegoArrastrarSoltar/JuegoArrastrarSoltar";
import { Tooltip } from "@mui/material";

const SubTema2 = () => {
    const {setRuta, setRutaTema1, setPuntaje, setTerminado} = useContext(GlobalContext);
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
            tema1: true
        }));
        setRutaTema1(prevState => ({
            ...prevState,
            tema2: false
        }));
    }
    const volver = () => {
        if (iden === 'Prueba'){
            setIden('Explicacion');
        }
        if (iden === 'Instrucciones'){
            setIden('Prueba');
        }
    }
    const Continuar = () => {
        if (iden === 'Explicacion'){
            setIden('Prueba');
        }
        if (iden === 'Prueba'){
            setIden('Instrucciones');
        }
        if (iden === 'Instrucciones'){
            setIden('JuegoSubTema1-2');
            setActivar2(true);
        }
    }
    const RutaImagen = [
        {
            ruta: img1,
            titulo: 'Sangre'
        },
        {
            ruta: img2,
            titulo: 'Venas y Arterias'
        },
        {
            ruta: img3,
            titulo: 'Corazon'
        }
    ];
    const ArrayDiv = ["", "", ""];
    const Terminado = (arreglo, OrdenCorrecto, tiempo, tiempoText) => {
        if (arreglo[0] !== "" && arreglo[1] !== "" && arreglo[2] !== ""){
            let puntuajeJuego = 0, mensaje = "", correctas = 0;
            if (arreglo[0] === OrdenCorrecto[0]){
                correctas+=1;
            }
            if (arreglo[1] === OrdenCorrecto[1]){
                correctas+=1;
            }
            if (arreglo[2] === OrdenCorrecto[2]){
                correctas+=1;
            }
            puntuajeJuego = Math.round((correctas / arreglo.length) * 100);
            if (correctas === 3){
                mensaje = `¡Excelente trabajo! Has obtenido una puntuación de ${puntuajeJuego} y te has tardado tan solo ${tiempoText} en completar el desafío.`
            }
            if (correctas === 2){
                mensaje = `¡Bien hecho! Has respondido correctamente ${correctas} pregunta y has obtenido una puntuación de ${puntuajeJuego}. Te has tardado tan solo ${tiempoText} en completar el desafío.`
            }
            if (correctas === 1){
                mensaje = `¡Bien hecho! Has respondido correctamente ${correctas} pregunta y has obtenido una puntuación de ${puntuajeJuego}. Te has tardado tan solo ${tiempoText} en completar el desafío.`
            }
            if (correctas === 0){
                mensaje = `¡Buen esfuerzo! Has respondido correctamente ${correctas} pregunta y has obtenido una puntuación de ${puntuajeJuego}. Te has tardado tan solo ${tiempoText} en completar el desafío. ¡Sigue practicando y mejorarás!`
            }
            setText(mensaje)
            setIden('Continuar');
            setPuntaje(prevState => ({
                ...prevState,
                modulo1: {
                    ...prevState.modulo1,
                    SubTema2: {puntuajeTotal: puntuajeJuego,tiempoTotal: tiempo}
                },
                puntuajeTotal: prevState.puntuajeTotal + puntuajeJuego,
                tiempoTotal: prevState.tiempoTotal + tiempo,
                juegoTerminado: prevState.juegoTerminado + 1,
            }));
        }
    }
    const Completado = () =>{
        setRuta(prevState => ({
            ...prevState,
            tema1: true,
        }));
        setRutaTema1(prevState => ({
            ...prevState,
            tema2: false,
            tema2C: true
        }));
        setTerminado(prevState => ({
            ...prevState,
            modulo1: {
                ...prevState.modulo1,
                SubTema2: true
            },
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
                {iden === 'JuegoSubTema1-2' && (
                    <Tooltip title={"Instrucciones"}>
                        <IconCerrar id="instrucciones" aria-label="Cerrar" onClick={() => {setActivar(true);}}><TipsAndUpdatesIcon fontSize="large"/></IconCerrar>
                    </Tooltip>
                )}
                {iden !== "JuegoSubTema1-2" && iden !== "Continuar" && (
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
                
                {iden === "JuegoSubTema1-2" && (
                    <JuegoArrastrarSoltar comenzar={comenzar} imagenes={RutaImagen} arrayDiv={ArrayDiv} terminado={Terminado}/>
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