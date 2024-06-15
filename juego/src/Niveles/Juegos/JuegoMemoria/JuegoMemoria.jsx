import { useEffect, useState } from "react";
import { BtnN } from "../../../Componentes/UI";

const JuegoMemoria = ({text = "Juego de memoria", rows, comenzar, calcularPuntaje}) => {
    let rows1 = rows[0];
    let rows2 = rows[1];
    let rows3 = rows[2];
    let rows4 = rows[3];
    const [tarjetasDestapadas, setTarjetaDestapadas] = useState(0);
    const [movimientos, setMovimientos] = useState(0);
    const [aciertos, setAciertos] = useState(0);
    const [primerResultado, setPrimerResultado] = useState(0);
    const [posicion1, setPosicion1] = useState({});
    const [mostrarTexto, setMostrarTexto] = useState(true);
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
    const actualizar = (index, valor, disabled, rowsModificar) => {
        rowsModificar[index] = {text: valor, valor: valor, disabled: disabled};
    }

    const original = (index, valor, rowsModificar) => {
        rowsModificar[index] = {text: '', valor: valor, disabled: false};
    }

    const handleClick = (valor, index, rowsModificar, tipo) => {
        let posicion2 = {};
        if ((tarjetasDestapadas + 1) === 1){
            actualizar(index, valor, true, rowsModificar)
            setPrimerResultado(valor);
            setTarjetaDestapadas((tarjetasDestapadas + 1));
            setPosicion1({index, valor, disabled: false, rowsModificar, tipo})
        }else if ((tarjetasDestapadas + 1) === 2){
            setTarjetaDestapadas(0);
            actualizar(index, valor, true, rowsModificar)
            setMovimientos((movimientos + 1));
            posicion2 = {index, valor, disabled: false, rowsModificar, tipo};
            if (primerResultado === valor){
                if ((aciertos + 1) === 8){
                    setIntervaloActivo(false);
                    calcularPuntaje(Math.round((8 / 8) * (8 / movimientos) * 100), tiempo, formatTiempo());
                }
                setAciertos((aciertos + 1));
                setPosicion1('');
            }else{
                setTimeout(() => {
                    try{
                        original(posicion1.index, posicion1.valor, posicion1.rowsModificar)
                        original(posicion2.index, posicion2.valor, posicion2.rowsModificar)
                        setMostrarTexto(false);
                    }catch{}
                }, 1000);
            }
        }
        setTimeout(() => {
            setMostrarTexto(true);
        }, 2000);
    };
    return (
        <>
            <section>
                <h1 style={{color: 'black', textAlign: 'center', fontWeight: 'bold', marginBottom: '2rem'}}>{text}</h1>
                <table>
                    <tr>
                        {rows1.map(({text, valor, disabled}, index) => (
                            <td><BtnN variant="contained" disabled={disabled} id={disabled ? 'desactivado' : ''}
                                onClick={() => handleClick(valor, index, rows1, 'rows1')}
                            >
                                {mostrarTexto ? text : text}
                            </BtnN></td>
                        ))}
                    </tr>
                    <tr>
                        {rows2.map(({text, valor, disabled}, index) => (
                            <td><BtnN variant="contained" disabled={disabled} id={disabled ? 'desactivado' : ''}
                            onClick={() => handleClick(valor, index, rows2, 'rows2')}
                            >
                                {mostrarTexto ? text : text}
                            </BtnN></td>
                        ))}
                    </tr>
                    <tr>
                        {rows3.map(({text, valor, disabled}, index) => (
                            <td><BtnN variant="contained" disabled={disabled} id={disabled ? 'desactivado' : ''}
                                onClick={() => handleClick(valor, index, rows3, 'rows3')}
                            >
                                {mostrarTexto ? text : text}
                            </BtnN></td>
                        ))}
                    </tr>
                    <tr>
                        {rows4.map(({text, valor, disabled}, index) => (
                            <td><BtnN variant="contained" disabled={disabled} id={disabled ? 'desactivado' : ''}
                                onClick={() => handleClick(valor, index, rows4, 'rows4')}
                            >
                                {mostrarTexto ? text : text}
                            </BtnN></td>
                        ))}
                    </tr>
                </table>
            </section>
            <section style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%'}}>
                <h2 style={{color: 'black', border: '1px solid black', height: '105px', borderRadius: '8px', padding: '8px 20px', boxSizing: 'border-box'}}>Aciertos: {aciertos}</h2>
                <h2 style={{color: 'black', border: '1px solid black', height: '105px', borderRadius: '8px', padding: '8px 20px', boxSizing: 'border-box'}}>Tiempo: {formatTiempo()}</h2>
                <h2 style={{color: 'black', border: '1px solid black', height: '105px', borderRadius: '8px', padding: '8px 20px', boxSizing: 'border-box'}}>Movimientos: {movimientos}</h2>
            </section>
        </>
    )
}

export default JuegoMemoria;