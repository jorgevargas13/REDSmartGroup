import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, {useState} from "react";
import GlobalStyle from "./Componentes/GlobalStyle/GlobalStilo";
import { temaClaro, temaOscuro } from "./Componentes/UI/Temas";
import Niveles from './Niveles/Niveles';
import { GlobalPermitido } from './Global/Global';
import { ImgHeart } from './Componentes/UI';
import Logo from "./Imagenes/ActiHeart.png";
import { PreguntasT2_1, PreguntasT3_2, PreguntasT1_3, PreguntasT2_2 } from './Niveles/preguntasTrivia';
import Record from './Record/record';

function App() {
  const URLS = `${process.env.REACT_APP_BACKEND_URL}/api/` || "http://localhost:65090/api/";
  const [tema, CambioTema] = useState(true);
  const [contenedor, setContenedor] = useState("Contenedor-Login")
  const [logeado, setLogeado] = useState(false);
  const [ruta, setRuta] = useState({ programa: false, temas: false, tema1: false, tema2: false, tema3: false, tema1C: false, tema2C: false, tema3C: false });
  const [rutaTema1, setRutaTema1] = useState({tema1: false, tema2: false, tema3: false, tema1C: false, tema2C: false, tema3C: false});
  const [rutaTema2, setRutaTema2] = useState({tema1: false, tema2: false, tema3: false, tema1C: false, tema2C: false, tema3C: false});
  const [rutaTema3, setRutaTema3] = useState({tema1: false, tema2: false, tema3: false, tema1C: false, tema2C: false, tema3C: false});
  const [puntaje, setPuntaje] = useState({
    modulo1: {SubTema1: {}, SubTema2: {}, SubTema3: {}},
    modulo2: {SubTema1: {}, SubTema2: {}, SubTema3: {}},
    modulo3: {SubTema1: {}, SubTema2: {}, SubTema3: {}},
    puntuajeTotal: 0,
    tiempoTotal: 0,
    juegoTerminado: 0,
  });
  const [terminado, setTerminado] = useState({
    modulo1: {SubTema1: false, SubTema2: false, SubTema3: false, guardado: false},
    modulo2: {SubTema1: false, SubTema2: false, SubTema3: false, guardado: false},
    modulo3: {SubTema1: false, SubTema2: false, SubTema3: false, guardado: false},
  });
  const [preguntasAletorias, setPreguntasAleatorias] = useState({
    modulo1: {SubTema3: [PreguntasT1_3.rows1, PreguntasT1_3.rows2, PreguntasT1_3.rows3, PreguntasT1_3.rows4]},
    modulo2: {SubTema1: PreguntasT2_1, SubTema2: [PreguntasT2_2.rows1, PreguntasT2_2.rows2, PreguntasT2_2.rows3, PreguntasT2_2.rows4]},
    modulo3: {SubTema2: PreguntasT3_2}
  })
  const [identificacion, setIdentificacion] = useState('');
  const [nombre, setNombre] = useState('');
  return (
    <ThemeProvider theme={tema ? temaOscuro : temaClaro}>
      <CssBaseline />
      <GlobalStyle/>
      <GlobalPermitido contenedor={contenedor} setContenedor={setContenedor} tema={tema} setTema={CambioTema} 
        logeado={logeado} setLogeado={setLogeado} ruta={ruta} setRuta={setRuta} rutaTema1={rutaTema1} 
        setRutaTema1={setRutaTema1} rutaTema2={rutaTema2} setRutaTema2={setRutaTema2} rutaTema3={rutaTema3} 
        setRutaTema3={setRutaTema3} puntaje={puntaje} setPuntaje={setPuntaje} preguntasAletorias={preguntasAletorias} 
        setPreguntasAleatorias={setPreguntasAleatorias} identificacion={identificacion} setIdentificacion={setIdentificacion}
        nombre={nombre} setNombre={setNombre} terminado={terminado} setTerminado={setTerminado} URLS={URLS}
        >
        {logeado && (
          <ImgHeart src={Logo}/>
        )}
        {puntaje.juegoTerminado < 9 ? (
            <Niveles/>
          ) :
          (
            <Record></Record>
          )
        }
      </GlobalPermitido>
    </ThemeProvider>
  );
}

export default App;
