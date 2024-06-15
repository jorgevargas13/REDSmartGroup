import { useEffect, useState } from "react";
import { DivD, H2, InputD } from "../../../Componentes/UI";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const JuegoDescubrir = ({Terminado, palabras, comenzar}) => {
    const [palabra, setPalabra] = useState(palabras[0].split('').sort(() => Math.random() - 0.5).join(''));
    const [posJuegoActual, setPosJuegoActual] = useState(0);
    const [cantidadAcertada, setCantidadAcertada] = useState(0);
    const [x, setX] = useState(0);
    const [idInterval, setIdInterval] = useState(null);
    const [width, setWidth] = useState(0);
    const [bandera, setBandera] = useState(false);
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
        if (comenzar){
            setPalabra(palabras[0].split('').sort(() => Math.random() - 0.5).join(''));
            setIntervaloActivo(comenzar);
            document.getElementById("JuegoDescubrirInput").focus();
            setBandera(comenzar);
        }
    }, [comenzar]);
    const formatTiempo = () => {
        const minutos = Math.floor(tiempo / 60);
        const segundos = tiempo % 60;
        return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    };
    useEffect(() => {
        function frame() {
            setWidth(prevWidth => {
                const newWidth = prevWidth + 1;
                const elem = document.getElementById("myBar");
                elem.style.width = `${newWidth}%`;
                return newWidth;
            });
        }

        if (x === 0 && bandera === true) {
            setBandera(false);
            setX(1);
            setIdInterval(setInterval(frame, 100));
        }

        if (x === 2 && idInterval !== null) {
            setIdInterval(prevIntervalor => {
                clearInterval(prevIntervalor);
                return null;
            });
        }

        return () => {
            if (idInterval !== null) {
                clearInterval(idInterval);
                setIdInterval(null);
            }
        };
    }, [x, bandera]);

    useEffect(() => {
        if (width >= 100) {
            setX(1);
            setWidth(0);
            setPosJuegoActual(prevPos => {
                const newPrewPost = prevPos + 1;
                siguiente(newPrewPost, cantidadAcertada);
                return newPrewPost;
            });
        }
    }, [width, cantidadAcertada]);

    const siguiente = (num, acertada) => {
        if(num >= palabras.length){
            setX(2);
            Terminado(Math.round((acertada / palabras.length) * 100), tiempo, formatTiempo());
            return;
        }else{
            document.getElementById("JuegoDescubrirInput").value = "";
            setPalabra(palabras[num].split('').sort(() => Math.random() - 0.5).join(''));
        }
    }

    const Comparar = (evento) => {
        if (posJuegoActual < palabras.length){
            if(evento.target.value.toUpperCase() === palabras[posJuegoActual].toUpperCase()){
                setWidth(0);
                setPosJuegoActual((posJuegoActual + 1));
                setCantidadAcertada((cantidadAcertada + 1));
                siguiente((posJuegoActual + 1), (cantidadAcertada + 1));
            }
        }
    }

    return (
        <section style={{maxWidth: '90%', width: '100%', textAlign: 'center'}}>
            <H2 id="JuegoDescubrir">Ordena las letras y adivina</H2>
            <DivD className="contenedor" id="JuegoDescubrir">
                {
                    palabra.split("").map((letra, index) => (
                        <DivD key={index} id="JuegoDescubrir" className="letra">{letra.toLocaleUpperCase()}</DivD>
                    ))
                }
            </DivD>
            <InputD onChange={Comparar} type="text" id="JuegoDescubrirInput" disabled={posJuegoActual >= palabras.length}/>
            <DivD id="JuegoDescubrir" className="myProgress">
                <DivD id="myBar"></DivD>
            </DivD>

            <DivD id="JuegoDescubrir" className="acertadas">
                <ThumbUpIcon style={{fontSize: '2.5rem'}}/>
                <span style={{marginLeft: '1rem'}}>{cantidadAcertada}/{palabras.length}</span>
            </DivD>
        </section>
    )
}

export default JuegoDescubrir;