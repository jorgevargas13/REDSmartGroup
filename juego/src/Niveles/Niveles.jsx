import { useContext, useState } from "react";
import { Backdrops4, DivR } from "../Componentes/UI";
import { GlobalContext } from "../Global/Global";
import Logeado from "./Logeado/Logeado";
import Programa from "./Programa/Programa";
import Temas from "./Temas/Temas";
import Tema1 from "./Tema1/Tema1";
import SubTema1 from "./Tema1/SubTema1/SubTema1";
import SubTema2 from "./Tema1/SubTema2/SubTema2";
import SubTema3 from "./Tema1/SubTema3/SubTema3";
import Tema2 from "./Tema2/Tema2";
import SubTema1V2 from "./Tema2/SubTema1/SubTema1";
import SubTema2V2 from "./Tema2/SubTema2/SubTema2";
import SubTema3V2 from "./Tema2/SubTema3/SubTema3";
import Tema3 from "./Tema3/Tema3";
import SubTema1V3 from "./Tema3/SubTema1/SubTema1";
import SubTema2V3 from "./Tema3/SubTema2/SubTema2";
import SubTema3V3 from "./Tema3/SubTema3/SubTema3";
import axios from "axios";

const Niveles = () => {
    const {
        contenedor, ruta, logeado, rutaTema1, rutaTema2, rutaTema3, terminado, URLS, nombre, identificacion, puntaje, setTerminado} = useContext(GlobalContext);
    const [guardar1, setGuardar1] = useState(true);
    const [guardar2, setGuardar2] = useState(true);
    const [guardar3, setGuardar3] = useState(true);
    const TemaGuardar = async (terminadoFinal) => {
        try{
            const ruta1 = {tema1C: rutaTema1.tema1C, tema2C: rutaTema1.tema2C, tema3C: rutaTema1.tema3C};
            const ruta2 = {tema1C: rutaTema2.tema1C, tema2C: rutaTema2.tema2C, tema3C: rutaTema2.tema3C};
            const ruta3 = {tema1C: rutaTema3.tema1C, tema2C: rutaTema3.tema2C, tema3C: rutaTema3.tema3C};
            await axios.post(`${URLS}actualzarRegistro`, {
                identificacion, nombre, puntaje, terminado: terminadoFinal, rutaTema1: ruta1, rutaTema2: ruta2, rutaTema3: ruta3
            });
        }catch{return false}
    }
    const Terminado1 = () => {
        setTerminado(prevState => ({
            ...prevState,
            modulo1: {
                ...prevState.modulo1,
                guardado: true
            },
        }));
        return {
            modulo1: {SubTema1: terminado.modulo1.SubTema1, SubTema2: terminado.modulo1.SubTema2, SubTema3: terminado.modulo1.SubTema3, guardado: true},
            modulo2: {SubTema1: terminado.modulo2.SubTema1, SubTema2: terminado.modulo2.SubTema2, SubTema3: terminado.modulo2.SubTema3, guardado: terminado.modulo2.guardado},
            modulo3: {SubTema1: terminado.modulo3.SubTema1, SubTema2: terminado.modulo3.SubTema2, SubTema3: terminado.modulo3.SubTema3, guardado: terminado.modulo3.guardado},
        }
    }
    const Terminado2 = () => {
        setTerminado(prevState => ({
            ...prevState,
            modulo2: {
                ...prevState.modulo2,
                guardado: true
            },
        }));
        return {
            modulo1: {SubTema1: terminado.modulo1.SubTema1, SubTema2: terminado.modulo1.SubTema2, SubTema3: terminado.modulo1.SubTema3, guardado: terminado.modulo1.guardado},
            modulo2: {SubTema1: terminado.modulo2.SubTema1, SubTema2: terminado.modulo2.SubTema2, SubTema3: terminado.modulo2.SubTema3, guardado: true},
            modulo3: {SubTema1: terminado.modulo3.SubTema1, SubTema2: terminado.modulo3.SubTema2, SubTema3: terminado.modulo3.SubTema3, guardado: terminado.modulo3.guardado},
        }
    }
    const Terminado3 = () => {
        setTerminado(prevState => ({
            ...prevState,
            modulo3: {
                ...prevState.modulo3,
                guardado: true
            },
        }));
        return {
            modulo1: {SubTema1: terminado.modulo1.SubTema1, SubTema2: terminado.modulo1.SubTema2, SubTema3: terminado.modulo1.SubTema3, guardado: terminado.modulo1.guardado},
            modulo2: {SubTema1: terminado.modulo2.SubTema1, SubTema2: terminado.modulo2.SubTema2, SubTema3: terminado.modulo2.SubTema3, guardado: terminado.modulo2.guardado},
            modulo3: {SubTema1: terminado.modulo3.SubTema1, SubTema2: terminado.modulo3.SubTema2, SubTema3: terminado.modulo3.SubTema3, guardado: true},
        }
    }
    return (
        <>
            <DivR id={contenedor} className="imgContenedor">
                {!logeado && (
                    <Logeado/>
                )}
                {logeado && ruta.programa && (
                    <Programa/>
                )}
                {logeado && ruta.temas && (
                    <Temas/>
                )}
                {logeado && ruta.tema1 && (
                    <Tema1/> 
                )}
                {logeado && rutaTema1.tema1 && (
                    <SubTema1/>
                )}
                {logeado && rutaTema1.tema2 && (
                    <SubTema2/>
                )}
                {logeado && rutaTema1.tema3 && (
                    <SubTema3/>
                )}
                {logeado && ruta.tema2 && (
                    <Tema2/>
                )}
                {logeado && rutaTema2.tema1 && (
                    <SubTema1V2/>
                )}
                {logeado && rutaTema2.tema2 && (
                    <SubTema2V2/>
                )}
                {logeado && rutaTema2.tema3 && (
                    <SubTema3V2/>
                )}
                {logeado && ruta.tema3 && (
                    <Tema3/>
                )}
                {logeado && rutaTema3.tema1 && (
                    <SubTema1V3/>
                )}
                {logeado && rutaTema3.tema2 && (
                    <SubTema2V3/>
                )}
                {logeado && rutaTema3.tema3 && (
                    <SubTema3V3/>
                )}
            </DivR>
            { (
                terminado.modulo1.SubTema1 && terminado.modulo1.SubTema2 && terminado.modulo1.SubTema3
                && !terminado.modulo1.guardado
            ) && (
                <Backdrops4 activar={guardar1} set={setGuardar1} funcion={TemaGuardar} texto={'Guardando tu progreso, por favor no cierres ni refresques esta página.'} actualizar={Terminado1}/>
            )}
            { (
                terminado.modulo2.SubTema1 && terminado.modulo2.SubTema2 && terminado.modulo2.SubTema3
                && !terminado.modulo2.guardado
            ) && (
                <Backdrops4 activar={guardar2} set={setGuardar2} funcion={TemaGuardar} texto={'Guardando tu progreso, por favor no cierres ni refresques esta página.'} actualizar={Terminado2}/>
            )}
            { (
                terminado.modulo3.SubTema1 && terminado.modulo3.SubTema2 && terminado.modulo3.SubTema3
                && !terminado.modulo3.guardado
            ) && (
                <Backdrops4 activar={guardar3} set={setGuardar3} funcion={TemaGuardar} texto={'Guardando tu progreso, por favor no cierres ni refresques esta página.'} actualizar={Terminado3}/>
            )}
        </>
    )
}

export default Niveles;