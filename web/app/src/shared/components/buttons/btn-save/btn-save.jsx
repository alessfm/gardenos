import * as React from 'react';
import '@fontsource/roboto/500.css';
import { MainTheme } from '../../../utils/theme';
import { ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

export default function SaveButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <ThemeProvider theme={MainTheme}>
      <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton
          color="primary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >Salvar
        </LoadingButton>
      </Box>
    </ThemeProvider>
  );
}