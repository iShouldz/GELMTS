import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A2E4F',
      light: '#FFF',
      grayRef: '#383838',
      background: '#1A2E4F10'
    },
    secondary: {
      main: '#f8b133'
    }
  },
  typography: {
    fontFamily: 'Archivo, sans-serif',
  },
});

export default theme