import { createTheme } from '@mui/material/styles';

const TemaPrincipal = createTheme({
  black: {
    'background-color': '#000',
    'color': '#fff',
  },
  white: {
    'background-color': '#fff',
    'color': '#fff'
  },
  palette: {
    primary: {
      light: '#e1f296',
      main: '#5aba8a',
      dark: '#01565b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffddd3',
      main: '#ff655b',
      dark: '#c74e46',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  }
});

export { TemaPrincipal };
