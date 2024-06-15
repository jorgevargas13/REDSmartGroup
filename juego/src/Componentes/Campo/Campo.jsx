import { Leave } from "../../Funciones"
import { InputR } from "../UI"

export const CampoA = (props) => {
    const {placeholder, titulo, valorActualizar, required, valor, type, maxlength, modo, codigoMostrar, disabled} = props
    const recibirDatos = (evento) =>{
        valorActualizar(evento.target.value, titulo)
    }
    const leave = (evento) => {
      Leave(evento, titulo, valor, valorActualizar, modo, "", codigoMostrar);
    }
    return <div className={`campo campo-${titulo}`} style={{width: '100%'}}>
        <InputR
            label={placeholder}
            required = {required} 
            disabled={disabled}
            variant="filled"
            value={valor} 
            onChange={recibirDatos}
            onBlur={leave}
            type={type}
            color="primary"
            size="small"
            inputProps={{ maxLength: `${maxlength ? maxlength : undefined}` }}
        />
    </div>
}