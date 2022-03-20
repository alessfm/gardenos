import { createTheme } from '@mui/material/styles';

const MainTheme = createTheme({
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
      light: '#69bc69',
      main: '#33bc84',
      dark: '#009485',
      contrastText: '#fff',
    },
    secondary: {
      light: '#2094f3',
      main: '#007fff',
      dark: '#275068',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  }
});

export { MainTheme };
