import { useEffect, useState } from "react";
import { DivR } from "../../../Componentes/UI";


const JuegoArrastrarSoltar = ({imagenes, arrayDiv, terminado, comenzar}) => {
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
    useEffect(() => {
        setIntervaloActivo(comenzar);
    }, [comenzar]);
    const formatTiempo = () => {
        const minutos = Math.floor(tiempo / 60);
        const segundos = tiempo % 60;
        return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    };
    const NuevoOrden = imagenes.slice().sort((a, b) => a.titulo.localeCompare(b.titulo));
    const OrdenCorrecto = NuevoOrden.map(({titulo}) => titulo);
    const Drag = (evento) => {
        evento.dataTransfer.setData("text", evento.target.id);
    }
    const Drop = (evento) => {
        if (arrayDiv[parseInt(evento.target.id)] === ""){
            var data = evento.dataTransfer.getData("text");
            arrayDiv[parseInt(evento.target.id)] = data;
            evento.target.appendChild(document.getElementById(data));
            const draggedImage = document.getElementById(data);
            if (draggedImage) {
                draggedImage.draggable = false;
            }
        }
        terminado(arrayDiv, OrdenCorrecto,  tiempo, formatTiempo());
    }
    const AllowDrop = (evento) => {
        evento.preventDefault();
    }
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', gap: '5rem', flexDirection: 'column'}}>
            <DivR className="ContenedorImagen">
                {imagenes.map(({ruta, titulo}) => (
                    <DivR className="ContenedorImagen-Img">
                        <img id={titulo} src={ruta} alt={titulo} style={{width: '196px', height: '196px'}} draggable={true} onDragStart={Drag}/>
                    </DivR>
                ))} 
            </DivR>
            <DivR className="ContenedorImagen">
                {NuevoOrden.map(({titulo}, index) => (
                    <DivR className="Figura-imagen">
                        <DivR id={index} className="Figura-contenedor" onDrop={Drop} onDragOver={AllowDrop}></DivR>
                        <h2 style={{color: 'black'}}>{titulo}</h2>
                    </DivR>
                ))} 
            </DivR>
        </div>
    )
}

export default JuegoArrastrarSoltar;