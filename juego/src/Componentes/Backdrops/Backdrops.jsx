import Backdrop from '@mui/material/Backdrop';
import { Btn, DivR, ImgTitulo, Box } from '../UI';
import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';

export const Backdrops = ({activar, iden, setActivar, img}) => {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={activar}
      >
        { iden === 'Instrucciones' && (
          <Box id={iden} className="imagen backdrop">
            <DivR className="imagen-Contenedor" id={iden}>
              <ImgTitulo src={img}/>
            </DivR>
            <DivR style={{width: '100%'}}>
              <Btn id="Login" variant="contained" onClick={() => setActivar(false)}>Cerrar</Btn>
            </DivR>
          </Box>
        )}
      </Backdrop>
    </div>
  );
}

export const Backdrops2 = ({activar, texto}) => {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={activar}
      >
        <DivR style={{display: 'flex'}}>
          <DivR style={{marginLeft: '1rem', alignItems: 'center'}}>
            <h1 style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>{texto}</h1>
          </DivR>
        </DivR>
      </Backdrop>
    </div>
  );
}

export const Backdrops3 = ({activar, calcular, texto, puntujaTotal, tiempo}) => {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={activar}
      >
        <Box id={'Continuar'} className="imagen backdrop">
            <DivR style={{marginBottom: '1rem', alignItems: 'center'}}>
              <h1 style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>{texto}</h1>
            </DivR>
            <DivR style={{width: '100%'}}>
              <Btn id="Login" variant="contained" onClick={() => calcular(puntujaTotal, tiempo)}>Continuar</Btn>
            </DivR>
          </Box>
      </Backdrop>
    </div>
  );
}

export const Backdrops4 = ({activar, texto, set, funcion, actualizar}) => {
  useEffect(() => {
    const terminado = actualizar();
    funcion(terminado).then(() => {
      set(false);
    });
  }, []);
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={activar}
      >
        <DivR style={{display: 'flex'}}>
          <DivR style={{marginLeft: '1rem', alignItems: 'center'}}>
            <h1 style={{color: 'white', textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem'}}>{texto}</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <CircularProgress size={85}/>
            </div>
          </DivR>
        </DivR>
      </Backdrop>
    </div>
  );
}