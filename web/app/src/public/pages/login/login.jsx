import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { MainTheme } from '../../../shared/utils/theme';
import './login.css'

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import SideImage from '../../../assets/img/login.jpg';
import Logo from '../../../assets/img/logos/Vector.png';

import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import LoadingButton from '@mui/lab/LoadingButton';

function Logotipo() {
  return (
    <Grid container direction="row"
      justifyContent="center"
      alignItems="center" sx={{ mt: 1 }}>
      <img className='logo' src={Logo} alt="Logo do Gardeno's" />
    </Grid>
  );
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://alessfm.github.io/gardenos/">
        Gardeno's
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: 'primary.dark',
      '&:hover': {
        bgcolor: 'primary.dark',
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleSubmit = (event) => {
    setSuccess(false);
    setLoading(true);
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });

    timer.current = window.setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <ThemeProvider theme={MainTheme}>
      <Container
        component="main" maxWidth="md" sx={{ bgcolor: 'white', borderRadius: 2 }}>
        <Grid
          className="grid-global"
          container
          spacing={2}
          sx={{ mt: 7 }}>
          <Grid item xs md>
            <img className='img-fundo' src={SideImage} alt="Arte de mulher segurando jarro de plantas" />
          </Grid>
          <Grid className="form-cadastro" item xs={12} md={4} sx={{ mr: 3 }}>
            <Logotipo sx={{ m: 1 }} />
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    label="Nome"
                    autoComplete="given-name"
                    required
                    fullWidth
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="lastName"
                    name="lastName"
                    label="Sobrenome"
                    autoComplete="family-name"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    name="password"
                    label="Senha"
                    type="password"
                    autoComplete="new-password"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography color="secondary.main">
                    <Link color="inherit" href="#">
                      Esqueci a senha
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <LoadingButton
                    color="primary"
                    type="submit"
                    variant="contained"
                    loading={loading}
                    loadingIndicator="Criando Conta..."
                    sx={buttonSx}
                    fullWidth
                  >{success ? 'Conta Criada' : 'Criar Conta'}
                  </LoadingButton>
                </Grid>
              </Grid>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}