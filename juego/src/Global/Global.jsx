import React, { createContext} from 'react';

export const GlobalContext = createContext({
  contenedor: null, 
  setContenedor: () => {},
  tema: null,
  setTema: () => {},
  ruta: { programa: false, temas: false, tema1: false, tema2: false, tema3: false, tema1C: false, tema2C: true, tema3C: true },
  setRuta: () => {},
  logeado: false,
  setLogeado: () => {},
  rutaTema1: {tema1: false, tema2: false, tema3: false, tema1C: false, tema2C: false, tema3C: false},
  setRutaTema1: () => {},
  rutaTema2: {tema1: false, tema2: false, tema3: false, tema1C: false, tema2C: false, tema3C: false},
  setRutaTema2: () => {},
  rutaTema3: {tema1: false, tema2: false, tema3: false, tema1C: false, tema2C: false, tema3C: false},
  setRutaTema3: () => {},
  puntaje: {
    modulo1: {SubTema1: {}, SubTema2: {}, SubTema3: {}},
    modulo2: {SubTema1: {}, SubTema2: {}, SubTema3: {}},
    modulo3: {SubTema1: {}, SubTema2: {}, SubTema3: {}},
    puntuajeTotal: 0,
    tiempoTotal: 0,
    juegoTerminado: 0,
  },
  setPuntaje: () => {},
  preguntasAletorias: {
    modulo1: {SubTema3: {}},
    modulo2: {SubTema1: {}, SubTema2: {}},
    modulo3: {SubTema2: {}}
  },
  setPreguntasAleatorias: () => {},
  identificacion: '',
  setIdentificacion: () => {},
  nombre: '',
  setNombre: () => {},
  terminado: {
    modulo1: {SubTema1: false, SubTema2: false, SubTema3: false, guardado: false},
    modulo2: {SubTema1: false, SubTema2: false, SubTema3: false, guardado: false},
    modulo3: {SubTema1: false, SubTema2: false, SubTema3: false, guardado: false},
  },
  setTerminado: () => {},
  URLS: `${process.env.REACT_APP_BACKEND_URL}/api/`
});

export const GlobalPermitido = ({children, contenedor, setContenedor, tema, setTema, ruta, setRuta, logeado, setLogeado, rutaTema1, setRutaTema1, rutaTema2, setRutaTema2, rutaTema3, setRutaTema3, puntaje, setPuntaje, preguntasAletorias, setPreguntasAleatorias, identificacion, setIdentificacion, nombre, setNombre, terminado, setTerminado, URLS}) => {
  return (
    <GlobalContext.Provider value={{contenedor, setContenedor, tema, setTema, ruta, setRuta, logeado, setLogeado, rutaTema1, setRutaTema1, rutaTema2, setRutaTema2, rutaTema3, setRutaTema3, puntaje, setPuntaje, preguntasAletorias, setPreguntasAleatorias, identificacion, setIdentificacion, nombre, setNombre, terminado, setTerminado, URLS}}>
      {children}
    </GlobalContext.Provider>
  );
};