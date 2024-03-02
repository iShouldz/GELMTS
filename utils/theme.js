import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A2E4F',
      light: '#FFF',
      grayRef: '#383838',
      background: '#242424'
    },
  

  },
  typography: {
    fontFamily: 'Archivo, sans-serif',
  },
});

export default theme