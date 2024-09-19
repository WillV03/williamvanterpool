import { createTheme, responsiveFontSizes } from "@mui/material";
import './fonts/Playfair.ttf'
import  './fonts/Poppins.ttf'
let theme = createTheme({
    spacing: 5,
    palette: {
        primary:{
            main: '#007a6c',
            light: '#8dc6b8',
            dark: '#004e41',
            contrastText: '#FFFFFF'
        }
    },
    typography: {
        fontFamily: 'Poppins, Arial',
        h1: {
            fontFamily: 'Playfair',
        },
        h2: {
            fontFamily: 'Playfair',
            color: '#004e41'
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
                    src: url(Poppins) format('ttf');
                }
            `
        },
        MuiTypography: {
            defaultProps: {
                variantMapping:{
                    h1Bold: 'h1'
                }
            }
        }
    }
})
theme = responsiveFontSizes(theme)

export { theme }