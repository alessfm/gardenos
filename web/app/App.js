import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Yard from '@mui/icons-material/Yard';
import Stack from '@mui/material/Stack';
import './App.css'


const theme = createTheme({
  palette: {
    primary: {
      light: '#69bc69',
      main: '#33bc84',
      dark: '#135658',
      contrastText: '#fff',
    },
    secondary: {
      light: '#007fff',
      main: '#001e3c',
      dark: '#0a1929',
      contrastText: '#000',
    },
  },
});

const Input = styled('input')({
  display: 'none',
});


export default function UploadButtons() {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton color="primary" aria-label="upload picture" component="span">
            <Yard />
          </IconButton>
        </label>
      </Stack>
    </ThemeProvider>
  );
}
