import { SwalIden} from "../../Componentes/UI";
import Swal from 'sweetalert2';

export const Leave = (evento, titulo, valor, valorActualizar, modo, Toast, codigoMostrar, mostrar) => {
    if (titulo === "Identificacion"){
        let numero = 0;
        try {
            numero = parseFloat(valor);
            if (valor === ""){
                numero =0;
            }
            if (isNaN(numero)) {
                throw new Error("No es un número válido");
            }
        } catch {numero = 0}
        if ((numero < 10000000 || numero > 9999999999) && valor !== "" && titulo === "Identificacion"){
            numero = 0;
            Swal.fire(SwalIden(modo, mostrar)).then(() => valorActualizar("", titulo));
        }
    }
}