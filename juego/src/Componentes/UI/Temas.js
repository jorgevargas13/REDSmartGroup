import { blue, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const temaClaro = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: blue[500],
        },
        secondary: {
            main: teal[500],
        },
    },
});

export const temaOscuro = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: blue[400],
        },
        secondary: {
            main: teal[300],
        },
    },
});