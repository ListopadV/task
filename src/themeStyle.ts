import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 320,
            sm: 600,
            md: 900,
            lg: 1300,
            xl: 1600
        },
    },
    components: {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                    width: '95vw'
                },
            }
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    fontWeight: 'bold',
                    backgroundColor: 'black',
                    color: 'white'
                },
                body: {
                    color: '#333'
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:nth-of-type(odd)': {
                        backgroundColor: '#fafafa',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    width: '40vw',
                },
            },
        }
    },
});

export default theme;
