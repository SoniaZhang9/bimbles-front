import { createTheme } from '@mui/material/styles'

const fontNunito = "'Nunito Sans', 'Roboto', 'Arial', sans-serif"
const secondaryColor = '#FB931B'
const MuiChipCommon = {
    fontWeight: 600,
    fontSize: '0.71rem',
    padding: 0,
    height: '24px',
    borderRadius: '6px',
    textTransform: 'uppercase',
    letterSpacing: 1,
}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#BAB653',
            700: '#96A07B',
            200: '#DBE2C4',
            p: '#eee882',
            contrastText: '#fff',
        },
        secondary: {
            main: `${secondaryColor}`,
            contrastText: '#fff',
        },
        grey: {
            main: 'rgba(0, 0, 0, 0.60)',
        },
        lightOrange: {
            main: '#FCB356',
            contrastText: 'rgba(0,0,0,0.87)',
        },
        action: {
            hoverOpacity: 0.13,
        },
    },
    typography: {
        h1: {
            fontFamily: `${fontNunito}`,
            fontSize: '1.5em',
        },
        h2: {
            fontFamily: `${fontNunito}`,
            fontSize: '1.4rem',
            fontWeight: 600,
            color: 'rgba(0,0,0,0.75)',
        },
        h3: {
            fontFamily: `${fontNunito}`,
            fontSize: '2.3rem',
        },
        h4: {
            fontFamily: `${fontNunito}`,
            fontSize: '2.3rem',
            fontWeight: 600,
        },
        h5: {
            fontFamily: `${fontNunito}`,
            fontWeight: 600,
        },
        h6: {
            fontFamily: `${fontNunito}`,
            fontSize: '0.95rem',
            fontWeight: 700,
            lineHeight: 2.7,
        },
        body1: {
            fontFamily: `${fontNunito}`,
        },
        caption: {
            fontFamily: `${fontNunito}`,
            fontSize: '0.9rem',
            color: 'rgba(0, 0, 0, 0.76)',
        },
        subtitle1: {
            fontFamily: `${fontNunito}`,
            fontSize: '0.9rem',
            color: 'rgba(0,0,0,0.6)',
        },
        a1: {
            fontFamily: `${fontNunito}`,
            fontSize: '1rem',
            fontWeight: 700,
            color: `${secondaryColor}`,
        },
    },
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    margin: '25px 20px',
                    borderRadius: '20px',
                    flexGrow: 'unset',
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(186, 182, 83, 0.25)',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    zIndex: '1201',
                },
            },
        },
        MuiChip: {
            variants: [
                {
                    props: { variant: 'restaurant' },
                    style: {
                        backgroundColor: 'rgb(239, 83, 80, 0.07)',
                        color: 'rgb(239, 83, 80)',
                        ...MuiChipCommon,
                    },
                },
                {
                    props: { variant: 'place' },
                    style: {
                        backgroundColor: 'rgba(67, 160, 71, 0.07)',
                        color: 'rgb(67, 160, 71)',
                        ...MuiChipCommon,
                    },
                },
                {
                    props: { variant: 'business' },
                    style: {
                        backgroundColor: 'rgba(33, 150, 243,0.07)',
                        color: 'rgb(33, 150, 243)',
                        ...MuiChipCommon,
                    },
                },
                {
                    props: { variant: 'product' },
                    style: {
                        backgroundColor: 'rgba(239, 108, 0, 0.07)',
                        color: 'rgba(239, 108, 0)',
                        ...MuiChipCommon,
                    },
                },
            ],
        },
    },
})
