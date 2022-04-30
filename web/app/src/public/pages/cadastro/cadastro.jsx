import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { MainTheme } from '../../../shared/utils/theme';
import './cadastro.css'

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import SideImage from '../../../assets/img/login.jpg';
import Logo from '../../../assets/img/logos/Vector.png';

import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import LoadingButton from '@mui/lab/LoadingButton';

import { createUser } from '../../services/UserService';

export default function Cadastro() {
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
            <img className='img-fundo-quadrado' src={SideImage} alt="Arte de mulher segurando jarro de plantas" />
          </Grid>
          <Grid className="img-side" item xs={12} md={4} sx={{ mr: 3 }}>
            <Logotipo />
            <FormCadastro />
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

function Logotipo() {
  return (
    <Grid
      container direction="row"
      justifyContent="center"
      alignItems="center" sx={{ mt: 1 }}>
      <img className='logo' src={Logo} alt="Logo do Gardeno's" />
    </Grid>
  );
}

function IrParaLogin() {
  return (
    <Grid item xs={12}
      container direction="row"
      justifyContent="center"
      alignItems="center" sx={{ mt: 2 }}>
      <Typography color="primary.dark">
        <Link color="inherit" href="#">
          Já tem uma conta?
        </Link>
      </Typography>
    </Grid>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4, mb: 4 }}>
      {'Copyright © '}
      <Link color="inherit" href="https://alessfm.github.io/gardenos/">
        Gardeno's
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function FormCadastro() {
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

  const criarConta = (event) => {
    setSuccess(false);
    setLoading(true);
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const user = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };

    createUser(user).then(
      response => console.log(response)
    )

    timer.current = window.setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <Box className="form-cadastro" component="form" noValidate onSubmit={criarConta} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            name="name"
            label="Nome de Usuário"
            required
            fullWidth
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Email"
            type="email"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            label="Senha"
            type="password"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
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
        <IrParaLogin />
      </Grid>
    </Box>
  )
}