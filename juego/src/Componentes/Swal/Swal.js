import { contenidoOscuro, contenidoClaro } from "../../Componentes/UI/Variables";
import { colorFormulario } from "../../Componentes/UI/Variables";

export const SwalIden = (modo, mostrar = 'nulo') => {
    return {
        icon: "error",
        title: 'Error',
        text: 'Solo se permiten números de identificación con al menos 8 cifras y maximo 10 cifras.',
        background:`${ modo.mode.toString() === 'dark' ? contenidoOscuro : contenidoClaro}`,
        color: `${modo.text.primary}`,
        confirmButtonText: 'Ok',
        confirmButtonColor: `${colorFormulario}`,
        allowOutsideClick: false,
        customClass: {
            container: `${mostrar}`
        }
    }
}

export const SwalPersonalizado = (modo, opc, titulo, texto, mostrar = 'nulo', buttonText = "Ok") => {
    const getIcon = () => {
        switch (opc) {
            case 0:
                return 'success';
            case 1:
                return 'error';
            case 2:
                return 'warning';
            case 3:
                return 'info';
            case 4:
                return 'question';
            default:
                return 'success';
        }
    };
    return {
        icon: getIcon(),
        title: titulo,
        html: texto,
        background:`${ modo.mode.toString() === 'dark' ? contenidoOscuro : contenidoClaro}`,
        color: `${modo.text.primary}`,
        allowOutsideClick: false,
        confirmButtonText: buttonText,
        confirmButtonColor: `${colorFormulario}`,
        customClass: {
            container: `${mostrar}`
        }
    }
}