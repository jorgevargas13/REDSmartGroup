import { useContext, useEffect, useState } from "react";
import { DivR, Box, H2, Btn, IconCerrar } from "../Componentes/UI";
import { GlobalContext } from "../Global/Global";
import { CircularProgress, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import DataTable from "react-data-table-component";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const Column = [
    {
        name: 'Posicion',
        selector: row => row.posicion,
        width: '10%',
        center: true,   
    },
    {
        name: 'Nombre',
        selector: row => row.nombre,
        center: true,
    },
    {
        name: 'N° identificación',
        selector: row => row.identificacion,
        center: true,
    },
    {
        name: 'Puntaje',
        selector: row => row.puntajeTotal,
        width: '15%',
        center: true,
    },
    {
        name: 'Tiempo',
        selector: row => row.tiempoTotal,
        width: '15%',
        center: true,
    },
]

const Record = () => {
    const {puntaje, nombre, identificacion, URLS} = useContext(GlobalContext);
    const [cargando, setCargando] = useState(false);
    const [insertar, setInsertar] = useState(false);
    const [tabla, setTabla] = useState(false);
    //
    const [rows, setRows] = useState([]);
    //
    const Eliminar = async () => {
        try{
            await axios.delete(`${URLS}eliminarRegistro/${identificacion}`);
        }catch{return false}
    }
    //
    const formatTiempo = (tiempo) => {
        const minutos = Math.floor(tiempo / 60);
        const segundos = tiempo % 60;
        return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    };
    const Insertar = async () => {
        try{
            await axios.post(`${URLS}insertarRecord`, {
                nombre: nombre, 
                puntajeTotal: puntaje.puntuajeTotal, 
                tiempoTotal: puntaje.tiempoTotal, 
                identificacion: identificacion
            });
        }catch{return false}
    }
    const Obtener = async () => {
        try{
            const response = await axios.get(`${URLS}records`);
            const data = await response.data;
            setRows(data);
        }catch{return false}
    }
    useEffect(() => {
        if (insertar){
            Insertar().then(() => {Eliminar(); setCargando(false)});
        }else{
            setInsertar(true);
        }
    }, [insertar]);

    const Records = () => {
        setTabla(true);
        setCargando(true);
        Obtener().then(() => {
            setCargando(false);
        })
    }

    return (
        <DivR id={'record'} className="imgContenedor">
            {
                tabla ? 
                <Box id="Record-tabla" className="imagen">
                    <Tooltip title={"Regresar"}>
                        <IconCerrar id="cerrarPerfil" aria-label="Cerrar" onClick={() => setTabla(false)}><KeyboardReturnIcon fontSize="large"/></IconCerrar>
                    </Tooltip>
                    <H2 id="record">Records</H2>
                    <DataTable
                        columns={Column}
                        data={rows}
                        pagination
                        fixedHeader
                        progressPending={cargando}
                        progressComponent={
                            <>
                                <CircularProgress size={120}/>
                                <H2 id="record">Calculando puntaje...</H2>
                            </> 
                        }
                    />
                </Box>
                :
                <Box id="Record" className="imagen">
                    {
                        cargando ? 
                        <>
                            <CircularProgress size={120}/>
                            <H2 id="record">Calculando puntaje...</H2>
                        </> 
                        :
                        <>
                            <H2 id="record">¡Misión cumplida!</H2>
                            <Typography color={'black'} textAlign={'center'}>¡Felicitaciones, {nombre}! Con un puntaje de {puntaje.puntuajeTotal} puntos y un tiempo récord de {formatTiempo(puntaje.tiempoTotal)}, ¡te luciste! ¿Quieres volver a jugar? Haz clic en 'Botón de inicio' para otra aventura emocionante. ¿O prefieres ver tu posición en la tabla de líderes? Haz clic en 'Botón de Tabla de posiciones' para compararte con otros jugadores destacados.</Typography>
                            <DivR id="record-button">
                                <div style={{flex: '0 0 45%'}}>
                                    <Btn id="Login" variant="contained" onClick={() => {window.location.reload();}}>Inicio</Btn>
                                </div>
                                <div style={{flex: '0 0 45%'}}>
                                    <Btn id="Login" variant="contained" onClick={Records}>Tabla de posiciones</Btn>
                                </div>
                            </DivR>
                        </>
                    }
                </Box>
            }
        </DivR>
    )
}

export default Record;