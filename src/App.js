import { createTheme, responsiveFontSizes } from "@mui/material";
import PlayfairDisplay from './fonts/Playfair.ttf'
import Poppins from './fonts/Poppins.ttf'
const theme = createTheme({
    palette: {
        primary:{
            main: '#007a6c',
            light: '#8dc6b8',
            dark: '#004e41',
            contrastText: '#FFFFFF'
        }
    },
    typography: {
        fontFamily: 'Playfair, Poppins, Arial',
        h1: {
            fontFamily: 'Playfair',
        },
        link: {
            fontFamily: 'Playfair',

        },
        navTitle: {
            fontFamily: 'Playfair',
            fontSize: '1.5rem'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'Poppins';
                    font-style: normal;
                    src: url(${Poppins}) format('ttf');
                }
            `
        }
    }
})
let teal = responsiveFontSizes(theme)

export { teal }