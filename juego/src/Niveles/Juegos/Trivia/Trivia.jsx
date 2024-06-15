import { useEffect, useRef, useState } from "react";
import { DivD, H2, H4 } from "../../../Componentes/UI";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const Trivia = ({Terminado, preguntas, comenzar}) => {
    const [posJuegoActual, setPosJuegoActual] = useState(0);
    const [cantidadAcertada, setCantidadAcertada] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [pregunta, setPregunta] = useState(preguntas[0]);
    const [respuestas, setRespuestas] = useState(preguntas[0].respuestas);
    const [deshabilitado, setDeshabilitado] = useState(false);
    const ubicacionRef = useRef(null);
    const refs = useRef([]);
    //
    const [tiempo, setTiempo] = useState(0);
    const [intervaloActivo, setIntervaloActivo] = useState(false);
    useEffect(() => {
        let intervalo;
        if (intervaloActivo) {
            intervalo = setInterval(() => {
                setTiempo(tiempo => tiempo + 1);
            }, 1000);
        }
        return () => clearInterval(intervalo);
    }, [intervaloActivo]);
    //
    useEffect(() => {
        setIntervaloActivo(comenzar);
    }, [comenzar]);
    useEffect(() => {
        setPregunta(preguntas[0]);
        setRespuestas(preguntas[0].respuestas.sort(() => Math.random() - 0.5));
    }, [preguntas]);
    //
    const formatTiempo = () => {
        const minutos = Math.floor(tiempo / 60);
        const segundos = tiempo % 60;
        return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    };
    //
    useEffect(() => {
        setRespuestas(pregunta.respuestas.sort(() => Math.random() - 0.5));
    }, [pregunta])
    const siguiente = (num, acertada) => {
        if(num >= preguntas.length){
            Terminado(Math.round((acertada / preguntas.length) * 100), tiempo, formatTiempo());
            return;
        }else{
            setPregunta(preguntas[num]);
        }
    }
    const Click = (evento) => {
        if (!deshabilitado){
            const divActual = evento.target;
            const referencias = refs.current;
            const nuevaReferencia = referencias.map((elemento) => {
                elemento.classList.add('Terminado');
                return elemento;
            });
            const ubicacion = ubicacionRef.current;
            ubicacion.classList.add('Correcta');
            if (ubicacion === divActual){
                setCantidad((cantidadAcertada + 1));
            }
            setTimeout(() => {
                nuevaReferencia.forEach((elemento) => {
                    elemento.classList.remove('Terminado');
                });
                ubicacion.classList.remove('Correcta');
            }, 500);
            setTimeout(() => {
                setDeshabilitado(false);
                console.log(posJuegoActual, cantidadAcertada)
                if (ubicacion === divActual){
                    siguiente((posJuegoActual + 1), (cantidadAcertada + 1));
                    setCantidadAcertada((cantidadAcertada + 1))
                }else{
                    siguiente((posJuegoActual + 1), cantidadAcertada);
                }
            }, 1000);
            setPosJuegoActual((posJuegoActual + 1))
            setDeshabilitado(true);
        }
    }
    return (
        <section style={{height: '100%', width: '100%', textAlign: 'left', display: 'flex', flexDirection: 'column'}}>
            <H2 id="JuegoDescubrir" className="Trivia">Selecciona la respuesta correcta</H2>
            <DivD id="JuegoDescubrir" className="ContenedorTrivia">
                <DivD id="JuegoDescubrir">
                    <DivD className="contenedorText">
                        <H4 id="JuegoDescubrir">{pregunta.pregunta}</H4>
                    </DivD>
                    <DivD className="contenedorPreguntas contenedor" id="JuegoDescubrir">
                        {
                            respuestas.map((texto, index) => {
                                const ref = pregunta.correcta === texto ? ubicacionRef : (element) => {
                                    if (element !== null) {
                                      refs.current[index] = element;
                                    }
                                };
                                return (
                                    <DivD ref={ref} onClick={Click} key={index} id={index} className='respuesta'>{texto}</DivD>
                                )
                            })
                        }
                    </DivD>
                </DivD>
                <DivD id="JuegoDescubrir" className="acertadasTrivia">
                    <ThumbUpIcon style={{fontSize: '2.5rem'}}/>
                    <span style={{marginLeft: '1rem'}}>{cantidad}/{preguntas.length}</span>
                </DivD>
            </DivD>
        </section>
    )
}

export default Trivia;