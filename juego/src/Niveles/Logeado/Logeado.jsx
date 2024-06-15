import { useContext, useState} from "react";
import { Box, CampoA, DivR, Btn, ImgLogo, SwalPersonalizado, Backdrops2} from "../../Componentes/UI";
import { useTheme } from "@emotion/react";
import Swal from "sweetalert2";
import ActiHeart from "../../Imagenes/ActiHeart.png"
import { GlobalContext } from "../../Global/Global";
import axios from "axios";

const Logeado = () => {
    const {
        setContenedor, setLogeado, setRuta, nombre, setNombre, identificacion, 
        setIdentificacion, puntaje, URLS, setPuntaje,
        terminado, setTerminado,
        rutaTema1, setRutaTema1,
        rutaTema2, setRutaTema2,
        rutaTema3, setRutaTema3
    } = useContext(GlobalContext);
    const [activar, setActivar] = useState(false);
    const modo = useTheme().palette;
    const Convertir = (valor) =>{
        if (valor === ""){
            setIdentificacion(valor);
        }else if (/^[0-9]+$/.test(valor)){
            setIdentificacion(parseFloat(valor));
        }
    }
    const GuardarUsuario = async (ruta1, ruta2, ruta3) => {
        try{
            const response = await axios.post(`${URLS}insertarRegistro`, {
                identificacion, nombre, puntaje, terminado, rutaTema1: ruta1, rutaTema2: ruta2, rutaTema3: ruta3
            });
            const data = await response.data;
            return data;
        }catch{return false;}
    }
    const Ingresar = () => {
        if (nombre !== "" && identificacion !== ""){
            setActivar(true);
            GuardarUsuario(
                {tema1C: rutaTema1.tema1C, tema2C: rutaTema1.tema2C, tema3C: rutaTema1.tema3C},
                {tema1C: rutaTema2.tema1C, tema2C: rutaTema2.tema2C, tema3C: rutaTema2.tema3C},
                {tema1C: rutaTema3.tema1C, tema2C: rutaTema3.tema2C, tema3C: rutaTema3.tema3C},
            ).then((data) => {
                if (data !== false){
                    if ('registrado' in data){
                        setRutaTema1(prevState => ({
                            ...prevState,
                            tema1C: data.registrado.rutaTema1.tema1C,
                            tema2C: data.registrado.rutaTema1.tema2C,
                            tema3C: data.registrado.rutaTema1.tema3C,
                        }));
                        setRutaTema2(prevState => ({
                            ...prevState,
                            tema1C: data.registrado.rutaTema2.tema1C,
                            tema2C: data.registrado.rutaTema2.tema2C,
                            tema3C: data.registrado.rutaTema2.tema3C,
                        }));
                        setRutaTema3(prevState => ({
                            ...prevState,
                            tema1C: data.registrado.rutaTema3.tema1C,
                            tema2C: data.registrado.rutaTema3.tema2C,
                            tema3C: data.registrado.rutaTema3.tema3C,
                        }));
                        setTerminado(data.registrado.terminado);
                        setPuntaje(data.registrado.puntaje);
                    }
                }
                setActivar(false);
                setRuta(prevState => ({...prevState, programa: true,}));
                setLogeado(true);
                setContenedor('Contenedor-contenido');
            })
        }else{
            let texto = "Por favor digitar toda la información faltante: <br>";
            if (identificacion === ""){
                texto += "- Digitar un número de identificación válido.<br>";
            }
            if (nombre === ""){
                texto += "- Digitar un nombre válido.<br>";
            }
            Swal.fire(SwalPersonalizado(modo, 1, "¡Error!", texto));
        }
    }
    return (
        <>
            <Box id='Login' className="imagen">
                <ImgLogo src={ActiHeart}/>
                <DivR style={{width: '100%', marginBottom: '1rem'}}>
                    <CampoA titulo = "Identificacion" placeholder = "Número de identificación" 
                        valor={identificacion} valorActualizar={Convertir} type="text" modo={modo} maxlength={10}/>
                </DivR>
                <DivR style={{width: '100%'}}>
                    <CampoA titulo = "Nombre" placeholder="Nombre completo"
                        valor={nombre} valorActualizar={setNombre} type="text" modo={modo}/>
                </DivR>
                <DivR style={{width: '100%'}}>
                    <Btn id="Login" variant="contained" onClick={Ingresar}>Ingresa</Btn>
                </DivR>
            </Box>
            {activar && (
                <Backdrops2 activar={activar} texto={'Preparando juegos...'}/>
            )}
        </>
    )
}

export default Logeado;